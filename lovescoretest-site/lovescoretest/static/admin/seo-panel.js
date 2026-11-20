/* SEO panel for the CMS (Rank Math style): Google preview + live checklist + score.
   It shows in the preview pane (right side) of Pages and Blog posts. Nothing here is published on the website. */
(function () {
  var h = window.h;
  if (!window.CMS || !h) return;
  var SITE = "lovescoretest.com";

  function norm(s) { return String(s || "").toLowerCase().replace(/[‘’]/g, "'").replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim(); }
  function slugify(s) { return norm(s).replace(/'/g, "").replace(/ /g, "-"); }
  function count(hay, needle) { if (!needle) return 0; var c = 0, i = 0; while ((i = hay.indexOf(needle, i)) !== -1) { c++; i += needle.length; } return c; }

  function analyze(d, kind) {
    var kw = norm(d.focus_keyword);
    var title = String(d.seo_title || "").trim() || (String(d.title || "") + " | LoveScoreTest");
    var desc = String(d.description || "");
    var slug = String(d.slug || "");
    var body = String(d.body || "");
    var lines = body.split("\n");
    var headings = lines.filter(function (l) { return /^#{2,3}\s+/.test(l); }).map(function (l) { return l.replace(/^#{2,3}\s+/, ""); });
    var plainBody = body.replace(/!\[[^\]]*\]\([^)]*\)/g, " ").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/^#+\s+/gm, "").replace(/[*_`>]/g, "");
    var words = plainBody.split(/\s+/).filter(Boolean);
    var nBody = norm(plainBody);
    var firstPara = "";
    for (var i = 0; i < lines.length; i++) { var l = lines[i].trim(); if (l && !/^#/.test(l) && !/^!\[/.test(l)) { firstPara = l; break; } }
    var imgs = []; body.replace(/!\[([^\]]*)\]\(([^)]*)\)/g, function (m, a) { imgs.push(a); return m; });
    if (d.image) imgs.push(d.image_alt || "");
    var ext = (body.match(/\[[^\]]*\]\(https?:\/\/[^)]*\)/g) || []).length;
    var faqs = d.faqs && d.faqs.length ? d.faqs.length : 0;
    var kwWords = kw ? kw.split(" ").length : 0;
    var density = words.length && kw ? (count(nBody, kw) * kwWords / words.length) * 100 : 0;
    var R = [];
    function add(state, label, tip) { R.push({ s: state, label: label, tip: tip || "" }); } // s: 2 good, 1 almost, 0 fix
    var has = !!kw;
    add(has ? 2 : 0, "Focus keyword is set", has ? "" : "Type the main phrase you want to rank for (example: love compatibility by name).");
    var tl = title.length;
    add(tl >= 35 && tl <= 60 ? 2 : (tl >= 20 && tl <= 70 ? 1 : 0), "SEO title length is " + tl + " characters", "Aim for 35 to 60 characters so Google shows it fully.");
    var dl = desc.length;
    add(dl >= 120 && dl <= 160 ? 2 : (dl >= 80 && dl <= 180 ? 1 : 0), "Meta description length is " + dl + " characters", "Aim for 120 to 160 characters.");
    add(slug && slug.length <= 60 && slug.split("-").length <= 6 ? 2 : (slug ? 1 : 0), "URL slug is short", "Use 3 to 5 words, for example love-compatibility-name.");
    add(words.length >= 600 ? 2 : (words.length >= 300 ? 1 : 0), "Article has " + words.length + " words", "600 or more words is best.");
    add(headings.length >= 2 ? 2 : (headings.length ? 1 : 0), "Article has subheadings (H2 / H3)", "Break the text with ## subheadings.");
    add(imgs.length ? 2 : 0, "Article has an image", "Add an image with the image button in the editor.");
    add(imgs.length && imgs.every(function (a) { return String(a).trim(); }) ? 2 : (imgs.length ? 0 : 1), "Every image has alt text", "Click the image and fill Alt text.");
    add(faqs ? 2 : 1, "Has FAQs", "FAQs can show as rich results in Google.");
    if (has) {
      var nt = norm(title), pos = nt.indexOf(kw);
      add(pos === -1 ? 0 : (pos <= nt.length / 2 ? 2 : 1), "Keyword is in the SEO title", "Put the focus keyword at the start of the SEO title.");
      add(norm(d.title).indexOf(kw) !== -1 ? 2 : 0, "Keyword is in the page title (H1)", "Use the focus keyword in the page title.");
      add(norm(desc).indexOf(kw) !== -1 ? 2 : 0, "Keyword is in the meta description", "Use the focus keyword once in the meta description.");
      var ks = slugify(kw), ws = kw.replace(/'/g, "").split(" ");
      add(slug.indexOf(ks) !== -1 ? 2 : (ws.every(function (w) { return slug.indexOf(w) !== -1; }) ? 1 : 0), "Keyword is in the URL", "Use the focus keyword words in the URL slug.");
      add(norm(firstPara).indexOf(kw) !== -1 ? 2 : 0, "Keyword is in the first paragraph", "Use the focus keyword in the first lines of the article.");
      add(headings.some(function (x) { return norm(x).indexOf(kw) !== -1; }) ? 2 : 0, "Keyword is in a subheading", "Use the focus keyword in one H2 or H3.");
      add(density >= 0.5 && density <= 2.5 ? 2 : (density > 0 ? 1 : 0), "Keyword density is " + density.toFixed(1) + "%", "Use the keyword naturally. Best between 0.5% and 2.5%.");
      add(imgs.some(function (a) { return norm(a).indexOf(kw) !== -1; }) ? 2 : 0, "Keyword is in an image alt text", "Put the focus keyword in one image alt text.");
    }
    var sum = R.reduce(function (a, r) { return a + r.s; }, 0);
    return { R: R, score: Math.round(sum / (R.length * 2) * 100), title: title, desc: desc, slug: slug, words: words.length };
  }

  var COL = ["#dc2626", "#d97706", "#16a34a"];
  function Panel(props) {
    var d = props.entry.get("data").toJS();
    var kind = props.kind;
    var a = analyze(d, kind);
    var sc = a.score >= 80 ? 2 : a.score >= 55 ? 1 : 0;
    var url = SITE + " › " + (kind === "blog" ? "blog › " : "") + (a.slug || "your-page");
    var gt = a.title.length > 60 ? a.title.slice(0, 58).trim() + "…" : a.title;
    var gd = a.desc.length > 160 ? a.desc.slice(0, 157).trim() + "…" : (a.desc || "Add a meta description. This is the text Google shows under the title.");
    var box = { fontFamily: "system-ui,Segoe UI,Arial,sans-serif", color: "#1f2937", fontSize: "14px", lineHeight: 1.45, padding: "16px" };
    var card = { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "14px 16px", marginBottom: "14px" };
    var order = a.R.slice().sort(function (x, y) { return x.s - y.s; });
    return h("div", { style: box },
      h("div", { style: card },
        h("div", { style: { display: "flex", alignItems: "center", gap: "14px" } },
          h("div", { style: { width: "64px", height: "64px", borderRadius: "50%", border: "6px solid " + COL[sc], display: "grid", placeItems: "center", fontWeight: 800, fontSize: "20px", color: COL[sc], flex: "none" } }, a.score),
          h("div", null,
            h("div", { style: { fontWeight: 700, fontSize: "16px" } }, "SEO score: " + (sc === 2 ? "Good" : sc === 1 ? "Needs work" : "Weak")),
            h("div", { style: { color: "#6b7280" } }, d.focus_keyword ? "Focus keyword: " + d.focus_keyword : "No focus keyword yet")))),
      h("div", { style: card },
        h("div", { style: { fontWeight: 700, marginBottom: "8px" } }, "Google preview"),
        h("div", { style: { color: "#4d5156", fontSize: "13px" } }, url),
        h("div", { style: { color: "#1a0dab", fontSize: "20px", margin: "2px 0 3px", wordBreak: "break-word" } }, gt),
        h("div", { style: { color: "#4d5156", fontSize: "14px" } }, gd)),
      h("div", { style: card },
        h("div", { style: { fontWeight: 700, marginBottom: "8px" } }, "Checks (" + a.R.filter(function (r) { return r.s === 2; }).length + " of " + a.R.length + " passed)"),
        order.map(function (r, i) {
          return h("div", { key: i, style: { display: "flex", gap: "10px", padding: "5px 0", borderTop: i ? "1px solid #f3f4f6" : "none" } },
            h("span", { style: { width: "12px", height: "12px", borderRadius: "50%", background: COL[r.s], marginTop: "4px", flex: "none" } }),
            h("div", null, h("div", null, r.label), r.s < 2 && r.tip ? h("div", { style: { color: "#6b7280", fontSize: "12.5px" } }, r.tip) : null));
        })),
      h("div", { style: { color: "#6b7280", fontSize: "12.5px", marginBottom: "10px" } }, "Only you see this panel. Nothing here is shown on the website."),
      h("div", { style: Object.assign({}, card, { padding: "6px 16px 14px" }) }, h("h1", { style: { fontSize: "24px" } }, d.title || ""), props.widgetFor("body")));
  }
  function make(kind) { return function (props) { return h(Panel, { entry: props.entry, widgetFor: props.widgetFor, kind: kind }); }; }
  CMS.registerPreviewTemplate("pages", make("pages"));
  CMS.registerPreviewTemplate("blog", make("blog"));
})();
