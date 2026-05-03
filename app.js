'use strict';

// ── State ──────────────────────────────────────────────────────────────────
const State = {
  streak: 0, xp: 0,
  practicePoint: null, practiceIdx: 0,
  tokenLabels: {},
  selectedToken: null,
  quizItems: [], quizIdx: 0, quizCorrect: 0,
  quizAnswered: false,
  hwPoints: new Set(), hwTypes: new Set(['choice','analysis']), hwCount: 10,
};
function save() {
  localStorage.setItem('sa_streak', State.streak);
  localStorage.setItem('sa_xp', State.xp);
}
function load() {
  State.streak = +localStorage.getItem('sa_streak') || 0;
  State.xp     = +localStorage.getItem('sa_xp')     || 0;
}

// ── Helpers ────────────────────────────────────────────────────────────────
function $(id){ return document.getElementById(id); }
function el(tag, cls, html=''){
  const e = document.createElement(tag);
  if(cls) e.className = cls;
  if(html) e.innerHTML = html;
  return e;
}
function showToast(msg) {
  const t = $('toast'); t.textContent = msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2200);
}
function addXP(n){ State.xp += n; $('xpCount').textContent = State.xp; save(); }

// ── Data Access (new modular structure) ────────────────────────────────────
function POINTS() { return getAllPoints(); }

// ── Tabs ───────────────────────────────────────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    $('panel-'+btn.dataset.tab).classList.add('active');
  });
});

// ── Legend ─────────────────────────────────────────────────────────────────
function buildLegend(){
  const g = $('legendGrid'); g.innerHTML='';
  Object.entries(LABELS).forEach(([k,v])=>{
    const c = el('div','legend-chip');
    c.style.cssText = `color:${v.color};background:${v.bg};`;
    c.textContent = `${k}  ${v.ko}`;
    g.appendChild(c);
  });
}

// ── Token renderer (study mode) ────────────────────────────────────────────
function renderTokensStudy(tokens){
  const row = el('div','tokens-row');
  tokens.forEach(tk=>{
    if(tk.r.includes('DIV')){
      const d=el('span','token-div'); d.textContent='/'; row.appendChild(d); return;
    }
    if(tk.r.includes('PUNC')){
      const p=el('span','token-punc'); p.textContent=tk.t; row.appendChild(p); return;
    }
    const wrap = el('div','token-wrap');
    const txt  = el('div','token-text');
    txt.textContent = tk.t;
    const mainRole = tk.r.find(r=>!['ANC'].includes(r)) || tk.r[0];
    const lb = LABELS[mainRole];
    if(lb){ txt.style.cssText=`background:${lb.bg};color:${lb.color};font-weight:600;`; }
    wrap.appendChild(txt);
    tk.r.forEach(r=>{
      if(r==='DIV'||r==='PUNC') return;
      const L = LABELS[r]; if(!L) return;
      const lbl = el('div','token-label');
      lbl.textContent = r;
      lbl.style.cssText=`background:${L.bg};color:${L.color};`;
      wrap.appendChild(lbl);
    });
    row.appendChild(wrap);
  });
  return row;
}

// ── STUDY MODE ─────────────────────────────────────────────────────────────
function buildStudyPointGrid(){
  const pts = getAllPoints();
  const g = $('studyPointGrid'); g.innerHTML='';
  pts.forEach(pt=>{
    const c = el('div','point-card');
    c.innerHTML=`<div class="pt-num">Point ${pt.id}</div>
      <div class="pt-title">${pt.title}</div>
      <div class="pt-formula">${pt.formula}</div>
      <div class="pt-progress"><div class="pt-progress-bar" style="width:0%"></div></div>`;
    c.addEventListener('click',()=>openStudyPoint(pt));
    g.appendChild(c);
  });
}

function openStudyPoint(pt){
  $('studyPointGrid').closest('.page-wrap').querySelector('h2').style.display='none';
  $('studyPointGrid').style.display='none';
  $('studyDetail').style.display='';

  $('studyPointTitle').textContent = `Point ${pt.id}  ${pt.title}`;
  $('studyFormula').textContent = pt.formula;
  $('studyNote').textContent   = pt.note;

  // antecedent table (optional)
  const tblWrap = $('studyAntTable'); tblWrap.innerHTML='';
  if(pt.antecedentTable && pt.antecedentTable.length){
    const tbl = el('table','ant-table');
    tbl.innerHTML=`<thead><tr><th>선행사 종류</th><th>관계사</th></tr></thead>`;
    const tbody=document.createElement('tbody');
    pt.antecedentTable.forEach(row=>{
      const tr=el('tr'); tr.innerHTML=`<td>${row.type}</td><td><strong>${row.pronoun}</strong></td>`;
      tbody.appendChild(tr);
    });
    tbl.appendChild(tbody); tblWrap.appendChild(tbl);
  }

  // typical verbs (optional - for Units 1-8 etc)
  if(pt.typicalVerbs){
    const vBox = el('div','formula-box');
    vBox.style.marginBottom='16px';
    vBox.innerHTML = `<div class="formula-note">📋 주요 동사: ${pt.typicalVerbs}</div>`;
    tblWrap.appendChild(vBox);
  }

  // examples
  const ex = $('studyExamples'); ex.innerHTML='';
  pt.examples.forEach((e,i)=>{
    const card = el('div','example-sentence');
    const num  = el('div','example-num'); num.textContent=`예문 ${i+1}`;
    card.appendChild(num);
    card.appendChild(renderTokensStudy(e.tokens));
    const tr = el('div','example-translation');
    tr.innerHTML = `🇰🇷 ${e.translation}`;
    card.appendChild(tr);
    if(e.note){
      const n=el('div','example-note'); n.textContent='💡 '+e.note; card.appendChild(n);
    }
    ex.appendChild(card);
  });

  $('goToPracticeBtn').dataset.pointId = pt.id;
}

$('studyBackBtn').addEventListener('click',()=>{
  $('studyDetail').style.display='none';
  $('studyPointGrid').style.display='';
  document.querySelector('#panel-study h2').style.display='';
});

$('goToPracticeBtn').addEventListener('click',function(){
  const pts = getAllPoints();
  const pt = pts.find(p=>p.id===+this.dataset.pointId);
  document.querySelector('[data-tab="practice"]').click();
  openPracticePoint(pt);
});

// ── PRACTICE MODE ──────────────────────────────────────────────────────────
function buildPracticePointGrid(){
  const pts = getAllPoints();
  const g = $('practicePointGrid'); g.innerHTML='';
  pts.forEach(pt=>{
    const c = el('div','point-card');
    c.innerHTML=`<div class="pt-num">Point ${pt.id}</div>
      <div class="pt-title">${pt.title}</div>
      <div class="pt-formula">${pt.formula}</div>`;
    c.addEventListener('click',()=>openPracticePoint(pt));
    g.appendChild(c);
  });
}

function openPracticePoint(pt){
  State.practicePoint = pt;
  State.practiceIdx   = 0;
  $('practicePointSelect').style.display='none';
  $('practiceMain').style.display='';
  $('practicePointLabel').textContent=`Point ${pt.id}  ${pt.title}`;
  buildLabelButtons();
  loadPracticeQuestion();
}

$('practiceBackBtn').addEventListener('click',()=>{
  $('practiceMain').style.display='none';
  $('practicePointSelect').style.display='';
});

function buildLabelButtons(){
  const wrap = $('labelButtons'); wrap.innerHTML='';
  const none = el('button','label-pick-btn none-btn');
  none.textContent='❌ 없음 (제거)';
  none.addEventListener('click',()=>applyLabel(null));
  wrap.appendChild(none);
  Object.entries(LABELS).forEach(([k,v])=>{
    const b = el('button','label-pick-btn');
    b.textContent=`${k} ${v.ko}`;
    b.style.cssText=`background:${v.bg};color:${v.color};`;
    b.dataset.key=k;
    b.addEventListener('click',()=>applyLabel(k));
    wrap.appendChild(b);
  });
}

function applyLabel(key){
  if(State.selectedToken===null) return;
  State.tokenLabels[State.selectedToken] = key;
  renderPracticeTokens();
}

function loadPracticeQuestion(){
  const pt = State.practicePoint;
  const items = [...pt.examples, ...pt.practice];
  State.tokenLabels = {};
  State.selectedToken = null;
  const total = items.length;
  const idx   = State.practiceIdx % total;
  const pct   = Math.round((idx/total)*100);
  $('practiceProgressBar').style.width=pct+'%';
  $('practiceProgressText').textContent=`${idx+1} / ${total}`;
  $('practiceQNum').textContent = idx < pt.examples.length
    ? `분석 예문 ${idx+1} (따라해 보세요)` : `연습 문장 ${idx - pt.examples.length + 1}`;
  $('practiceTranslation').style.display='none';
  $('practiceFeedback').style.display='none';
  $('nextPracticeBtn').style.display='none';
  $('checkAnswerBtn').style.display='';
  $('hintBtn').style.display='';
  $('practiceSentenceCard').className='practice-sentence-card';
  $('selectedTokenName').textContent='-';
  renderPracticeTokens();
}

function renderPracticeTokens(){
  const pt   = State.practicePoint;
  const items= [...pt.examples,...pt.practice];
  const item = items[State.practiceIdx % items.length];
  const wrap = $('practiceTokens'); wrap.innerHTML='';
  item.tokens.forEach((tk,i)=>{
    if(tk.r.includes('DIV')){
      const d=el('span','divider-token'); d.textContent='/'; wrap.appendChild(d); return;
    }
    if(tk.r.includes('PUNC')){
      const p=el('span','punc-token'); p.textContent=tk.t; wrap.appendChild(p); return;
    }
    const btn = el('button','token-btn');
    btn.dataset.idx=i;
    const assigned = State.tokenLabels[i];
    const lb = assigned ? LABELS[assigned] : null;
    const txt = el('div','tk-text'); txt.textContent=tk.t;
    if(lb){ txt.style.cssText=`background:${lb.bg};color:${lb.color};font-weight:600;`; }
    btn.appendChild(txt);
    if(assigned){
      const lbl=el('div','tk-label');
      lbl.textContent=assigned;
      lbl.style.cssText=`background:${lb.bg};color:${lb.color};`;
      btn.appendChild(lbl);
      btn.classList.add('labeled');
    }
    if(State.selectedToken===i) btn.classList.add('selected');
    btn.addEventListener('click',()=>{
      State.selectedToken=i;
      $('selectedTokenName').textContent=tk.t;
      renderPracticeTokens();
    });
    wrap.appendChild(btn);
  });
}

$('checkAnswerBtn').addEventListener('click',()=>{
  const pt   = State.practicePoint;
  const items= [...pt.examples,...pt.practice];
  const item = items[State.practiceIdx % items.length];
  let correct=0, total=0, wrong=[];
  item.tokens.forEach((tk,i)=>{
    if(tk.r.includes('DIV')||tk.r.includes('PUNC')) return;
    total++;
    const assigned = State.tokenLabels[i] || null;
    const expected = tk.r.filter(r=>r!=='ANC'&&r!=='DIV'&&r!=='PUNC')[0] || null;
    if(assigned===expected){ correct++; }
    else { wrong.push(`"${tk.t}": 정답은 ${expected||'없음'}`); }
  });
  const pct = Math.round((correct/total)*100);
  const fb  = $('practiceFeedback');
  fb.style.display='';
  $('practiceTranslation').style.display='';
  $('practiceTranslation').textContent='🇰🇷 '+item.translation;
  $('checkAnswerBtn').style.display='none';
  $('hintBtn').style.display='none';
  $('nextPracticeBtn').style.display='';
  if(pct>=80){
    fb.className='feedback-box correct';
    fb.textContent=`✅ 정확도 ${pct}%  잘했어요! (+${Math.round(pct/20)} XP)`;
    $('practiceSentenceCard').classList.add('correct');
    addXP(Math.round(pct/20));
    if(pct===100) showToast('🎉 완벽한 분석!');
  } else {
    fb.className='feedback-box wrong';
    fb.textContent=`❌ 정확도 ${pct}%  다시 확인: ${wrong.slice(0,3).join(' / ')}`;
    $('practiceSentenceCard').classList.add('wrong');
  }
});

$('hintBtn').addEventListener('click',()=>{
  const pt   = State.practicePoint;
  const items= [...pt.examples,...pt.practice];
  const item = items[State.practiceIdx % items.length];
  const fb   = $('practiceFeedback');
  fb.style.display='';
  fb.className='feedback-box hint';
  const hints = item.tokens
    .filter(tk=>!tk.r.includes('DIV')&&!tk.r.includes('PUNC'))
    .slice(0,3)
    .map(tk=>`"${tk.t}" → ${tk.r.filter(r=>r!=='ANC')[0]||'?'}`)
    .join('  |  ');
  fb.textContent='💡 힌트: '+hints;
});

$('nextPracticeBtn').addEventListener('click',()=>{
  const pt   = State.practicePoint;
  const total= pt.examples.length+pt.practice.length;
  State.practiceIdx = (State.practiceIdx+1) % total;
  loadPracticeQuestion();
});

// ── QUIZ MODE ──────────────────────────────────────────────────────────────
function buildQuizPointChecks(){
  const pts = getAllPoints();
  const wrap = $('quizPointChecks'); wrap.innerHTML='';
  pts.forEach(pt=>{
    const lbl=el('label','hw-check-item checked');
    lbl.dataset.val=pt.id;
    lbl.innerHTML=`<input type="checkbox" checked> Point ${pt.id} ${pt.title}`;
    lbl.addEventListener('click',function(){ this.classList.toggle('checked'); });
    wrap.appendChild(lbl);
  });
}

$('startQuizBtn').addEventListener('click',()=>{
  const pts = getAllPoints();
  const sel = [...$('quizPointChecks').querySelectorAll('.hw-check-item.checked')].map(l=>+l.dataset.val);
  if(!sel.length){ showToast('Point를 하나 이상 선택하세요'); return; }
  const items=[];
  pts.filter(p=>sel.includes(p.id)).forEach(pt=>items.push(...pt.quiz));
  if(!items.length){ showToast('퀴즈 문항이 없습니다'); return; }
  State.quizItems = shuffle([...items]);
  State.quizIdx=0; State.quizCorrect=0;
  $('quizSetup').style.display='none';
  $('quizMain').style.display='';
  $('quizResultArea').style.display='none';
  $('quizQuestionArea').style.display='';
  renderQuizQ();
});

function renderQuizQ(){
  const q = State.quizItems[State.quizIdx];
  $('quizQNum').textContent=`문제 ${State.quizIdx+1} / ${State.quizItems.length}`;
  $('quizScoreDisplay').textContent=`${State.quizCorrect} / ${State.quizIdx}`;
  const sentEl=$('quizSentence');
  sentEl.innerHTML=q.sentence.replace('___','<span class="blank">____</span>');
  const choicesEl=$('quizChoices'); choicesEl.innerHTML='';
  q.choices.forEach((ch,i)=>{
    const b=el('button','quiz-choice');
    b.textContent=ch; b.dataset.idx=i;
    b.addEventListener('click',()=>answerQuiz(i));
    choicesEl.appendChild(b);
  });
  $('quizExplanation').style.display='none';
  $('nextQuizBtn').style.display='none';
  State.quizAnswered=false;
}

function answerQuiz(idx){
  if(State.quizAnswered) return;
  State.quizAnswered=true;
  const q=State.quizItems[State.quizIdx];
  const btns=$('quizChoices').querySelectorAll('.quiz-choice');
  btns.forEach(b=>b.disabled=true);
  if(idx===q.answer){
    btns[idx].classList.add('correct');
    State.quizCorrect++;
    addXP(5);
    showToast('⭕ 정답! +5XP');
  } else {
    btns[idx].classList.add('wrong');
    btns[q.answer].classList.add('correct');
    showToast('❌ 틀렸어요');
  }
  $('quizExplanation').textContent='📘 '+q.hint;
  $('quizExplanation').style.display='';
  $('quizScoreDisplay').textContent=`${State.quizCorrect} / ${State.quizIdx+1}`;
  $('nextQuizBtn').style.display='';
}

$('nextQuizBtn').addEventListener('click',()=>{
  State.quizIdx++;
  if(State.quizIdx>=State.quizItems.length){ showQuizResult(); return; }
  renderQuizQ();
});

function showQuizResult(){
  $('quizQuestionArea').style.display='none';
  $('quizResultArea').style.display='';
  const score=State.quizCorrect, total=State.quizItems.length;
  const pct=Math.round((score/total)*100);
  $('quizResultScore').textContent=`${score} / ${total}  (${pct}%)`;
  const stars = pct>=90?'⭐⭐⭐':pct>=70?'⭐⭐':'⭐';
  $('quizStars').textContent=stars;
  $('quizResultMsg').textContent = pct>=90?'완벽해요! 문법 마스터! 🏆'
    :pct>=70?'잘했어요! 조금만 더 연습해요 💪'
    :'다시 한번 공부하고 도전해요 📖';
}

$('retryQuizBtn').addEventListener('click',()=>{
  State.quizIdx=0; State.quizCorrect=0;
  State.quizItems=shuffle([...State.quizItems]);
  $('quizResultArea').style.display='none';
  $('quizQuestionArea').style.display='';
  renderQuizQ();
});
$('quizBackBtn').addEventListener('click',()=>{
  $('quizMain').style.display='none';
  $('quizSetup').style.display='';
});
$('quizToSetupBtn').addEventListener('click',()=>{
  $('quizMain').style.display='none';
  $('quizSetup').style.display='';
});

// ── HOMEWORK ───────────────────────────────────────────────────────────────
function buildHwUI(){
  const pts = getAllPoints();
  const wrap=$('hwPointChecks'); wrap.innerHTML='';
  pts.forEach(pt=>{
    const lbl=el('label','hw-check-item checked');
    lbl.dataset.val=pt.id;
    lbl.innerHTML=`<input type="checkbox" checked> Point ${pt.id}`;
    lbl.addEventListener('click',function(){ this.classList.toggle('checked'); });
    wrap.appendChild(lbl);
  });
  $('hwTypeChecks').querySelectorAll('.hw-check-item').forEach(l=>{
    l.addEventListener('click',function(){ this.classList.toggle('checked'); });
  });
  $('hwCountRadios').querySelectorAll('.hw-radio-item').forEach(l=>{
    l.addEventListener('click',function(){
      $('hwCountRadios').querySelectorAll('.hw-radio-item').forEach(x=>x.classList.remove('checked'));
      this.classList.add('checked');
      State.hwCount=+this.dataset.val;
    });
  });
}

$('generateHwBtn').addEventListener('click',generateHomework);

function generateHomework(){
  const pts = getAllPoints();
  const selIds=[...$('hwPointChecks').querySelectorAll('.hw-check-item.checked')].map(l=>+l.dataset.val);
  const types=[...$('hwTypeChecks').querySelectorAll('.hw-check-item.checked')].map(l=>l.dataset.val);
  if(!selIds.length||!types.length){ showToast('Point와 유형을 하나 이상 선택하세요'); return; }

  const pool=[];
  pts.filter(p=>selIds.includes(p.id)).forEach(pt=>{
    if(types.includes('choice')) pool.push(...pt.quiz.map(q=>({...q,pointId:pt.id,type:'choice'})));
    if(types.includes('analysis')) pool.push(...pt.practice.map(s=>({...s,pointId:pt.id,type:'analysis'})));
    if(types.includes('translation')) pool.push(...pt.practice.map(s=>({...s,pointId:pt.id,type:'translation'})));
  });

  const selected=shuffle([...pool]).slice(0,State.hwCount);
  if(!selected.length){ showToast('선택한 범위에 문항이 없습니다'); return; }

  const name  = $('hwStudentName').value || '___________';
  const cls   = $('hwClassName').value  || '______';
  const date  = $('hwDate').value       || new Date().toLocaleDateString('ko-KR');

  let html=`<div class="print-title">📝 영어 문장분석 숙제</div>
  <div style="display:flex;gap:24px;margin-bottom:20px;font-size:.9rem;">
    <span>이름: <strong>${name}</strong></span>
    <span>반: <strong>${cls}</strong></span>
    <span>날짜: <strong>${date}</strong></span>
  </div>`;

  const answers=[];
  selected.forEach((item,i)=>{
    const num=i+1;
    const pt=pts.find(p=>p.id===item.pointId);
    html+=`<div class="print-q"><div class="print-q-num">${num}. [Point ${item.pointId} ${pt.title}]</div>`;

    if(item.type==='choice'){
      const filled=item.sentence.replace('___',`<span class="print-blank">______</span>`);
      html+=`<div class="print-sentence">${filled}</div>`;
      const opts=item.choices.map((c,ci)=>`(${ci+1}) ${c}`).join('  ');
      html+=`<div style="margin-bottom:4px;font-size:.85rem;">${opts}</div>`;
      answers.push(`${num}. (${item.answer+1}) ${item.choices[item.answer]}`);
    } else if(item.type==='analysis'){
      const raw=item.tokens.map(tk=>tk.t).filter(t=>t!=='/'&&t!=='.').join(' ');
      html+=`<div class="print-sentence">${raw}</div>`;
      html+=`<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:4px;">`;
      item.tokens.forEach(tk=>{
        if(tk.r.includes('DIV')||tk.r.includes('PUNC')) return;
        html+=`<span style="border:1px solid #ccc;border-radius:4px;padding:3px 10px;font-size:.85rem;">
          ${tk.t}<br><span style="font-size:.7rem;color:#999;">___</span></span>`;
      });
      html+=`</div>`;
      const ans=item.tokens.filter(tk=>!tk.r.includes('DIV')&&!tk.r.includes('PUNC'))
        .map(tk=>`${tk.t}(${tk.r.filter(r=>r!=='ANC')[0]||'?'})`).join(' ');
      answers.push(`${num}. ${ans}`);
    } else if(item.type==='translation'){
      const raw=item.tokens.map(tk=>tk.t).filter(t=>t!=='/'&&t!=='.').join(' ');
      html+=`<div class="print-sentence">${raw}</div>`;
      html+=`<div style="border:1px solid #ccc;min-height:32px;border-radius:4px;margin-bottom:4px;padding:4px 8px;font-size:.85rem;color:#aaa;">해석: ___________________________</div>`;
      answers.push(`${num}. ${item.translation}`);
    }
    html+=`</div>`;
  });

  html+=`<div class="print-answer-key"><strong>정답</strong><br>${answers.join('<br>')}</div>`;

  $('hw-print-content').innerHTML=html;
  $('hw-preview').classList.add('visible');
  $('printHwBtn').style.display='';
}

$('printHwBtn').addEventListener('click',()=>window.print());

// ── Shuffle ────────────────────────────────────────────────────────────────
function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
}

// ── Init ───────────────────────────────────────────────────────────────────
(function init(){
  load();
  $('streakCount').textContent=State.streak;
  $('xpCount').textContent=State.xp;
  buildLegend();
  buildStudyPointGrid();
  buildPracticePointGrid();
  buildQuizPointChecks();
  buildHwUI();
})();
