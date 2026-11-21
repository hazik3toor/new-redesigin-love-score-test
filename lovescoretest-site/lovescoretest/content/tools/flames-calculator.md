---
title: "Free FLAMES Calculator: Reveal Your Love Fate"
slug: flames-calculator
category: love-calculators
calculator: none
tool: >-
  <!-- ============================================================
    FLAMES CALCULATOR — self-contained widget
    Paste this whole block into your CMS page (HTML / custom code block).
    No plugins, no external libraries, no external fonts. All CSS is scoped to #fl-app.
  ============================================================ -->

  <div id="fl-app">

  <style>

  #fl-app{--bg:#fffafc;--card:#fff;--ink:#1f1630;--muted:#5b5470;--line:#f0dfe9;--brand:#be185d;--brand2:#7c3aed;--soft:#fdf2f8;--ring:#e9d5ff;--ok:#15803d;--sh:0 14px 34px -16px rgba(190,24,93,.35);
   --cF:#2563eb;--cL:#be185d;--cA:#d97706;--cM:#15803d;--cE:#dc2626;--cS:#7c3aed;
   font-family:inherit;color:var(--ink);position:relative;color-scheme:light;line-height:1.5;box-sizing:border-box;max-width:100%;margin:0;padding:0}
  #fl-app *{box-sizing:border-box}

  #fl-app .fl-wrap{max-width:680px;margin:0 auto;position:relative}

  #fl-app .fl-card{background:var(--card);border:1px solid var(--line);border-radius:24px;padding:26px 20px 22px;box-shadow:var(--sh)}

  #fl-app .fl-icon{width:62px;height:62px;border-radius:50%;margin:0 auto 10px;display:grid;place-items:center;background:linear-gradient(135deg,var(--brand),var(--brand2));box-shadow:0 10px 24px -8px rgba(190,24,93,.6)}

  #fl-app .fl-icon svg{width:30px;height:30px}

  #fl-app h2.fl-h{margin:0;text-align:center;font-size:clamp(22px,5vw,28px);font-weight:900;letter-spacing:-.3px;color:var(--ink)}

  #fl-app .fl-sub{margin:4px 0 18px;text-align:center;color:var(--muted);font-size:15px}

  #fl-app label{display:block;font-size:13.5px;font-weight:700;color:var(--muted);margin:0 0 6px}

  #fl-app input[type=text]{width:100%;height:52px;border:1.5px solid var(--line);border-radius:16px;background:#fff;color:var(--ink);padding:0 16px;font:inherit;font-size:16px;outline:none;transition:border-color .15s,box-shadow .15s;-webkit-appearance:none;appearance:none}

  #fl-app input::placeholder{color:#a79bb8}

  #fl-app input:focus{border-color:var(--brand2);box-shadow:0 0 0 4px var(--ring)}

  #fl-app .fl-div{display:flex;align-items:center;gap:12px;margin:14px 0}

  #fl-app .fl-div i{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--line),transparent)}

  #fl-app .fl-swap{width:42px;height:42px;border-radius:50%;border:1.5px solid var(--line);background:var(--soft);cursor:pointer;font-size:19px;line-height:1;padding:0;display:grid;place-items:center;transition:transform .3s}

  #fl-app .fl-swap:hover{transform:rotate(180deg) scale(1.08)}

  #fl-app .fl-err{color:var(--brand);font-weight:700;font-size:14px;margin:10px 2px 0}

  #fl-app .fl-btn{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;margin-top:16px;height:56px;border:0;border-radius:16px;background:linear-gradient(100deg,var(--brand),var(--brand2));color:#fff;font:inherit;font-size:18px;font-weight:800;cursor:pointer;box-shadow:0 12px 26px -12px rgba(190,24,93,.6);transition:transform .1s,filter .15s}

  #fl-app .fl-btn:hover{filter:brightness(1.08)}

  #fl-app .fl-btn:active{transform:translateY(2px)}

  #fl-app .fl-legend{margin:18px 0 0;text-align:center;font-weight:800;font-size:14px;color:var(--muted);letter-spacing:.2px}

  #fl-app .fl-legend b{font-weight:900}

  #fl-app .fl-tag{margin:6px 0 0;text-align:center;font-size:12.5px;color:var(--muted)}

  #fl-app .fl-quick{margin-top:16px;display:flex;gap:8px;flex-wrap:wrap;align-items:center;justify-content:center;font-size:13px;color:var(--muted)}

  #fl-app .fl-chipbtn{background:var(--soft);border:1px solid var(--line);color:var(--brand);border-radius:999px;padding:6px 13px;font:inherit;font-size:13px;font-weight:700;cursor:pointer}

  #fl-app .fl-chipbtn:hover{background:#fce7f3}

  #fl-app .fl-result{display:none;margin-top:22px}

  #fl-app .fl-result.show{display:block;animation:flIn .5s ease}

  @keyframes flIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}

  #fl-app .fl-panel{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:18px;margin-bottom:14px;box-shadow:0 8px 24px -18px rgba(190,24,93,.35);position:relative}

  #fl-app .fl-panel h3{margin:0 0 12px;font-size:17px;font-weight:800;color:var(--ink)}

  #fl-app .fl-hero{text-align:center;padding:24px 16px;background:linear-gradient(180deg,#fff,var(--soft));overflow:hidden}

  #fl-app .fl-pair{display:flex;justify-content:center;align-items:center;gap:10px;flex-wrap:wrap;font-weight:800;font-size:18px}

  #fl-app .fl-pair em{font-style:normal;color:var(--brand)}

  #fl-app .fl-badge{width:104px;height:104px;margin:16px auto 10px;border-radius:50%;display:grid;place-items:center;font-size:54px;font-weight:900;color:#fff;box-shadow:0 14px 30px -10px currentColor;animation:flPop .6s cubic-bezier(.2,1.4,.4,1)}

  @keyframes flPop{from{transform:scale(.3);opacity:0}to{transform:scale(1);opacity:1}}

  #fl-app .fl-says{font-size:13px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--muted)}

  #fl-app .fl-verdict{font-size:30px;font-weight:900;margin:2px 0 6px}

  #fl-app .fl-desc{color:var(--muted);max-width:520px;margin:0 auto;font-size:15.5px}

  #fl-app .fl-note{background:#fef3c7;border:1px solid #fde68a;color:#78350f;border-radius:12px;padding:8px 12px;font-size:13.5px;margin:12px auto 0;max-width:520px}

  #fl-app .fl-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:18px}

  #fl-app .fl-stat{background:#fff;border:1px solid var(--line);border-radius:16px;padding:10px 6px}

  #fl-app .fl-stat b{display:block;font-size:22px;color:var(--brand)}

  #fl-app .fl-stat span{font-size:12px;color:var(--muted)}

  #fl-app .fl-row{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 12px}

  #fl-app .fl-name{font-size:13px;font-weight:700;color:var(--muted);margin-top:4px}

  #fl-app .fl-tile{min-width:32px;height:36px;padding:0 4px;border-radius:10px;display:inline-grid;place-items:center;font-weight:800;font-size:15px;background:var(--soft);border:1px solid var(--line);transition:all .35s}

  #fl-app .fl-tile.x{background:#ffe4e6;border-color:#fecdd3;color:#9f1239;text-decoration:line-through;opacity:.55;transform:scale(.88)}

  #fl-app .fl-remain{font-weight:800;color:var(--ink);margin:2px 0 0;font-size:15px}

  #fl-app .fl-remain span{color:var(--brand)}

  #fl-app .fl-six{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin:6px 0 14px}

  #fl-app .fl-c{width:50px;height:56px;border-radius:14px;display:grid;place-items:center;font-size:26px;font-weight:900;border:2px solid currentColor;background:#fff;transition:all .4s}

  #fl-app .fl-c.out{opacity:.22;transform:scale(.8);text-decoration:line-through}

  #fl-app .fl-c.win{color:#fff!important;transform:scale(1.12);box-shadow:0 10px 22px -8px currentColor}

  #fl-app ol.fl-rounds{margin:0;padding:0;list-style:none;display:grid;gap:8px}

  #fl-app ol.fl-rounds li{background:var(--soft);border:1px solid var(--line);border-radius:12px;padding:8px 12px;font-size:14px;animation:flIn .35s ease}

  #fl-app .fl-replay{margin-top:12px;background:#fff;border:1.5px solid var(--line);color:var(--brand);border-radius:999px;padding:8px 16px;font:inherit;font-size:14px;font-weight:800;cursor:pointer}

  #fl-app .fl-replay:hover{background:var(--soft)}

  #fl-app .fl-list{margin:0;padding:0;list-style:none;display:grid;gap:8px}

  #fl-app .fl-list li{position:relative;padding-left:26px;font-size:14.5px}

  #fl-app .fl-list li:before{content:"";position:absolute;left:0;top:3px;width:16px;height:16px;border-radius:50%;background:var(--ok) center/10px no-repeat;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none' stroke='%23fff' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2.5 6.5l2.2 2.2 4.8-5'/%3E%3C/svg%3E")}

  #fl-app .fl-tip{background:var(--soft);border:1px solid var(--line);border-radius:16px;padding:12px 14px;font-size:14.5px;margin-top:14px}

  #fl-app .fl-all{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}

  #fl-app .fl-o{display:flex;gap:10px;align-items:flex-start;border:1.5px solid var(--line);border-radius:14px;padding:10px;background:#fff}

  #fl-app .fl-o.on{background:var(--soft);border-width:2px}

  #fl-app .fl-o b.l{flex:none;width:34px;height:34px;border-radius:10px;display:grid;place-items:center;color:#fff;font-weight:900;font-size:18px}

  #fl-app .fl-o strong{display:block;font-size:14.5px}

  #fl-app .fl-o span{font-size:12.5px;color:var(--muted);line-height:1.35;display:block}

  #fl-app .fl-share{display:flex;flex-wrap:wrap;gap:8px}

  #fl-app .fl-share button,#fl-app .fl-share a{background:var(--soft);color:var(--brand);border:1px solid var(--line);border-radius:999px;padding:10px 16px;font:inherit;font-size:14px;font-weight:800;cursor:pointer;text-decoration:none;display:inline-block}

  #fl-app .fl-share button:hover,#fl-app .fl-share a:hover{background:var(--brand);color:#fff;border-color:var(--brand)}

  #fl-app .fl-hist{display:flex;flex-wrap:wrap;gap:8px}

  #fl-app .fl-disc{font-size:12.5px;color:var(--muted);margin-top:18px;text-align:center}

  #fl-app .fl-toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(20px);background:var(--ink);color:#fff;padding:10px 18px;border-radius:999px;font-weight:800;font-size:14px;opacity:0;pointer-events:none;transition:.25s;z-index:99999;box-shadow:0 8px 24px rgba(0,0,0,.25)}

  #fl-app .fl-toast.show{opacity:1;transform:translateX(-50%)}

  #fl-app .fl-confetti{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:5}

  #fl-app .fl-confetti span{position:absolute;bottom:-20px;color:var(--brand);animation:flUp linear forwards}

  @keyframes flUp{to{transform:translateY(-480px) rotate(30deg);opacity:0}}

  @media (max-width:560px){
   #fl-app .fl-card{padding:22px 14px 18px;border-radius:20px}
   #fl-app .fl-all{grid-template-columns:1fr}
   #fl-app .fl-c{width:44px;height:50px;font-size:23px}
   #fl-app .fl-stats{gap:6px}
   #fl-app .fl-stat b{font-size:19px}
   #fl-app .fl-legend{font-size:13px}
  }

  @media (prefers-reduced-motion:reduce){#fl-app *{animation:none!important;transition:none!important}}

  </style>


  <div class="fl-wrap">
   <form class="fl-card" id="flForm" autocomplete="off" novalidate>
    <div class="fl-icon"><svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.8 5 6.2 5c2 0 3.4 1 4.3 2.4L12 9.5l1.5-2.1C14.4 6 15.8 5 17.8 5c3.4 0 5.3 3.4 3.8 6.8C19.5 16.4 12 21 12 21z"/></svg></div>
    <h2 class="fl-h">Enter Two Names</h2>
    <p class="fl-sub">Find out what destiny has in store</p>

    <label for="flA">First name</label>
    <input type="text" id="flA" maxlength="40" placeholder="Your name..." enterkeyhint="next">
    <div class="fl-div"><i></i><button type="button" class="fl-swap" id="flSwap" title="Swap names" aria-label="Swap names">💕</button><i></i></div>
    <label for="flB">Second name</label>
    <input type="text" id="flB" maxlength="40" placeholder="Their name..." enterkeyhint="done">

    <div class="fl-err" id="flErr" role="alert"></div>
    <button type="submit" class="fl-btn">🔥 Reveal Your FLAMES</button>

    <p class="fl-legend"><b style="color:var(--cF)">F</b>riends · <b style="color:var(--cL)">L</b>ove · <b style="color:var(--cA)">A</b>ffection · <b style="color:var(--cM)">M</b>arriage · <b style="color:var(--cE)">E</b>nemies · <b style="color:var(--cS)">S</b>iblings</p>
    <p class="fl-tag">✨ The classic name game, with every step shown ✨</p>
   </form>

   <div class="fl-quick">Try:
    <button type="button" class="fl-chipbtn" data-ex="Emma|Jake">Emma + Jake</button>
    <button type="button" class="fl-chipbtn" data-ex="Sara|Ali">Sara + Ali</button>
    <button type="button" class="fl-chipbtn" data-ex="Ayesha|Hamza">Ayesha + Hamza</button>
    <button type="button" class="fl-chipbtn" data-ex="Mia|Noah">Mia + Noah</button>
   </div>

   <div class="fl-result" id="flResult" aria-live="polite"></div>
   <p class="fl-disc">For entertainment only. Have fun, and do not take the result too seriously. ✨</p>
  </div>

  <div class="fl-toast" id="flToast"></div>


  <script>

  (function(){
   var root=document.getElementById('fl-app'); if(!root) return;
   var $=function(s){return root.querySelector(s)};

   /* ---------- DATA ---------- */
   var INFO={
    F:{n:'Friends',e:'🤝',c:'#2563eb',d:'Your bond is built on trust, laughter and easy company. You are the kind of pair who can talk for hours and feel completely yourselves.',
       p:['Comfortable, honest conversation','Loyal support when it matters','A solid base that can grow into more'],
       t:'Friendship is the best foundation. Keep making time for shared fun and see where it goes.',s:'Trust, laughter, loyalty'},
    L:{n:'Love',e:'💖',c:'#be185d',d:'FLAMES points to real romance. There is attraction, warmth and a spark that makes the two of you hard to ignore.',
       p:['Strong chemistry and curiosity about each other','Little gestures that mean a lot','Plenty of heart on both sides'],
       t:'Do not rush it. Say what you feel kindly and clearly, and let the spark grow naturally.',s:'Romance, chemistry, spark'},
    A:{n:'Affection',e:'🌷',c:'#d97706',d:'A warm, caring connection. You look out for each other, and the tenderness between you is genuine even if it is not loud.',
       p:['Gentle care and thoughtfulness','Easy comfort in each other\'s company','Fondness that deepens with time'],
       t:'Small acts of kindness are your love language. Keep showing up for each other.',s:'Care, warmth, tenderness'},
    M:{n:'Marriage',e:'💍',c:'#15803d',d:'FLAMES sees a lasting, committed bond. You share the kind of steady connection people build a future on.',
       p:['Deep trust and long-term potential','Shared values and goals','A partnership, not just a romance'],
       t:'Talk openly about the future. Good plans start with honest conversations.',s:'Commitment, trust, future'},
    E:{n:'Enemies',e:'⚡',c:'#dc2626',d:'Sparks fly, though not always the friendly kind. You are strong personalities with different views, and that tension can be loud.',
       p:['Passionate opinions on both sides','Healthy rivalry can push you both','Respect can turn friction into friendship'],
       t:'Remember, this is just a game. Opposites often learn the most from each other.',s:'Rivalry, tension, sparks'},
    S:{n:'Siblings',e:'🧸',c:'#7c3aed',d:'A familiar, protective bond, like family. You tease, you support, and you always have each other\'s back.',
       p:['Comfortable, no-pressure closeness','Playful teasing and shared jokes','Protective loyalty when it counts'],
       t:'Family-style bonds last. Cherish the easy trust you already have.',s:'Family, comfort, protection'}
   };
   var ORDER=['F','L','A','M','E','S'];

   /*PURE*/
   function norm(s){return String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^\p{L}]/gu,'')}
   function flamesRun(a,b){
    var A=Array.from(a),B=Array.from(b),mA=A.map(function(){return false}),mB=B.map(function(){return false}),common=0,i,j;
    for(i=0;i<A.length;i++){for(j=0;j<B.length;j++){if(!mB[j]&&B[j]===A[i]){mA[i]=true;mB[j]=true;common++;break}}}
    var n=A.length+B.length-2*common;
    if(n===0)return {A:A,B:B,mA:mA,mB:mB,common:common,n:0,rounds:[],result:'M',same:true};
    var list=ORDER.slice(),idx=0,rounds=[],rem;
    while(list.length>1){idx=(idx+n-1)%list.length;rem=list.splice(idx,1)[0];rounds.push({n:n,removed:rem,left:list.slice()})}
    return {A:A,B:B,mA:mA,mB:mB,common:common,n:n,rounds:rounds,result:list[0],same:false};
   }
   /*ENDPURE*/

   /* ---------- HELPERS ---------- */
   function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
   function toast(m){var t=$('#flToast');t.textContent=m;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(function(){t.classList.remove('show')},2000)}
   var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
   var timers=[];
   function clearT(){timers.forEach(clearTimeout);timers=[]}
   function later(fn,ms){timers.push(setTimeout(fn,ms))}
   function colored(l){return '<b style="color:'+INFO[l].c+'">'+l+'</b>'}

   /* ---------- HISTORY ---------- */
   function getHist(){try{return JSON.parse(localStorage.getItem('fl_hist')||'[]')}catch(e){return []}}
   function saveHist(a,b,r){
    try{var h=getHist().filter(function(x){return !(x.a===a&&x.b===b)});h.unshift({a:a,b:b,r:r});localStorage.setItem('fl_hist',JSON.stringify(h.slice(0,6)))}catch(e){}
   }

   /* ---------- RENDER ---------- */
   var last={text:'',url:''};
   function tiles(arr,m,which){
    return arr.map(function(ch,i){return '<span class="fl-tile" data-m="'+(m[i]?1:0)+'" data-w="'+which+'">'+esc(ch.toUpperCase())+'</span>'}).join('');
   }
   function render(rawA,rawB,r){
    var el=$('#flResult'),I=INFO[r.result],total=r.A.length+r.B.length,ov=Math.round(r.common*2/total*100);
    var h='';
    h+='<div class="fl-panel fl-hero"><div class="fl-pair"><span>'+esc(rawA)+'</span><em>♥</em><span>'+esc(rawB)+'</span></div>'
     +'<div class="fl-badge" style="background:'+I.c+';color:'+I.c+'"><span style="color:#fff">'+r.result+'</span></div>'
     +'<div class="fl-says">FLAMES says</div><div class="fl-verdict" style="color:'+I.c+'">'+I.e+' '+I.n+'</div>'
     +'<p class="fl-desc">'+I.d+'</p>'
     +(r.same?'<div class="fl-note">Both names use exactly the same letters, so nothing is left to count. That is traditionally a perfect match, so we show Marriage.</div>':'')
     +'<div class="fl-stats"><div class="fl-stat"><b>'+r.common+'</b><span>Common letters</span></div><div class="fl-stat"><b>'+r.n+'</b><span>Letters left</span></div><div class="fl-stat"><b>'+ov+'%</b><span>Letter overlap</span></div></div></div>';

    h+='<div class="fl-panel"><h3>Step 1 · Cross out common letters</h3>'
     +'<div class="fl-name">'+esc(rawA)+'</div><div class="fl-row">'+tiles(r.A,r.mA,'a')+'</div>'
     +'<div class="fl-name">'+esc(rawB)+'</div><div class="fl-row">'+tiles(r.B,r.mB,'b')+'</div>'
     +'<p class="fl-remain">Letters left to count: <span>'+r.n+'</span></p></div>';

    h+='<div class="fl-panel"><h3>Step 2 · Eliminate F-L-A-M-E-S</h3>'
     +'<div class="fl-six">'+ORDER.map(function(l){return '<div class="fl-c" data-l="'+l+'" style="color:'+INFO[l].c+'">'+l+'</div>'}).join('')+'</div>'
     +(r.rounds.length?'<ol class="fl-rounds" id="flRounds"></ol>':'<p style="margin:0;color:var(--muted);font-size:14.5px">No letters were left, so there was nothing to count.</p>')
     +'<button type="button" class="fl-replay" id="flReplay">↻ Replay steps</button></div>';

    h+='<div class="fl-panel"><h3>What '+I.n+' means for you</h3><ul class="fl-list">'+I.p.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul><div class="fl-tip">💡 <b>Tip:</b> '+I.t+'</div></div>';

    h+='<div class="fl-panel"><h3>All six FLAMES outcomes</h3><div class="fl-all">'+ORDER.map(function(l){var o=INFO[l];return '<div class="fl-o'+(l===r.result?' on':'')+'" style="'+(l===r.result?'border-color:'+o.c:'')+'"><b class="l" style="background:'+o.c+'">'+l+'</b><div><strong>'+o.e+' '+o.n+'</strong><span>'+o.s+'</span></div></div>'}).join('')+'</div></div>';

    last.text='🔥 '+rawA+' + '+rawB+' = FLAMES says '+I.n+' ('+r.result+')';
    var q=new URLSearchParams({a:rawA,b:rawB}).toString();
    last.url=location.origin+location.pathname+'?'+q+'#fl-app';
    h+='<div class="fl-panel"><h3>Share your result</h3><div class="fl-share"><button type="button" id="flCopy">📋 Copy result</button><button type="button" id="flLink">🔗 Copy link</button><button type="button" id="flNative">📤 Share</button><a target="_blank" rel="noopener" href="https://wa.me/?text='+encodeURIComponent(last.text+' '+last.url)+'">WhatsApp</a></div></div>';

    var hist=getHist();
    if(hist.length>1){h+='<div class="fl-panel"><h3>🕘 Recent checks</h3><div class="fl-hist">'+hist.map(function(x,i){return '<button type="button" class="fl-chipbtn" data-h="'+i+'">'+esc(x.a)+' + '+esc(x.b)+' · '+x.r+'</button>'}).join('')+'</div></div>'}

    el.innerHTML=h;el.classList.add('show');

    /* handlers */
    function copy(t,msg){
     if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){toast(msg)},function(){fb(t,msg)})}else fb(t,msg);
    }
    function fb(t,msg){var a=document.createElement('textarea');a.value=t;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();try{document.execCommand('copy');toast(msg)}catch(e){toast('Copy failed')}document.body.removeChild(a)}
    el.querySelector('#flCopy').onclick=function(){copy(last.text,'Result copied!')};
    el.querySelector('#flLink').onclick=function(){copy(last.url,'Link copied!')};
    el.querySelector('#flNative').onclick=function(){if(navigator.share){navigator.share({title:'FLAMES Calculator',text:last.text,url:last.url}).catch(function(){})}else copy(last.text+' '+last.url,'Copied to share!')};
    el.querySelector('#flReplay').onclick=function(){play(el,r)};
    Array.prototype.forEach.call(el.querySelectorAll('[data-h]'),function(b){b.onclick=function(){var x=getHist()[+this.getAttribute('data-h')];if(!x)return;$('#flA').value=x.a;$('#flB').value=x.b;go(true)}});

    play(el,r);
    if((r.result==='L'||r.result==='M')&&!reduce)confetti(el);
   }

   /* ---------- ANIMATION ---------- */
   function reset(el){
    clearT();
    Array.prototype.forEach.call(el.querySelectorAll('.fl-tile'),function(t){t.classList.remove('x')});
    Array.prototype.forEach.call(el.querySelectorAll('.fl-c'),function(c){c.classList.remove('out','win');c.style.background='#fff'});
    var ol=el.querySelector('#flRounds');if(ol)ol.innerHTML='';
   }
   function addRound(ol,rd,i){
    var li=document.createElement('li');
    li.innerHTML='<b>Round '+(i+1)+':</b> count '+rd.n+' → '+colored(rd.removed)+' is out · left: '+rd.left.map(colored).join(' ');
    ol.appendChild(li);
   }
   function strike(el,r){
    var out=el.querySelectorAll('.fl-c');
    r.rounds.forEach(function(rd){Array.prototype.forEach.call(out,function(c){if(c.getAttribute('data-l')===rd.removed)c.classList.add('out')})});
    Array.prototype.forEach.call(out,function(c){if(c.getAttribute('data-l')===r.result){c.classList.add('win');c.style.background=INFO[r.result].c}});
   }
   function play(el,r){
    reset(el);
    var ol=el.querySelector('#flRounds'),tl=el.querySelectorAll('.fl-tile[data-m="1"]');
    if(reduce){
     Array.prototype.forEach.call(tl,function(t){t.classList.add('x')});
     if(ol)r.rounds.forEach(function(rd,i){addRound(ol,rd,i)});
     strike(el,r);return;
    }
    var t=250;
    Array.prototype.forEach.call(tl,function(tile){later(function(){tile.classList.add('x')},t);t+=130});
    t+=450;
    r.rounds.forEach(function(rd,i){
     later(function(){
      if(ol)addRound(ol,rd,i);
      Array.prototype.forEach.call(el.querySelectorAll('.fl-c'),function(c){if(c.getAttribute('data-l')===rd.removed)c.classList.add('out')});
     },t);
     t+=750;
    });
    later(function(){strike(el,r)},t);
   }
   function confetti(host){
    var hero=host.querySelector('.fl-hero');if(!hero)return;
    var box=document.createElement('div');box.className='fl-confetti';
    for(var i=0;i<24;i++){var s=document.createElement('span');s.textContent=['♥','💖','✨','💕'][i%4];s.style.left=(Math.random()*100)+'%';s.style.fontSize=(12+Math.random()*18)+'px';s.style.animationDuration=(2+Math.random()*1.6)+'s';s.style.animationDelay=(Math.random()*.7)+'s';box.appendChild(s)}
    hero.appendChild(box);setTimeout(function(){if(box.parentNode)box.parentNode.removeChild(box)},4000);
   }

   /* ---------- RUN ---------- */
   function go(scroll){
    var rawA=$('#flA').value.trim().replace(/\s+/g,' '),rawB=$('#flB').value.trim().replace(/\s+/g,' '),err=$('#flErr');
    var a=norm(rawA),b=norm(rawB);
    if(!a||!b){err.textContent='Please enter both names (letters only).';return}
    err.textContent='';
    var r=flamesRun(a,b);
    saveHist(rawA,rawB,r.result);
    render(rawA,rawB,r);
    try{history.replaceState(null,'',location.pathname+'?'+new URLSearchParams({a:rawA,b:rawB}).toString()+'#fl-app')}catch(e){}
    if(scroll!==false){var rs=$('#flResult');if(rs.scrollIntoView)rs.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})}
   }
   $('#flForm').addEventListener('submit',function(e){e.preventDefault();go(true)});
   $('#flSwap').addEventListener('click',function(){var a=$('#flA'),b=$('#flB'),t=a.value;a.value=b.value;b.value=t});
   Array.prototype.forEach.call(root.querySelectorAll('[data-ex]'),function(b){
    b.addEventListener('click',function(){var p=this.getAttribute('data-ex').split('|');$('#flA').value=p[0];$('#flB').value=p[1];go(true)});
   });

   /* auto-load from shared link */
   try{
    var p=new URLSearchParams(location.search);
    if(p.get('a')&&p.get('b')){$('#flA').value=p.get('a').slice(0,40);$('#flB').value=p.get('b').slice(0,40);go(false)}
   }catch(e){}
  })();

  </script>

  </div>
tool_position: top
faqs:
  - question: "Is FLAMES a Love Calculator? "
    answer: Not really. FLAMES is a playful name game we grew up scribbling in
      school notebooks. I treat it as light fun, not a real love calculator,
      since it counts letters left after cancelling shared ones.
  - question: What is a FLAMES Love Ticket?
    answer: A FLAMES Love Ticket is a shareable card showing your two names and your
      result. I like it because it turns a quick game into a small keepsake you
      can easily send to your friends.
  - question: Is the FLAMES calculator accurate?
    answer: >
      Accurate for fun, not for fate. The method follows fixed counting rules,
      so it works exactly as designed, but it cannot read feelings. I enjoy the
      results, yet I never base big decisions on them.
  - question: Will I get the same FLAMES result every time?
    answer: Yes, if you spell both names identically. The process is fixed, so the
      same spelling always lands on the same letter. When I once changed just
      one letter in my name, the outcome shifted completely.
  - question: Can FLAMES predict marriage?
    answer: No, though Marriage is just one of the six possible outcomes. Every time
      I see it appear, friends cheer, but it is only a small letter result from
      counting, never a promise about your future.
  - question: What is the FLAMES game?
    answer: "FLAMES is a simple paper game where each letter stands for a
      relationship: Friends, Love, Affection, Marriage, Enemies, Siblings. I
      played it endlessly during lunch breaks, usually hiding the little paper
      from our strict teachers."
  - question: What's the Best FLAMES Result?
    answer: Marriage is the one most people hope for, though I think Friends
      deserves more credit. Love and Affection also feel truly lovely, but a
      result is only as meaningful as the fun you had playing.
  - question: Can I play FLAMES online for free?
    answer: Absolutely. Most online FLAMES tools cost nothing, need no signup, and
      show results within seconds. I like trying a few different name
      combinations with friends on my own phone, then comparing which results
      feel funniest.
  - question: Can I use nicknames?
    answer: Yes, nicknames work, and they often change the result. Use the name you
      actually call each other, since that is what feels real. I once tried both
      full names and nicknames and got different answers.
  - question: What if the result is Enemies?
    answer: Please do not panic. Enemies is just one letter on a paper game, and I
      have seen even best friends get it. Laugh about it, change the spelling if
      you like, and play again together.
  - question: What if all letters cancel out?
    answer: If every letter cancels, the count is zero and the game cannot continue.
      This only happens with identical names. I simply tell people to
      double-check spelling or try their full names for a proper result.
description: Try our free FLAMES Calculator and find out if it's Friends, Lovers
  or Forever. Enter two names and reveal your real bond in seconds!
date: 2026-11-21
draft: false
---
Back in **school hallways**, **millions of students** guarded this **pencil-and-paper game** like a secret. I still remember **classroom downtime** spent **crossing out shared letters**, hoping **relationship fate** would favor my sweet **crushes** and **nostalgic memories**.

The **FLAMES calculator online** is a **free** **online tool** that **automates** the **algorithm**, taking **two names** and **instantly** giving **results in seconds**. The **acronym** hides **six possible relationship outcomes**: **Friends**, **Lovers**, **Affectionate**, **Marriage**, **Enemies**, **Siblings**.

## **What Is FLAMES**

Honestly, FLAMES is **not science**, just **pure fun** in **school hallways**. The **full form** is an **acronym** hiding **six possible outcomes**, and I remember **bickering** over each one with **paper and pen** during our lunch.

## **What Is the FLAMES Calculator**

![flames calculator](/images/flames-calculator.webp "flames calculator")

The **interactive calculator** automates what we did **manually**: it cancels matches, tracks **uncrossed letters**, runs [**circular** eliminations,](https://en.wikipedia.org/wiki/Josephus_problem) and shows the **surviving letter** with **instant results**. It is **deterministic**, so rerunning identical names never surprises you.

## **What Is a FLAMES Game**

As a **classic** [**schoolyard relationship game**,](https://en.wikipedia.org/wiki/FLAMES_(game)) it thrived at **sleepovers**, long before the **early 2000s** brought web versions. Now it feels like a **nostalgic childhood game**, **lighthearted**, best at **group hangouts**, never serious **relationship advice**.

## **What Does FLAMES Stand For?**

Each letter in **FLAMES** hides a **relationship** label: **Friends**, **Lovers**, **Affectionate**, **Marriage**, **Enemies**, **Siblings**. We scribbled this **classic** in **school** for **fun**, and the **nostalgia** still lingers whenever someone mentions it in our **group chats**.

### Friends (F)

Most people groan when it appears, treating it like a consolation prize. I disagree. A **close friend** gives **comfort**, **consideration**, and **mutual understanding** that fading flirtations rarely match, which is why **strong friendship** outlasts them.

In my experience, **parties** show it best: **play with friends**, stay **all in good fun**, and **don't stress**. People who **spend quality time**, **communicate openly**, and **respect differences** build a **stronger bond** over **school memories**.

### Lovers (L)

Most people expect **sparks** the moment a **crush** enters the picture, yet in my experience, the **Lovers** result arrives quietly. The **chemistry** feels **genuine** and **playful**, with a little **romantic tension** that makes everyone **smile**.

Skeptics call it **entertainment**, but I treat a **Love** result as **fun** and **nostalgia**, never a verdict. **Soulmate energy** is always lovely to imagine; **communication**, **mutual respect**, and **trust** decide whether **real relationships** truly last.

### Affectionate (A)

I've watched **tenderness** show up in strange places: a shared umbrella, a **caring bond** between neighbours. When the **FLAMES result** lands on **A**, people usually **adore** each other quietly, with **deep care** rather than **sparks**.

In my view, **affection** is the **warm** middle ground between **friendship** and **romantic** pull, and it **predicts** **fun** **companionship** better than dramatic **crushes**. **Treat it lightly**, **enjoy with friends**, never as a **real compatibility test**.

### Marriage (M)

I stopped treating **Marriage** as a verdict years ago. After watching colleagues play, I realised the **M** only really hints at a **good life partner match**; **countless factors** like **shared values** decide whether anything lasts.

Treat the **game outcome** as **exciting** and **fun to share**, nothing more. A **real marriage** needs **career goals** that **align**, plus **genuine connection**; no **[name algorithm](https://lovescoretest.com/love-compatibility-name-zodiac)** can ever **predict** being **meant to be together forever**.

### Enemies (E)

Honestly, **Enemies** rarely scares me anymore. When I **don't panic** and look at the **letters in your names**, the **E** is usually **friction**, not hatred, and **great love stories** often begin with that exact **rivalry**.

Years of playing taught me a **result** is only a **letter game**. A single count might **land on** something **complex**, yet **enemies-to-lovers** tales exist; **friendships** shift, **enemies today** become **best friends tomorrow**, and they **support each other**.

### Siblings (S)

Some people feel disappointed when **S** appears, yet **siblinghood** is a **bond** like no other. **Family** life brings **friction**, **rivalry,** and **tender care** **together**, so this **FLAMES result** simply reflects how **siblings** quietly grow up.

Growing up, I noticed siblings **care deeply** even amid frequent **clashes**. **Personalities may clash**, yet they stay **there for each other** in any real **crisis**, which is a **genuine friendship** wrapped in **warm**, everyday **bonding**.

## **How Does the FLAMES Calculator Work?**

The **last letter left** decides everything, and that surprised me. When you **enter your name** beside your **partner's name**, the tool **crosses out letters** that **appear in both names**, **one matching pair at a time**.

**Remaining uncrossed letters** feed the **calculations**; the count tells the tool where to start when it must [**eliminate letters** from **F-L-A-M-E-S**,](https://www.geeksforgeeks.org/program-to-implement-flames-game/) **one by one**, until a **result** appears: **friendship**, **love**, **affection**, **marriage** or **enemy**.

## **How To Play FLAMES With Paper & Pen**

Back in **school days**, we played this **traditional pen-and-paper game** on the last bench. You **write both names** on a scrap, then **cross out common letters**, **matching letters**, **one pair at a time**, never rushing.

Next, **count remaining letters**, then **eliminate** along **F-L-A-M-E-S**, **starting at F** and **skipping eliminated letters** each lap. Keep going until **one letter remains**; **circle** that **final letter**, since **mistakes** creep in during **manual counting effort**.

## **How to Use the FLAMES Calculator**

Honestly, I suggest a **pen and paper** warm-up first. Then open the **online** **FLAMES calculator**, type **your name**, add **crush's name**, and press **Calculate**; within **seconds**, a **relationship** verdict appears, ready to **share** right away.

In my experience, **nicknames** change everything, so try **full names** first. **Capitalization**, **spaces**, and **special characters** are **ignored**, though you may also **swap the order** of **Name 1** and **Name 2** for a **different result**.

## **Benefits / Why People Love FLAMES**

Most people who **search** for **FLAMES** aren't hunting **compatibility**; they want a **nostalgic alternative** to [**percentage-based love calculators**.](https://lovescoretest.com/) I've watched **friends** laugh at one **single relationship word** instead of a **number**, and that always wins.

**School-day** memories explain the **fun**: a **crush**'s name, **pen and paper**, **crossing out matching letters** while everyone leans in. It's **entertainment only**, and **free** play with **no sign-up** keeps **millions of people** happily returning.

## **Tips For Playing FLAMES**

People chase the **best results**, yet I learned the **fun** matters far more. Grab a **pen** and **write both names**, **cross out matching letters**, then enjoy the **nostalgia** instead of expecting **soulmates** from a **crush**.

Always **count remaining letters**, because one miscount changes everything. When **one letter remains,** and it says **Enemies**, remember **even enemies can change**. Use an **online FLAMES calculator** that **saves time**, then **share results** with **friends**.

## **Quick Reference: Direct Answers**

Anyone who has played knows the **same two names** always return the **same outcome**, because only the **letters in the two names** matter. You can **compare** a **live** **FLAMES calculator with names** run against paper.

Nobody should treat it as a **[scientific relationship predictor](https://dev.to/lubiah/the-flames-game-everything-you-need-to-know-about-it-1elk)**; it is just **fun**, a **classic school game** where **letter counting** decides between **Friends**, **Love** or **Enemies**, so **accuracy** is never **100%** in any serious sense.

## **FLAMES Calculator With Names: Play With Your Crush**

Type **your name** and your **crush's name**, hit **Calculate**, and watch the **FLAMES elimination** play out **live**, each **letter** getting **crossed out**. It feels **fun**, **free**, and full of **nostalgic memories**, with **no sign-up**.

In my experience, a **first name** versus a **last name** gives **different results**, so I often hit **Try Again** with **nicknames**. Swap the **order of names** too, then **share** the **result revealed** with close **friends**.
