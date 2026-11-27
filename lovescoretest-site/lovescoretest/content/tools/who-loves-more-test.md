---
title: "Who Loves More Test: Find Who Shows More Love"
slug: who-loves-more-test
category: couple-tests
calculator: none
tool: >-
  <div id="wlm-app">
  <style>
  #wlm-app{--wlm-ink:#241332;--wlm-muted:#6b5b7a;--wlm-line:#f0dfe9;--wlm-brand:#be185d;--wlm-brand2:#7c3aed;--wlm-soft:#fdf2f8;--wlm-card:#fff;font-family:inherit;color:var(--wlm-ink);line-height:1.5;box-sizing:border-box;max-width:680px;margin:0 auto}
  #wlm-app *{box-sizing:border-box}
  #wlm-app .wlm-card{background:var(--wlm-card);border:1px solid var(--wlm-line);border-radius:24px;padding:0 20px 24px;box-shadow:0 14px 34px -16px rgba(190,24,93,.35);overflow:hidden}
  #wlm-app .wlm-head{margin:0 -20px 18px;padding:26px 20px 20px;background:linear-gradient(120deg,#fdf2f8,#f5f3ff);border-bottom:1px solid var(--wlm-line);text-align:center}
  #wlm-app .wlm-icon{width:58px;height:58px;margin:0 auto 10px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,var(--wlm-brand),var(--wlm-brand2));box-shadow:0 10px 22px -8px rgba(190,24,93,.55)}
  #wlm-app .wlm-icon svg{width:28px;height:28px}
  #wlm-app h2.wlm-h{margin:0;text-align:center;font-size:clamp(22px,5vw,28px);font-weight:900;letter-spacing:-.3px}
  #wlm-app .wlm-sub{margin:6px auto 0;max-width:460px;text-align:center;color:var(--wlm-muted);font-size:15px}
  #wlm-app .wlm-chips{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:14px 0 0}
  #wlm-app .wlm-chip{font-size:12.5px;font-weight:800;color:var(--wlm-brand);background:#fff;border:1px solid var(--wlm-line);border-radius:99px;padding:5px 12px}
  #wlm-app .wlm-progwrap{display:flex;align-items:center;gap:10px;margin:0 0 16px}
  #wlm-app .wlm-prog{flex:1;height:9px;border-radius:99px;background:var(--wlm-soft);overflow:hidden}
  #wlm-app .wlm-pct{font-size:13px;font-weight:900;color:var(--wlm-brand);min-width:38px;text-align:right}
  #wlm-app .wlm-prog i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--wlm-brand),var(--wlm-brand2));transition:width .3s}
  #wlm-app .wlm-who{text-align:center;font-weight:800;color:var(--wlm-brand);font-size:14px;letter-spacing:.4px;text-transform:uppercase;margin:0 0 8px}
  #wlm-app .wlm-q{font-size:18px;font-weight:800;text-align:center;margin:0 0 16px}
  #wlm-app .wlm-opts{display:grid;gap:10px}
  #wlm-app .wlm-opt{width:100%;text-align:left;border:1.5px solid var(--wlm-line);background:#fff;border-radius:14px;padding:13px 15px;font:inherit;font-size:15.5px;font-weight:600;cursor:pointer}
  #wlm-app .wlm-opt:hover{border-color:var(--wlm-brand2);background:var(--wlm-soft)}
  #wlm-app .wlm-btn{display:flex;align-items:center;justify-content:center;width:100%;margin-top:14px;height:52px;border:0;border-radius:14px;background:linear-gradient(100deg,var(--wlm-brand),var(--wlm-brand2));color:#fff;font:inherit;font-size:16.5px;font-weight:800;cursor:pointer}
  #wlm-app .wlm-btn2{background:#fff;color:var(--wlm-brand);border:1.5px solid var(--wlm-line)}
  #wlm-app .wlm-score{font-size:34px;font-weight:900;text-align:center;margin:6px 0 0;background:linear-gradient(100deg,var(--wlm-brand),var(--wlm-brand2));-webkit-background-clip:text;background-clip:text;color:transparent;animation:wlm-pop .5s ease}
  @keyframes wlm-pop{from{transform:scale(.8);opacity:0}to{transform:scale(1);opacity:1}}
  #wlm-app .wlm-band{text-align:center;font-weight:800;font-size:17px;margin:2px 0 14px}
  #wlm-app .wlm-bar{margin:0 0 10px}
  #wlm-app .wlm-bar span{display:flex;justify-content:space-between;font-size:13.5px;font-weight:700;color:var(--wlm-muted);margin:0 0 4px}
  #wlm-app .wlm-track{height:9px;border-radius:99px;background:var(--wlm-soft);overflow:hidden}
  #wlm-app .wlm-fill{height:100%;width:0;background:linear-gradient(90deg,var(--wlm-brand),var(--wlm-brand2));transition:width .8s ease}
  #wlm-app .wlm-talk{background:var(--wlm-soft);border-radius:14px;padding:12px 14px;font-size:14.5px;margin:14px 0 0}
  #wlm-app .wlm-note{text-align:center;color:var(--wlm-muted);font-size:13px;margin:14px 0 0}
  </style>
  <div class="wlm-card">
  <div class="wlm-head">
  <div class="wlm-icon"><svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 21s-7.5-4.6-10-9C.4 8.9 2.2 5 5.6 5c2 0 3.4 1.1 4.4 2.4h4C15 6.1 16.4 5 18.4 5 21.8 5 23.6 8.9 22 12c-2.5 4.4-10 9-10 9z" transform="scale(.92) translate(1,0)"/></svg></div>
  <h2 class="wlm-h">Who Loves More Test</h2>
  <p class="wlm-sub">Answer honestly about everyday gestures, and see who shows love more in your answers.</p>
  <div class="wlm-chips"><span class="wlm-chip">12 questions</span><span class="wlm-chip">For couples</span><span class="wlm-chip">About 2 minutes</span></div>
  </div>
  <div class="wlm-progwrap"><div class="wlm-prog"><i id="wlm-prog"></i></div><span class="wlm-pct" id="wlm-pct">0%</span></div>
  <div id="wlm-body"></div>
  <p class="wlm-note">For fun and conversation only. This test compares shown gestures, not real feelings.</p>
  </div>
  <script>
  (function(){
  var wlmQ=[
  {a:"Affection",q:"Who hugs first?"},
  {a:"Affection",q:"Who says sweet words?"},
  {a:"Affection",q:"Who plans surprises?"},
  {a:"Effort & Time",q:"Who plans dates?"},
  {a:"Effort & Time",q:"Who makes time first?"},
  {a:"Effort & Time",q:"Who compromises more?"},
  {a:"Communication",q:"Who texts first?"},
  {a:"Communication",q:"Who apologizes first?"},
  {a:"Communication",q:"Who listens better?"},
  {a:"Support",q:"Who notices bad days?"},
  {a:"Support",q:"Who helps with tasks?"},
  {a:"Support",q:"Who remembers dates?"}
  ];
  var wlmOpts=[["Mostly me",2,0],["Both equally",1,1],["Partner more",0,2]];
  var wlmBody=document.getElementById("wlm-body"),wlmProg=document.getElementById("wlm-prog"),wlmPct=document.getElementById("wlm-pct");
  function wlmSetProg(p){wlmProg.style.width=p+"%";wlmPct.textContent=Math.round(p)+"%";}
  var wlmIdx=0,wlmAns=[];
  function wlmRender(){
    wlmSetProg(wlmIdx/12*100);
    var item=wlmQ[wlmIdx];
    var html='<p class="wlm-who">Question '+(wlmIdx+1)+' of 12</p><p class="wlm-q">'+item.q+'</p><div class="wlm-opts">';
    for(var i=0;i<wlmOpts.length;i++){html+='<button type="button" class="wlm-opt" data-y="'+wlmOpts[i][1]+'" data-p="'+wlmOpts[i][2]+'">'+wlmOpts[i][0]+'</button>';}
    html+='</div>';
    wlmBody.innerHTML=html;
    var btns=wlmBody.querySelectorAll(".wlm-opt");
    for(var j=0;j<btns.length;j++){btns[j].addEventListener("click",function(){wlmAns.push([parseInt(this.getAttribute("data-y"),10),parseInt(this.getAttribute("data-p"),10)]);wlmIdx++;if(wlmIdx<12){wlmRender();}else{wlmResult();}});}
  }
  function wlmResult(){
    wlmSetProg(100);
    var you=0,par=0,areas={},order=[];
    for(var i=0;i<12;i++){you+=wlmAns[i][0];par+=wlmAns[i][1];var a=wlmQ[i].a;if(!areas[a]){areas[a]=[0,0];order.push(a);}areas[a][0]+=wlmAns[i][0];areas[a][1]+=wlmAns[i][1];}
    var yp=Math.round(you/24*100),pp=100-yp;
    var lean=Math.max(yp,pp);
    var band=lean<=56?"Balanced love":lean<=66?"A slight lean":"A clear lean";
    var who=yp===pp?"You both show love equally in these answers.":(yp>pp?"You show love a little more in these answers.":"Your partner shows love a little more in these answers.");
    if(lean>66){who=yp>pp?"You carry most gestures in these answers.":"Your partner carries most gestures in these answers.";}
    var html='<div class="wlm-score">You '+yp+'% · Partner '+pp+'%</div><p class="wlm-band">'+band+'</p>';
    for(var m=0;m<order.length;m++){var ay=areas[order[m]][0],ap=Math.round(ay/6*100);html+='<div class="wlm-bar"><span><span>'+order[m]+'</span><span>You '+ap+'%</span></span><div class="wlm-track"><div class="wlm-fill" data-w="'+ap+'"></div></div></div>';}
    html+='<div class="wlm-talk"><strong>Your snapshot:</strong> '+who+' Talk about what makes each of you feel loved, without keeping score.</div>';
    html+='<button type="button" class="wlm-btn" id="wlm-share">Share my result</button><button type="button" class="wlm-btn wlm-btn2" id="wlm-again">Take the test again</button>';
    wlmBody.innerHTML=html;
    var fills=wlmBody.querySelectorAll(".wlm-fill");
    setTimeout(function(){for(var f=0;f<fills.length;f++){fills[f].style.width=fills[f].getAttribute("data-w")+"%";}},60);
    document.getElementById("wlm-again").addEventListener("click",function(){wlmIdx=0;wlmAns=[];wlmRender();});
    document.getElementById("wlm-share").addEventListener("click",function(){
      var txt="Our who loves more result: You "+yp+"%, Partner "+pp+"% ("+band+")";
      if(navigator.share){navigator.share({title:"Who Loves More Test",text:txt,url:location.href});}
      else if(navigator.clipboard){navigator.clipboard.writeText(txt+" "+location.href);this.textContent="Copied!";}
    });
  }
  wlmRender();
  })();
  </script>
  </div>
tool_position: top
faqs:
  - question: "How can you tell who loves more in a relationship?"
    answer: >
      You cannot measure love itself, but you can compare gestures: who makes the first move, who plans, who compromises, and who notices needs. This test adds up those everyday gestures across affection, effort, communication and support.
  - question: "Is it normal if one partner loves more?"
    answer: >
      Yes. In most couples one partner texts, plans or apologizes a little more, and the balance often shifts with work, babies or stress. It matters more when the imbalance becomes permanent and one partner feels alone carrying the relationship.
  - question: "Can I take this test on my own?"
    answer: >
      Yes. On your own, you answer for both of you based on what you experience, so the result shows your view. Comparing separate answers later is even more useful, because disagreements show where your experiences differ. Answers stay in your browser.
  - question: "What if I am always the one doing everything?"
    answer: >
      Talk about it without blaming first: your partner may not see everything you do, or may show love in other ways. Say what would make you happy with concrete examples. If nothing changes for months, take the pattern seriously.
  - question: "Does a one-sided result mean our relationship is bad?"
    answer: >
      No. This is a fun snapshot of shown gestures, not a grade or a prediction. A clear lean is best used as a conversation starter about what makes each of you feel loved and what feels missing right now.
description: "Take this free who loves more test to compare affection, effort, time and support, and see who shows love more. Just for fun, no sign-up needed."
menu_title: "Who Loves More Test"
date: 2026-11-27
draft: false
focus_keyword: who loves more test
---

This free **who loves more test** compares who shows love more in everyday **gestures**, from the **first move** after a fight to small **surprises** and steady **effort**. Answer 12 short questions and see each partner's share on a simple scale. Unlike our [couple compatibility test](/couple-compatibility-test), which grades overall fit, this page compares direction only. It is made for fun and honest conversation, not professional advice, and no result can measure real love.

![who loves more test](/images/who-loves-more-test.webp "who loves more test")

## **What This Test Really Measures**

No quiz can measure love itself, because feelings stay invisible even to the people having them. What a **who loves more test** can compare is visible **gestures**: who texts first, who plans, and who compromises.

That distinction matters, because someone can feel deeply in love yet forget **birthdays**, miss **dates**, and rarely say sweet words. Showing love and feeling love overlap often, but they are not identical twins at all.

The questions look at **affection**, **effort**, **communication**, and **support**, because those are the places imbalance usually shows first. Small daily choices, repeated for months, reveal more than one grand romantic weekend ever could for both.

Answer for your relationship as it is now, not as it was during the honeymoon phase. Honest answers about ordinary weeks give a fairer **scale** reading than memories of your best and worst days together.

Treat the result as a mirror for conversation, never as a courtroom verdict about either heart. Couples who discuss the **gestures** behind the numbers usually learn more than couples who argue about the percentage together.

## **Signs One Partner Shows More Love**

One partner may send more **texts**, make the **first move** after arguments, and remember every small **date** without reminders. None of that proves deeper love, but the pattern does show where visible **effort** sits today.

Planning is another quiet signal, because dates, trips, and family visits rarely organize themselves. If one person always carries the **plans**, the other may still care deeply while contributing almost no practical **effort** at all.

**Compromise** reveals balance under pressure, especially when holidays, money, or moving cities force real choices. Partners who bend sometimes, and say so kindly, usually feel less **taken for granted** than partners who always yield together.

Attention to **needs** matters too, because love shows in noticing bad days before being told. A partner who listens closely, remembers details, and checks in later often feels more loving than grand gestures suggest today.

Feeling **lonely** beside someone is the warning sign worth naming early, especially when **affection**, **compliments**, and time together keep shrinking. Imbalance becomes heavy when one partner stops trying and the other stops expecting at all.

## **Why Imbalance Feels Bigger Than It Is**

Small **imbalance** is normal in most couples, and it often shifts with work, babies, illness, or grief. A season where one partner carries more does not automatically mean the other loves less overall right now.

Sociologists call one pattern the [principle of least interest](https://en.wikipedia.org/wiki/Principle_of_least_interest), where the less **invested** partner can hold more **power**. Research links equal emotional involvement with greater **satisfaction** and **stability** in dating couples over several years together.

Memory also tilts the **scale**, because we **remember** our **own efforts** far better than our partner's quieter ones. Both partners can honestly claim the bigger **share**, simply because invisible work rarely gets counted fairly today.

That bias is exactly why comparing answers helps more than arguing from impressions alone. When both partners answer separately, **agreement** and disagreement both become useful, because each gap points to a specific **gesture** worth discussing.

What weighs most is permanent **imbalance**, where one partner barely tries for months and the other feels alone carrying everything. Temporary unevenness deserves patience, while a fixed pattern deserves one honest, specific conversation soon together.

## **Different Ways of Showing Love**

Partners often show love in different styles, so one buys **surprises** while the other quietly fixes problems. [Love language research summaries](https://ema.live/en/glossary/love-languages) note that feeling loved depends heavily on receiving love in recognizable ways every day.

Words, time, touch, help, and small gifts all count, yet couples rarely value each one equally. The partner who cooks daily may feel generous, while the partner waiting for **compliments** still feels unseen and **lonely**.

That mismatch can make balanced love look one-sided on any simple **scale**. Before concluding anything, ask what makes each of you **feel loved**, because the answer often explains the numbers better than effort alone today.

**Listening** is its own form of **affection**, especially when a partner shares something emotional or important. Feeling truly heard builds closeness quickly, while brushed-aside moments quietly teach people to stop bringing their hearts along together.

Learning each other's style is kinder than demanding identical **gestures** from two different people. Notice attempts, thank them plainly, and say what is **missing** with concrete examples, so love becomes easier to recognize daily together.

## **How the Scoring Works**

Each question offers three answers: mostly me, partner more, or both equally, and every answer adds points to a **share**. Equal answers split the points, so shared habits keep the **scale** near the middle together.

The result shows each partner's **percentage** across four areas, because a single total can hide where the lean lives. One partner may lead on **plans**, while the other quietly leads on **support** and **listening** daily.

Shares near half suggest both partners give in their own ways, even if the styles differ. A mild lean is common, while a strong lean simply marks the area most worth one calm **talk** together.

Taking the test alone shows your view of the relationship, which is useful but naturally one-sided. Comparing separate answers later adds **agreement** data, and the disagreements usually teach more than the final **percentage** itself today.

Answers stay in your browser, and nothing is stored or sent anywhere by this page. Retake the test after a few months, because **effort**, seasons, and **needs** change, and fresh answers deserve a fresh reading.

## **Reading Your Result Without Keeping Score**

If the **scale** tips clearly one way, resist turning the result into a grade or a weapon. Ask what makes each partner **feel loved**, then name one small **gesture** that would help this week together.

Start with the area showing the strongest lean, not with every complaint at once. One concrete change, like sharing **plans** or answering **texts** warmer, usually beats a long speech about fairness and **effort** every time.

Say what would make you happy using examples, because partners often miss invisible work completely. Blame makes people defensive, while a clear request gives the other person something kind and specific to actually do together.

If nothing changes for months and you still feel alone carrying the relationship, take that pattern seriously. Repeated **imbalance**, ignored **needs**, and shrinking **affection** deserve more than another hopeful month of waiting quietly at all.

For overall fit beyond direction, our [couple compatibility test](/couple-compatibility-test) compares values, money, and affection, while the [do I still love him quiz](/do-i-still-love-him-quiz) explores your own feelings when doubt keeps returning lately again and again together.
