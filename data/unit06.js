// Unit 06 - to-v (to부정사) (Points 24-28)
const UNIT_06 = {
  id: 6,
  title: 'to-v (to부정사)',
  chapter: { id: 3, title: 'to-v / v-ing / p.p.' },
  points: [
    {id:24, title:'명사 역할을 하는 to-v', formula:'to-V → S, C, O 역할',
      note:'to-v가 명사 역할: S(~하는 것은), C(~하기, ~하는 것), O(~하는[할] 것을). 부정형: not to-v',
      examples:[
        {id:'ex241', tokens:[{t:'To learn English',r:['S']},{t:'is',r:['V']},{t:'important',r:['SC']},{t:'.',r:['PUNC']}], translation:'영어를 배우는 것은 중요하다.'},
        {id:'ex242', tokens:[{t:'She',r:['S']},{t:'wants',r:['V']},{t:'to be a doctor',r:['O']},{t:'.',r:['PUNC']}], translation:'그녀는 의사가 되기를 원한다.'},
      ],
      practice:[
        {id:'pr241', tokens:[{t:'His dream',r:['S']},{t:'is',r:['V']},{t:'to travel the world',r:['SC']},{t:'.',r:['PUNC']}], translation:'그의 꿈은 세계를 여행하는 것이다.'},
        {id:'pr242', tokens:[{t:'I',r:['S']},{t:'decided',r:['V']},{t:'to study abroad',r:['O']},{t:'.',r:['PUNC']}], translation:'나는 유학하기로 결심했다.'},
      ],
      quiz:[
        {id:'qz241', sentence:'___ a new language is fun.', choices:['To learn','Learn','Learned','Learning to'], answer:0, hint:'주어 자리에 to-v(명사적 용법)'},
        {id:'qz242', sentence:'She hopes ___ a singer someday.', choices:['to become','becoming','become','became'], answer:0, hint:'hope는 to-v만 목적어로 취함'},
      ],
    },
    {id:25, title:'형용사 역할을 하는 to-v', formula:'명사/대명사 + to-V',
      note:'to-v가 명사/대명사 뒤에서 수식. "~할, ~하는"으로 해석. be동사+to-v는 주어의 상태를 서술.',
      examples:[
        {id:'ex251', tokens:[{t:'I',r:['S']},{t:'need',r:['V']},{t:'something',r:['O']},{t:'to drink',r:['M']},{t:'.',r:['PUNC']}], translation:'나는 마실 것이 필요하다.'},
      ],
      practice:[
        {id:'pr251', tokens:[{t:'She',r:['S']},{t:'has',r:['V']},{t:'a lot of work',r:['O']},{t:'to do',r:['M']},{t:'.',r:['PUNC']}], translation:'그녀는 해야 할 일이 많다.'},
        {id:'pr252', tokens:[{t:'There is',r:['V']},{t:'no place',r:['S']},{t:'to hide',r:['M']},{t:'.',r:['PUNC']}], translation:'숨을 곳이 없다.'},
      ],
      quiz:[
        {id:'qz251', sentence:'Give me something ___. (먹을)', choices:['to eat','eating','eat','eaten'], answer:0, hint:'something 뒤에서 수식하는 to-v(형용사적 용법)'},
        {id:'qz252', sentence:'I have no time ___ TV.', choices:['to watch','watching','watch','watched'], answer:0, hint:'time을 수식하는 to-v'},
      ],
    },
    {id:26, title:'부사 역할을 하는 to-v', formula:'V/Adj + to-V',
      note:'to-v가 부사 역할: 목적(~하기 위해), 결과(~해서 결국), 감정의 원인(~해서), 판단의 근거(~하다니), 정도(~하기에)',
      examples:[
        {id:'ex261', tokens:[{t:'He',r:['S']},{t:'went',r:['V']},{t:'to the store',r:['M']},{t:'to buy milk',r:['M']},{t:'.',r:['PUNC']}], translation:'그는 우유를 사기 위해 가게에 갔다. (목적)'},
      ],
      practice:[
        {id:'pr261', tokens:[{t:'I',r:['S']},{t:'was happy',r:['V']},{t:'to hear the news',r:['M']},{t:'.',r:['PUNC']}], translation:'나는 그 소식을 듣고 기뻤다. (감정의 원인)'},
        {id:'pr262', tokens:[{t:'She',r:['S']},{t:'grew up',r:['V']},{t:'to be a great scientist',r:['M']},{t:'.',r:['PUNC']}], translation:'그녀는 자라서 훌륭한 과학자가 되었다. (결과)'},
      ],
      quiz:[
        {id:'qz261', sentence:'I went to the library ___ some books.', choices:['to borrow','borrowing','borrow','borrowed'], answer:0, hint:'목적: ~하기 위해 → to-v(부사적 용법)'},
        {id:'qz262', sentence:'She was surprised ___ the truth.', choices:['to learn','learning','learn','learned'], answer:0, hint:'감정의 원인: ~해서 → to-v'},
      ],
    },
    {id:27, title:'의미상 주어, too ~ to-v, enough to-v', formula:'for/of + 목적격 + to-V / too + adj + to-V / adj + enough + to-V',
      note:'의미상 주어: for/of+목적격+to-v / too ~ to-v: 너무 ~해서 to-v할 수 없다 / enough to-v: ~할 만큼 충분히',
      examples:[
        {id:'ex271', tokens:[{t:'It',r:['S']},{t:'is',r:['V']},{t:'easy',r:['SC']},{t:'for me',r:['M']},{t:'to solve this problem',r:['M']},{t:'.',r:['PUNC']}], translation:'나에게 이 문제를 푸는 것은 쉽다.'},
      ],
      practice:[
        {id:'pr271', tokens:[{t:'She',r:['S']},{t:'is',r:['V']},{t:'too young',r:['SC']},{t:'to drive',r:['M']},{t:'.',r:['PUNC']}], translation:'그녀는 운전하기에 너무 어리다.'},
        {id:'pr272', tokens:[{t:'He',r:['S']},{t:'is',r:['V']},{t:'tall enough',r:['SC']},{t:'to reach the shelf',r:['M']},{t:'.',r:['PUNC']}], translation:'그는 선반에 닿을 만큼 충분히 키가 크다.'},
      ],
      quiz:[
        {id:'qz271', sentence:'The box is too heavy ___ me ___ carry.', choices:['for / to','to / for','of / to','for / of'], answer:0, hint:'too ~ for 의미상주어 to-v'},
        {id:'qz272', sentence:'She is old ___ to vote.', choices:['enough','too','very','so'], answer:0, hint:'adj + enough + to-v = ~할 만큼 충분히'},
      ],
    },
    {id:28, title:'S+V+O+OC (to-v/V원형)', formula:'S + V + O + to-V / V원형',
      note:'OC가 to-v인 동사: want, ask, tell, allow, expect, advise + O + to-v / OC가 V원형인 동사: make, let, have + O + V원형 / 지각동사: see, hear, feel + O + V원형/v-ing',
      typicalVerbs: 'want/ask/tell/allow/expect + O + to-v / make/let/have + O + V원형',
      examples:[
        {id:'ex281', tokens:[{t:'My mom',r:['S']},{t:'told',r:['V']},{t:'me',r:['O']},{t:'to clean my room',r:['OC']},{t:'.',r:['PUNC']}], translation:'엄마가 나에게 방을 청소하라고 말했다.'},
        {id:'ex282', tokens:[{t:'She',r:['S']},{t:'made',r:['V']},{t:'him',r:['O']},{t:'laugh',r:['OC']},{t:'.',r:['PUNC']}], translation:'그녀는 그를 웃게 만들었다.'},
      ],
      practice:[
        {id:'pr281', tokens:[{t:'The teacher',r:['S']},{t:'asked',r:['V']},{t:'us',r:['O']},{t:'to be quiet',r:['OC']},{t:'.',r:['PUNC']}], translation:'선생님은 우리에게 조용히 하라고 요청했다.'},
        {id:'pr282', tokens:[{t:'I',r:['S']},{t:'heard',r:['V']},{t:'someone',r:['O']},{t:'call my name',r:['OC']},{t:'.',r:['PUNC']}], translation:'나는 누군가가 내 이름을 부르는 것을 들었다.'},
      ],
      quiz:[
        {id:'qz281', sentence:'My parents want me ___ hard.', choices:['to study','study','studying','studied'], answer:0, hint:'want + O + to-v'},
        {id:'qz282', sentence:'The teacher let us ___ early.', choices:['leave','to leave','leaving','left'], answer:0, hint:'let + O + V원형 (사역동사)'},
      ],
    },
  ],
};
registerUnit(UNIT_06);
