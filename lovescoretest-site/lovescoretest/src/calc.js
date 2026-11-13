(function () {
  "use strict";
  var form = document.getElementById("lc-form");
  if (!form) return;

  // Sun sign table: [month, last day of the sign that STARTS the month's first part]
  var SIGNS = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"];
  var GLYPH = ["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"];
  // cutoffs: day on which each sign begins, by month (Jan..Dec) -> index of sign starting that day
  var START = [[20,10],[19,11],[21,0],[20,1],[21,2],[21,3],[23,4],[23,5],[23,6],[23,7],[22,8],[22,9]];
  // [month index 0-11] => [day sign changes, sign index after change]; sign before change is previous sign
  var BEFORE = [9,10,11,0,1,2,3,4,5,6,7,8];

  function signOf(m, d) { // m: 1-12
    var c = START[m - 1];
    return d >= c[0] ? c[1] : BEFORE[m - 1];
  }
  function digitsSum(n) { var s = 0; while (n > 0) { s += n % 10; n = Math.floor(n / 10); } return s; }
  function lifePath(y, m, d) {
    var n = digitsSum(y) + digitsSum(m) + digitsSum(d);
    while (n > 9 && n !== 11 && n !== 22 && n !== 33) n = digitsSum(n);
    return n;
  }
  function base(n) { return n === 11 ? 2 : n === 22 ? 4 : n === 33 ? 6 : n; }
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function clamp(v) { return Math.max(38, Math.min(98, Math.round(v))); }

  // aspect score by distance between signs (0..6)
  var ASPECT = [76, 56, 82, 62, 92, 52, 78];
  function aspect(a, b) { var dist = Math.abs(a - b); if (dist > 6) dist = 12 - dist; return ASPECT[dist]; }
  function element(i) { return i % 4; } // 0 fire,1 earth,2 air,3 water
  function modality(i) { return i % 3; } // 0 cardinal,1 fixed,2 mutable
  function elemScore(a, b) {
    var x = element(a), y = element(b);
    if (x === y) return 88;
    if ((x === 0 && y === 2) || (x === 2 && y === 0) || (x === 1 && y === 3) || (x === 3 && y === 1)) return 82;
    return 58;
  }
  var FAM = { 1: 0, 5: 0, 7: 0, 2: 1, 4: 1, 8: 1, 3: 2, 6: 2, 9: 2 };
  function numScore(a, b) {
    var x = base(a), y = base(b), s = FAM[x] === FAM[y] ? 84 : 66;
    if (x === y) s += 6;
    if ((x === 2 && y === 6) || (x === 6 && y === 2) || (x === 3 && y === 9) || (x === 9 && y === 3) || (x === 1 && y === 5) || (x === 5 && y === 1) || (x === 4 && y === 8) || (x === 8 && y === 4)) s += 8;
    return Math.min(s, 96);
  }
  function monthGap(m1, m2) { var g = Math.abs(m1 - m2); if (g > 6) g = 12 - g; return g; }

  function compute(a, b) {
    var sa = signOf(a.m, a.d), sb = signOf(b.m, b.d);
    var la = lifePath(a.y, a.m, a.d), lb = lifePath(b.y, b.m, b.d);
    var A = aspect(sa, sb), E = elemScore(sa, sb), N = numScore(la, lb);
    var mod = modality(sa) === modality(sb) ? 80 : 66;
    var gap = monthGap(a.m, b.m), D = 90 - gap * 3;
    // order independent seed
    var ka = a.y + "-" + a.m + "-" + a.d, kb = b.y + "-" + b.m + "-" + b.d;
    var seed = ka < kb ? ka + "|" + kb : kb + "|" + ka;
    function j(tag) { return (hash(seed + tag) % 13) - 6; }
    var w = {
      love: A * .45 + E * .25 + N * .3 + j("l"),
      sexual: E * .5 + A * .3 + N * .2 + j("s"),
      marriage: N * .4 + mod * .3 + A * .3 + j("m"),
      comm: E * .4 + N * .35 + D * .25 + j("c"),
      friend: D * .35 + E * .35 + N * .3 + j("f")
    };
    var s = {
      love: clamp(w.love), sexual: clamp(w.sexual), marriage: clamp(w.marriage),
      comm: clamp(w.comm), friend: clamp(w.friend)
    };
    s.overall = clamp((s.love * 2 + s.sexual + s.marriage + s.comm + s.friend) / 6);
    s.signs = [sa, sb]; s.paths = [la, lb];
    return s;
  }

  function message(p) {
    if (p >= 85) return "A very strong match on paper";
    if (p >= 72) return "Good compatibility with real potential";
    if (p >= 60) return "A balanced match: differences can help you grow";
    return "Different styles: communication will matter most";
  }

  function parse(v) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
    if (!m) return null;
    var y = +m[1], mo = +m[2], d = +m[3], dt = new Date(y, mo - 1, d);
    if (dt.getFullYear() !== y || dt.getMonth() !== mo - 1 || dt.getDate() !== d) return null;
    if (y < 1900 || dt > new Date()) return null;
    return { y: y, m: mo, d: d };
  }

  var err = document.getElementById("lc-err"), res = document.getElementById("lc-res");
  var rows = [["love", "Love"], ["sexual", "Intimacy"], ["marriage", "Marriage"], ["comm", "Communication"], ["friend", "Friendship"]];
  var list = document.getElementById("lc-bars");
  rows.forEach(function (r) {
    var li = document.createElement("li");
    li.innerHTML = '<span></span><div class="bar"><i></i></div><b></b>';
    li.firstChild.textContent = r[1];
    li.setAttribute("data-k", r[0]);
    list.appendChild(li);
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var a = parse(form.d1.value), b = parse(form.d2.value);
    if (!a || !b) { err.textContent = "Please enter two valid birth dates (not in the future)."; res.hidden = true; return; }
    err.textContent = "";
    var r = compute(a, b);
    var n1 = form.n1.value.trim() || "Partner 1", n2 = form.n2.value.trim() || "Partner 2";
    document.getElementById("lc-who").textContent = n1 + " & " + n2;
    document.getElementById("lc-signs").textContent =
      GLYPH[r.signs[0]] + "\uFE0E " + SIGNS[r.signs[0]] + " + " + GLYPH[r.signs[1]] + "\uFE0E " + SIGNS[r.signs[1]] +
      "  ·  Life Path " + r.paths[0] + " + " + r.paths[1];
    var big = document.getElementById("lc-big");
    big.style.setProperty("--p", r.overall);
    big.firstElementChild.textContent = r.overall + "%";
    document.getElementById("lc-msg").textContent = message(r.overall);
    res.hidden = false;
    Array.prototype.forEach.call(list.children, function (li) {
      var v = r[li.getAttribute("data-k")];
      li.querySelector("b").textContent = v + "%";
      var bar = li.querySelector("i");
      bar.style.width = "0";
      requestAnimationFrame(function () { requestAnimationFrame(function () { bar.style.width = v + "%"; }); });
    });
    res.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  document.getElementById("lc-again").addEventListener("click", function () {
    form.reset(); res.hidden = true; err.textContent = ""; form.n1.focus();
  });
})();
