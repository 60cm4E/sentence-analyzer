'use strict';

// ── State ──────────────────────────────────────────────────────────────────
const State = {
  streak: 0, xp: 0,
  practicePoint: null, practiceIdx: 0,
  practiceQueue: null, wrongIndices: [], isWrongMode: false,
  tokenLabels: {},
  selectedToken: null,
  hintLevel: 0, hintUsed: false,
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
  // Firebase 진도 저장
  autoSaveStudy(pt.id);
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
  State.hintLevel     = 0;
  State.practiceQueue = [...pt.examples, ...pt.practice];
  State.wrongIndices  = [];
  State.isWrongMode   = false;
  $('practicePointSelect').style.display='none';
  $('practiceMain').style.display='';
  $('practiceResult').style.display='none';
  $('practicePointLabel').textContent=`Point ${pt.id}  ${pt.title}`;
  buildLabelButtons();
  loadPracticeQuestion();
}

$('practiceBackBtn').addEventListener('click',()=>{
  $('practiceMain').style.display='none';
  $('practiceResult').style.display='none';
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
  const items = State.practiceQueue || [...pt.examples, ...pt.practice];
  if(!State.practiceQueue) State.practiceQueue = items;
  State.tokenLabels = {};
  State.selectedToken = null;
  State.hintUsed = false; // 이번 시도에서 힌트를 사용했는지
  const total = items.length;
  const idx   = State.practiceIdx;
  if(idx >= total){
    // 모든 문제 완료 → 결과 화면
    showPracticeResult();
    return;
  }
  const pct   = Math.round((idx/total)*100);
  $('practiceProgressBar').style.width=pct+'%';
  $('practiceProgressText').textContent=`${idx+1} / ${total}`;
  const item = items[idx];
  const isExample = !State.isWrongMode && pt.examples.includes(item);
  if(isExample){
    const exIdx = pt.examples.indexOf(item);
    $('practiceQNum').textContent = `분석 예문 ${exIdx+1} (따라해 보세요)`;
  } else {
    $('practiceQNum').textContent = State.isWrongMode
      ? `오답 복습 ${idx+1} / ${total}` : `연습 문장 ${idx+1}`;
  }
  $('practiceTranslation').style.display='none';
  $('practiceFeedback').style.display='none';
  $('nextPracticeBtn').style.display='none';
  $('retryPracticeBtn').style.display='none';
  $('checkAnswerBtn').style.display='';
  // 힌트 레벨에 따른 버튼 텍스트 (hintLevel은 시도별로 증가)
  const hLv = Math.min(State.hintLevel + 1, 3);
  $('hintBtn').style.display='';
  $('hintBtn').innerHTML=`💡 힌트 ${hLv}`;
  $('hintBtn').disabled = (State.hintLevel >= 3);
  $('practiceSentenceCard').className='practice-sentence-card';
  $('selectedTokenName').textContent='-';
  $('practiceResult').style.display='none';
  $('practiceMain').style.display='';
  renderPracticeTokens();
}

function renderPracticeTokens(){
  const pt   = State.practicePoint;
  const items= State.practiceQueue || [...pt.examples,...pt.practice];
  const item = items[State.practiceIdx];
  if(!item) return;
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
  const items= State.practiceQueue || [...pt.examples,...pt.practice];
  const item = items[State.practiceIdx];
  if(!item) return;
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

  if(pct>=80){
    fb.className='feedback-box correct';
    fb.textContent=`✅ 정확도 ${pct}%  잘했어요! (+${Math.round(pct/20)} XP)`;
    $('practiceSentenceCard').classList.add('correct');
    addXP(Math.round(pct/20));
    if(pct===100) showToast('🎉 완벽한 분석!');
    // 정답 → 다음 문장으로
    $('nextPracticeBtn').style.display='';
    $('retryPracticeBtn').style.display='none';
  } else {
    fb.className='feedback-box wrong';
    fb.textContent=`❌ 정확도 ${pct}%  다시 확인: ${wrong.slice(0,3).join(' / ')}`;
    $('practiceSentenceCard').classList.add('wrong');
    // 오답 기록
    if(!State.wrongIndices.includes(State.practiceIdx)){
      State.wrongIndices.push(State.practiceIdx);
    }
    // 오답 → "다시 풀기" + "다음 문장" 둘 다 보여줌
    $('retryPracticeBtn').style.display='';
    $('nextPracticeBtn').style.display='';
  }
});

// 힌트: 한 시도당 한 번만, 레벨은 다시 풀 때 올라감
$('hintBtn').addEventListener('click',()=>{
  if(State.hintUsed) return; // 이미 사용
  State.hintUsed = true;
  const pt   = State.practicePoint;
  const items= State.practiceQueue || [...pt.examples,...pt.practice];
  const item = items[State.practiceIdx];
  if(!item) return;
  const fb   = $('practiceFeedback');
  fb.style.display='';
  fb.className='feedback-box hint';

  const currentHint = State.hintLevel + 1; // 다음에 보여줄 레벨

  if(currentHint === 1){
    const roles = item.tokens
      .filter(tk=>!tk.r.includes('DIV')&&!tk.r.includes('PUNC'))
      .map(tk=>tk.r.filter(r=>r!=='ANC')[0]||'M');
    const uniqueRoles = [...new Set(roles)];
    const pattern = roles.join(' + ');
    let guideQ = '이 문장에서 ';
    if(uniqueRoles.includes('S')) guideQ += "'누가/무엇이'(주어)";
    if(uniqueRoles.includes('V')) guideQ += ", '~한다'(동사)";
    if(uniqueRoles.includes('O')) guideQ += ", '무엇을'(목적어)";
    if(uniqueRoles.includes('SC')) guideQ += ", '어떠하다/무엇이다'(보어)";
    if(uniqueRoles.includes('IO')) guideQ += ", '누구에게'(간접목적어)";
    if(uniqueRoles.includes('DO')) guideQ += ", '무엇을'(직접목적어)";
    if(uniqueRoles.includes('OC')) guideQ += ", '~하게/~로'(목적격보어)";
    if(uniqueRoles.includes('M')) guideQ += ", '언제/어디서/어떻게'(수식어)";
    guideQ += '를 찾아보세요.';
    fb.innerHTML=`💡 <strong>힌트 1 — 문장 패턴</strong><br>이 문장은 <strong>${pattern}</strong> 구조입니다.<br>${guideQ}`;
  } else if(currentHint === 2){
    fb.innerHTML=`💡 <strong>힌트 2 — 직독직해</strong><br>🇰🇷 ${item.translation}<br><span style="font-size:.82rem;color:#9A3412;">↑ 한글 해석을 읽고, 각 영어 단어가 어떤 역할인지 대입해 보세요.</span>`;
  } else {
    const roleCounts = {};
    item.tokens
      .filter(tk=>!tk.r.includes('DIV')&&!tk.r.includes('PUNC'))
      .forEach(tk=>{
        const role = tk.r.filter(r=>r!=='ANC')[0]||'M';
        const ko = LABELS[role]?.ko || role;
        roleCounts[ko] = (roleCounts[ko]||0)+1;
      });
    const countStr = Object.entries(roleCounts).map(([k,v])=>`${k} ${v}개`).join(', ');
    fb.innerHTML=`💡 <strong>힌트 3 — 성분 개수</strong><br>이 문장에는 <strong>${countStr}</strong>가 있어요.`;
  }
  $('hintBtn').disabled=true;
  $('hintBtn').innerHTML='💡 힌트 사용완료';
});

// 다시 풀기: 같은 문장 재시도, 힌트 레벨 올림
$('retryPracticeBtn').addEventListener('click',()=>{
  State.hintLevel = Math.min(State.hintLevel + 1, 3);
  State.tokenLabels = {};
  State.selectedToken = null;
  State.hintUsed = false;
  $('practiceFeedback').style.display='none';
  $('practiceTranslation').style.display='none';
  $('retryPracticeBtn').style.display='none';
  $('nextPracticeBtn').style.display='none';
  $('checkAnswerBtn').style.display='';
  const hLv = Math.min(State.hintLevel + 1, 3);
  $('hintBtn').style.display='';
  $('hintBtn').innerHTML=`💡 힌트 ${hLv}`;
  $('hintBtn').disabled = (State.hintLevel >= 3);
  $('practiceSentenceCard').className='practice-sentence-card';
  $('selectedTokenName').textContent='-';
  renderPracticeTokens();
});

$('nextPracticeBtn').addEventListener('click',()=>{
  State.practiceIdx++;
  State.hintLevel = 0; // 새 문장은 힌트 리셋
  loadPracticeQuestion();
});

// 연습 결과 화면
function showPracticeResult(){
  $('practiceMain').style.display='none';
  $('practiceResult').style.display='';
  const total = (State.practiceQueue || []).length;
  const wrongCount = State.wrongIndices.length;
  const correctCount = total - wrongCount;
  const pct = Math.round((correctCount/total)*100);
  $('practiceResultScore').textContent = `${correctCount} / ${total} (${pct}%)`;
  $('practiceStars').textContent = pct>=90?'⭐⭐⭐':pct>=70?'⭐⭐':'⭐';
  $('practiceResultMsg').textContent = pct>=90?'완벽해요! 문법 마스터! 🏆'
    :pct>=70?'잘했어요! 조금만 더 연습해요 💪'
    :'다시 한번 공부하고 도전해요 📖';
  if(wrongCount > 0){
    $('retryWrongBtn').style.display='';
    $('retryWrongBtn').textContent=`❌ 오답 ${wrongCount}문제 다시 풀기`;
  } else {
    $('retryWrongBtn').style.display='none';
  }
  // Firebase 진도 저장
  if(State.practicePoint){
    autoSavePractice(State.practicePoint.id, pct);
  }
}

// 오답만 다시 풀기
$('retryWrongBtn').addEventListener('click',()=>{
  const pt = State.practicePoint;
  const allItems = [...pt.examples, ...pt.practice];
  // 원래 큐에서 오답 인덱스에 해당하는 문제만 추출
  const origQueue = State.practiceQueue || allItems;
  const wrongItems = State.wrongIndices.map(i=>origQueue[i]).filter(Boolean);
  State.practiceQueue = wrongItems;
  State.practiceIdx = 0;
  State.hintLevel = 0;
  State.wrongIndices = [];
  State.isWrongMode = true;
  loadPracticeQuestion();
});

// 전체 다시 풀기
$('retryAllBtn').addEventListener('click',()=>{
  const pt = State.practicePoint;
  State.practiceQueue = [...pt.examples, ...pt.practice];
  State.practiceIdx = 0;
  State.hintLevel = 0;
  State.wrongIndices = [];
  State.isWrongMode = false;
  loadPracticeQuestion();
});

// Point 선택으로 돌아가기
$('practiceToSelectBtn').addEventListener('click',()=>{
  $('practiceResult').style.display='none';
  $('practiceMain').style.display='none';
  $('practicePointSelect').style.display='';
});

// ── QUIZ MODE ──────────────────────────────────────────────────────────────
function buildQuizPointChecks(){
  const wrap = $('quizUnitGrid'); wrap.innerHTML='';
  ALL_UNITS.forEach(unit=>{
    // Unit header row
    const unitSection = el('div','quiz-unit-section');

    const unitHeader = el('div','quiz-unit-header');
    const unitToggle = el('button','quiz-unit-toggle selected');
    unitToggle.dataset.unitId = unit.id;
    unitToggle.innerHTML=`<span class="quiz-unit-icon">📘</span> Unit ${String(unit.id).padStart(2,'0')} <strong>${unit.title}</strong> <span class="quiz-unit-count">(${unit.points.length} Points)</span>`;
    unitToggle.addEventListener('click',function(){
      const selected = this.classList.toggle('selected');
      const cards = unitSection.querySelectorAll('.quiz-point-card');
      cards.forEach(c=>{ if(selected) c.classList.add('selected'); else c.classList.remove('selected'); });
    });
    unitHeader.appendChild(unitToggle);
    unitSection.appendChild(unitHeader);

    // Point cards grid
    const grid = el('div','quiz-point-grid');
    unit.points.forEach(pt=>{
      const card = el('div','quiz-point-card selected');
      card.dataset.pointId = pt.id;
      card.innerHTML=`<div class="qpc-num">Point ${pt.id}</div>
        <div class="qpc-title">${pt.title}</div>
        <div class="qpc-formula">${pt.formula}</div>`;
      card.addEventListener('click',function(){
        this.classList.toggle('selected');
        // Update unit toggle state
        const allCards = grid.querySelectorAll('.quiz-point-card');
        const selCards = grid.querySelectorAll('.quiz-point-card.selected');
        if(selCards.length===allCards.length) unitToggle.classList.add('selected');
        else unitToggle.classList.remove('selected');
      });
      grid.appendChild(card);
    });
    unitSection.appendChild(grid);
    wrap.appendChild(unitSection);
  });
}

// Select All / Deselect All
$('quizSelectAllBtn').addEventListener('click',()=>{
  $('quizUnitGrid').querySelectorAll('.quiz-point-card').forEach(c=>c.classList.add('selected'));
  $('quizUnitGrid').querySelectorAll('.quiz-unit-toggle').forEach(b=>b.classList.add('selected'));
});
$('quizDeselectAllBtn').addEventListener('click',()=>{
  $('quizUnitGrid').querySelectorAll('.quiz-point-card').forEach(c=>c.classList.remove('selected'));
  $('quizUnitGrid').querySelectorAll('.quiz-unit-toggle').forEach(b=>b.classList.remove('selected'));
});

$('startQuizBtn').addEventListener('click',()=>{
  const pts = getAllPoints();
  const selIds = [...$('quizUnitGrid').querySelectorAll('.quiz-point-card.selected')].map(c=>+c.dataset.pointId);
  if(!selIds.length){ showToast('Point를 하나 이상 선택하세요'); return; }
  const items=[];
  pts.filter(p=>selIds.includes(p.id)).forEach(pt=>items.push(...pt.quiz));
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
  // Firebase 진도 저장
  const quizPointIds = [...new Set(State.quizItems.map(q=>q.pointId))];
  autoSaveQuiz(quizPointIds, pct);
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
let hwPrintMode = 'both'; // 'both' | 'questions' | 'answers'

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
  // Print mode radios
  $('hwPrintMode').querySelectorAll('.hw-radio-item').forEach(l=>{
    l.addEventListener('click',function(){
      $('hwPrintMode').querySelectorAll('.hw-radio-item').forEach(x=>x.classList.remove('checked'));
      this.classList.add('checked');
      hwPrintMode = this.dataset.val;
      applyPrintMode();
    });
  });
}

function applyPrintMode(){
  const qEl = $('hw-print-questions');
  const aEl = $('hw-print-answers');
  if(!qEl || !aEl) return;
  if(hwPrintMode==='both'){
    qEl.style.display=''; aEl.style.display='';
  } else if(hwPrintMode==='questions'){
    qEl.style.display=''; aEl.style.display='none';
  } else {
    qEl.style.display='none'; aEl.style.display='';
  }
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

  const headerHtml = `<div class="print-title">📝 영어 문장분석 숙제</div>
  <div style="display:flex;gap:24px;margin-bottom:20px;font-size:.9rem;">
    <span>이름: <strong>${name}</strong></span>
    <span>반: <strong>${cls}</strong></span>
    <span>날짜: <strong>${date}</strong></span>
  </div>`;

  let questionsHtml = headerHtml;
  const answers=[];

  selected.forEach((item,i)=>{
    const num=i+1;
    const pt=pts.find(p=>p.id===item.pointId);
    questionsHtml+=`<div class="print-q"><div class="print-q-num">${num}. [Point ${item.pointId} ${pt.title}]</div>`;

    if(item.type==='choice'){
      const filled=item.sentence.replace('___',`<span class="print-blank">______</span>`);
      questionsHtml+=`<div class="print-sentence">${filled}</div>`;
      const opts=item.choices.map((c,ci)=>`(${ci+1}) ${c}`).join('  ');
      questionsHtml+=`<div style="margin-bottom:4px;font-size:.85rem;">${opts}</div>`;
      answers.push(`${num}. (${item.answer+1}) ${item.choices[item.answer]}`);
    } else if(item.type==='analysis'){
      const raw=item.tokens.map(tk=>tk.t).filter(t=>t!=='/'&&t!=='.').join(' ');
      questionsHtml+=`<div class="print-sentence">${raw}</div>`;
      questionsHtml+=`<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:4px;">`;
      item.tokens.forEach(tk=>{
        if(tk.r.includes('DIV')||tk.r.includes('PUNC')) return;
        questionsHtml+=`<span style="border:1px solid #ccc;border-radius:4px;padding:3px 10px;font-size:.85rem;">
          ${tk.t}<br><span style="font-size:.7rem;color:#999;">___</span></span>`;
      });
      questionsHtml+=`</div>`;
      const ans=item.tokens.filter(tk=>!tk.r.includes('DIV')&&!tk.r.includes('PUNC'))
        .map(tk=>`${tk.t}(${tk.r.filter(r=>r!=='ANC')[0]||'?'})`).join(' ');
      answers.push(`${num}. ${ans}`);
    } else if(item.type==='translation'){
      const raw=item.tokens.map(tk=>tk.t).filter(t=>t!=='/'&&t!=='.').join(' ');
      questionsHtml+=`<div class="print-sentence">${raw}</div>`;
      questionsHtml+=`<div style="border:1px solid #ccc;min-height:32px;border-radius:4px;margin-bottom:4px;padding:4px 8px;font-size:.85rem;color:#aaa;">해석: ___________________________</div>`;
      answers.push(`${num}. ${item.translation}`);
    }
    questionsHtml+=`</div>`;
  });

  // 정답 페이지 (별도 페이지로 인쇄)
  let answersHtml = `<div class="print-answer-page">
    <div class="print-title">📋 정답지</div>
    <div style="display:flex;gap:24px;margin-bottom:20px;font-size:.9rem;">
      <span>이름: <strong>${name}</strong></span>
      <span>반: <strong>${cls}</strong></span>
      <span>날짜: <strong>${date}</strong></span>
    </div>
    <div class="print-answer-list">${answers.map(a=>`<div class="print-answer-item">${a}</div>`).join('')}</div>
  </div>`;

  $('hw-print-questions').innerHTML = questionsHtml;
  $('hw-print-answers').innerHTML = answersHtml;
  $('hw-preview').classList.add('visible');
  $('printHwBtn').style.display='';
  applyPrintMode();
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

  // Firebase Auth 리스너
  if(typeof fbAuth !== 'undefined' && isFirebaseReady()){
    fbAuth.onAuthStateChanged(async (user)=>{
      if(user){
        currentUser = user;
        isTeacher = false;
        try {
          await ensureStudentDoc(user);
          // Firestore에서 XP/streak 복원
          if(studentDoc){
            State.xp = studentDoc.xp || 0;
            State.streak = studentDoc.streak || 0;
            $('xpCount').textContent = State.xp;
            $('streakCount').textContent = State.streak;
            save();
          }
        } catch(e) {
          console.warn('Student doc error (continuing):', e);
        }
        updateAuthUI();
        closeLoginModalFn();
        showToast(`👋 ${user.displayName || '학생'}님 환영합니다!`);
      } else {
        currentUser = null;
        isTeacher = false;
        studentDoc = null;
        updateAuthUI();
      }
    });
  }

  // 로그인 모달 이벤트
  if($('googleLoginBtn')){
    $('googleLoginBtn').addEventListener('click', async ()=>{
      const user = await loginWithGoogle();
      if(user) closeLoginModalFn();
    });
  }
  if($('teacherLoginBtn')){
    $('teacherLoginBtn').addEventListener('click', ()=>{
      const pin = $('teacherPinInput').value;
      if(loginTeacher(pin)){
        isTeacher = true;
        currentUser = { displayName: '교사', photoURL: '' };
        updateAuthUI();
        closeLoginModalFn();
        showToast('🎓 교사 모드로 접속했습니다');
        // 대시보드 탭으로 이동
        switchTab('dashboard');
        loadDashboard();
      } else {
        showToast('❌ 비밀번호가 틀렸습니다');
      }
    });
  }
  if($('closeLoginModal')){
    $('closeLoginModal').addEventListener('click', closeLoginModalFn);
  }
  if($('loginModal')){
    $('loginModal').addEventListener('click', (e)=>{
      if(e.target === $('loginModal')) closeLoginModalFn();
    });
  }
  if($('refreshDashBtn')){
    $('refreshDashBtn').addEventListener('click', loadDashboard);
  }
})();

// ── Auth UI ───────────────────────────────────────────────────────────────
function openLoginModal(){
  $('loginModal').style.display='';
}
function closeLoginModalFn(){
  $('loginModal').style.display='none';
  $('teacherPinInput').value='';
}
function updateAuthUI(){
  if(currentUser){
    $('authBtn').style.display='none';
    $('userInfo').style.display='';
    $('userName').textContent = currentUser.displayName || '사용자';
    if(currentUser.photoURL){
      $('userAvatar').src = currentUser.photoURL;
      $('userAvatar').style.display='';
    } else {
      $('userAvatar').style.display='none';
    }
    if(isTeacher){
      $('userName').innerHTML = '<span class="teacher-badge">교사</span>';
      $('tabDashboard').style.display='';
    } else {
      $('tabDashboard').style.display='none';
    }
  } else {
    $('authBtn').style.display='';
    $('userInfo').style.display='none';
    $('tabDashboard').style.display='none';
  }
}

function switchTab(tabName){
  document.querySelectorAll('.tab-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.tab===tabName);
  });
  document.querySelectorAll('.tab-panel').forEach(p=>{
    p.classList.toggle('active', p.id==='panel-'+tabName);
  });
}

// ── 진도 자동 저장 (학습/연습/퀴즈 완료 시 호출) ──
async function autoSaveStudy(pointId){
  if(!currentUser || isTeacher || !isFirebaseReady()) return;
  try {
    await saveProgressToFirebase(pointId, { studied: true });
  } catch(e){ console.warn('Save failed:', e); }
}
async function autoSavePractice(pointId, score){
  if(!currentUser || isTeacher || !isFirebaseReady()) return;
  try {
    await saveProgressToFirebase(pointId, { practiced: true, practiceScore: score });
    await syncStatsToFirebase();
  } catch(e){ console.warn('Save failed:', e); }
}
async function autoSaveQuiz(pointIds, score){
  if(!currentUser || isTeacher || !isFirebaseReady()) return;
  try {
    for(const pid of pointIds){
      await saveProgressToFirebase(pid, { quizScore: score });
    }
    await syncStatsToFirebase();
  } catch(e){ console.warn('Save failed:', e); }
}

// ── 교사 대시보드 ──────────────────────────────────────────────────────────
async function loadDashboard(){
  const wrap = $('dashboardContent');
  wrap.innerHTML='<div class="empty-state"><div class="empty-icon">⏳</div><p>학생 데이터를 불러오는 중...</p></div>';
  try {
    const students = await getAllStudents();
    if(!students.length){
      wrap.innerHTML='<div class="empty-state"><div class="empty-icon">📭</div><p>아직 등록된 학생이 없습니다.</p></div>';
      return;
    }
    // 각 학생의 진도 가져오기
    const totalPoints = getAllPoints().length;
    let html = `<div style="margin-bottom:12px;font-size:.88rem;color:var(--text2);">총 ${students.length}명의 학생 | ${totalPoints}개 포인트</div>`;
    html += `<div style="overflow-x:auto;"><table class="dash-table">
      <thead><tr>
        <th>학생</th><th>XP</th><th>학습</th><th>연습</th><th>퀴즈</th><th>마지막 접속</th>
      </tr></thead><tbody>`;

    for(const s of students){
      const progress = await getStudentProgress(s.id);
      const pKeys = Object.keys(progress);
      const studied = pKeys.filter(k=>progress[k].studied).length;
      const practiced = pKeys.filter(k=>progress[k].practiced).length;
      const quizzed = pKeys.filter(k=>progress[k].quizScore!=null).length;
      const lastLogin = s.lastLogin ? new Date(s.lastLogin.seconds*1000).toLocaleDateString('ko-KR') : '-';
      const studiedPct = Math.round((studied/totalPoints)*100);
      const practicedPct = Math.round((practiced/totalPoints)*100);

      html += `<tr data-uid="${s.id}" class="dash-student-row" style="cursor:pointer;">
        <td><div class="student-name">
          ${s.photoURL ? `<img src="${s.photoURL}" alt="">` : ''}
          ${s.name}
        </div></td>
        <td><strong>${s.xp||0}</strong></td>
        <td>
          <div class="dash-progress-bar"><div class="dash-progress-fill" style="width:${studiedPct}%"></div></div>
          <span style="font-size:.75rem;margin-left:4px;">${studied}/${totalPoints}</span>
        </td>
        <td>
          <div class="dash-progress-bar"><div class="dash-progress-fill" style="width:${practicedPct}%"></div></div>
          <span style="font-size:.75rem;margin-left:4px;">${practiced}/${totalPoints}</span>
        </td>
        <td>${quizzed}회</td>
        <td style="font-size:.8rem;color:var(--text3);">${lastLogin}</td>
      </tr>`;
    }
    html += '</tbody></table></div>';
    html += '<div id="dashDetailArea"></div>';
    wrap.innerHTML = html;

    // 학생 클릭 → 상세 진도
    wrap.querySelectorAll('.dash-student-row').forEach(row=>{
      row.addEventListener('click', async ()=>{
        const uid = row.dataset.uid;
        const students2 = await getAllStudents();
        const stu = students2.find(s=>s.id===uid);
        const progress = await getStudentProgress(uid);
        renderStudentDetail(stu, progress);
      });
    });
  } catch(e){
    wrap.innerHTML=`<div class="empty-state"><div class="empty-icon">⚠️</div><p>데이터 로드 실패: ${e.message}</p></div>`;
  }
}

function renderStudentDetail(student, progress){
  const area = $('dashDetailArea');
  if(!area) return;
  const allPts = getAllPoints();
  let html = `<div class="dash-detail-card">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
      ${student.photoURL ? `<img src="${student.photoURL}" style="width:40px;height:40px;border-radius:50%;">` : ''}
      <div>
        <div style="font-weight:700;font-size:1.05rem;">${student.name}</div>
        <div style="font-size:.82rem;color:var(--text2);">${student.email||''} | XP: ${student.xp||0} | Streak: ${student.streak||0}일</div>
      </div>
    </div>
    <div style="font-weight:700;margin-bottom:8px;">포인트별 진도</div>
    <div class="dash-point-grid">`;

  allPts.forEach(pt=>{
    const key = `point_${String(pt.id).padStart(2,'0')}`;
    const p = progress[key];
    let cls = 'none', label = `P${pt.id}`;
    if(p){
      if(p.studied && p.practiced) { cls = 'done'; label += ' ✓'; }
      else { cls = 'partial'; label += p.studied ? ' 📖' : ' ✏️'; }
    }
    html += `<div class="dash-point-chip ${cls}" title="${pt.title}">${label}</div>`;
  });

  html += `</div>
    <div style="margin-top:12px;font-size:.82rem;color:var(--text3);">
      ✓ = 학습+연습 완료 | 📖 = 학습만 | ✏️ = 연습만 | 빈칸 = 미학습
    </div>
  </div>`;
  area.innerHTML = html;
  area.scrollIntoView({ behavior: 'smooth' });
}
