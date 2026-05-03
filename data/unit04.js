// Unit 04 - 조동사 (Points 14-18)
const UNIT_04 = {
  id: 4,
  title: '조동사',
  chapter: { id: 2, title: '동사의 역할' },
  points: [
    {
      id: 14,
      title: 'can, may (가능, 허가)',
      formula: 'can/may + V원형',
      note: 'can: ~할 수 있다(가능), ~해도 된다(허가) / may: ~해도 된다(허가), ~일지도 모른다(추측). 조동사 뒤에는 반드시 동사원형!',
      typicalVerbs: 'can/could/be able to (가능) / may/can/could (허가)',
      examples: [
        {id:'ex141', tokens:[{t:'She',r:['S']},{t:'can speak',r:['V']},{t:'three languages',r:['O']},{t:'.',r:['PUNC']}], translation:'그녀는 세 가지 언어를 말할 수 있다.'},
        {id:'ex142', tokens:[{t:'You',r:['S']},{t:'may use',r:['V']},{t:'my phone',r:['O']},{t:'.',r:['PUNC']}], translation:'내 휴대폰을 사용해도 됩니다.'},
      ],
      practice: [
        {id:'pr141', tokens:[{t:'He',r:['S']},{t:'can swim',r:['V']},{t:'very fast',r:['M']},{t:'.',r:['PUNC']}], translation:'그는 매우 빠르게 수영할 수 있다.'},
        {id:'pr142', tokens:[{t:'You',r:['S']},{t:'may not enter',r:['V']},{t:'this room',r:['O']},{t:'.',r:['PUNC']}], translation:'이 방에 들어가면 안 됩니다.'},
        {id:'pr143', tokens:[{t:'She',r:['S']},{t:'could play',r:['V']},{t:'the guitar',r:['O']},{t:'when she was young',r:['M']},{t:'.',r:['PUNC']}], translation:'그녀는 어릴 때 기타를 칠 수 있었다.'},
      ],
      quiz: [
        {id:'qz141', sentence:'___ I borrow your pen?', choices:['Can','Do','Am','Have'], answer:0, hint:'허가를 구할 때 Can I ~? 사용'},
        {id:'qz142', sentence:'She ___ speak Korean when she was five.', choices:["couldn't","can't","may not","won't"], answer:0, hint:'과거의 능력 부정 → could not'},
      ],
    },
    {
      id: 15,
      title: 'must, should (의무)',
      formula: 'must/should + V원형',
      note: 'must: ~해야 한다(의무), must not: ~해서는 안 된다(금지) / should: ~해야 한다, ~하는 게 좋다(의무·충고) / have to: ~해야 한다',
      examples: [
        {id:'ex151', tokens:[{t:'You',r:['S']},{t:'must wear',r:['V']},{t:'a seatbelt',r:['O']},{t:'.',r:['PUNC']}], translation:'너는 안전벨트를 매야 한다.'},
        {id:'ex152', tokens:[{t:'We',r:['S']},{t:'should respect',r:['V']},{t:'our elders',r:['O']},{t:'.',r:['PUNC']}], translation:'우리는 어른들을 존경해야 한다.'},
      ],
      practice: [
        {id:'pr151', tokens:[{t:'Students',r:['S']},{t:'must not use',r:['V']},{t:'phones',r:['O']},{t:'in class',r:['M']},{t:'.',r:['PUNC']}], translation:'학생들은 수업 중에 휴대폰을 사용해서는 안 된다.'},
        {id:'pr152', tokens:[{t:'You',r:['S']},{t:'should exercise',r:['V']},{t:'every day',r:['M']},{t:'.',r:['PUNC']}], translation:'너는 매일 운동해야 한다.'},
      ],
      quiz: [
        {id:'qz151', sentence:'You ___ not run in the hallway.', choices:['must','can','will','may'], answer:0, hint:'금지: must not = ~해서는 안 된다'},
        {id:'qz152', sentence:'You ___ see a doctor. You look pale.', choices:['should','must not','can','will'], answer:0, hint:'충고: should = ~하는 게 좋다'},
      ],
    },
    {
      id: 16,
      title: 'must, cannot (추측)',
      formula: 'must/may/might/could/cannot + V원형',
      note: '강한 확신: must(~임이 틀림없다), cannot(~일 리 없다) / 약한 추측: may/might/could(~일지도 모른다)',
      examples: [
        {id:'ex161', tokens:[{t:'He',r:['S']},{t:'must be',r:['V']},{t:'tired',r:['SC']},{t:'.',r:['PUNC']}], translation:'그는 피곤한 게 틀림없다.'},
      ],
      practice: [
        {id:'pr161', tokens:[{t:'She',r:['S']},{t:'cannot be',r:['V']},{t:'the thief',r:['SC']},{t:'.',r:['PUNC']}], translation:'그녀가 도둑일 리 없다.'},
        {id:'pr162', tokens:[{t:'It',r:['S']},{t:'might rain',r:['V']},{t:'tomorrow',r:['M']},{t:'.',r:['PUNC']}], translation:'내일 비가 올지도 모른다.'},
      ],
      quiz: [
        {id:'qz161', sentence:'She ___ be a doctor. She works at a hospital.', choices:['must','can','may not','should'], answer:0, hint:'강한 확신: must be = ~임이 틀림없다'},
        {id:'qz162', sentence:'He ___ be at home. I just saw him at school.', choices:["can't",'must','should','may'], answer:0, hint:"can't be = ~일 리 없다"},
      ],
    },
    {
      id: 17,
      title: '조동사 + have p.p.',
      formula: '조동사 + have p.p.',
      note: 'must have p.p.: ~했음이 틀림없다 / may have p.p.: ~했을지도 모른다 / should have p.p.: ~했어야 했는데(안 했다) / can\'t have p.p.: ~했을 리 없다',
      examples: [
        {id:'ex171', tokens:[{t:'She',r:['S']},{t:'must have forgotten',r:['V']},{t:'the meeting',r:['O']},{t:'.',r:['PUNC']}], translation:'그녀는 회의를 잊었음이 틀림없다.'},
      ],
      practice: [
        {id:'pr171', tokens:[{t:'He',r:['S']},{t:'should have studied',r:['V']},{t:'harder',r:['M']},{t:'.',r:['PUNC']}], translation:'그는 더 열심히 공부했어야 했다.'},
        {id:'pr172', tokens:[{t:'They',r:['S']},{t:'may have left',r:['V']},{t:'already',r:['M']},{t:'.',r:['PUNC']}], translation:'그들은 이미 떠났을지도 모른다.'},
      ],
      quiz: [
        {id:'qz171', sentence:'You ___ have told me earlier! (말했어야 했다)', choices:['should','must','can','may'], answer:0, hint:'과거에 대한 후회: should have p.p.'},
        {id:'qz172', sentence:'She ___ have been at the party. I saw her there.', choices:['must','should','can','would'], answer:0, hint:'과거에 대한 강한 확신: must have p.p.'},
      ],
    },
    {
      id: 18,
      title: '여러 가지 조동사 표현',
      formula: 'would / used to / had better / would rather',
      note: 'would: ~하곤 했다(과거 습관) / used to: ~이었다, ~하곤 했다 / had better: ~하는 편이 낫다(충고) / would rather: ~하는 것이 좋다(선택) / would like to: ~하고 싶다(소망)',
      examples: [
        {id:'ex181', tokens:[{t:'I',r:['S']},{t:'used to play',r:['V']},{t:'soccer',r:['O']},{t:'after school',r:['M']},{t:'.',r:['PUNC']}], translation:'나는 방과 후에 축구를 하곤 했다.'},
      ],
      practice: [
        {id:'pr181', tokens:[{t:'You',r:['S']},{t:'had better leave',r:['V']},{t:'now',r:['M']},{t:'.',r:['PUNC']}], translation:'지금 떠나는 편이 낫다.'},
        {id:'pr182', tokens:[{t:'I',r:['S']},{t:"would rather stay",r:['V']},{t:'home',r:['M']},{t:'.',r:['PUNC']}], translation:'나는 집에 있는 것이 좋겠다.'},
      ],
      quiz: [
        {id:'qz181', sentence:'I ___ to live in Busan. (과거에 살았다)', choices:['used','would','had better','am used'], answer:0, hint:'과거의 상태: used to = ~이었다'},
        {id:'qz182', sentence:"You ___ better hurry up.", choices:['had','would','should','could'], answer:0, hint:'충고: had better = ~하는 편이 낫다'},
      ],
    },
  ],
};

registerUnit(UNIT_04);
