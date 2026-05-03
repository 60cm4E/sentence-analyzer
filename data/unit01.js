// Unit 01 - 문장의 형식 (Points 01-05)
// 교재 문법 공식 참고, 오리지널 연습문장

const UNIT_01 = {
  id: 1,
  title: '문장의 형식',
  chapter: { id: 1, title: '문장의 구조' },
  points: [
    // ── Point 01: 주어+동사 (S+V) ──
    {
      id: 1,
      title: '주어+동사 (S+V)',
      formula: 'S + V',
      note: 'S이[가] V하다 / S은[는] V이다 / S+V+M: S는 M하게/하며/에 V하다',
      typicalVerbs: 'happen, appear, disappear, last, work, rise, fall, stop, arrive, get up, stand up, run away, take off, fall down, break down 등',
      examples: [
        {
          id:'ex011',
          tokens:[
            {t:'The bell',  r:['S']},
            {t:'rang',      r:['V']},
            {t:'.',         r:['PUNC']},
          ],
          translation:'종이 울렸다.',
        },
        {
          id:'ex012',
          tokens:[
            {t:'The museum', r:['S']},
            {t:'closes',     r:['V']},
            {t:'at 5 p.m.',  r:['M']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'그 박물관은 오후 5시에 닫는다.',
        },
      ],
      practice: [
        {
          id:'pr011',
          tokens:[
            {t:'The sun',    r:['S']},
            {t:'rises',      r:['V']},
            {t:'in the east',r:['M']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'태양은 동쪽에서 뜬다.',
        },
        {
          id:'pr012',
          tokens:[
            {t:'My alarm',   r:['S']},
            {t:'went off',   r:['V']},
            {t:'at 7 a.m.',  r:['M']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'내 알람이 오전 7시에 울렸다.',
        },
        {
          id:'pr013',
          tokens:[
            {t:'The airplane', r:['S']},
            {t:'took off',     r:['V']},
            {t:'on time',      r:['M']},
            {t:'.',            r:['PUNC']},
          ],
          translation:'비행기가 정시에 이륙했다.',
        },
        {
          id:'pr014',
          tokens:[
            {t:'The baby',    r:['S']},
            {t:'cried',       r:['V']},
            {t:'all night',   r:['M']},
            {t:'.',           r:['PUNC']},
          ],
          translation:'아기가 밤새 울었다.',
        },
      ],
      quiz: [
        { id:'qz011', sentence:'The lights went ___. (꺼지다)', choices:['off','of','on','in'], answer:0, hint:'go off = 꺼지다, 울리다' },
        { id:'qz012', sentence:'The accident ___ yesterday. (발생하다)', choices:['happened','was happened','happening','happen'], answer:0, hint:'happen은 자동사로 수동태 불가' },
      ],
    },

    // ── Point 02: 주어+동사+주격보어 (S+V+SC) ──
    {
      id: 2,
      title: '주어+동사+주격보어 (S+V+SC)',
      formula: 'S + V + SC',
      note: 'S는 SC이다 / S는 SC하게 V하다. SC로 명사(구), 대명사, 형용사(구)가 오며, 부사는 쓸 수 없다.',
      typicalVerbs: '~이다: be, keep, stay, remain / ~하게 보이다: look, seem, appear / ~이 되다: become, get, turn / ~하게 느끼다: taste, feel, sound, smell',
      examples: [
        {
          id:'ex021',
          tokens:[
            {t:'She',        r:['S']},
            {t:'is',         r:['V']},
            {t:'a teacher',  r:['SC']},
            {t:'/',          r:['DIV']},
            {t:'at a school',r:['M']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'그녀는 학교의 선생님이다.',
        },
        {
          id:'ex022',
          tokens:[
            {t:'The cookies', r:['S']},
            {t:'taste',       r:['V']},
            {t:'sweet',       r:['SC']},
            {t:'.',           r:['PUNC']},
          ],
          translation:'그 쿠키는 달콤한 맛이다.',
        },
      ],
      practice: [
        {
          id:'pr021',
          tokens:[
            {t:'He',        r:['S']},
            {t:'became',    r:['V']},
            {t:'a doctor',  r:['SC']},
            {t:'last year', r:['M']},
            {t:'.',         r:['PUNC']},
          ],
          translation:'그는 작년에 의사가 되었다.',
        },
        {
          id:'pr022',
          tokens:[
            {t:'Your voice', r:['S']},
            {t:'sounds',     r:['V']},
            {t:'strange',    r:['SC']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'네 목소리가 이상하게 들린다.',
        },
        {
          id:'pr023',
          tokens:[
            {t:'The soup',   r:['S']},
            {t:'smells',     r:['V']},
            {t:'wonderful',  r:['SC']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'그 수프는 훌륭한 냄새가 난다.',
        },
        {
          id:'pr024',
          tokens:[
            {t:'She',        r:['S']},
            {t:'remained',   r:['V']},
            {t:'calm',       r:['SC']},
            {t:'during the test', r:['M']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'그녀는 시험 중에 침착한 상태를 유지했다.',
        },
      ],
      quiz: [
        { id:'qz021', sentence:'The milk smells ___. (나쁜)', choices:['bad','badly','worse','worst'], answer:0, hint:'감각동사(smell) 뒤에는 형용사(SC)가 온다. 부사(badly) 불가' },
        { id:'qz022', sentence:'She looks ___ today. (행복한)', choices:['happy','happily','happiness','happier'], answer:0, hint:'look 뒤에 주격보어로 형용사가 와야 한다' },
      ],
    },

    // ── Point 03: 주어+동사+목적어 (S+V+O) ──
    {
      id: 3,
      title: '주어+동사+목적어 (S+V+O)',
      formula: 'S + V + O',
      note: 'S는 O를 V하다. O로는 명사(구), 대명사 등이 쓰인다. <동사+부사/전치사> 구문(구동사)도 S+V+O 구조.',
      typicalVerbs: 'get over(극복하다), give up(포기하다), turn on/off(켜다/끄다), look after(돌보다), turn in(제출하다)',
      examples: [
        {
          id:'ex031',
          tokens:[
            {t:'She',         r:['S']},
            {t:'studies',     r:['V']},
            {t:'English',     r:['O']},
            {t:'/',           r:['DIV']},
            {t:'with her friends', r:['M']},
            {t:'.',           r:['PUNC']},
          ],
          translation:'그녀는 친구들과 영어를 공부한다.',
        },
        {
          id:'ex032',
          tokens:[
            {t:'I',           r:['S']},
            {t:'looked after',r:['V']},
            {t:'my nephew',   r:['O']},
            {t:'/',           r:['DIV']},
            {t:'for my sister',r:['M']},
            {t:'.',           r:['PUNC']},
          ],
          translation:'나는 누나를 위해 내 조카를 돌보았다.',
        },
      ],
      practice: [
        {
          id:'pr031',
          tokens:[
            {t:'He',          r:['S']},
            {t:'likes',       r:['V']},
            {t:'chocolate',   r:['O']},
            {t:'very much',   r:['M']},
            {t:'.',           r:['PUNC']},
          ],
          translation:'그는 초콜릿을 매우 좋아한다.',
        },
        {
          id:'pr032',
          tokens:[
            {t:'We',          r:['S']},
            {t:'turned in',   r:['V']},
            {t:'our homework',r:['O']},
            {t:'on Friday',   r:['M']},
            {t:'.',           r:['PUNC']},
          ],
          translation:'우리는 금요일에 숙제를 제출했다.',
        },
        {
          id:'pr033',
          tokens:[
            {t:'She',         r:['S']},
            {t:'gave up',     r:['V']},
            {t:'her dream',   r:['O']},
            {t:'.',           r:['PUNC']},
          ],
          translation:'그녀는 자신의 꿈을 포기했다.',
        },
        {
          id:'pr034',
          tokens:[
            {t:'The manager', r:['S']},
            {t:'will train',  r:['V']},
            {t:'the new staff',r:['O']},
            {t:'next week',   r:['M']},
            {t:'.',           r:['PUNC']},
          ],
          translation:'매니저가 다음 주에 신입 직원을 훈련시킬 것이다.',
        },
      ],
      quiz: [
        { id:'qz031', sentence:'She relies ___ her parents a lot.', choices:['on','in','at','to'], answer:0, hint:'rely on = ~에 의지하다 (구동사 전치사)' },
        { id:'qz032', sentence:'He got ___ the breakup with his girlfriend.', choices:['over','up','off','in'], answer:0, hint:'get over = ~을 극복하다' },
      ],
    },

    // ── Point 04: 주어+동사+간접목적어+직접목적어 (S+V+IO+DO) ──
    {
      id: 4,
      title: '주어+동사+간접목적어+직접목적어 (S+V+IO+DO)',
      formula: 'S + V + IO + DO',
      note: 'S는 IO에게 DO를 V하다/V해 주다. IO: ~에게, DO: ~을[를].',
      typicalVerbs: 'give, send, show, teach, lend, offer, bring, buy, make, cook, ask, cost 등',
      examples: [
        {
          id:'ex041',
          tokens:[
            {t:'I',           r:['S']},
            {t:'lent',        r:['V']},
            {t:'my friend',   r:['IO']},
            {t:'my umbrella', r:['DO']},
            {t:'.',           r:['PUNC']},
          ],
          translation:'나는 내 친구에게 여분의 내 우산을 빌려주었다.',
        },
        {
          id:'ex042',
          tokens:[
            {t:'My dad',     r:['S']},
            {t:'cooked',     r:['V']},
            {t:'our family', r:['IO']},
            {t:'a beef stew',r:['DO']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'나의 아빠는 우리 가족에게 소고기 스튜를 요리해 주셨다.',
        },
      ],
      practice: [
        {
          id:'pr041',
          tokens:[
            {t:'She',        r:['S']},
            {t:'bought',     r:['V']},
            {t:'her mom',    r:['IO']},
            {t:'a new bag',  r:['DO']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'그녀는 어머니에게 새 가방을 사 드렸다.',
        },
        {
          id:'pr042',
          tokens:[
            {t:'The teacher', r:['S']},
            {t:'showed',      r:['V']},
            {t:'us',          r:['IO']},
            {t:'a short video',r:['DO']},
            {t:'.',           r:['PUNC']},
          ],
          translation:'선생님은 우리에게 짧은 영상을 보여주셨다.',
        },
        {
          id:'pr043',
          tokens:[
            {t:'He',          r:['S']},
            {t:'asked',       r:['V']},
            {t:'me',          r:['IO']},
            {t:'a question',  r:['DO']},
            {t:'.',           r:['PUNC']},
          ],
          translation:'그는 나에게 질문을 했다.',
        },
        {
          id:'pr044',
          tokens:[
            {t:'My sister',  r:['S']},
            {t:'taught',     r:['V']},
            {t:'me',         r:['IO']},
            {t:'Korean',     r:['DO']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'내 누나가 나에게 한국어를 가르쳐 주었다.',
        },
      ],
      quiz: [
        { id:'qz041', sentence:'She gave ___ a present. (그에게)', choices:['him','his','he','himself'], answer:0, hint:'IO(간접목적어)는 대명사의 목적격이 온다' },
        { id:'qz042', sentence:'The trip cost ___ a lot of money.', choices:['us','our','we','ours'], answer:0, hint:'cost는 S+V+IO+DO 구조 (S가 IO에게 DO만큼 비용이 들게 하다)' },
      ],
    },

    // ── Point 05: 주어+동사+목적어+목적격보어 (S+V+O+OC) ──
    {
      id: 5,
      title: '주어+동사+목적어+목적격보어 (S+V+O+OC)',
      formula: 'S + V + O + OC',
      note: 'S는 O를 OC하게/되게 V하다 / S는 O를 OC라고 V하다. OC로 명사, 형용사 등이 쓰인다.',
      typicalVerbs: 'make, keep, drive + OC(형용사) / call, name, elect + OC(명사) / find, consider + OC(형용사)',
      examples: [
        {
          id:'ex051',
          tokens:[
            {t:'My family',  r:['S']},
            {t:'named',      r:['V']},
            {t:'our dog',    r:['O']},
            {t:'Max',        r:['OC']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'나의 가족은 우리 개를 Max라고 이름 지었다.',
        },
        {
          id:'ex052',
          tokens:[
            {t:'Her smile',  r:['S']},
            {t:'always made',r:['V']},
            {t:'him',        r:['O']},
            {t:'happy',      r:['OC']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'그녀의 미소는 항상 그를 행복하게 했다.',
        },
      ],
      practice: [
        {
          id:'pr051',
          tokens:[
            {t:'We',         r:['S']},
            {t:'call',       r:['V']},
            {t:'our teacher',r:['O']},
            {t:'"The Legend"',r:['OC']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'우리는 우리 선생님을 "레전드"라고 부른다.',
        },
        {
          id:'pr052',
          tokens:[
            {t:'The students', r:['S']},
            {t:'consider',     r:['V']},
            {t:'math',         r:['O']},
            {t:'difficult',    r:['OC']},
            {t:'.',            r:['PUNC']},
          ],
          translation:'학생들은 수학을 어렵다고 생각한다.',
        },
        {
          id:'pr053',
          tokens:[
            {t:'The loud noise',r:['S']},
            {t:'drives',       r:['V']},
            {t:'me',           r:['O']},
            {t:'crazy',        r:['OC']},
            {t:'.',            r:['PUNC']},
          ],
          translation:'그 큰 소음이 나를 미치게 만든다.',
        },
        {
          id:'pr054',
          tokens:[
            {t:'They',        r:['S']},
            {t:'elected',     r:['V']},
            {t:'her',         r:['O']},
            {t:'class president',r:['OC']},
            {t:'.',           r:['PUNC']},
          ],
          translation:'그들은 그녀를 반장으로 선출했다.',
        },
      ],
      quiz: [
        { id:'qz051', sentence:'The news made everyone ___. (놀란)', choices:['surprised','surprisingly','surprising','surprise'], answer:0, hint:'make + O + OC: OC에 형용사가 와서 목적어를 설명한다' },
        { id:'qz052', sentence:'They named the baby ___. (Jake)', choices:['Jake','as Jake','to Jake','for Jake'], answer:0, hint:'name + O + OC: OC에 명사가 바로 온다 (전치사 없음)' },
      ],
    },
  ],
};

registerUnit(UNIT_01);
