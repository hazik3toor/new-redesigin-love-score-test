// Zero-dependency static site builder. Run: node build.mjs  ->  dist/
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const SITE = "https://www.lovescoretest.com";
const NAME = "LoveScoreTest";
const GA = "G-4QW8EWN05R";
const root = path.dirname(new URL(import.meta.url).pathname);
const dist = path.join(root, "dist");
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// ---------- front matter + markdown ----------
function fm(raw) {
  const m = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(raw.replace(/\r\n/g, "\n"));
  if (!m) return { data: {}, body: raw };
  const data = {};
  for (const line of m[1].split("\n")) {
    const k = /^([\w-]+):\s*(.*)$/.exec(line);
    if (!k) continue;
    let v = k[2].trim();
    if (/^".*"$/.test(v)) v = v.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
    else if (/^'.*'$/.test(v)) v = v.slice(1, -1).replace(/''/g, "'");
    if (v === "true") v = true;
    if (v === "false") v = false;
    data[k[1]] = v;
  }
  return { data, body: m[2] };
}
const slugify = (s) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
function inline(s) {
  s = esc(s);
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[\s(])[*_]([^*_\n]+)[*_](?=[\s).,;:!?]|$)/g, "$1<em>$2</em>");
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
  return s;
}
function md(body) {
  const out = [], used = new Set();
  const lines = body.replace(/\r\n/g, "\n").split("\n");
  let para = [], list = [], ordered = false, quote = [];
  const flushP = () => { if (para.length) { out.push(`<p>${inline(para.join(" "))}</p>`); para = []; } };
  const flushL = () => { if (list.length) { const t = ordered ? "ol" : "ul"; out.push(`<${t}>` + list.map((l) => `<li>${inline(l)}</li>`).join("") + `</${t}>`); list = []; } };
  const flushQ = () => { if (quote.length) { out.push(`<blockquote><p>${inline(quote.join(" "))}</p></blockquote>`); quote = []; } };
  const flush = () => { flushP(); flushL(); flushQ(); };
  for (const raw of lines) {
    const line = raw.trim();
    let m;
    if (!line) { flush(); continue; }
    if ((m = /^(#{1,4})\s+(.*)$/.exec(line))) {
      flush();
      const lvl = m[1].length, text = m[2];
      let id = slugify(text) || "section", n = 2;
      const b = id;
      while (used.has(id)) id = b + "-" + n++;
      used.add(id);
      out.push(`<h${lvl}${lvl > 1 ? ` id="${id}"` : ""}>${inline(text)}</h${lvl}>`);
    } else if ((m = /^!\[([^\]]*)\]\(([^)\s]+)\)(?:\{(\d+)x(\d+)\})?$/.exec(line))) {
      flush();
      const [, alt, src, w = 1200, h = 675] = m;
      const small = src.replace(/\.webp$/, "-640.webp");
      const hasSmall = fs.existsSync(path.join(root, "static", small));
      out.push(`<figure><img src="${src}"${hasSmall ? ` srcset="${small} 640w, ${src} ${w}w" sizes="(max-width:760px) 100vw, 728px"` : ""} alt="${esc(alt)}" width="${w}" height="${h}" loading="lazy" decoding="async"></figure>`);
    } else if (/^[-*]\s+/.test(line)) { flushP(); flushQ(); if (list.length && ordered) flushL(); ordered = false; list.push(line.replace(/^[-*]\s+/, "")); }
    else if (/^\d+\.\s+/.test(line)) { flushP(); flushQ(); if (list.length && !ordered) flushL(); ordered = true; list.push(line.replace(/^\d+\.\s+/, "")); }
    else if (/^>\s?/.test(line)) { flushP(); flushL(); quote.push(line.replace(/^>\s?/, "")); }
    else { flushL(); flushQ(); para.push(line); }
  }
  flush();
  return { html: out.join("\n") };
}
const plain = (html) => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

// ---------- assets ----------
const css = read("src/style.css").replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s*\n\s*/g, "").replace(/\s*([{};,>])\s*/g, "$1").replace(/;}/g, "}");
const calcSrc = read("src/calc.js");
const calcFile = `calc.${crypto.createHash("sha1").update(calcSrc).digest("hex").slice(0, 8)}.js`;

// ---------- data ----------
const readDir = (d) => fs.existsSync(path.join(root, d)) ? fs.readdirSync(path.join(root, d)).filter((f) => f.endsWith(".md") && !f.startsWith("_")).sort().map((f) => ({ slug: f.slice(0, -3), ...fm(read(`${d}/${f}`)) })) : [];
const home = fm(read("content/home.md"));
const cats = readDir("content/categories").sort((a, b) => (+a.data.order || 99) - (+b.data.order || 99));
const legal = readDir("content/pages");
const catBySlug = Object.fromEntries(cats.map((c) => [c.slug, c]));
const fmtDate = (d) => new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

function loadItems(dir, type, urlOf) {
  return readDir(dir).filter((p) => p.data.draft !== true && p.data.title).map((p) => {
    const { html } = md(p.body);
    const words = plain(html).split(" ").length;
    return { ...p, type, url: urlOf(p.slug), html, date: String(p.data.date || "2026-01-01").slice(0, 10), mins: Math.max(1, Math.round(words / 200)), cat: catBySlug[p.data.category] };
  }).sort((a, b) => b.date.localeCompare(a.date));
}
const posts = loadItems("content/blog", "post", (s) => "/blog/" + s);
const tools = loadItems("content/tools", "page", (s) => "/" + s);
const allItems = [...tools, ...posts].sort((a, b) => b.date.localeCompare(a.date));
const itemsIn = (slug) => allItems.filter((p) => p.data.category === slug);

// slug collision guard
const reserved = new Set(["blog", "admin", "api", "rss", "sitemap", "robots", "404", "index", ...cats.map((c) => c.slug), ...legal.map((l) => l.slug)]);
for (const t of tools) { if (reserved.has(t.slug)) throw new Error(`Page slug "${t.slug}" is already used. Rename content/tools/${t.slug}.md`); reserved.add(t.slug); }

const logoSvg = '<svg viewBox="0 0 32 32" aria-hidden="true"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb7185"/><stop offset="1" stop-color="#a21caf"/></linearGradient></defs><path d="M16 29C3 19 5 7 11.5 6.5 14 6.3 16 8.5 16 10c0-1.5 2-3.7 4.5-3.5C27 7 29 19 16 29z" fill="url(#g)"/></svg>';
const logo = `<a class="logo" href="/" aria-label="${NAME} home">${logoSvg}<span>Love<b>ScoreTest</b></span></a>`;

// ---------- article SEO links (text is never changed: existing words get wrapped) ----------
const indexablePaths = new Set(["/", "/blog", ...legal.map((l) => "/" + l.slug), ...tools.map((t) => t.url), ...posts.map((p) => p.url), ...cats.filter((c) => c.body.trim() || itemsIn(c.slug).length).map((c) => "/" + c.slug)]);
if (!posts.length) indexablePaths.delete("/blog");
function applyLinks(html) {
  const rules = JSON.parse(read("content/links.json")).filter((r) => r.url.startsWith("#") || r.url.startsWith("http") || indexablePaths.has(r.url));
  const done = new Set();
  let count = 0;
  const out = html.replace(/<p>([\s\S]*?)<\/p>/g, (_, inner) => {
    for (const r of rules) {
      if (done.has(r.phrase)) continue;
      const re = new RegExp("\\b" + r.phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i");
      const parts = inner.split(/(<a\b[\s\S]*?<\/a>|<[^>]+>)/);
      for (let i = 0; i < parts.length; i += 2) {
        const m = re.exec(parts[i]);
        if (!m) continue;
        const ext = r.url.startsWith("http");
        parts[i] = parts[i].slice(0, m.index) + `<a href="${r.url}"${ext ? ' target="_blank" rel="noopener"' : ""}>${m[0]}</a>` + parts[i].slice(m.index + m[0].length);
        done.add(r.phrase); count++;
        break;
      }
      inner = parts.join("");
    }
    return `<p>${inner}</p>`;
  });
  return { html: out, count };
}

// ---------- components ----------
function card(p) {
  const img = p.data.image
    ? `<img src="${esc(p.data.image)}" alt="${esc(p.data.image_alt || p.data.title)}" width="1200" height="675" loading="lazy" decoding="async">`
    : esc(p.cat?.data.icon || "💕");
  const meta = p.type === "post" ? `<p class="meta"><time datetime="${p.date}">${fmtDate(p.date)}</time> · ${p.mins} min read</p>` : "";
  return `<article class="post"><div class="th">${img}</div><div class="bd">${p.cat ? `<p class="tag">${esc(p.cat.data.name)}</p>` : ""}<h3><a href="${p.url}">${esc(p.data.title)}</a></h3><p class="ex">${esc(p.data.description || "")}</p>${meta}</div></article>`;
}
const catCards = () => cats.map((c) => { const n = itemsIn(c.slug).length; return `<a class="cat" href="/${c.slug}"><span class="ic" aria-hidden="true">${c.data.icon || "💕"}</span><b>${esc(c.data.name)}</b><span class="d">${esc(c.data.blurb || c.data.description)}</span><span class="n">${n ? `${n} item${n > 1 ? "s" : ""}` : "Explore"}</span></a>`; }).join("");

function layout({ title, description, path: p, body, noindex, schema = [], ogImage = "/og-image.jpg", withCalc = false, ogType = "website" }) {
  const url = SITE + p;
  const catLinks = cats.map((c) => `<a href="/${c.slug}"${p === "/" + c.slug ? ' aria-current="page"' : ""}><span aria-hidden="true">${c.data.icon || ""}</span> ${esc(c.data.name)}</a>`).join("");
  const ld = schema.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("");
  const og = ogImage.startsWith("http") ? ogImage : SITE + ogImage;
  return `<!doctype html>
<html lang="en" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<script>try{var t=localStorage.getItem('lst-theme');if(t==='dark')document.documentElement.dataset.theme='dark'}catch(e){}</script>
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="${noindex ? "noindex,follow" : "index,follow,max-image-preview:large,max-snippet:-1"}">
<meta name="theme-color" content="#be185d">
<link rel="alternate" type="application/rss+xml" title="${NAME} Blog" href="/rss.xml">
<link rel="icon" href="/lovescoretest-icon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="${ogType}"><meta property="og:site_name" content="${NAME}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="${og}">
<style>${css}</style>
${ld}
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA}');(function(){var l=0;function g(){if(l)return;l=1;var s=document.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id=${GA}';document.head.appendChild(s)}addEventListener('load',function(){setTimeout(g,2500)});['scroll','click','touchstart','keydown'].forEach(function(e){addEventListener(e,g,{once:true,passive:true})})})();</script>
</head><body>
<a class="skip" href="#main">Skip to content</a>
<header class="site"><div class="top">${logo}
<nav class="main" aria-label="Main">${catLinks}<a href="/blog"${p === "/blog" ? ' aria-current="page"' : ""}><span aria-hidden="true">📰</span> Blog</a></nav>
<button class="tt" type="button" aria-label="Switch between light and dark mode" title="Light / dark mode">🌙</button>
<details class="burger"><summary aria-label="Menu">☰</summary><div class="bm">${catLinks}<a href="/blog">📰 Blog</a></div></details></div></header>
<main id="main">${body}</main>
<footer class="site"><div class="cols"><div>${logo}<p>Free love and compatibility calculators, quizzes and guides. Just for fun.</p></div>
<div><h2>Categories</h2><ul>${cats.map((c) => `<li><a href="/${c.slug}">${esc(c.data.name)}</a></li>`).join("")}</ul></div>
<div><h2>Explore</h2><ul><li><a href="/">Home</a></li><li><a href="/blog">Blog</a></li><li><a href="/rss.xml">RSS feed</a></li></ul></div>
<div><h2>Company</h2><ul>${legal.map((x) => `<li><a href="/${x.slug}">${esc(x.data.h1 || x.data.title)}</a></li>`).join("")}</ul></div></div>
<p class="cp">&copy; ${new Date().getFullYear()} ${NAME}. For entertainment purposes only.</p></footer>
<script>(function(){var d=document.documentElement,b=document.querySelector('.tt');function s(){b.textContent=d.dataset.theme==='dark'?'☀️':'🌙'}s();b.addEventListener('click',function(){var n=d.dataset.theme==='dark'?'light':'dark';d.dataset.theme=n;try{localStorage.setItem('lst-theme',n)}catch(e){}s()});document.addEventListener('click',function(e){document.querySelectorAll('details.dd[open],details.burger[open]').forEach(function(x){if(!x.contains(e.target))x.open=false})})})()</script>
${withCalc ? `<script src="/${calcFile}" defer></script>` : ""}
</body></html>`;
}
const breadcrumbLd = (items) => ({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map(([name, p], i) => ({ "@type": "ListItem", position: i + 1, name, item: SITE + p })) });
const pageHead = ({ h1, lead, icon, crumbs, extra = "" }) => `<section class="phead"><div class="container">${crumbs ? `<p class="crumbs">${crumbs}</p>` : ""}${icon ? `<div class="ic" aria-hidden="true">${icon}</div>` : ""}<h1>${esc(h1)}</h1>${lead ? `<p>${esc(lead)}</p>` : ""}${extra}</div></section>`;
const relatedHtml = (self, n = 3) => {
  const rel = [...allItems.filter((x) => x !== self && x.data.category === self.data.category), ...allItems.filter((x) => x !== self && x.data.category !== self.data.category)].slice(0, n);
  return rel.length ? `<section class="sec alt"><div class="container"><h2 class="sec-h">Keep exploring</h2><p class="sec-p"></p><div class="posts">${rel.map(card).join("")}</div></div></section>` : "";
};
const latestSections = (self) => {
  const t = tools.filter((x) => x !== self).slice(0, 3), b = posts.filter((x) => x !== self).slice(0, 3);
  return (t.length ? `<section class="sec alt"><div class="container"><h2 class="sec-h"><small>Latest</small>Tools &amp; pages</h2><p class="sec-p">Try more free relationship tools and quizzes.</p><div class="posts">${t.map(card).join("")}</div></div></section>` : "") +
    (b.length ? `<section class="sec${t.length ? "" : " alt"}"><div class="container"><h2 class="sec-h"><small>Latest</small>Articles from the blog</h2><p class="sec-p">Fresh relationship and compatibility reads.</p><div class="posts">${b.map(card).join("")}</div><p class="center"><a class="btn" href="/blog">View all articles</a></p></div></section>` : "");
};
const ctaBand = (h, p) => `<section class="cta"><h2>${h}</h2><p>${p}</p><a class="btn" href="/">Try the calculator ♥</a></section>`;

const calculatorHtml = `<section class="calc" aria-label="Love calculator by date of birth">
<form id="lc-form" novalidate>
<div class="pair">
<div class="col"><b>Partner 1</b><label>Name (optional)<input name="n1" maxlength="30" autocomplete="off" placeholder="Your name"></label><label>Date of birth<input type="date" name="d1" required min="1900-01-01"></label></div>
<div class="col"><b>Partner 2</b><label>Name (optional)<input name="n2" maxlength="30" autocomplete="off" placeholder="Partner's name"></label><label>Date of birth<input type="date" name="d2" required min="1900-01-01"></label></div>
</div>
<p class="err" id="lc-err" role="alert"></p>
<button class="go" type="submit">Calculate Love Score ♥</button>
</form>
<div class="res" id="lc-res" hidden aria-live="polite">
<p class="who" id="lc-who"></p><p class="signs" id="lc-signs"></p>
<div class="big" id="lc-big" style="--p:0"><span></span></div>
<p class="msg" id="lc-msg"></p>
<ul class="bars" id="lc-bars"></ul>
<p class="note">Just for fun: a playful reading based on zodiac signs and numerology, not a scientific result.</p>
<button class="again" id="lc-again" type="button">Check another couple</button>
</div></section>`;

const scoreGuide = `<aside class="guide" aria-labelledby="score-guide"><h2 id="score-guide">What does your love score mean?</h2><p>A quick guide to the scores this calculator gives.</p><table><caption>Love score ranges</caption><tbody>
<tr><th scope="row">85% – 100%</th><td>A very strong match on paper.</td></tr>
<tr><th scope="row">72% – 84%</th><td>Good compatibility with real potential.</td></tr>
<tr><th scope="row">60% – 71%</th><td>A balanced match: differences can help you grow.</td></tr>
<tr><th scope="row">Below 60%</th><td>Different styles: communication will matter most.</td></tr></tbody></table></aside>`;
const midCta = `<div class="mid"><b>Haven't tried it yet?</b><p>Enter two birth dates and see your love score in seconds.</p><a class="btn" href="#main">Calculate now ♥</a></div>`;

// ---------- write ----------
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
const sitemap = [];
const write = (rel, content) => { const f = path.join(dist, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, content); };
const org = { "@type": "Organization", "@id": SITE + "/#org", name: NAME, url: SITE + "/", logo: SITE + "/apple-touch-icon.png" };
const website = { "@type": "WebSite", "@id": SITE + "/#website", url: SITE + "/", name: NAME, publisher: { "@id": SITE + "/#org" }, inLanguage: "en" };

// ----- Home
{
  const { html } = md(home.body);
  const i = html.indexOf("</h1>") + 5;
  const h1 = html.slice(0, i);
  let article = html.slice(i);
  // SEO links inside paragraphs
  const linked = applyLinks(article);
  article = linked.html;
  // FAQ -> accordion (text unchanged)
  const faqs = [];
  article = article.replace(/<h2 id="frequently-asked-questions">[\s\S]*$/, (m) =>
    m.replace(/<h3 id="([^"]*)">([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g, (_, id, q, a) => {
      faqs.push({ "@type": "Question", name: plain(q), acceptedAnswer: { "@type": "Answer", text: plain(a) } });
      return `<details class="faq"><summary><h3 id="${id}">${q}</h3></summary><p>${a}</p></details>`;
    }));
  // table of contents from h2s
  const h2s = [...article.matchAll(/<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g)].map((m) => [m[1], plain(m[2])]);
  const toc = `<details class="toc"><summary>In this article (${h2s.length} sections)</summary><ol>${h2s.map(([id, t]) => `<li><a href="#${id}">${esc(t)}</a></li>`).join("")}</ol></details>`;
  // extras inserted between sections
  article = article.replace('<h2 id="marriage-and-long-term-relationship-compatibility">', scoreGuide + '\n<h2 id="marriage-and-long-term-relationship-compatibility">');
  article = article.replace('<h2 id="birth-date-birth-month-and-age-difference">', midCta + '\n<h2 id="birth-date-birth-month-and-age-difference">');

  const latestPages = tools.slice(0, 6), latestPosts = posts.slice(0, 3);
  const feats = [["🎯", "Instant results", "Get your love score in seconds. No waiting, no sign-up."], ["🔒", "Private by design", "Everything runs in your browser. Names and dates are never saved."], ["♈", "Zodiac + numerology", "Compares sun signs and Life Path numbers for a playful reading."], ["📊", "5 love insights", "Love, intimacy, marriage, communication and friendship scores."], ["📱", "Works on any device", "Fast, light and mobile friendly, with light and dark mode."], ["💬", "Made for conversation", "Use your result as a fun talking point, not a verdict."]];
  const sections = [
    ["categories", `<div class="container"><h2 class="sec-h"><small>Explore</small>Find your next test</h2><p class="sec-p">Pick a category to try more love tests, quizzes and calculators with your partner.</p><div class="catgrid">${catCards()}</div></div>`],
    ["why", `<div class="container"><h2 class="sec-h"><small>Why LoveScoreTest</small>Simple, private and fun</h2><p class="sec-p">Built to be fast and easy to use, on any phone or computer.</p><div class="feats">${feats.map(([i, t, d]) => `<div class="feat"><span class="ic" aria-hidden="true">${i}</span><div><b>${t}</b><span class="d">${d}</span></div></div>`).join("")}</div></div>`],
    ...(latestPages.length ? [["tools", `<div class="container"><h2 class="sec-h"><small>Latest</small>Tools &amp; pages</h2><p class="sec-p">Try more free relationship tools and quizzes.</p><div class="posts">${latestPages.map(card).join("")}</div></div>`]] : []),
    ...(latestPosts.length ? [["latest", `<div class="container"><h2 class="sec-h"><small>Latest</small>Articles from the blog</h2><p class="sec-p">Fresh relationship and compatibility reads.</p><div class="posts">${latestPosts.map(card).join("")}</div><p class="center"><a class="btn" href="/blog">View all articles</a></p></div>`]] : []),
    ["how", `<div class="container"><h2 class="sec-h"><small>How it works</small>Your love score in 3 steps</h2><p class="sec-p">It takes about ten seconds.</p><div class="steps"><div class="step"><i>1</i><b>Enter birth dates</b><span>Add both dates of birth. Names are optional.</span></div><div class="step"><i>2</i><b>Tap calculate</b><span>We compare zodiac signs and numerology instantly.</span></div><div class="step"><i>3</i><b>Read your score</b><span>See overall love plus love, marriage, communication and friendship.</span></div></div></div>`],
    ["guide", `<div class="prose card">${toc}${article}</div>`],
  ];
  let flip = true;
  const bands = sections.map(([id, inner]) => `<section class="sec${(flip = !flip) ? "" : " alt"}" id="${id}">${inner}</section>`).join("\n");
  const body = `<section class="hero"><span class="fl" aria-hidden="true">♥</span><span class="fl" aria-hidden="true">♥</span><span class="fl" aria-hidden="true">♥</span><span class="fl" aria-hidden="true">♥</span>
<span class="badge">♥ Free love calculator</span>
${h1}
<p class="lead">Enter two birth dates to see your love score, zodiac match and compatibility in seconds.</p>
<ul class="chips"><li>100% free</li><li>No sign-up</li><li>Private, runs in your browser</li><li>Instant result</li></ul>
${calculatorHtml}</section>
${bands}
<section class="cta"><h2>Ready to check your love score?</h2><p>It takes ten seconds and it is free.</p><a class="btn" href="#main">Try the calculator ♥</a></section>`;
  const schema = [{ "@context": "https://schema.org", "@graph": [
    org, website,
    { "@type": "WebPage", "@id": SITE + "/#webpage", url: SITE + "/", name: home.data.title, description: home.data.description, isPartOf: { "@id": SITE + "/#website" }, primaryImageOfPage: { "@type": "ImageObject", url: SITE + "/og-image.jpg" }, inLanguage: "en" },
    { "@type": "WebApplication", name: "Love Calculator by Date of Birth", url: SITE + "/", applicationCategory: "LifestyleApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    ...(faqs.length ? [{ "@type": "FAQPage", mainEntity: faqs }] : []),
  ] }];
  write("index.html", layout({ title: home.data.title + " | " + NAME, description: home.data.description, path: "/", body, schema, withCalc: true }));
  sitemap.push({ loc: "/", pri: "1.0" });
  console.log(`home: faq ${faqs.length}, toc ${h2s.length}, links added ${linked.count}, tool pages ${latestPages.length}, posts ${latestPosts.length}`);
}

// ----- Legal pages
for (const p of legal) {
  const { html } = md(p.body);
  const body = `${pageHead({ h1: p.data.h1 || p.data.title })}<section class="sec"><div class="prose">${html}</div></section>`;
  write(`${p.slug}.html`, layout({ title: p.data.title, description: p.data.description || "", path: "/" + p.slug, body, schema: [breadcrumbLd([["Home", "/"], [p.data.h1 || p.data.title, "/" + p.slug]])] }));
  sitemap.push({ loc: "/" + p.slug, pri: "0.3" });
}

// ----- Categories
for (const c of cats) {
  const list = itemsIn(c.slug);
  const { html } = md(c.body);
  const hasText = c.body.trim().length > 0;
  const has = hasText || list.length > 0;
  const body = pageHead({ h1: c.data.name, lead: c.data.description, icon: c.data.icon, crumbs: `<a href="/">Home</a> › ${esc(c.data.name)}` }) +
    `<section class="sec"><div class="container">${list.length ? `<div class="posts">${list.map(card).join("")}</div>` : (hasText ? "" : `<p class="empty">Pages and articles for this category are coming soon.</p>`)}</div>${hasText ? `<div class="prose" style="margin-top:${list.length ? 40 : 0}px">${html}</div>` : ""}</section>`;
  write(`${c.slug}.html`, layout({ title: c.data.title + " | " + NAME, description: c.data.description, path: "/" + c.slug, body, noindex: !has, schema: [breadcrumbLd([["Home", "/"], [c.data.name, "/" + c.slug]])] }));
  if (has) sitemap.push({ loc: "/" + c.slug, pri: "0.7" });
}

// ----- Blog index
{
  const pills = `<ul class="pills">${cats.filter((c) => posts.some((p) => p.data.category === c.slug)).map((c) => `<li><a href="/${c.slug}">${esc(c.data.name)}</a></li>`).join("")}</ul>`;
  const body = pageHead({ h1: "Love & Relationship Blog", lead: "Guides on compatibility, zodiac signs, numerology and building a healthy relationship.", crumbs: `<a href="/">Home</a> › Blog`, extra: posts.length ? pills : "" }) +
    `<section class="sec"><div class="container">${posts.length ? `<div class="posts">${posts.map(card).join("")}</div>` : `<p class="empty">New articles are coming soon.</p>`}</div></section>`;
  write("blog.html", layout({ title: "Love & Relationship Blog | " + NAME, description: "Read guides on love compatibility, zodiac signs, numerology and healthy relationships from LoveScoreTest.", path: "/blog", body, noindex: !posts.length, schema: [breadcrumbLd([["Home", "/"], ["Blog", "/blog"]]), { "@context": "https://schema.org", "@type": "Blog", name: NAME + " Blog", url: SITE + "/blog", blogPost: posts.slice(0, 20).map((p) => ({ "@type": "BlogPosting", headline: p.data.title, url: SITE + p.url, datePublished: p.date })) }] }));
  if (posts.length) sitemap.push({ loc: "/blog", pri: "0.8", mod: posts[0].date });
}

// ----- Blog posts + tool pages
for (const p of allItems) {
  const url = SITE + p.url;
  const isPost = p.type === "post";
  const img = p.data.image ? (p.data.image.startsWith("http") ? p.data.image : SITE + p.data.image) : SITE + "/og-image.jpg";
  const crumbItems = isPost ? [["Home", "/"], ["Blog", "/blog"]] : [["Home", "/"]];
  if (p.cat) crumbItems.push([p.cat.data.name, "/" + p.cat.slug]);
  const crumbHtml = crumbItems.map(([n, h]) => `<a href="${h}">${esc(n)}</a>`).join(" › ");
  const linked = applyLinks(p.html).html;
  const meta = isPost ? `<p class="art-meta">${p.cat ? `<a href="/${p.cat.slug}">${esc(p.cat.data.name)}</a> · ` : ""}<time datetime="${p.date}">${fmtDate(p.date)}</time> · ${p.mins} min read</p>` : (p.cat ? `<p class="art-meta"><a href="/${p.cat.slug}">${esc(p.cat.data.name)}</a></p>` : "");
  const body = `<section class="sec" style="padding-top:28px"><article class="prose"><p class="crumbs">${crumbHtml}</p><h1>${esc(p.data.title)}</h1>${meta}${p.data.image ? `<figure style="margin-top:0"><img src="${esc(p.data.image)}" alt="${esc(p.data.image_alt || p.data.title)}" width="1200" height="675" fetchpriority="high" decoding="async"></figure>` : ""}${linked}</article></section>` +
    latestSections(p) + ctaBand("Check your love score", "Free birth date compatibility calculator.");
  const crumbLd = breadcrumbLd([...crumbItems, [p.data.title, p.url]]);
  const main = isPost
    ? { "@context": "https://schema.org", "@type": "BlogPosting", headline: p.data.title, description: p.data.description || "", image: [img], datePublished: p.date, dateModified: String(p.data.updated || p.date).slice(0, 10), author: { "@type": "Organization", name: NAME, url: SITE + "/" }, publisher: { "@type": "Organization", name: NAME, logo: { "@type": "ImageObject", url: SITE + "/apple-touch-icon.png" } }, mainEntityOfPage: url, inLanguage: "en" }
    : { "@context": "https://schema.org", "@type": "WebPage", name: p.data.title, description: p.data.description || "", url, image: img, isPartOf: { "@id": SITE + "/#website" }, inLanguage: "en" };
  write(`${isPost ? "blog/" : ""}${p.slug}.html`, layout({ title: p.data.title + " | " + NAME, description: p.data.description || "", path: p.url, body, ogImage: img, ogType: isPost ? "article" : "website", schema: [crumbLd, main] }));
  sitemap.push({ loc: p.url, pri: isPost ? "0.8" : "0.9", mod: String(p.data.updated || p.date).slice(0, 10) });
}

// ----- 404, static, feeds
write("404.html", layout({ title: "Page not found | " + NAME, description: "This page could not be found.", path: "/404", noindex: true, body: `<section class="sec"><div class="prose" style="text-align:center"><h1>Page not found</h1><p>Try the <a href="/">love calculator</a> or read the <a href="/blog">blog</a>.</p></div></section>` }));
function copyDir(src, dst) {
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) { fs.mkdirSync(d, { recursive: true }); copyDir(s, d); } else fs.copyFileSync(s, d);
  }
}
copyDir(path.join(root, "static"), dist);
write(calcFile, calcSrc.replace(/^\s*\/\/.*$/gm, ""));
const today = new Date().toISOString().slice(0, 10);
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` + sitemap.map((u) => `<url><loc>${SITE}${u.loc}</loc><lastmod>${u.mod || today}</lastmod><priority>${u.pri}</priority></url>`).join("\n") + `\n</urlset>\n`);
write("rss.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>${NAME} Blog</title><link>${SITE}/blog</link><description>Love and relationship guides</description>` + posts.slice(0, 30).map((p) => `<item><title>${esc(p.data.title)}</title><link>${SITE}${p.url}</link><guid>${SITE}${p.url}</guid><pubDate>${new Date(p.date + "T00:00:00Z").toUTCString()}</pubDate><description>${esc(p.data.description || "")}</description></item>`).join("") + `</channel></rss>\n`);
write("robots.txt", `User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\n\nSitemap: ${SITE}/sitemap.xml\n`);
write("_redirects", read("redirects.txt"));
write("_headers", `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n/images/*\n  Cache-Control: public, max-age=31536000, immutable\n/calc.*.js\n  Cache-Control: public, max-age=31536000, immutable\n/admin/*\n  X-Robots-Tag: noindex\n`);
console.log("built", sitemap.length, "indexable URLs;", tools.length, "pages,", posts.length, "posts ->", dist);
