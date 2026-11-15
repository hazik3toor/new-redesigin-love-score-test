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
  const lines = m[1].split("\n");
  for (let i = 0; i < lines.length; i++) {
    const k = /^([\w-]+):\s*(.*)$/.exec(lines[i]);
    if (!k) continue;
    let v = k[2].trim();
    const blk = /^([|>])([+-]?)$/.exec(v);
    if (blk) {
      // YAML block scalar (multi-line text, used for calculator code)
      const buf = [];
      while (i + 1 < lines.length && (lines[i + 1] === "" || /^\s/.test(lines[i + 1]))) buf.push(lines[++i]);
      const ind = Math.min(...buf.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length), 1e9);
      let txt = buf.map((l) => l.slice(Math.min(ind, l.length))).join(blk[1] === ">" ? " " : "\n");
      if (blk[2] !== "+") txt = txt.replace(/\n+$/, "");
      if (blk[2] === "") txt += "";
      data[k[1]] = txt;
      continue;
    }
    if (/^".*"$/.test(v)) v = v.slice(1, -1).replace(/\\n/g, "\n").replace(/\\t/g, "\t").replace(/\\"/g, '"').replace(/\\\\/g, "\\");
    else if (/^'.*'$/.test(v)) v = v.slice(1, -1).replace(/''/g, "'");
    if (v === "true") v = true;
    if (v === "false") v = false;
    data[k[1]] = v;
  }
  return { data, body: m[2] };
}
const slugify = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
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


// ---------- languages (English at "/", French at "/fr/") ----------
const T = {
  en: {
    skip: "Skip to content", blog: "Blog", home: "Home", cats: "Categories", explore: "Explore", rss: "RSS feed", info: "Information", language: "Language",
    tag: "Free love and compatibility calculators, quizzes and guides. Just for fun.", cp: "For entertainment purposes only.", seeAll: "See all",
    minRead: "min read", one: "item", many: "items", exploreBtn: "Explore", latest: "Latest",
    toolsH: "Tools &amp; pages", toolsP: "Try more free relationship tools and quizzes.", postsH: "Articles from the blog", postsP: "Fresh relationship and compatibility reads.", viewAll: "View all articles",
    ctaBtn: "Try the calculator ♥", checkScore: "Check your love score", checkSub: "Free birth date compatibility calculator.", soon: "Pages and articles for this category are coming soon.",
    blogH1: "Love & Relationship Blog", blogLead: "Guides on compatibility, zodiac signs, numerology and building a healthy relationship.", blogTitle: "Love & Relationship Blog", blogDesc: "Read guides on love compatibility, zodiac signs, numerology and healthy relationships from LoveScoreTest.", blogSoon: "New articles are coming soon.",
    badge: "♥ Free love calculator", lead: "Enter two birth dates to see your love score, zodiac match and compatibility in seconds.",
    chips: ["100% free", "No sign-up", "Private, runs in your browser", "Instant result"],
    feats: [["🎯", "Instant results", "Get your love score in seconds. No waiting, no sign-up."], ["🔒", "Private by design", "Everything runs in your browser. Names and dates are never saved."], ["♈", "Zodiac + numerology", "Compares sun signs and Life Path numbers for a playful reading."], ["📊", "5 love insights", "Love, intimacy, marriage, communication and friendship scores."], ["📱", "Works on any device", "Fast, light and mobile friendly, with light and dark mode."], ["💬", "Made for conversation", "Use your result as a fun talking point, not a verdict."]],
    exS: "Explore", exH: "Find your next test", exP: "Pick a category to try more love tests, quizzes and calculators with your partner.",
    whyS: "Why LoveScoreTest", whyH: "Simple, private and fun", whyP: "Built to be fast and easy to use, on any phone or computer.",
    howS: "How it works", howH: "Your love score in 3 steps", howP: "It takes about ten seconds.",
    steps: [["Enter birth dates", "Add both dates of birth. Names are optional."], ["Tap calculate", "We compare zodiac signs and numerology instantly."], ["Read your score", "See overall love plus love, marriage, communication and friendship."]],
    endH: "Ready to check your love score?", endP: "It takes ten seconds and it is free.",
    toc: (n) => `In this article (${n} sections)`,
    calc: { aria: "Love calculator by date of birth", p1: "Partner 1", p2: "Partner 2", name: "Name (optional)", ph1: "Your name", ph2: "Partner's name", dob: "Date of birth", go: "Calculate Love Score ♥", note: "Just for fun: a playful reading based on zodiac signs and numerology, not a scientific result.", again: "Check another couple" },
  },
  fr: {
    skip: "Aller au contenu", blog: "Blog", home: "Accueil", cats: "Catégories", explore: "Explorer", rss: "Flux RSS", info: "Informations", language: "Langue",
    tag: "Calculateurs d'amour, quiz et guides de compatibilité gratuits. Pour le plaisir.", cp: "À titre de divertissement uniquement.", seeAll: "Voir tout",
    minRead: "min de lecture", one: "contenu", many: "contenus", exploreBtn: "Découvrir", latest: "Récents",
    toolsH: "Outils et pages", toolsP: "Essayez d'autres outils et quiz de couple gratuits.", postsH: "Articles du blog", postsP: "Nos derniers articles sur l'amour et la compatibilité.", viewAll: "Voir tous les articles",
    ctaBtn: "Essayer le calculateur ♥", checkScore: "Calculez votre score d'amour", checkSub: "Calculateur de compatibilité par date de naissance, gratuit.", soon: "Les pages et articles de cette catégorie arrivent bientôt.",
    blogH1: "Blog amour et couple", blogLead: "Guides sur la compatibilité, les signes du zodiaque, la numérologie et une relation saine.", blogTitle: "Blog amour et couple", blogDesc: "Lisez nos guides sur la compatibilité amoureuse, les signes du zodiaque, la numérologie et les relations saines.", blogSoon: "De nouveaux articles arrivent bientôt.",
    badge: "♥ Calculateur d'amour gratuit", lead: "Entrez deux dates de naissance pour découvrir votre score d'amour, votre compatibilité astrologique et plus, en quelques secondes.",
    chips: ["100 % gratuit", "Sans inscription", "Privé : tout reste dans votre navigateur", "Résultat instantané"],
    feats: [["🎯", "Résultat instantané", "Obtenez votre score d'amour en quelques secondes, sans attente ni inscription."], ["🔒", "Confidentialité", "Tout se passe dans votre navigateur. Prénoms et dates ne sont jamais enregistrés."], ["♈", "Zodiaque + numérologie", "Compare les signes solaires et les chemins de vie pour une lecture ludique."], ["📊", "5 indicateurs d'amour", "Scores d'amour, d'intimité, de mariage, de communication et d'amitié."], ["📱", "Sur tous les appareils", "Rapide, léger et adapté au mobile, avec mode clair et sombre."], ["💬", "Pour en discuter à deux", "Utilisez votre résultat comme sujet de conversation, pas comme un verdict."]],
    exS: "Explorer", exH: "Trouvez votre prochain test", exP: "Choisissez une catégorie pour essayer d'autres tests, quiz et calculateurs avec votre partenaire.",
    whyS: "Pourquoi LoveScoreTest", whyH: "Simple, privé et amusant", whyP: "Conçu pour être rapide et facile à utiliser, sur téléphone comme sur ordinateur.",
    howS: "Comment ça marche", howH: "Votre score d'amour en 3 étapes", howP: "Cela prend environ dix secondes.",
    steps: [["Entrez les dates de naissance", "Ajoutez les deux dates de naissance. Les prénoms sont facultatifs."], ["Appuyez sur calculer", "Nous comparons instantanément les signes du zodiaque et la numérologie."], ["Lisez votre score", "Découvrez l'amour global, ainsi que l'amour, le mariage, la communication et l'amitié."]],
    endH: "Prêt à connaître votre score d'amour ?", endP: "Cela prend dix secondes et c'est gratuit.",
    toc: (n) => `Dans cet article (${n} sections)`,
    calc: { aria: "Calculateur d'amour par date de naissance", p1: "Partenaire 1", p2: "Partenaire 2", name: "Prénom (facultatif)", ph1: "Votre prénom", ph2: "Prénom du partenaire", dob: "Date de naissance", go: "Calculer le score d'amour ♥", note: "Pour le plaisir : une lecture ludique basée sur les signes du zodiaque et la numérologie, pas un résultat scientifique.", again: "Tester un autre couple" },
  },
};
let cur = "en";
const t = (k) => T[cur][k];
const pre = () => (cur === "fr" ? "/fr" : "");
const homeP = () => (cur === "fr" ? "/fr/" : "/");
const cf = (c, k) => (cur === "fr" && c.data[k + "_fr"]) || c.data[k];
const fmtDate = (d) => new Date(d + "T00:00:00Z").toLocaleDateString(cur === "fr" ? "fr-FR" : "en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
const outFile = (p) => (p === "/" ? "index.html" : p === "/fr/" ? "fr/index.html" : p.slice(1) + ".html");

// ---------- assets ----------
const css = read("src/style.css").replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s*\n\s*/g, "").replace(/\s*([{};,>])\s*/g, "$1").replace(/;}/g, "}");
const calcSrc = read("src/calc.js");
const calcFile = `calc.${crypto.createHash("sha1").update(calcSrc).digest("hex").slice(0, 8)}.js`;

// ---------- data ----------
const readDir = (d) => fs.existsSync(path.join(root, d)) ? fs.readdirSync(path.join(root, d)).filter((f) => f.endsWith(".md") && !f.startsWith("_")).sort().map((f) => ({ slug: f.slice(0, -3), ...fm(read(`${d}/${f}`)) })) : [];
const langOf = (p) => (String(p.data.lang || "").toLowerCase() === "fr" ? "fr" : "en");
const homes = { en: fm(read("content/home.md")), fr: fs.existsSync(path.join(root, "content/home.fr.md")) ? fm(read("content/home.fr.md")) : null };
const LANGS = homes.fr ? ["en", "fr"] : ["en"];
const cats = readDir("content/categories").sort((a, b) => (+a.data.order || 99) - (+b.data.order || 99));
const legalAll = readDir("content/pages").map((p) => ({ ...p, lang: langOf(p), url: (langOf(p) === "fr" ? "/fr" : "") + "/" + p.slug }));
const catBySlug = Object.fromEntries(cats.map((c) => [c.slug, c]));

function loadItems(dir, type) {
  return readDir(dir).filter((p) => p.data.draft !== true && p.data.title).map((p) => {
    const { html } = md(p.body);
    const lang = langOf(p);
    const words = plain(html).split(" ").length;
    return { ...p, type, lang, url: (lang === "fr" ? "/fr" : "") + (type === "post" ? "/blog" : "") + "/" + p.slug, html, date: String(p.data.date || "2026-01-01").slice(0, 10), mins: Math.max(1, Math.round(words / 200)), cat: catBySlug[p.data.category] };
  });
}
const itemsAll = [...loadItems("content/tools", "page"), ...loadItems("content/blog", "post")].sort((a, b) => b.date.localeCompare(a.date));

// current-language views (set by setLang)
let tools = [], posts = [], allItems = [], legal = [];
function setLang(L) {
  cur = L;
  tools = itemsAll.filter((x) => x.lang === L && x.type === "page");
  posts = itemsAll.filter((x) => x.lang === L && x.type === "post");
  allItems = itemsAll.filter((x) => x.lang === L);
  legal = legalAll.filter((x) => x.lang === L);
  if (!legal.length && L !== "en") legal = legalAll.filter((x) => x.lang === "en");
}
const itemsIn = (slug) => allItems.filter((p) => p.data.category === slug);
const countIn = (L, slug) => itemsAll.filter((x) => x.lang === L && x.data.category === slug).length;
const catHas = (L, c) => countIn(L, c.slug) > 0 || (L === "en" && c.body.trim().length > 0);

// slug collision guard (per language)
for (const L of LANGS) {
  const reserved = new Set(["blog", "admin", "api", "fr", "rss", "sitemap", "robots", "404", "index", ...cats.map((c) => c.slug), ...legalAll.filter((l) => l.lang === L).map((l) => l.slug)]);
  for (const x of itemsAll.filter((i) => i.lang === L && i.type === "page")) { if (reserved.has(x.slug)) throw new Error(`Page slug "${x.slug}" is already used. Rename content/tools/${x.slug}.md`); reserved.add(x.slug); }
}
// the same page in the other language: set "translation" to the other page's slug (either side)
function counterpart(it) {
  const other = it.lang === "fr" ? "en" : "fr";
  return itemsAll.find((x) => x.type === it.type && x.lang === other && (x.slug === it.data.translation || x.data.translation === it.slug));
}

const logoSvg = '<svg viewBox="0 0 32 32" aria-hidden="true"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb7185"/><stop offset="1" stop-color="#a21caf"/></linearGradient></defs><path d="M16 29C3 19 5 7 11.5 6.5 14 6.3 16 8.5 16 10c0-1.5 2-3.7 4.5-3.5C27 7 29 19 16 29z" fill="url(#g)"/></svg>';
const logo = () => `<a class="logo" href="${homeP()}" aria-label="${NAME} ${t("home")}">${logoSvg}<span>Love<b>ScoreTest</b></span></a>`;

// ---------- article SEO links (text is never changed: existing words get wrapped) ----------
function indexablePaths() {
  const s = new Set([homeP(), ...legal.map((l) => l.url), ...allItems.map((i) => i.url), ...cats.filter((c) => catHas(cur, c)).map((c) => pre() + "/" + c.slug)]);
  if (posts.length) s.add(pre() + "/blog");
  return s;
}
function applyLinks(html) {
  const ok = indexablePaths();
  const rules = JSON.parse(read("content/links.json")).filter((r) => (r.lang || "en") === cur && (r.url.startsWith("#") || r.url.startsWith("http") || ok.has(r.url)));
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
  const meta = p.type === "post" ? `<p class="meta"><time datetime="${p.date}">${fmtDate(p.date)}</time> · ${p.mins} ${t("minRead")}</p>` : "";
  return `<article class="post"><div class="th">${img}</div><div class="bd">${p.cat ? `<p class="tag">${esc(cf(p.cat, "name"))}</p>` : ""}<h3><a href="${p.url}">${esc(p.data.title)}</a></h3><p class="ex">${esc(p.data.description || "")}</p>${meta}</div></article>`;
}
const catCards = () => cats.map((c) => { const n = itemsIn(c.slug).length; return `<a class="cat" href="${pre()}/${c.slug}"><span class="ic" aria-hidden="true">${c.data.icon || "💕"}</span><b>${esc(cf(c, "name"))}</b><span class="d">${esc(cf(c, "blurb") || cf(c, "description"))}</span><span class="n">${n ? `${n} ${n > 1 ? t("many") : t("one")}` : t("exploreBtn")}</span></a>`; }).join("");

// footer: lists every published page by category (updates itself on each build)
const shortTitle = (p) => p.data.menu_title || p.data.title;
function footerHtml() {
  const colsCat = cats.map((c) => {
    const list = tools.filter((x) => x.data.category === c.slug);
    if (!list.length) return "";
    const href = pre() + "/" + c.slug;
    return `<div><h2><a href="${href}">${esc(cf(c, "name"))}</a></h2><ul>${list.slice(0, 10).map((p) => `<li><a href="${p.url}">${esc(shortTitle(p))}</a></li>`).join("")}${list.length > 10 ? `<li><a href="${href}">${t("seeAll")} →</a></li>` : ""}</ul></div>`;
  }).join("");
  const blogCol = posts.length ? `<div><h2><a href="${pre()}/blog">${t("blog")}</a></h2><ul>${posts.slice(0, 6).map((p) => `<li><a href="${p.url}">${esc(shortTitle(p))}</a></li>`).join("")}<li><a href="${pre()}/blog">${t("seeAll")} →</a></li></ul></div>` : "";
  const explore = `<div><h2>${t("explore")}</h2><ul><li><a href="${homeP()}">${t("home")}</a></li>${cats.map((c) => `<li><a href="${pre()}/${c.slug}">${esc(cf(c, "name"))}</a></li>`).join("")}<li><a href="${pre()}/blog">${t("blog")}</a></li><li><a href="/rss.xml">${t("rss")}</a></li></ul></div>`;
  const info = `<div><h2>${t("info")}</h2><ul>${legal.map((x) => `<li><a href="${x.url}">${esc(x.data.h1 || x.data.title)}</a></li>`).join("")}</ul></div>`;
  return `<footer class="site"><div class="cols"><div>${logo()}<p>${t("tag")}</p></div>${colsCat}${blogCol}${explore}${info}</div>
<p class="cp">&copy; ${new Date().getFullYear()} ${NAME}. ${t("cp")}</p></footer>`;
}

function layout({ title, description, path: p, body, noindex, schema = [], ogImage = "/og-image.jpg", withCalc = false, ogType = "website", alts = null }) {
  const url = SITE + p;
  const catLinks = cats.map((c) => `<a href="${pre()}/${c.slug}"${p === pre() + "/" + c.slug ? ' aria-current="page"' : ""}><span aria-hidden="true">${c.data.icon || ""}</span> ${esc(cf(c, "name"))}</a>`).join("");
  const blogHref = pre() + "/blog";
  const ld = schema.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("");
  const og = ogImage.startsWith("http") ? ogImage : SITE + ogImage;
  const hasAlt = alts && alts.en && alts.fr && !noindex;
  const hreflang = hasAlt ? `<link rel="alternate" hreflang="en" href="${SITE + alts.en}"><link rel="alternate" hreflang="fr" href="${SITE + alts.fr}"><link rel="alternate" hreflang="x-default" href="${SITE + alts.en}">` : "";
  const hrefFor = (L) => (L === cur ? p : (alts && alts[L]) || (L === "fr" ? "/fr/" : "/"));
  const langSwitch = LANGS.length > 1 ? `<details class="dd lang"><summary aria-label="${t("language")}"><span aria-hidden="true">🌐</span> ${cur.toUpperCase()} <span aria-hidden="true">▾</span></summary><div class="ddm"><a href="${hrefFor("en")}" hreflang="en" lang="en"${cur === "en" ? ' aria-current="true"' : ""}>English${cur === "en" ? " ✓" : ""}</a><a href="${hrefFor("fr")}" hreflang="fr" lang="fr"${cur === "fr" ? ' aria-current="true"' : ""}>Français${cur === "fr" ? " ✓" : ""}</a></div></details>` : "";
  return `<!doctype html>
<html lang="${cur}" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<script>try{var t=localStorage.getItem('lst-theme');if(t==='dark')document.documentElement.dataset.theme='dark'}catch(e){}</script>
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">${hreflang}
<meta name="robots" content="${noindex ? "noindex,follow" : "index,follow,max-image-preview:large,max-snippet:-1"}">
<meta name="theme-color" content="#be185d">
<link rel="alternate" type="application/rss+xml" title="${NAME} Blog" href="/rss.xml">
<link rel="icon" href="/lovescoretest-icon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="${ogType}"><meta property="og:site_name" content="${NAME}"><meta property="og:locale" content="${cur === "fr" ? "fr_FR" : "en_US"}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="${og}">
<style>${css}</style>
${ld}
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA}');(function(){var l=0;function g(){if(l)return;l=1;var s=document.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id=${GA}';document.head.appendChild(s)}addEventListener('load',function(){setTimeout(g,2500)});['scroll','click','touchstart','keydown'].forEach(function(e){addEventListener(e,g,{once:true,passive:true})})})();</script>
</head><body>
<a class="skip" href="#main">${t("skip")}</a>
<header class="site"><div class="top">${logo()}
<nav class="main" aria-label="Main">${catLinks}<a href="${blogHref}"${p === blogHref ? ' aria-current="page"' : ""}><span aria-hidden="true">📰</span> ${t("blog")}</a></nav>
<button class="tt" type="button" aria-label="Light / dark mode" title="Light / dark mode">🌙</button>${langSwitch}
<details class="burger"><summary aria-label="Menu">☰</summary><div class="bm">${catLinks}<a href="${blogHref}">📰 ${t("blog")}</a></div></details></div></header>
<main id="main">${body}</main>
${footerHtml()}
<script>(function(){var d=document.documentElement,b=document.querySelector('.tt');function s(){b.textContent=d.dataset.theme==='dark'?'☀️':'🌙'}s();b.addEventListener('click',function(){var n=d.dataset.theme==='dark'?'light':'dark';d.dataset.theme=n;try{localStorage.setItem('lst-theme',n)}catch(e){}s()});document.addEventListener('click',function(e){document.querySelectorAll('details.dd[open],details.burger[open]').forEach(function(x){if(!x.contains(e.target))x.open=false})})})()</script>
${withCalc ? `<script src="/${calcFile}" defer></script>` : ""}
</body></html>`;
}
const breadcrumbLd = (items) => ({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map(([name, p], i) => ({ "@type": "ListItem", position: i + 1, name, item: SITE + p })) });
const pageHead = ({ h1, lead, icon, crumbs, extra = "" }) => `<section class="phead"><div class="container">${crumbs ? `<p class="crumbs">${crumbs}</p>` : ""}${icon ? `<div class="ic" aria-hidden="true">${icon}</div>` : ""}<h1>${esc(h1)}</h1>${lead ? `<p>${esc(lead)}</p>` : ""}${extra}</div></section>`;
const latestSections = (self) => {
  const a = tools.filter((x) => x !== self).slice(0, 3), b = posts.filter((x) => x !== self).slice(0, 3);
  return (a.length ? `<section class="sec alt"><div class="container"><h2 class="sec-h"><small>${t("latest")}</small>${t("toolsH")}</h2><p class="sec-p">${t("toolsP")}</p><div class="posts">${a.map(card).join("")}</div></div></section>` : "") +
    (b.length ? `<section class="sec${a.length ? "" : " alt"}"><div class="container"><h2 class="sec-h"><small>${t("latest")}</small>${t("postsH")}</h2><p class="sec-p">${t("postsP")}</p><div class="posts">${b.map(card).join("")}</div><p class="center"><a class="btn" href="${pre()}/blog">${t("viewAll")}</a></p></div></section>` : "");
};
const ctaBand = (h, p) => `<section class="cta"><h2>${h}</h2><p>${p}</p><a class="btn" href="${homeP()}">${t("ctaBtn")}</a></section>`;

const calculatorHtml = () => { const c = T[cur].calc; return `<section class="calc" aria-label="${c.aria}">
<form id="lc-form" novalidate>
<div class="pair">
<div class="col"><b>${c.p1}</b><label>${c.name}<input name="n1" maxlength="30" autocomplete="off" placeholder="${c.ph1}"></label><label>${c.dob}<input type="date" name="d1" required min="1900-01-01"></label></div>
<div class="col"><b>${c.p2}</b><label>${c.name}<input name="n2" maxlength="30" autocomplete="off" placeholder="${c.ph2}"></label><label>${c.dob}<input type="date" name="d2" required min="1900-01-01"></label></div>
</div>
<p class="err" id="lc-err" role="alert"></p>
<button class="go" type="submit">${c.go}</button>
</form>
<div class="res" id="lc-res" hidden aria-live="polite">
<p class="who" id="lc-who"></p><p class="signs" id="lc-signs"></p>
<div class="big" id="lc-big" style="--p:0"><span></span></div>
<p class="msg" id="lc-msg"></p>
<ul class="bars" id="lc-bars"></ul>
<p class="note">${c.note}</p>
<button class="again" id="lc-again" type="button">${c.again}</button>
</div></section>`; };

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
const website = { "@type": "WebSite", "@id": SITE + "/#website", url: SITE + "/", name: NAME, publisher: { "@id": SITE + "/#org" }, inLanguage: LANGS };
const homeAlts = LANGS.length > 1 ? { en: "/", fr: "/fr/" } : null;

function buildLang(L) {
  setLang(L);
  const stats = { faq: 0, toc: 0, links: 0 };

  // ----- Home
  {
    const hm = homes[L];
    const hasArticle = hm.body.trim().length > 0;
    let h1, article = "";
    if (hasArticle) {
      const { html } = md(hm.body);
      const i = html.indexOf("</h1>") + 5;
      h1 = html.slice(0, i);
      article = html.slice(i);
    } else h1 = `<h1>${esc(hm.data.h1 || hm.data.title)}</h1>`;
    const linked = applyLinks(article);
    article = linked.html;
    const faqs = [];
    article = article.replace(/<h2 id="(?:frequently-asked-questions|questions-frequentes|faq)">[\s\S]*$/, (m) =>
      m.replace(/<h3 id="([^"]*)">([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g, (_, id, q, a) => {
        faqs.push({ "@type": "Question", name: plain(q), acceptedAnswer: { "@type": "Answer", text: plain(a) } });
        return `<details class="faq"><summary><h3 id="${id}">${q}</h3></summary><p>${a}</p></details>`;
      }));
    const h2s = [...article.matchAll(/<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g)].map((m) => [m[1], plain(m[2])]);
    const toc = h2s.length ? `<details class="toc"><summary>${T[L].toc(h2s.length)}</summary><ol>${h2s.map(([id, x]) => `<li><a href="#${id}">${esc(x)}</a></li>`).join("")}</ol></details>` : "";
    if (L === "en") {
      article = article.replace('<h2 id="marriage-and-long-term-relationship-compatibility">', scoreGuide + '\n<h2 id="marriage-and-long-term-relationship-compatibility">');
      article = article.replace('<h2 id="birth-date-birth-month-and-age-difference">', midCta + '\n<h2 id="birth-date-birth-month-and-age-difference">');
    }
    const latestPages = tools.slice(0, 6), latestPosts = posts.slice(0, 3);
    const sections = [
      ["categories", `<div class="container"><h2 class="sec-h"><small>${t("exS")}</small>${t("exH")}</h2><p class="sec-p">${t("exP")}</p><div class="catgrid">${catCards()}</div></div>`],
      ["why", `<div class="container"><h2 class="sec-h"><small>${t("whyS")}</small>${t("whyH")}</h2><p class="sec-p">${t("whyP")}</p><div class="feats">${t("feats").map(([i, ti, d]) => `<div class="feat"><span class="ic" aria-hidden="true">${i}</span><div><b>${ti}</b><span class="d">${d}</span></div></div>`).join("")}</div></div>`],
      ...(latestPages.length ? [["tools", `<div class="container"><h2 class="sec-h"><small>${t("latest")}</small>${t("toolsH")}</h2><p class="sec-p">${t("toolsP")}</p><div class="posts">${latestPages.map(card).join("")}</div></div>`]] : []),
      ...(latestPosts.length ? [["latest", `<div class="container"><h2 class="sec-h"><small>${t("latest")}</small>${t("postsH")}</h2><p class="sec-p">${t("postsP")}</p><div class="posts">${latestPosts.map(card).join("")}</div><p class="center"><a class="btn" href="${pre()}/blog">${t("viewAll")}</a></p></div>`]] : []),
      ["how", `<div class="container"><h2 class="sec-h"><small>${t("howS")}</small>${t("howH")}</h2><p class="sec-p">${t("howP")}</p><div class="steps">${t("steps").map(([b, s], i) => `<div class="step"><i>${i + 1}</i><b>${b}</b><span>${s}</span></div>`).join("")}</div></div>`],
      ...(hasArticle ? [["guide", `<div class="prose card">${toc}${article}</div>`]] : []),
    ];
    let flip = true;
    const bands = sections.map(([id, inner]) => `<section class="sec${(flip = !flip) ? "" : " alt"}" id="${id}">${inner}</section>`).join("\n");
    const body = `<section class="hero"><span class="fl" aria-hidden="true">♥</span><span class="fl" aria-hidden="true">♥</span><span class="fl" aria-hidden="true">♥</span><span class="fl" aria-hidden="true">♥</span>
<span class="badge">${t("badge")}</span>
${h1}
<p class="lead">${t("lead")}</p>
<ul class="chips">${t("chips").map((x) => `<li>${x}</li>`).join("")}</ul>
${calculatorHtml()}</section>
${bands}
<section class="cta"><h2>${t("endH")}</h2><p>${t("endP")}</p><a class="btn" href="#main">${t("ctaBtn")}</a></section>`;
    const hp = homeP();
    const schema = [{ "@context": "https://schema.org", "@graph": [
      org, website,
      { "@type": "WebPage", "@id": SITE + hp + "#webpage", url: SITE + hp, name: hm.data.title, description: hm.data.description, isPartOf: { "@id": SITE + "/#website" }, primaryImageOfPage: { "@type": "ImageObject", url: SITE + "/og-image.jpg" }, inLanguage: L },
      { "@type": "WebApplication", name: L === "fr" ? "Calculateur d'amour par date de naissance" : "Love Calculator by Date of Birth", url: SITE + hp, applicationCategory: "LifestyleApplication", operatingSystem: "Any", inLanguage: L, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      ...(faqs.length ? [{ "@type": "FAQPage", mainEntity: faqs }] : []),
    ] }];
    write(outFile(hp), layout({ title: hm.data.title + " | " + NAME, description: hm.data.description, path: hp, body, schema, withCalc: true, alts: homeAlts }));
    sitemap.push({ loc: hp, pri: "1.0" });
    Object.assign(stats, { faq: faqs.length, toc: h2s.length, links: linked.count });
  }

  // ----- Legal pages
  for (const p of legalAll.filter((x) => x.lang === L)) {
    const { html } = md(p.body);
    const body = `${pageHead({ h1: p.data.h1 || p.data.title })}<section class="sec"><div class="prose">${html}</div></section>`;
    write(outFile(p.url), layout({ title: p.data.title, description: p.data.description || "", path: p.url, body, schema: [breadcrumbLd([[t("home"), homeP()], [p.data.h1 || p.data.title, p.url]])] }));
    sitemap.push({ loc: p.url, pri: "0.3" });
  }

  // ----- Categories
  for (const c of cats) {
    const list = itemsIn(c.slug);
    const hasText = L === "en" && c.body.trim().length > 0;
    const { html } = md(hasText ? c.body : "");
    const has = catHas(L, c);
    const cp = pre() + "/" + c.slug;
    const body = pageHead({ h1: cf(c, "name"), lead: cf(c, "description"), icon: c.data.icon, crumbs: `<a href="${homeP()}">${t("home")}</a> › ${esc(cf(c, "name"))}` }) +
      `<section class="sec"><div class="container">${list.length ? `<div class="posts">${list.map(card).join("")}</div>` : (hasText ? "" : `<p class="empty">${t("soon")}</p>`)}</div>${hasText ? `<div class="prose" style="margin-top:${list.length ? 40 : 0}px">${html}</div>` : ""}</section>`;
    const bothHave = catHas("en", c) && catHas("fr", c) && LANGS.length > 1;
    write(outFile(cp), layout({ title: cf(c, "title") + " | " + NAME, description: cf(c, "description"), path: cp, body, noindex: !has, alts: bothHave ? { en: "/" + c.slug, fr: "/fr/" + c.slug } : null, schema: [breadcrumbLd([[t("home"), homeP()], [cf(c, "name"), cp]])] }));
    if (has) sitemap.push({ loc: cp, pri: "0.7" });
  }

  // ----- Blog index
  {
    const bp = pre() + "/blog";
    const pills = `<ul class="pills">${cats.filter((c) => posts.some((p) => p.data.category === c.slug)).map((c) => `<li><a href="${pre()}/${c.slug}">${esc(cf(c, "name"))}</a></li>`).join("")}</ul>`;
    const body = pageHead({ h1: t("blogH1"), lead: t("blogLead"), crumbs: `<a href="${homeP()}">${t("home")}</a> › ${t("blog")}`, extra: posts.length ? pills : "" }) +
      `<section class="sec"><div class="container">${posts.length ? `<div class="posts">${posts.map(card).join("")}</div>` : `<p class="empty">${t("blogSoon")}</p>`}</div></section>`;
    const bothHave = LANGS.length > 1 && itemsAll.some((x) => x.type === "post" && x.lang === "en") && itemsAll.some((x) => x.type === "post" && x.lang === "fr");
    write(outFile(bp), layout({ title: t("blogTitle") + " | " + NAME, description: t("blogDesc"), path: bp, body, noindex: !posts.length, alts: bothHave ? { en: "/blog", fr: "/fr/blog" } : null, schema: [breadcrumbLd([[t("home"), homeP()], [t("blog"), bp]]), { "@context": "https://schema.org", "@type": "Blog", name: NAME + " Blog", url: SITE + bp, inLanguage: L, blogPost: posts.slice(0, 20).map((p) => ({ "@type": "BlogPosting", headline: p.data.title, url: SITE + p.url, datePublished: p.date })) }] }));
    if (posts.length) sitemap.push({ loc: bp, pri: "0.8", mod: posts[0].date });
  }

  // ----- Blog posts + tool pages
  for (const p of allItems) {
    const url = SITE + p.url;
    const isPost = p.type === "post";
    const img = p.data.image ? (p.data.image.startsWith("http") ? p.data.image : SITE + p.data.image) : SITE + "/og-image.jpg";
    const crumbItems = [[t("home"), homeP()]];
    if (isPost) crumbItems.push([t("blog"), pre() + "/blog"]);
    if (p.cat) crumbItems.push([cf(p.cat, "name"), pre() + "/" + p.cat.slug]);
    const crumbHtml = crumbItems.map(([n, h]) => `<a href="${h}">${esc(n)}</a>`).join(" › ");
    const linked = applyLinks(p.html).html;
    const toolCode = typeof p.data.tool === "string" ? p.data.tool.trim() : "";
    const toolBox = toolCode ? `<div class="toolbox" style="margin:1.6em 0">${toolCode}</div>` : "";
    const toolTop = p.data.tool_position === "bottom" ? "" : toolBox;
    const toolBottom = p.data.tool_position === "bottom" ? toolBox : "";
    const hasCalc = !isPost && ["love-birthdate", "true", true].includes(p.data.calculator);
    const isApp = hasCalc || !!toolCode;
    const catHref = p.cat ? pre() + "/" + p.cat.slug : "";
    const meta = isPost ? `<p class="art-meta">${p.cat ? `<a href="${catHref}">${esc(cf(p.cat, "name"))}</a> · ` : ""}<time datetime="${p.date}">${fmtDate(p.date)}</time> · ${p.mins} ${t("minRead")}</p>` : (p.cat ? `<p class="art-meta"><a href="${catHref}">${esc(cf(p.cat, "name"))}</a></p>` : "");
    const body = `<section class="sec" style="padding-top:28px"><article class="prose"><p class="crumbs">${crumbHtml}</p><h1>${esc(p.data.title)}</h1>${meta}${hasCalc ? calculatorHtml() : ""}${p.data.image ? `<figure style="margin-top:0"><img src="${esc(p.data.image)}" alt="${esc(p.data.image_alt || p.data.title)}" width="1200" height="675" fetchpriority="high" decoding="async"></figure>` : ""}${toolTop}${linked}${toolBottom}</article></section>` +
      latestSections(p) + ctaBand(t("checkScore"), t("checkSub"));
    const crumbLd = breadcrumbLd([...crumbItems, [p.data.title, p.url]]);
    const main = isPost
      ? { "@context": "https://schema.org", "@type": "BlogPosting", headline: p.data.title, description: p.data.description || "", image: [img], datePublished: p.date, dateModified: String(p.data.updated || p.date).slice(0, 10), author: { "@type": "Organization", name: NAME, url: SITE + "/" }, publisher: { "@type": "Organization", name: NAME, logo: { "@type": "ImageObject", url: SITE + "/apple-touch-icon.png" } }, mainEntityOfPage: url, inLanguage: L }
      : { "@context": "https://schema.org", "@type": isApp ? ["WebPage", "WebApplication"] : "WebPage", ...(isApp ? { applicationCategory: "LifestyleApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } } : {}), name: p.data.title, description: p.data.description || "", url, image: img, isPartOf: { "@id": SITE + "/#website" }, inLanguage: L };
    const cp = LANGS.length > 1 ? counterpart(p) : null;
    const alts = cp ? { [L]: p.url, [cp.lang]: cp.url } : null;
    write(outFile(p.url), layout({ title: p.data.title + " | " + NAME, description: p.data.description || "", path: p.url, body, ogImage: img, ogType: isPost ? "article" : "website", schema: [crumbLd, main], withCalc: hasCalc, alts }));
    sitemap.push({ loc: p.url, pri: isPost ? "0.8" : "0.9", mod: String(p.data.updated || p.date).slice(0, 10) });
  }
  console.log(`${L}: faq ${stats.faq}, toc ${stats.toc}, links added ${stats.links}, pages ${tools.length}, posts ${posts.length}`);
}
for (const L of LANGS) buildLang(L);

// ----- 404, static, feeds (English)
setLang("en");
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
const enPosts = itemsAll.filter((x) => x.type === "post" && x.lang === "en");
write("rss.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>${NAME} Blog</title><link>${SITE}/blog</link><description>Love and relationship guides</description>` + enPosts.slice(0, 30).map((p) => `<item><title>${esc(p.data.title)}</title><link>${SITE}${p.url}</link><guid>${SITE}${p.url}</guid><pubDate>${new Date(p.date + "T00:00:00Z").toUTCString()}</pubDate><description>${esc(p.data.description || "")}</description></item>`).join("") + `</channel></rss>\n`);
write("robots.txt", `User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\n\nSitemap: ${SITE}/sitemap.xml\n`);
write("_redirects", read("redirects.txt"));
write("_headers", `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n/images/*\n  Cache-Control: public, max-age=31536000, immutable\n/calc.*.js\n  Cache-Control: public, max-age=31536000, immutable\n/admin/*\n  X-Robots-Tag: noindex\n`);
console.log("built", sitemap.length, "indexable URLs;", itemsAll.filter((x) => x.type === "page").length, "pages,", itemsAll.filter((x) => x.type === "post").length, "posts ->", dist);
