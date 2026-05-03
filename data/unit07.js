// Unit 07 - v-ing (동명사) (Points 29-30)
const UNIT_07 = {
  id: 7,
  title: 'v-ing (동명사)',
  chapter: { id: 3, title: 'to-v / v-ing / p.p.' },
  points: [
    {id:29, title:'주어·목적어·보어로 쓰이는 v-ing', formula:'V-ing → S, O, C 역할',
      note:'v-ing가 명사 역할: S(~하는 것은), O(~하는 것을), SC(~하기, ~하는 것). O로 v-ing만: avoid, enjoy, finish, give up, practice / O로 to-v만: agree, decide, expect, plan, want, wish',
      examples:[
        {id:'ex291', tokens:[{t:'Swimming',r:['S']},{t:'is',r:['V']},{t:'good exercise',r:['SC']},{t:'.',r:['PUNC']}], translation:'수영하는 것은 좋은 운동이다.'},
        {id:'ex292', tokens:[{t:'I',r:['S']},{t:'enjoy',r:['V']},{t:'reading books',r:['O']},{t:'.',r:['PUNC']}], translation:'나는 책 읽는 것을 즐긴다.'},
      ],
      practice:[
        {id:'pr291', tokens:[{t:'His hobby',r:['S']},{t:'is',r:['V']},{t:'collecting stamps',r:['SC']},{t:'.',r:['PUNC']}], translation:'그의 취미는 우표를 수집하는 것이다.'},
        {id:'pr292', tokens:[{t:'She',r:['S']},{t:'finished',r:['V']},{t:'writing her essay',r:['O']},{t:'.',r:['PUNC']}], translation:'그녀는 에세이 쓰는 것을 끝냈다.'},
        {id:'pr293', tokens:[{t:'Playing games',r:['S']},{t:'all day',r:['M']},{t:'is',r:['V']},{t:'not healthy',r:['SC']},{t:'.',r:['PUNC']}], translation:'하루 종일 게임하는 것은 건강하지 않다.'},
      ],
      quiz:[
        {id:'qz291', sentence:'She enjoys ___ to music.', choices:['listening','to listen','listen','listened'], answer:0, hint:'enjoy는 v-ing만 목적어로 취한다'},
        {id:'qz292', sentence:'___ early is a good habit.', choices:['Waking up','Wake up','To waking','Waked up'], answer:0, hint:'주어 자리에 동명사(v-ing)'},
      ],
    },
    {id:30, title:'v-ing를 쓰는 주요 표현', formula:'전치사 + V-ing / 관용 표현',
      note:'전치사 뒤에는 반드시 v-ing: be good at, look forward to, be used to, be interested in, without v-ing, by v-ing / 관용표현: go v-ing, be busy v-ing, spend 시간 v-ing, feel like v-ing, It is no use v-ing',
      examples:[
        {id:'ex301', tokens:[{t:'She',r:['S']},{t:'is good at',r:['V']},{t:'playing the piano',r:['O']},{t:'.',r:['PUNC']}], translation:'그녀는 피아노 치는 것을 잘한다.'},
      ],
      practice:[
        {id:'pr301', tokens:[{t:'I',r:['S']},{t:'look forward to',r:['V']},{t:'meeting you',r:['O']},{t:'.',r:['PUNC']}], translation:'나는 당신을 만나기를 기대한다.'},
        {id:'pr302', tokens:[{t:'He',r:['S']},{t:'left',r:['V']},{t:'without saying goodbye',r:['M']},{t:'.',r:['PUNC']}], translation:'그는 인사 없이 떠났다.'},
      ],
      quiz:[
        {id:'qz301', sentence:'I look forward to ___ from you.', choices:['hearing','hear','heard','to hear'], answer:0, hint:'look forward to + v-ing (to는 전치사!)'},
        {id:'qz302', sentence:'She is busy ___ for the test.', choices:['preparing','prepare','to prepare','prepared'], answer:0, hint:'be busy + v-ing = ~하느라 바쁘다'},
      ],
    },
  ],
};
registerUnit(UNIT_07);
