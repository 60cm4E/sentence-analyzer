// Unit 05 - 능동태와 수동태 (Points 19-23)
const UNIT_05 = {
  id: 5,
  title: '능동태와 수동태',
  chapter: { id: 2, title: '동사의 역할' },
  points: [
    {
      id: 19,
      title: 'be p.p. (수동태)',
      formula: 'S + be p.p. (+ by O\')',
      note: '수동태: S가 V되다/당하다/받다. 능동태의 O가 수동태의 S가 된다. 행위자가 중요하지 않거나 모를 때 by O\'는 생략.',
      examples: [
        {id:'ex191', tokens:[{t:'English',r:['S']},{t:'is spoken',r:['V']},{t:'in many countries',r:['M']},{t:'.',r:['PUNC']}], translation:'영어는 많은 나라에서 말해진다.'},
        {id:'ex192', tokens:[{t:'The window',r:['S']},{t:'was broken',r:['V']},{t:'by a ball',r:['M']},{t:'.',r:['PUNC']}], translation:'그 창문은 공에 의해 깨졌다.'},
      ],
      practice: [
        {id:'pr191', tokens:[{t:'This song',r:['S']},{t:'is loved',r:['V']},{t:'by everyone',r:['M']},{t:'.',r:['PUNC']}], translation:'이 노래는 모두에게 사랑받는다.'},
        {id:'pr192', tokens:[{t:'The cake',r:['S']},{t:'was made',r:['V']},{t:'by my sister',r:['M']},{t:'.',r:['PUNC']}], translation:'그 케이크는 내 누나에 의해 만들어졌다.'},
      ],
      quiz: [
        {id:'qz191', sentence:'The book ___ written by a famous author.', choices:['was','did','has','does'], answer:0, hint:'수동태: be + p.p.'},
        {id:'qz192', sentence:'English ___ in Australia.', choices:['is spoken','speaks','spoke','speaking'], answer:0, hint:'주어(English)가 행위를 받음 → 수동태'},
      ],
    },
    {
      id: 20,
      title: '수동태의 시제, 조동사+수동태',
      formula: 'was/were p.p. / will be p.p. / have been p.p. / 조동사 + be p.p.',
      note: '과거: was/were p.p. / 미래: will be p.p. / 완료: have/has been p.p. / 조동사: can/must/should be p.p.',
      examples: [
        {id:'ex201', tokens:[{t:'The bridge',r:['S']},{t:'will be built',r:['V']},{t:'next year',r:['M']},{t:'.',r:['PUNC']}], translation:'그 다리는 내년에 지어질 것이다.'},
      ],
      practice: [
        {id:'pr201', tokens:[{t:'This problem',r:['S']},{t:'can be solved',r:['V']},{t:'easily',r:['M']},{t:'.',r:['PUNC']}], translation:'이 문제는 쉽게 풀릴 수 있다.'},
        {id:'pr202', tokens:[{t:'The report',r:['S']},{t:'has been submitted',r:['V']},{t:'already',r:['M']},{t:'.',r:['PUNC']}], translation:'그 보고서는 이미 제출되었다.'},
      ],
      quiz: [
        {id:'qz201', sentence:'The homework must ___ by tomorrow.', choices:['be finished','finish','finished','be finishing'], answer:0, hint:'조동사+수동태: 조동사 + be p.p.'},
        {id:'qz202', sentence:'The building ___ in 1990.', choices:['was built','built','is built','has built'], answer:0, hint:'과거 시점(1990) → 과거 수동태: was p.p.'},
      ],
    },
    {
      id: 21,
      title: 'be p.p. + 목적어(O)',
      formula: 'S + be p.p. + O (+ by O\')',
      note: '4형식(S+V+IO+DO) 수동태. IO가 주어가 되면 be p.p. 뒤에 DO가 남고, DO가 주어가 되면 be p.p. 뒤에 to/for O가 온다.',
      examples: [
        {id:'ex211', tokens:[{t:'She',r:['S']},{t:'was given',r:['V']},{t:'a present',r:['O']},{t:'by her friend',r:['M']},{t:'.',r:['PUNC']}], translation:'그녀는 친구에 의해 선물을 받았다.'},
      ],
      practice: [
        {id:'pr211', tokens:[{t:'He',r:['S']},{t:'was taught',r:['V']},{t:'math',r:['O']},{t:'by Mr. Kim',r:['M']},{t:'.',r:['PUNC']}], translation:'그는 김 선생님에 의해 수학을 배웠다.'},
        {id:'pr212', tokens:[{t:'A new phone',r:['S']},{t:'was bought',r:['V']},{t:'for her',r:['M']},{t:'.',r:['PUNC']}], translation:'새 휴대폰이 그녀를 위해 사 주어졌다.'},
      ],
      quiz: [
        {id:'qz211', sentence:'I was ___ a chance to try again.', choices:['given','gave','give','giving'], answer:0, hint:'4형식 수동태: be p.p. + 남은 목적어'},
        {id:'qz212', sentence:'A letter was sent ___ her yesterday.', choices:['to','for','by','with'], answer:0, hint:'send의 수동태에서 DO가 주어 → to + IO'},
      ],
    },
    {
      id: 22,
      title: 'be p.p. + 보어(C)',
      formula: 'S + be p.p. + C (+ by O\')',
      note: '5형식(S+V+O+OC) 수동태. be p.p. 뒤에 OC가 그대로 남는다. S는 C하게/라고 V되다/당하다.',
      examples: [
        {id:'ex221', tokens:[{t:'He',r:['S']},{t:'was called',r:['V']},{t:'"Genius"',r:['SC']},{t:'by his friends',r:['M']},{t:'.',r:['PUNC']}], translation:'그는 친구들에 의해 "천재"라고 불렸다.'},
      ],
      practice: [
        {id:'pr221', tokens:[{t:'She',r:['S']},{t:'was elected',r:['V']},{t:'class president',r:['SC']},{t:'.',r:['PUNC']}], translation:'그녀는 반장으로 선출되었다.'},
        {id:'pr222', tokens:[{t:'The room',r:['S']},{t:'was kept',r:['V']},{t:'clean',r:['SC']},{t:'.',r:['PUNC']}], translation:'그 방은 깨끗하게 유지되었다.'},
      ],
      quiz: [
        {id:'qz221', sentence:'He was named ___ of the year. (올해의 선수)', choices:['Player','as Player','to Player','for Player'], answer:0, hint:'5형식 수동태: be p.p. + OC(명사) 바로 옴'},
        {id:'qz222', sentence:'The door was painted ___. (파란색으로)', choices:['blue','bluely','blued','bluing'], answer:0, hint:'be p.p. + OC(형용사)'},
      ],
    },
    {
      id: 23,
      title: 'by 이외의 전치사를 쓰는 수동태',
      formula: 'be p.p. + 전치사',
      note: '감정·상태를 나타내는 수동태: be satisfied with(~에 만족하다), be interested in(~에 흥미 있다), be known for(~로 유명하다), be filled with(~로 가득 차다), be scared of(~를 두려워하다)',
      typicalVerbs: 'be satisfied with / be worried about / be interested in / be known for / be known as / be filled with / be covered with / be scared of',
      examples: [
        {id:'ex231', tokens:[{t:'She',r:['S']},{t:'is interested',r:['V']},{t:'in science',r:['M']},{t:'.',r:['PUNC']}], translation:'그녀는 과학에 흥미가 있다.'},
      ],
      practice: [
        {id:'pr231', tokens:[{t:'We',r:['S']},{t:'are satisfied',r:['V']},{t:'with the result',r:['M']},{t:'.',r:['PUNC']}], translation:'우리는 결과에 만족한다.'},
        {id:'pr232', tokens:[{t:'The ground',r:['S']},{t:'was covered',r:['V']},{t:'with snow',r:['M']},{t:'.',r:['PUNC']}], translation:'땅이 눈으로 덮여 있었다.'},
      ],
      quiz: [
        {id:'qz231', sentence:'I am interested ___ Korean history.', choices:['in','by','with','for'], answer:0, hint:'be interested in = ~에 흥미가 있다'},
        {id:'qz232', sentence:'She is known ___ her beautiful voice.', choices:['for','as','by','with'], answer:0, hint:'be known for = ~로 유명하다'},
      ],
    },
  ],
};

registerUnit(UNIT_05);
