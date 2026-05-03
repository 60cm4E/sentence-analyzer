// Unit 12 - 관계대명사, 관계부사 ② (Points 51-54)
const UNIT_12 = {
  id:12, title:'관계대명사, 관계부사 ②', chapter:{id:4,title:'문장의 확장'},
  points:[
    {id:51, title:'계속적 용법 (콤마+관계사)', formula:', + who/which/where/when',
      note:'콤마+관계사: 선행사를 보충 설명. 제한적 용법(없으면 의미 변함) vs 계속적 용법(추가 정보). that 사용 불가, 생략 불가.',
      examples:[
        {id:'ex511', tokens:[{t:'My sister',r:['S','ANC']},{t:',',r:['PUNC']},{t:'who is a nurse',r:['M']},{t:',',r:['PUNC']},{t:'lives',r:['V']},{t:'in Seoul',r:['M']},{t:'.',r:['PUNC']}], translation:'내 누나는 간호사인데, 서울에 산다.'},
      ],
      practice:[
        {id:'pr511', tokens:[{t:'He visited Paris',r:['S']},{t:',',r:['PUNC']},{t:'which is famous for art',r:['M']},{t:'.',r:['PUNC']}], translation:'그는 예술로 유명한 파리를 방문했다.'},
      ],
      quiz:[
        {id:'qz511', sentence:'My dog, ___ is very old, still loves to play.', choices:['who','that','whose','whom'], answer:0, hint:'콤마+관계사(계속적 용법) → who (that 불가)'},
      ],
    },
    {id:52, title:'관계대명사의 생략', formula:'목적격 관계대명사 생략 / S+be 생략',
      note:'목적격 관계대명사(whom/which/that)는 생략 가능. 주격 관계대명사+be동사도 함께 생략 가능 (분사/전치사구 남음).',
      examples:[
        {id:'ex521', tokens:[{t:'The cake',r:['S','ANC']},{t:'(which) she made',r:['M']},{t:'was',r:['V']},{t:'delicious',r:['SC']},{t:'.',r:['PUNC']}], translation:'그녀가 만든 케이크는 맛있었다.'},
      ],
      practice:[
        {id:'pr521', tokens:[{t:'The girl',r:['S','ANC']},{t:'sitting next to me',r:['M']},{t:'is',r:['V']},{t:'my friend',r:['SC']},{t:'.',r:['PUNC']}], translation:'내 옆에 앉아 있는 소녀는 내 친구이다. (who is 생략)'},
      ],
      quiz:[
        {id:'qz521', sentence:'The movie ___ I watched was boring. (생략 가능)', choices:['(that)','who','whose','where'], answer:0, hint:'목적격 관계대명사 → 생략 가능'},
      ],
    },
    {id:53, title:'복합관계대명사 (whoever, whatever, whichever)', formula:'whoever/whatever/whichever + V\'',
      note:'whoever: ~하는 누구든지 (= anyone who) / whatever: ~하는 무엇이든지 (= anything that) / whichever: ~하는 어느 것이든지',
      examples:[
        {id:'ex531', tokens:[{t:'Whoever wants to come',r:['S']},{t:'is',r:['V']},{t:'welcome',r:['SC']},{t:'.',r:['PUNC']}], translation:'오고 싶은 사람은 누구든 환영한다.'},
      ],
      practice:[
        {id:'pr531', tokens:[{t:'I',r:['S']},{t:'will eat',r:['V']},{t:'whatever you cook',r:['O']},{t:'.',r:['PUNC']}], translation:'네가 요리하는 것은 뭐든 먹을게.'},
      ],
      quiz:[
        {id:'qz531', sentence:'___ breaks the rule will be punished.', choices:['Whoever','Whatever','Whichever','However'], answer:0, hint:'~하는 누구든 → Whoever'},
        {id:'qz532', sentence:'You can choose ___ you like.', choices:['whichever','whoever','however','whatever'], answer:0, hint:'~하는 어느 것이든 → whichever'},
      ],
    },
    {id:54, title:'복합관계부사 (whenever, wherever, however)', formula:'whenever/wherever/however + S\' + V\'',
      note:'whenever: ~할 때마다, 언제든지 / wherever: ~하는 어디에서든지 / however: 아무리 ~해도 (= no matter how)',
      examples:[
        {id:'ex541', tokens:[{t:'However hard you try',r:['M']},{t:',',r:['PUNC']},{t:'you',r:['S']},{t:"can't change",r:['V']},{t:'the past',r:['O']},{t:'.',r:['PUNC']}], translation:'아무리 노력해도, 과거를 바꿀 수 없다.'},
      ],
      practice:[
        {id:'pr541', tokens:[{t:'Whenever I feel sad',r:['M']},{t:',',r:['PUNC']},{t:'I',r:['S']},{t:'listen to',r:['V']},{t:'music',r:['O']},{t:'.',r:['PUNC']}], translation:'슬플 때마다, 나는 음악을 듣는다.'},
        {id:'pr542', tokens:[{t:'You',r:['S']},{t:'can sit',r:['V']},{t:'wherever you want',r:['M']},{t:'.',r:['PUNC']}], translation:'원하는 곳 어디든 앉을 수 있다.'},
      ],
      quiz:[
        {id:'qz541', sentence:'___ I see her, she is always smiling.', choices:['Whenever','Wherever','However','Whatever'], answer:0, hint:'~할 때마다 → Whenever'},
        {id:'qz542', sentence:'___ tired you are, you must finish it.', choices:['However','Whenever','Wherever','Whatever'], answer:0, hint:'아무리 ~해도 → However + adj'},
      ],
    },
  ],
};
registerUnit(UNIT_12);
