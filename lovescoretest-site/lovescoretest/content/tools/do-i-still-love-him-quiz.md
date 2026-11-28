---
title: Do I Still Love Him? Take the Honest Quiz
slug: do-i-still-love-him-quiz
category: couples-quiz
calculator: none
tool: >-
  <!--
    DO I STILL LOVE HIM? QUIZ - self-contained embed (HTML + CSS + JS)
    Paste this whole block into a "Custom HTML" / "Embed" / "Raw HTML" block on your CMS page.
    No libraries, no plugins, no external requests. Everything is scoped under .dislq so it won't clash with your theme.
  -->

  <style>

  .dislq{--plum:#43235f;--pink:#ec4e8a;--pink2:#d93673;--soft:#fdeef4;--line:#ecd7e6;--ink:#2a1431;--mut:#6d5a76;--hl:#f9c3d9;--ok:#2e9e6b;--warn:#d9573a;--violet:#7e4fb0;max-width:720px;margin:24px auto;padding:0 12px 14px;font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:var(--ink);line-height:1.5;box-sizing:border-box;-webkit-text-size-adjust:100%}

  .dislq *,.dislq *::before,.dislq *::after{box-sizing:border-box}

  .dislq [hidden]{display:none!important}

  .dislq .dq-card{background:#fff;border:4px solid var(--plum);border-radius:32px;box-shadow:0 10px 0 var(--plum);padding:30px 24px 32px;text-align:center;animation:dqIn .45s ease both}

  .dislq .dq-card.dq-swap{animation:dqSwap .3s ease both}

  @keyframes dqIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}

  @keyframes dqSwap{from{opacity:0;transform:translateX(18px)}to{opacity:1;transform:none}}

  .dislq h2,.dislq h3,.dislq h4,.dislq p,.dislq ul{margin:0;padding:0;border:0;letter-spacing:normal;text-transform:none}

  .dislq ul{list-style:none}

  .dislq .dq-mascots{width:230px;max-width:70%;height:auto;display:block;margin:0 auto 6px}

  .dislq .dq-float{animation:dqBob 2.6s ease-in-out infinite;transform-origin:center}

  @keyframes dqBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}

  .dislq .dq-kicker{font-size:.78rem;font-weight:800;letter-spacing:.12em!important;text-transform:uppercase!important;color:var(--pink2);margin-bottom:8px}

  .dislq .dq-title{font-size:clamp(1.7rem,5.5vw,2.3rem);font-weight:800;line-height:1.15;color:var(--ink);margin-bottom:14px}

  .dislq .dq-hl{background:linear-gradient(transparent 62%,var(--hl) 62%,var(--hl) 92%,transparent 92%);padding:0 8px}

  .dislq .dq-chip{display:inline-flex;align-items:center;gap:6px;background:var(--soft);color:#b0185a;font-weight:800;font-size:.98rem;padding:10px 20px;border-radius:999px}

  .dislq .dq-lead{color:var(--mut);font-size:1rem;max-width:520px;margin:14px auto 0}

  .dislq .dq-btn{appearance:none;-webkit-appearance:none;cursor:pointer;display:inline-block;border:3px solid var(--plum);border-radius:999px;background:linear-gradient(135deg,var(--pink),var(--pink2));color:#fff;font-family:inherit;font-weight:800;font-size:1.15rem;line-height:1.1;padding:18px 30px;box-shadow:0 6px 0 var(--plum);transition:transform .12s,box-shadow .12s,filter .12s;text-decoration:none}

  .dislq .dq-btn:hover{filter:brightness(1.05);transform:translateY(-1px);box-shadow:0 7px 0 var(--plum)}

  .dislq .dq-btn:active{transform:translateY(4px);box-shadow:0 2px 0 var(--plum)}

  .dislq .dq-btn.wide{width:100%;max-width:340px;margin-top:24px}

  .dislq .dq-btn.ghost{background:#fff;color:var(--plum)}

  .dislq .dq-btn.sm{font-size:.92rem;padding:12px 18px;box-shadow:0 4px 0 var(--plum)}

  .dislq .dq-btn.sm:active{transform:translateY(3px);box-shadow:0 1px 0 var(--plum)}

  .dislq .dq-btn[disabled]{opacity:.4;cursor:default;transform:none;box-shadow:0 4px 0 var(--plum)}

  .dislq button:focus-visible,.dislq input:focus-visible,.dislq select:focus-visible,.dislq summary:focus-visible{outline:3px solid var(--violet);outline-offset:3px}

  .dislq details{margin:22px auto 0;max-width:460px;text-align:left;background:#fff8fb;border:2px dashed var(--line);border-radius:18px;padding:4px 16px}

  .dislq summary{cursor:pointer;font-weight:700;color:var(--plum);padding:12px 0;list-style:none;text-align:center}

  .dislq summary::-webkit-details-marker{display:none}

  .dislq .dq-form{display:grid;gap:12px;padding:4px 0 14px}

  .dislq .dq-form label{display:grid;gap:5px;font-size:.85rem;font-weight:700;color:var(--mut)}

  .dislq .dq-form input[type=text],.dislq .dq-form select{width:100%;font-family:inherit;font-size:16px;padding:12px 14px;border:2px solid var(--line);border-radius:14px;background:#fff;color:var(--ink);height:auto;margin:0}

  .dislq .dq-form .dq-check{display:flex;align-items:center;gap:10px;font-size:.92rem;color:var(--ink);font-weight:600}

  .dislq .dq-form .dq-check input{width:20px;height:20px;accent-color:var(--pink2);margin:0}

  .dislq .dq-last{margin-top:16px;font-size:.88rem;color:var(--mut)}

  .dislq .dq-last{display:none!important}

  .dislq .dq-fine{margin-top:20px;font-size:.78rem;color:var(--mut);max-width:520px;margin-left:auto;margin-right:auto}

  .dislq .dq-notice{background:#fff3e0;border:2px solid #ffd59a;color:#8a4b00;border-radius:14px;padding:10px 14px;font-size:.9rem;margin:0 auto 14px;max-width:520px}

  /* quiz */

  .dislq .dq-top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px}

  .dislq .dq-count{font-weight:800;font-size:.92rem;color:var(--plum)}

  .dislq .dq-time{font-weight:800;font-size:.9rem;color:#b0185a;background:var(--soft);padding:6px 12px;border-radius:999px;min-width:78px;text-align:center}

  .dislq .dq-time.low{background:#ffe3dc;color:var(--warn);animation:dqBob 1s ease-in-out infinite}

  .dislq .dq-back{appearance:none;-webkit-appearance:none;cursor:pointer;background:none;border:0;font-family:inherit;font-weight:800;color:var(--plum);font-size:.92rem;padding:6px 4px}

  .dislq .dq-back[disabled]{opacity:.3;cursor:default}

  .dislq .dq-bar{height:14px;background:var(--soft);border:2.5px solid var(--plum);border-radius:99px;overflow:hidden;margin-bottom:22px}

  .dislq .dq-fill{height:100%;width:0;background:linear-gradient(90deg,var(--pink),var(--pink2));border-radius:99px;transition:width .35s ease}

  .dislq .dq-cat{display:inline-block;font-size:.78rem;font-weight:800;color:var(--violet);background:#f1e8fa;padding:5px 12px;border-radius:99px;margin-bottom:12px}

  .dislq .dq-q{font-size:clamp(1.25rem,4.6vw,1.6rem);font-weight:800;line-height:1.3;color:var(--ink);margin-bottom:20px;min-height:3.4em;display:flex;align-items:center;justify-content:center}

  .dislq .dq-opts{display:grid;gap:10px}

  .dislq .dq-opt{appearance:none;-webkit-appearance:none;cursor:pointer;display:flex;align-items:center;gap:12px;width:100%;text-align:left;background:#fff;border:2.5px solid var(--line);border-radius:18px;padding:14px 16px;font-family:inherit;font-size:1rem;font-weight:700;color:var(--ink);transition:border-color .12s,background .12s,transform .12s,box-shadow .12s}

  .dislq .dq-opt:hover{border-color:var(--pink);background:var(--soft)}

  .dislq .dq-opt:active{transform:scale(.99)}

  .dislq .dq-opt.sel{border-color:var(--plum);background:var(--soft);box-shadow:0 4px 0 var(--plum)}

  .dislq .dq-opt .e{font-size:1.45rem;width:1.9rem;text-align:center;flex:none}

  .dislq .dq-opt .k{margin-left:auto;font-size:.72rem;font-weight:700;color:var(--mut);border:1.5px solid var(--line);border-radius:7px;padding:1px 8px}

  .dislq .dq-hint{margin-top:16px;font-size:.78rem;color:var(--mut)}

  /* result */

  .dislq .dq-ring{position:relative;width:170px;height:170px;margin:6px auto 10px}

  .dislq .dq-ring svg{width:100%;height:100%;display:block}

  .dislq .dq-ring .bg{fill:none;stroke:var(--soft);stroke-width:14}

  .dislq .dq-ring .fg{fill:none;stroke:var(--pink2);stroke-width:14;stroke-linecap:round;stroke-dasharray:377;stroke-dashoffset:377;transition:stroke-dashoffset 1.1s cubic-bezier(.22,.8,.3,1)}

  .dislq .dq-pct{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--plum)}

  .dislq .dq-pct b{font-size:2.9rem;line-height:1}

  .dislq .dq-pct span{font-size:1.3rem;margin-top:10px}

  .dislq .dq-emoji{font-size:2.2rem;line-height:1.2}

  .dislq .dq-rtitle{font-size:clamp(1.5rem,5vw,2rem);font-weight:800;color:var(--ink);line-height:1.2;margin:4px 0 10px}

  .dislq .dq-rdesc{color:var(--mut);max-width:560px;margin:0 auto}

  .dislq .dq-delta{margin-top:12px;font-size:.9rem;font-weight:700;color:var(--plum)}

  .dislq .dq-sec{font-size:1.15rem;font-weight:800;color:var(--plum);margin:30px 0 12px}

  .dislq .dq-insights{display:grid;gap:10px;text-align:left}

  .dislq .dq-ins{background:var(--soft);border-radius:16px;padding:14px 16px}

  .dislq .dq-ins b{display:block;margin-bottom:2px;color:var(--ink)}

  .dislq .dq-ins span{font-size:.93rem;color:#4b3a54}

  .dislq .dq-cats{display:grid;gap:12px;text-align:left}

  .dislq .dq-row .h{display:flex;justify-content:space-between;font-weight:700;font-size:.92rem;margin-bottom:5px}

  .dislq .dq-track{height:12px;background:var(--soft);border-radius:99px;overflow:hidden}

  .dislq .dq-track i{display:block;height:100%;width:0;border-radius:99px;background:linear-gradient(90deg,var(--pink),var(--pink2));transition:width 1s cubic-bezier(.22,.8,.3,1)}

  .dislq .dq-flags{display:grid;grid-template-columns:1fr 1fr;gap:12px;text-align:left}

  .dislq .dq-flags>div{border:2px solid var(--line);border-radius:16px;padding:14px 16px}

  .dislq .dq-flags h4{font-size:.95rem;font-weight:800;margin-bottom:8px;color:var(--ink)}

  .dislq .dq-flags li{font-size:.9rem;padding:3px 0;color:#4b3a54}

  .dislq .dq-list{display:grid;gap:8px;text-align:left}

  .dislq .dq-list li{position:relative;padding:10px 14px 10px 40px;background:#fff8fb;border:2px solid var(--line);border-radius:14px;font-size:.94rem;color:#4b3a54}

  .dislq .dq-list li::before{content:"💡";position:absolute;left:12px;top:9px}

  .dislq .dq-list.q li::before{content:"💭"}

  .dislq .dq-stage{margin-top:22px;font-size:.93rem;color:var(--mut);font-style:italic;max-width:560px;margin-left:auto;margin-right:auto}

  .dislq .dq-safety{margin-top:20px;text-align:left;background:#eef6ff;border:2px solid #b9d8f5;color:#1f4a73;border-radius:16px;padding:14px 16px;font-size:.92rem}

  .dislq .dq-actions{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:28px}

  .dislq .dq-toast{position:fixed;left:50%;bottom:24px;transform:translate(-50%,30px);background:var(--plum);color:#fff;font-weight:700;font-size:.9rem;padding:10px 18px;border-radius:99px;opacity:0;pointer-events:none;transition:.25s;z-index:99999}

  .dislq .dq-toast.on{opacity:1;transform:translate(-50%,0)}

  @media (max-width:560px){
   .dislq{padding:0 8px 14px;margin:14px auto}
   .dislq .dq-card{padding:24px 16px 28px;border-radius:26px;box-shadow:0 8px 0 var(--plum)}
   .dislq .dq-opt .k{display:none}
   .dislq .dq-flags{grid-template-columns:1fr}
   .dislq .dq-btn.sm{flex:1 1 44%}
   .dislq .dq-btn{font-size:1.05rem}
  }

  @media (prefers-reduced-motion:reduce){
   .dislq *,.dislq *::before,.dislq *::after{animation:none!important;transition:none!important}
  }

  </style>


  <div class="dislq" id="dislq">

    <!-- INTRO -->
    <section data-screen="intro">
      <div class="dq-card">
        <svg class="dq-mascots" viewBox="0 0 200 130" role="img" aria-label="Two friendly characters">
          <ellipse cx="100" cy="124" rx="70" ry="4" fill="#43235f" opacity=".08"/>
          <g class="dq-float">
            <path d="M65 114C18 84 14 44 40 34C54 29 65 37 65 47C65 37 76 29 90 34C116 44 112 84 65 114Z" fill="#f2749f" stroke="#43235f" stroke-width="4" stroke-linejoin="round"/>
            <path d="M52 108v12M78 108v12M22 66q-10 4-8 16M108 66q10 4 8 16" stroke="#43235f" stroke-width="5" stroke-linecap="round" fill="none"/>
            <circle cx="53" cy="60" r="6.5" fill="#fff" stroke="#43235f" stroke-width="2.5"/><circle cx="77" cy="60" r="6.5" fill="#fff" stroke="#43235f" stroke-width="2.5"/>
            <circle cx="54" cy="61" r="3" fill="#2a1431"/><circle cx="76" cy="61" r="3" fill="#2a1431"/>
            <path d="M58 76q7 8 14 0" stroke="#43235f" stroke-width="3" stroke-linecap="round" fill="none"/>
            <ellipse cx="42" cy="72" rx="6" ry="4" fill="#f6a56b" opacity=".6"/><ellipse cx="88" cy="72" rx="6" ry="4" fill="#f6a56b" opacity=".6"/>
          </g>
          <g class="dq-float" style="animation-delay:.6s">
            <rect x="128" y="18" width="48" height="92" rx="24" fill="#8b57bd" stroke="#43235f" stroke-width="4"/>
            <path d="M142 108v12M162 108v12M128 64q-10 6-8 20M176 64q10 6 8 20" stroke="#43235f" stroke-width="5" stroke-linecap="round" fill="none"/>
            <path d="M140 54q5-6 10 0M154 54q5-6 10 0M147 66q5 6 10 0" stroke="#2a1431" stroke-width="3" stroke-linecap="round" fill="none"/>
            <ellipse cx="138" cy="63" rx="6" ry="4" fill="#f6a56b" opacity=".7"/><ellipse cx="166" cy="63" rx="6" ry="4" fill="#f6a56b" opacity=".7"/>
          </g>
          <text x="104" y="26" font-size="18" text-anchor="middle">💗</text>
        </svg>
        <h2 class="dq-title"><span class="dq-hl">Ready for the test?</span></h2>
        <div class="dq-chip">📝 20 questions &bull; ⏱ 5 min</div>
        <p class="dq-notice dq-timeup" hidden style="margin-top:16px"></p>

        <!-- hidden: JS needs these, users will not see them -->
        <div hidden>
          <input type="text" class="dq-name">
          <select class="dq-stage-sel"><option value="relationship">relationship</option></select>
          <input type="checkbox" class="dq-relaxed">
        </div>

        <button type="button" class="dq-btn wide dq-start">Start the test</button>
        <p class="dq-last" hidden></p>
      </div>
    </section>

    <!-- QUIZ -->
    <section data-screen="quiz" hidden>
      <div class="dq-card">
        <div class="dq-top">
          <button type="button" class="dq-back" aria-label="Previous question">&larr; Back</button>
          <span class="dq-count" aria-live="polite"></span>
          <span class="dq-time" aria-label="Time left">⏱ 5:00</span>
        </div>
        <div class="dq-bar" role="progressbar" aria-valuemin="0" aria-valuemax="20" aria-valuenow="0"><div class="dq-fill"></div></div>
        <span class="dq-cat"></span>
        <h3 class="dq-q"></h3>
        <div class="dq-opts" role="radiogroup" aria-label="Your answer"></div>
        <p class="dq-hint">Tip: tap an answer to continue. On a keyboard, press 1-5.</p>
      </div>
    </section>

    <!-- RESULT -->
    <section data-screen="result" hidden>
      <div class="dq-card">
        <p class="dq-kicker">Your result</p>
        <div class="dq-ring">
          <svg viewBox="0 0 140 140" aria-hidden="true">
            <circle class="bg" cx="70" cy="70" r="60"/>
            <circle class="fg" cx="70" cy="70" r="60" transform="rotate(-90 70 70)"/>
          </svg>
          <div class="dq-pct"><b class="dq-pctnum">0</b><span>%</span></div>
        </div>
        <div class="dq-emoji"></div>
        <h2 class="dq-rtitle"></h2>
        <p class="dq-rdesc"></p>
        <p class="dq-delta" hidden></p>
        <p class="dq-notice dq-partial" hidden style="margin-top:14px"></p>

        <h3 class="dq-sec">What your answers say</h3>
        <div class="dq-insights"></div>

        <h3 class="dq-sec">Your 5 love categories</h3>
        <div class="dq-cats"></div>

        <h3 class="dq-sec">Green flags &amp; things to look at</h3>
        <div class="dq-flags">
          <div><h4>💚 Strengths</h4><ul class="dq-good"></ul></div>
          <div><h4>🔎 Worth a closer look</h4><ul class="dq-watch"></ul></div>
        </div>

        <h3 class="dq-sec">Try this next</h3>
        <ul class="dq-list dq-tips"></ul>

        <h3 class="dq-sec">Questions to ask your heart</h3>
        <ul class="dq-list q dq-prompts"></ul>

        <p class="dq-stage"></p>
        <div class="dq-safety" hidden>💙 You said you sometimes hide things or feel on edge around him. If you ever feel afraid, controlled or pressured, please talk to someone you trust or contact a local support service. Your safety matters more than any quiz score.</div>

        <div class="dq-actions">
          <button type="button" class="dq-btn sm dq-share">📤 Share</button>
          <button type="button" class="dq-btn sm ghost dq-copy">📋 Copy result</button>
          <button type="button" class="dq-btn sm ghost dq-img">🖼️ Save image</button>
          <button type="button" class="dq-btn sm ghost dq-retake">🔄 Retake</button>
        </div>
        <p class="dq-fine">This result reflects how you feel today. Feelings change, so retake it in a few weeks. It is a mirror for self-reflection, not a verdict or professional advice.</p>
      </div>
    </section>

    <div class="dq-toast" role="status" aria-live="polite"></div>
    <noscript>This quiz needs JavaScript to run. Please enable it in your browser.</noscript>
  </div>


  <script data-cfasync="false">

  (function () {
    var root = document.getElementById('dislq');
    if (!root || root.getAttribute('data-init')) return;
    root.setAttribute('data-init', '1');

    /* ---------- helpers ---------- */
    function $(s) { return root.querySelector(s); }
    function $$(s) { return Array.prototype.slice.call(root.querySelectorAll(s)); }
    function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
    function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var STORE = 'dislq_last_v1';

    /* ---------- content ---------- */
    var SCALE = [
      { v: 5, e: '😍', t: 'Strongly agree' },
      { v: 4, e: '🙂', t: 'Agree' },
      { v: 3, e: '😐', t: 'Not sure' },
      { v: 2, e: '🙁', t: 'Disagree' },
      { v: 1, e: '💔', t: 'Strongly disagree' }
    ];

    var CATS = {
      ec: { n: 'Emotional Connection', e: '💞',
        hi: 'You feel close, safe and emotionally tuned in to {him}. That bond is the foundation of lasting love.',
        lo: 'The emotional bond feels thin right now. Feeling numb or guarded often points to stress, distance or unspoken hurt.',
        tips: ['Set aside 20 phone-free minutes this week to talk about something other than logistics.', 'Share one thing that has been weighing on you and invite {him} to share one too.'],
        pr: ['When did I last feel truly close to {him}, and what was different then?', 'What do I wish {him} understood about how I feel?'] },
      at: { n: 'Attraction & Intimacy', e: '🔥',
        hi: 'The chemistry is alive. Desire and affection still feel natural with {him}.',
        lo: 'The spark seems quieter. Stress, routine, unresolved conflict and burnout can mute attraction without ending love.',
        tips: ['Try something new together, a different place, activity or evening routine, to break the autopilot.', 'Start with small touch like hugs and hand-holding, with no pressure for more.'],
        pr: ['Is the spark gone, or buried under stress and routine?', 'What made me most attracted to {him} at the start, and do I still see it?'] },
      tr: { n: 'Trust & Respect', e: '🤝',
        hi: 'You feel respected, safe and able to be honest. Trust is what lets love last.',
        lo: 'Trust or respect feels shaky. Love is hard to sustain when you feel unsafe, unheard or on guard.',
        tips: ['Name one specific moment that dented your trust and calmly tell {him} how it affected you.', 'Agree on one clear boundary or expectation, then notice whether it is respected over the next few weeks.'],
        pr: ['Do I feel free to be completely honest with {him}?', 'Is my doubt about trust a pattern, or a one-off I never resolved?'] },
      fu: { n: 'Future & Commitment', e: '🔮',
        hi: 'You can picture a shared future and want it. That forward pull is a strong sign of love.',
        lo: 'The future feels uncertain or heavy. That could be a values mismatch, timing, or doubts you have not voiced yet.',
        tips: ['Write down your top five life goals, ask {him} to do the same, then compare.', 'Talk about one concrete thing in the next 12 months, such as where to live, money or family.'],
        pr: ['If nothing about {him} changed for five years, would I be at peace?', 'Am I afraid of a future with {him}, or of the future in general?'] },
      cs: { n: 'Communication & Wellbeing', e: '🌱',
        hi: 'You work through problems together and feel good in each other\'s company.',
        lo: 'Conflict, tiredness or feeling drained suggests the relationship is costing more than it gives right now.',
        tips: ['Try a weekly 15-minute check-in: one appreciation, one concern, one request.', 'Pause heated arguments for 20 minutes, then return with "I feel..." instead of "You always...".'],
        pr: ['After time with {him}, do I usually feel lighter or heavier?', 'Am I willing to put in real effort, and do I see the same from {him}?'] }
    };
    var CAT_KEYS = ['ec', 'at', 'tr', 'fu', 'cs'];

    /* c = category, r = reverse scored, f = short topic used for strengths / watch-list */
    var Q = [
      { c: 'ec', r: 0, f: 'Emotional warmth', t: 'When I think about {him}, I feel warm and happy inside.' },
      { c: 'at', r: 0, f: 'Physical attraction', t: 'I still feel physically drawn to {him}.' },
      { c: 'tr', r: 0, f: 'Honesty & trust', t: 'I trust {him} to be honest with me, even when the truth is hard.' },
      { c: 'fu', r: 0, f: 'Picturing a shared future', t: 'I can picture a future with {him}, and it excites me.' },
      { c: 'cs', r: 0, f: 'Willingness to put in effort', t: 'I am still willing to put in effort and compromise to make this work.' },
      { c: 'ec', r: 0, f: 'Feeling emotionally safe', t: 'I feel emotionally safe opening up to {him}.' },
      { c: 'at', r: 0, f: 'Comfort in affection', t: 'Affection from {him} feels comforting, not like an obligation.' },
      { c: 'tr', r: 0, f: 'Respect in how you are treated', t: 'I respect the way {him} treats me and the people around us.' },
      { c: 'fu', r: 0, f: 'Choosing each other again', t: 'If I had to start over today, I would choose {him} again.' },
      { c: 'cs', r: 0, f: 'Resolving disagreements', t: 'We can settle disagreements without lingering resentment.' },
      { c: 'ec', r: 1, f: 'Emotional presence', t: 'Lately I feel emotionally numb or indifferent when I am with {him}.' },
      { c: 'at', r: 1, f: 'Closeness & touch', t: 'I find myself avoiding closeness or touch with {him}.' },
      { c: 'tr', r: 1, f: 'Feeling free to be yourself', t: 'I often hide things or walk on eggshells around {him}.' },
      { c: 'fu', r: 1, f: 'Peace about the long term', t: 'The thought of a long-term future with {him} makes me anxious or feel trapped.' },
      { c: 'cs', r: 0, f: 'Feeling like yourself together', t: 'I feel happier and more like myself when I am with {him}.' },
      { c: 'ec', r: 0, f: 'Excitement to hear from him', t: 'I get genuinely excited when I see a message or call from {him}.' },
      { c: 'at', r: 0, f: 'Spark & butterflies', t: 'I still get butterflies or a spark when I am around {him}.' },
      { c: 'tr', r: 0, f: 'Feeling truly cared for', t: 'I believe {him} truly has my best interests at heart.' },
      { c: 'fu', r: 0, f: 'Seeing him in your near future', t: 'When I picture my life a year from now, {him} is in it and I am glad.' },
      { c: 'cs', r: 1, f: 'Energy after time together', t: 'I feel more drained than energised after spending time with {him}.' }
    ];
    var EGG_INDEX = 12; /* the "walk on eggshells" question */

    var TIERS = [
      { min: 80, e: '💖', t: 'Still Head Over Heels', d: 'Your answers show real, steady love for {him}. The warmth, trust and desire are all still there. Keep feeding it with time, honesty and small everyday gestures.' },
      { min: 62, e: '💗', t: 'The Spark Is Still There', d: 'There is genuine love here, with a few areas that could use attention. The spark is not gone. It may just need some care.' },
      { min: 45, e: '🤔', t: 'Mixed Feelings', d: 'Your heart is genuinely split. Some parts of this relationship still feel good while others feel distant or uncertain. That is confusing, and completely human.' },
      { min: 28, e: '🥀', t: 'Feelings Are Fading', d: 'Your answers suggest the closeness you once felt has dimmed. That does not automatically mean it is over, but it deserves an honest look.' },
      { min: 0, e: '🕊️', t: 'Your Heart May Have Moved On', d: 'Your answers suggest your heart may be heading somewhere else. That can feel heavy, but clarity, even when it is hard, is a gift to both of you.' }
    ];

    var STAGE = {
      dating: 'Since things are still fairly new, treat this as information, not destiny. Notice how you feel after your next few dates.',
      relationship: 'In an established relationship, feelings move in seasons. Low patches often mean the connection needs tending, but consistently low scores are worth taking seriously.',
      married: 'After years together, love shifts from fireworks to something deeper. A low score often means the bond needs attention, such as time, honesty or outside support like couples counselling.',
      break: 'While you are on a break, avoid deciding on one emotional day. Give yourself a set window and notice how you feel when you imagine both outcomes.',
      ex: 'With an ex, nostalgia can feel exactly like love. Ask yourself whether you miss him, or the version of life you had back then.'
    };

    /* ---------- state ---------- */
    var S = { name: '', stage: 'relationship', relaxed: false, idx: 0, ans: [], end: 0, timer: null, advT: null, last: null, result: null };
    function him() { return S.name || 'him'; }
    function sub(t) { return t.replace(/\{him\}/g, him()); }

    function store(get, val) {
      try {
        if (get) { var r = localStorage.getItem(STORE); return r ? JSON.parse(r) : null; }
        localStorage.setItem(STORE, JSON.stringify(val));
      } catch (e) { return null; }
    }

    function show(name) {
      $$('[data-screen]').forEach(function (s) { s.hidden = s.getAttribute('data-screen') !== name; });
      var card = $('[data-screen="' + name + '"] .dq-card');
      if (card) { card.style.animation = 'none'; void card.offsetWidth; card.style.animation = ''; }
      try { root.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); } catch (e) {}
    }

    function toast(msg) {
      var t = $('.dq-toast'); t.textContent = msg; t.classList.add('on');
      clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove('on'); }, 1900);
    }

    /* ---------- intro ---------- */
    function setupIntro() {
      S.last = store(true);
      var lastEl = $('.dq-last');
      if (S.last && typeof S.last.p === 'number') {
        var d = '';
        try { d = new Date(S.last.t).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) {}
        lastEl.textContent = 'Your last result: ' + S.last.p + '%' + (d ? ' (' + d + ')' : '');
        lastEl.hidden = false;
      } else { lastEl.hidden = true; }
    }

    function start() {
      S.name = $('.dq-name').value.replace(/[<>]/g, '').trim();
      S.stage = $('.dq-stage-sel').value;
      S.relaxed = $('.dq-relaxed').checked;
      S.idx = 0; S.ans = []; for (var i = 0; i < Q.length; i++) S.ans.push(null);
      $('.dq-timeup').hidden = true;
      var tm = $('.dq-time');
      tm.hidden = S.relaxed;
      clearInterval(S.timer);
      if (!S.relaxed) {
        S.end = Date.now() + 5 * 60 * 1000;
        tick();
        S.timer = setInterval(tick, 500);
      }
      show('quiz');
      renderQ(true);
    }

    function tick() {
      var left = Math.max(0, S.end - Date.now());
      var m = Math.floor(left / 60000), s = Math.floor((left % 60000) / 1000);
      var tm = $('.dq-time');
      tm.textContent = '⏱ ' + m + ':' + (s < 10 ? '0' : '') + s;
      tm.classList.toggle('low', left <= 60000);
      if (left <= 0) { clearInterval(S.timer); finish(true); }
    }

    /* ---------- quiz ---------- */
    function renderQ(first) {
      var q = Q[S.idx];
      $('.dq-count').textContent = 'Question ' + (S.idx + 1) + ' of ' + Q.length;
      $('.dq-fill').style.width = (S.idx / Q.length * 100) + '%';
      $('.dq-bar').setAttribute('aria-valuenow', S.idx);
      $('.dq-cat').textContent = CATS[q.c].e + ' ' + CATS[q.c].n;
      $('.dq-q').textContent = sub(q.t);
      $('.dq-back').disabled = S.idx === 0;
      var box = $('.dq-opts'); clear(box);
      SCALE.forEach(function (o, i) {
        var b = el('button', 'dq-opt' + (S.ans[S.idx] === o.v ? ' sel' : ''));
        b.type = 'button'; b.setAttribute('role', 'radio');
        b.setAttribute('aria-checked', S.ans[S.idx] === o.v ? 'true' : 'false');
        b.appendChild(el('span', 'e', o.e));
        b.appendChild(el('span', 't', o.t));
        b.appendChild(el('span', 'k', String(i + 1)));
        b.addEventListener('click', function () { pick(o.v); });
        box.appendChild(b);
      });
      if (!first) {
        var card = $('[data-screen="quiz"] .dq-card');
        card.classList.remove('dq-swap'); void card.offsetWidth; card.classList.add('dq-swap');
      }
    }

    function pick(v) {
      if (S.advT) return;
      S.ans[S.idx] = v;
      $$('.dq-opt').forEach(function (b, i) {
        var on = SCALE[i].v === v;
        b.classList.toggle('sel', on); b.setAttribute('aria-checked', on ? 'true' : 'false');
      });
      S.advT = setTimeout(function () {
        S.advT = null;
        if (S.idx < Q.length - 1) { S.idx++; renderQ(); } else { finish(false); }
      }, reduce ? 60 : 280);
    }

    function back() {
      if (S.idx === 0) return;
      clearTimeout(S.advT); S.advT = null;
      S.idx--; renderQ();
    }

    /* ---------- scoring ---------- */
    function eff(i) { var v = S.ans[i]; if (v == null) return null; return Q[i].r ? 6 - v : v; }
    function pctOf(sum, n) { return n ? Math.round((sum - n) / (4 * n) * 100) : null; }

    function compute() {
      var cat = {}, tot = 0, n = 0;
      CAT_KEYS.forEach(function (k) { cat[k] = { s: 0, n: 0, p: null }; });
      for (var i = 0; i < Q.length; i++) {
        var e = eff(i); if (e == null) continue;
        cat[Q[i].c].s += e; cat[Q[i].c].n++; tot += e; n++;
      }
      CAT_KEYS.forEach(function (k) { cat[k].p = pctOf(cat[k].s, cat[k].n); });
      return { cat: cat, p: pctOf(tot, n), n: n };
    }

    function finish(timedOut) {
      clearInterval(S.timer); clearTimeout(S.advT); S.advT = null;
      var r = compute();
      if (r.n < 5) {
        show('intro'); setupIntro();
        var t = $('.dq-timeup');
        t.textContent = timedOut ? 'Time ran out before enough questions were answered. Try again, or switch on Relaxed mode.' : 'Please answer at least 5 questions to get a result.';
        t.hidden = false; return;
      }
      S.result = r; r.timedOut = timedOut;
      renderResult(r);
      store(false, { p: r.p, t: Date.now() });
      show('result');
    }

    /* ---------- result ---------- */
    function tierFor(p) { for (var i = 0; i < TIERS.length; i++) if (p >= TIERS[i].min) return TIERS[i]; return TIERS[TIERS.length - 1]; }

    function renderResult(r) {
      var tier = tierFor(r.p); r.tier = tier;
      $('.dq-emoji').textContent = tier.e;
      $('.dq-rtitle').textContent = tier.t;
      $('.dq-rdesc').textContent = sub(tier.d);

      /* ring + count-up */
      var fg = $('.dq-ring .fg'), num = $('.dq-pctnum');
      fg.style.strokeDashoffset = '377'; num.textContent = '0';
      setTimeout(function () { fg.style.strokeDashoffset = String(377 * (1 - r.p / 100)); }, 60);
      if (reduce) { num.textContent = r.p; } else {
        var t0 = null;
        var step = function (ts) {
          if (!t0) t0 = ts;
          var k = Math.min(1, (ts - t0) / 1000);
          num.textContent = Math.round(r.p * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }

      /* delta vs last */
      var dl = $('.dq-delta');
      if (S.last && typeof S.last.p === 'number') {
        var diff = r.p - S.last.p;
        dl.textContent = diff === 0 ? 'Same as your last result (' + S.last.p + '%).' : 'Last time you scored ' + S.last.p + '%, so your score is ' + (diff > 0 ? 'up ' : 'down ') + Math.abs(diff) + ' points.';
        dl.hidden = false;
      } else { dl.hidden = true; }

      var pn = $('.dq-partial');
      if (r.n < Q.length) { pn.textContent = 'Based on the ' + r.n + ' questions you answered' + (r.timedOut ? ' before time ran out.' : '.'); pn.hidden = false; } else { pn.hidden = true; }

      /* category ranking */
      var ranked = CAT_KEYS.filter(function (k) { return r.cat[k].p != null; }).sort(function (a, b) { return r.cat[b].p - r.cat[a].p; });
      var best = ranked[0], worst = ranked[ranked.length - 1];
      function P(k) { return r.cat[k].p == null ? 50 : r.cat[k].p; }

      /* insights */
      var ins = [];
      ins.push({ h: '🏆 Strongest area: ' + CATS[best].n + ' (' + P(best) + '%)', b: sub(CATS[best].hi) });
      if (P(worst) < 70 && worst !== best) ins.push({ h: '🧭 Shakiest area: ' + CATS[worst].n + ' (' + P(worst) + '%)', b: sub(CATS[worst].lo) });
      else ins.push({ h: '✨ No weak spots', b: 'All five areas look healthy. Keep nurturing what is working.' });
      var others = function (k) { var s = 0, c = 0; CAT_KEYS.forEach(function (x) { if (x !== k) { s += P(x); c++; } }); return s / c; };
      if (P('tr') < 40 && others('tr') >= 55) ins.push({ h: '💔 Love without safety', b: 'You feel connected but not fully safe or trusting. Love and trust are separate things, and love tends to struggle without trust.' });
      if (P('at') >= 65 && P('ec') < 50) ins.push({ h: '🔥 Chemistry without closeness', b: 'The attraction is there, but the emotional bond is lagging. Chemistry can feel like love before deep connection catches up.' });
      if (P('ec') >= 65 && P('at') < 45) ins.push({ h: '🫂 Deep bond, quieter spark', b: 'You care about him deeply, but the physical spark has dimmed. This is common after long stretches of stress or routine, and often fixable.' });
      if (P('fu') < 40 && r.p >= 55) ins.push({ h: '⏳ Loving the present, doubting the future', b: 'You enjoy where things are now, but the long-term picture feels unclear. A calm conversation about goals could bring clarity.' });
      if (P('cs') < 40) ins.push({ h: '🔋 A draining dynamic', b: 'Feeling drained or stuck in conflict is a signal worth listening to. Ask whether it is a rough patch or the usual pattern.' });
      var ib = $('.dq-insights'); clear(ib);
      ins.slice(0, 4).forEach(function (i) { var d = el('div', 'dq-ins'); d.appendChild(el('b', '', i.h)); d.appendChild(el('span', '', i.b)); ib.appendChild(d); });

      /* category bars */
      var cb = $('.dq-cats'); clear(cb);
      var bars = [];
      CAT_KEYS.forEach(function (k) {
        var row = el('div', 'dq-row'), h = el('div', 'h');
        h.appendChild(el('span', '', CATS[k].e + ' ' + CATS[k].n));
        h.appendChild(el('span', '', r.cat[k].p == null ? '-' : r.cat[k].p + '%'));
        var tr = el('div', 'dq-track'), fi = el('i'); tr.appendChild(fi);
        row.appendChild(h); row.appendChild(tr); cb.appendChild(row);
        bars.push([fi, r.cat[k].p || 0]);
      });
      setTimeout(function () { bars.forEach(function (b) { b[0].style.width = b[1] + '%'; }); }, 80);

      /* flags */
      var good = [], watch = [];
      for (var i = 0; i < Q.length; i++) {
        var e = eff(i); if (e == null) continue;
        if (e >= 4) good.push({ f: Q[i].f, e: e }); else if (e <= 2) watch.push({ f: Q[i].f, e: e });
      }
      good.sort(function (a, b) { return b.e - a.e; }); watch.sort(function (a, b) { return a.e - b.e; });
      function fill(sel, arr, icon, none) {
        var u = $(sel); clear(u);
        if (!arr.length) { u.appendChild(el('li', '', none)); return; }
        arr.slice(0, 5).forEach(function (x) { u.appendChild(el('li', '', icon + ' ' + x.f)); });
      }
      fill('.dq-good', good, '💚', 'Nothing stands out yet.');
      fill('.dq-watch', watch, '🔸', 'Nothing worrying stands out.');

      /* tips + prompts for weakest area */
      var tips = $('.dq-tips'); clear(tips);
      var focus = (P(worst) < 75) ? worst : best;
      CATS[focus].tips.forEach(function (t) { tips.appendChild(el('li', '', sub(t))); });
      tips.appendChild(el('li', '', 'Retake this quiz in 2 to 4 weeks to see whether your feelings are shifting.'));
      var pr = $('.dq-prompts'); clear(pr);
      CATS[focus].pr.forEach(function (t) { pr.appendChild(el('li', '', sub(t))); });
      pr.appendChild(el('li', '', 'Do I miss ' + him() + ', or the idea of what we had?'));
      pr.appendChild(el('li', '', 'How would I honestly feel if ' + him() + ' met someone new tomorrow?'));

      $('.dq-stage').textContent = STAGE[S.stage] || '';
      var egg = S.ans[EGG_INDEX]; $('.dq-safety').hidden = !(egg != null && egg >= 4);
    }

    /* ---------- share / copy / image ---------- */
    function summary() {
      var r = S.result; if (!r) return '';
      return 'My "Do I Still Love Him?" quiz result: ' + r.p + '% - ' + r.tier.t + ' ' + r.tier.e;
    }
    function copyText(txt) {
      function fallback() {
        var ta = document.createElement('textarea'); ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); toast('Copied!'); } catch (e) { toast('Could not copy'); }
        document.body.removeChild(ta);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { toast('Copied!'); }, fallback);
      else fallback();
    }
    function share() {
      var data = { title: 'Do I Still Love Him? Quiz', text: summary(), url: location.href.split('#')[0] };
      if (navigator.share) navigator.share(data).catch(function () {});
      else copyText(data.text + ' ' + data.url);
    }

    function rr(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
    function saveImage() {
      var r = S.result; if (!r) return;
      var W = 1080, H = 1350, cv = document.createElement('canvas'); cv.width = W; cv.height = H;
      var c = cv.getContext('2d'); if (!c) { toast('Image not supported'); return; }
      var g = c.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#f06292'); g.addColorStop(1, '#43235f');
      c.fillStyle = g; c.fillRect(0, 0, W, H);
      c.fillStyle = '#fff'; rr(c, 60, 60, W - 120, H - 120, 56); c.fill();
      c.textAlign = 'center'; c.fillStyle = '#43235f';
      c.font = '800 54px system-ui,-apple-system,Segoe UI,Roboto,sans-serif'; c.fillText('Do I Still Love Him? Quiz', W / 2, 190);
      c.font = '110px system-ui,"Apple Color Emoji","Segoe UI Emoji",sans-serif'; c.fillText(r.tier.e, W / 2, 330);
      c.fillStyle = '#d93673'; c.font = '800 210px system-ui,-apple-system,Segoe UI,Roboto,sans-serif'; c.fillText(r.p + '%', W / 2, 540);
      c.fillStyle = '#2a1431'; c.font = '800 58px system-ui,-apple-system,Segoe UI,Roboto,sans-serif'; c.fillText(r.tier.t, W / 2, 630);
      var y = 720;
      CAT_KEYS.forEach(function (k) {
        var p = r.cat[k].p || 0;
        c.textAlign = 'left'; c.fillStyle = '#43235f'; c.font = '700 34px system-ui,-apple-system,Segoe UI,Roboto,sans-serif'; c.fillText(CATS[k].n, 130, y);
        c.textAlign = 'right'; c.fillText(p + '%', W - 130, y);
        c.fillStyle = '#fdeef4'; rr(c, 130, y + 16, W - 260, 22, 11); c.fill();
        if (p > 0) { c.fillStyle = '#ec4e8a'; rr(c, 130, y + 16, Math.max(22, (W - 260) * p / 100), 22, 11); c.fill(); }
        y += 100;
      });
      c.textAlign = 'center'; c.fillStyle = '#6d5a76'; c.font = '600 30px system-ui,-apple-system,Segoe UI,Roboto,sans-serif';
      c.fillText(location.hostname || 'Take the quiz yourself', W / 2, H - 110);
      cv.toBlob(function (b) {
        if (!b) { toast('Could not create image'); return; }
        var a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'do-i-still-love-him-result.png';
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
        toast('Image saved');
      }, 'image/png');
    }

    /* ---------- wiring ---------- */
    $('.dq-start').addEventListener('click', start);
    $('.dq-back').addEventListener('click', back);
    $('.dq-share').addEventListener('click', share);
    $('.dq-copy').addEventListener('click', function () { copyText(summary()); });
    $('.dq-img').addEventListener('click', saveImage);
    $('.dq-retake').addEventListener('click', function () { setupIntro(); show('intro'); });

    document.addEventListener('keydown', function (e) {
      if ($('[data-screen="quiz"]').hidden) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      if (e.key >= '1' && e.key <= '5') { pick(SCALE[parseInt(e.key, 10) - 1].v); }
      else if (e.key === 'ArrowLeft') { back(); }
    });

    setupIntro();
  })();

  </script>
tool_position: top
faqs:
  - question: How Do You Know You No Longer Love Your Partner?
    answer: When I stopped caring about small things like their day, their plans, or
      even their silence, that was my clue. You feel indifferent instead of
      hurt, you avoid time together, and the future stops including them.
  - question: Is It Normal Not to Feel Butterflies Any More After Years Together?
    answer: Yes, completely normal. Butterflies come from novelty and uncertainty,
      and both fade as trust grows. In long relationships, I've seen them
      replaced by calm, comfort and safety. Missing the spark is fine; missing
      connection is the real warning.
  - question: Can You Fall Back in Love With Your Partner?
    answer: >
      Yes, and I've watched couples do it. It takes effort from both sides:
      honest conversations, fresh shared experiences, quality time without
      phones, and fixing old resentments. Love often returns when you start
      choosing each other again deliberately.
  - question: What Do I Do If the Test Says I Don't Love Them Any More?
    answer: >
      Don't panic or act on one result. Treat it as a prompt to reflect, not a
      verdict. Talk with someone you trust, consider counseling, and ask
      yourself honestly whether you're tired, disconnected, or truly finished
      with this relationship.
  - question: Is the Test Anonymous?
    answer: >
      Yes, the test is completely anonymous. You don't need to share your name,
      email, or personal details to take it, and your answers aren't linked to
      your identity, so you can respond honestly and privately.
focus_keyword: do i still love him quiz
description: Not sure how you feel? Take our do I still love him quiz to find
  out what your heart really wants. Free, quick, and honest results.
menu_title: Do I Still Love Him
date: 2026-11-23
draft: false
---
#### Nobody warns you that **missing him** can feel like **independent** freedom one **bad day** and **lonely** silence the next. **More days than not**, I **don't know how I feel**, which is why people take quizzes.

#### Over years of [watching couples](https://www.gottman.com/blog/podcasts/what-makes-love-last/), I noticed **arguments** rarely reveal love's truth; **defending him** and **making excuses** matter more. A **song** that **hits hard**, or a **wave of memories**, says far more than daily quarrels.

#### Contrarian view: **nostalgic** feelings are not **a blessing or a curse**. What counts is whether you **hesitate**, **think about it regularly**, **find an excuse** to **move closer**, **hold onto** something, or finally **let it go**.

## **Missing Him**

#### Honestly, the clearest signal I noticed was **missing him when apart**. Nobody warned me that **time away** answers questions faster than most arguments; when **people mention him**, my chest tightens, and I **feel connected** again.

#### Missing someone rarely arrives dramatically. For me it was a **message during the day** I didn't send, a **coffee made** for two, an **evening just the two of you** with **no screens**, now suddenly **unthinkable**.

#### Still, missing isn't proof. I **reassure myself** with **what-ifs**, then feel **relieved** when the ache passes. But when it's **hard to picture my future without him**, I **can't stop thinking**, and honesty matters most.

## **Talking About Him**

#### When **exciting news** lands, notice who you reach for. If he is the **first person to call**, that **instinct** says plenty. Some people admit **no one** else comes to mind, not even a **best friend**.

#### I once caught myself **justifying his side** to a friend, ready to **explain away** his **flaws** like a lawyer. When someone **criticises** him and you **defend** him without thinking, pay attention to that automatic reflex.

#### Talking about him can reveal everything. Do you **tell people** you feel **proud** of his **success**, or does a **venting session** with a **therapist** leave you lighter? Notice which version of the story comes out.

## **Checking His Social Media**

#### I **check your phone** less now, yet **from time to time** I **still** open his profile. **Last week**, **seeing him happy** became a **pang of sadness** and then **meh**. That told me plenty, honestly, really.

#### He **criticises** exes online, and I **nod along in silence**. **Asking people about him**, **rolling your eyes**, scrolling endlessly: those **old habits of thought** return when I **bump into them** there, **mildly curious**, **not worried**.

#### If **dating someone else** showed up in his feed, would I feel **devastated**, **almost relieved**, or **indifferent**? **Honest answer**: **it stings** slightly. Then **I let it go**, **focused on the present**, **not rushing** anything today.

## **Attraction**

![do i still love him quiz](/images/do-i-still-love-him-quiz.webp "do i still love him quiz")

#### **Early Attraction** **rarely** survives the **wear of everyday life** unchanged, and that is **normal**. **After years together**, the **butterflies** fade, yet I stay **attracted** to **mannerisms** like **soft snores**, which **often** reveal a **settled love**.

#### **Finding someone attractive** **isn't a sign** your **relationship** is failing. A **passing attraction** to a **celebrity** or **coworker** happens; I have felt **tempted** myself. What matters is whether you **compare** them to your **partner** afterward.

#### In my experience, **looks** open the door, but **personality traits** keep you inside. A genuine **compliment**, **tenderness**, or one of those **[small everyday gestures](https://www.psychologytoday.com/ca/blog/fulfillment-at-any-age/201403/11-ways-to-tell-if-your-lover-loves-you)** can reignite a **spark** faster than any **romantic dates** ever could.

## **Affection**

#### Most people expect **grand declarations**, yet in my experience affection lives in **reflexes**: who you reach for when you **get home in the evening**, and whether **coming home pleases you** or leaves you completely flat.

#### I once watched a couple **argue** loudly, **make up quickly**, and **move on** without a grudge. That **adorable** ease felt like **real emotion**, not **habit**, though I admit **a little bit of both** hides there.

#### Contrary to belief, **attachment** is no **single sign** of love; couples **still together** after years often feel **calmer**, not **weaker**. Notice whether **enjoying their successes** comes naturally and whether they still truly **make you happy**.

## **Arguments**

#### Honestly, I tell clients the **quiz** only works when you stay **honest**. **One sign on its own** proves nothing; **accumulation** matters. Some people **dream** about a **future**, yet **I dodge it**, they admit, **doubt** lingers.

#### Contrarian take: people who **stay for a long time** often quietly confuse **love** with **habit**, when a **bond has replaced the feeling**. Ask whether you **thought about leaving** **calmly**; a **fit of anger** shouldn't count.

#### In practice, the sharpest argument is **relief**. If **seeing someone else** brought **hurt**, you're attached; if you **pictured yourself with someone else**, **comparing** both lives, **something has already started**. Please **don't decide** anything that night.

## **Picturing a Future Together**

#### Most people I counsel admit they **daydream** about tomorrow long before speaking up. When you **picture the future with them**, watch whether **relief** or **dread** shows up; that **first instinct** outweighs almost any rehearsed **declarations**.

#### Contrarian view: **picturing yourself with someone else** isn't automatically betrayal. What matters is **coming back to it**; if you **return to it** weekly and never **cut it off**, the **test's question** is already **partly answered**.

#### Practical reality: couples who share **the home**, **the money**, and **more time together** often confuse logistics with love. I ask clients to imagine **life without a partner**, then see whether **heavy signs** surface through **accumulation**.

## **Moving On**

#### Moving on rarely starts with a **breakup**; it starts when you [**let go of most** **old things**](https://www.npr.org/2022/02/09/1079532260/how-to-get-over-someone-after-a-breakup), accept **what's left** is **no longer love**, and let the **memories** fade, even one that **stirs something up**.

#### [After the **crying**](https://www.helpguide.org/articles/grief/coping-with-a-breakup-or-divorce.htm), **decide nothing that same evening**; **take it again** in a **few weeks** and see **where you stand**. **Putting it off** forever **protects nobody**, so plan a **civil** talk about **separation** soon enough.

#### In my experience, **coming back is rare**, but **change** is real. Some find **clarity** and **self-discovery** with **more space**, and their own **happiness** returns quietly, without needing to **fall back in love** or seek **attention**.

## **Why You Stay**

#### Staying is **not a fault**, but the **reason for staying** deserves scrutiny. Most people answer **because I love them**, yet answers **don't say the same thing** on a **quiet evening**, when honesty arrives without pressure.

#### In my experience, **couples** rarely admit they stay **for the children** or **for the home** until **I don't know anymore** slips out. That sentence, small and tired, usually means that **something has already shifted** quietly.

#### Watch what happens when someone **no longer speaks of the person** they live with. If you feel **relieved** imagining them **seeing someone else**, **not even a little** **jealous**, then the staying is habit, not love.

## **Keepsakes From Him**

#### Keepsakes rarely lie. I kept a **surprise gift** from an **ex-partner** for years, and **moments catch me off guard** whenever I touch it. That **little bit of hope** was **obvious**, though I claimed **I'm fine**.

#### I ask clients one thing: could you try **letting go** of everything he gave you? If the **door feels closed** yet you're **hoping** he returns, keepsakes hold **feelings**, not memories, so **work things out** honestly.

#### Contrary to popular belief, holding onto a hoodie proves nothing. When it **doesn't hit as hard**, you've likely **made peace** and can **wish him well**, **feeling** **neither hot nor cold** and **ready to move on**.

## **How You Met**

#### Honestly, I never trust a love story told from the middle. Ask couples about the **beginning** and you hear something different: a **crush**, **stomach flutters**, and a nervous **hang out** that stretched longer than planned.

#### I met my own partner as a **wallflower** at a friend's party, while he was **outgoing** and loud. Within **about a year** we had a **trip** planned, and my **parents** were already asking us questions.

#### Length matters less than people claim. Whether it was **six months or less** or **three or more years**, the **old feelings** you trace back to that first meeting reveal whether **genuine love** or habit remains.

## **Relationship Length**

#### Couples who have been **together for a while** often panic around **two years**, when **butterfly feelings** fade. Honestly, that **dip** says little; in my experience, a **feeling** quietly changing shape is not really love disappearing.

#### Length matters less than **direction**. **Every couple** I have watched past a decade splits into a **tired couple** or something sturdier, and only **what still holds in the relationship** separates them from a **finished couple**.

#### Do not **underestimate** routine. **After years**, the real test is **wanting to see the other person** at the end of a dull day and **still choosing them**, not simply counting anniversaries on a wall calendar.

## **Sharing Food**

#### Nobody warns you how much a **conversation** over dinner reveals. When he orders dessert and slides the plate across, I **notice them** reaching for my favorite first. If I **don't pay attention**, something has shifted.

#### Sharing a plate used to be effortless. Now **I miss them** at the table, though **happy being on my own** some evenings. **Every once in a while**, **someone to talk to** over soup matters most.

#### Does he **show interest** in what you cook? A **significant other** who steals fries **all the time** is **at peace** with you. **Once in a while**, **I really do love you** arrives with garlic bread.

## **How Do You Know Whether You Still Love Someone?**

#### Years of watching clients taught me to trust **reflexes** over speeches. When your **partner** is criticized, do you **defend** them instantly? That unplanned loyalty reveals whether you are still **in love** better than any declaration.

#### Contrarian view: missing someone proves little, since loneliness imitates affection well. Better evidence is whether the idea of leaving **comes back** after a **fit of anger** has passed. Anger fades; a **calm thought** still persists.

#### Practically, imagine losing them. Your reaction is **more telling** than any checklist, because you **can't fake it to yourself**. Panic, relief, or numbness each answer honestly whether a **heart** **still loves**, or merely habit remains.

### Do I Love Him, or Do I Still Love Him?

#### Anyone asking **do I still love him** is usually **questioning their feelings** already. In my experience, **doubts** creep in when he **goes away for a few days,** and the honest reaction is **I can breathe**.

#### Butterflies fade, but **falling out of love** feels different: **flaws** that once seemed **even cuter** now **annoy me**, and **mad** arguments **drag on**. Still, **good news** appears when deep down **part of me still hopes**.

## **The Signs That Weigh the Most**

#### Most people I've talked with expect fights to count heavily, yet **criticism** earns only **three points**. The **two that weigh the most** are quieter: having **thought about leaving** and having **pictured yourself elsewhere**, often unspoken.

#### Each item has its **own weight**, so **light signs** such as annoyance barely shift the result. Someone who has **never seriously thought about it** scores low, whereas **several times** is a very different story altogether.

### Having Thought About Leaving

#### In my experience, people who **thought calmly about leaving** rarely announce it. They mention it **several times** to **someone close**, then **doubts** creep in, **relationship problems** feel **messy**, and they **don't know anymore** what's true.

#### Still, **thinking about leaving** isn't the same as having **decided to leave in your head**. Many stay **afraid** of the **breakup**; "**I think about it regularly**," one client confessed, and that deserves honest attention.

### Having Pictured Yourself With Someone Else

#### In my experience, a **thought about someone else** rarely signals betrayal; it usually drifts in during **quiet** moments. People **fantasize** about **dating someone else** and feel guilty, yet **once or twice** **says nothing about love**.

#### What matters is whether you still **picture him in your life** afterwards. If the **picture is blurred**, a **heart skips a beat** around **temptations** means **complicated feelings**, and **what if we tried again** deserves thought.

### What Losing Them Would Do

#### The clearest test I know is **him moving on**. If picturing a **new partner** leaves you **upset**, **worried**, or **fuming**, that reaction speaks louder than words. A **twinge** is enough; **painful to imagine** means something.

#### Losing them rarely feels **terrifying** for everyone. Some admit they **wouldn't care**, while others **fight for it** after a **rush of hope**. Whether **things could change** or there's **nothing to feel anymore**, honesty really matters.

### What Makes You Stay

#### Some couples **never seriously** question staying, yet doubts surface anyway. One woman told me she brought it up **several times calmly**, insisting **because I love them** was reason enough, though **curiosity** kept nagging at her.

#### Staying **for the children** works until a **rocky** patch exposes what once **blossomed**, then **decayed**. Couples who **fight less** **don't feel anything** either, and you **already know the answer**, even without **screaming** or **throwing things**.

## **How the Test Works Out Your Level**

#### Behind all these **twenty** **weighted questions**, the **test** quietly **weighs the answers** instead of counting them equally. **Four things** **weigh the most**, so a few honest replies can often **count for more than the rest**.

#### Finally, it gives **one level out of eight**, never just a blunt **yes or no**. You either **love them and it's clear**, or **you don't love them anymore**, with **six in-between states** covering everything else.

#### This quiz looks at **your own feelings** only. If you and your partner want to compare how you match on **communication**, **money** and **future plans**, take our **[couple compatibility test](/couple-compatibility-test)** together instead.
