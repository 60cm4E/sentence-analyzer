// Unit 11 - 관계대명사, 관계부사 ① (Points 45-50)
const UNIT_11 = {
  id:11, title:'관계대명사, 관계부사 ①', chapter:{id:4,title:'문장의 확장'},
  points:[
    {id:45, title:'주격 관계대명사 (who, which, that)', formula:'선행사 + who/which/that + V',
      note:'주격 관계대명사: 관계사절 안에서 주어 역할. 사람→who/that, 사물/동물→which/that',
      antecedentTable:[{type:'사람',pronoun:'who / that'},{type:'사물/동물',pronoun:'which / that'}],
      examples:[
        {id:'ex451', tokens:[{t:'The man',r:['S','ANC']},{t:'who teaches math',r:['M']},{t:'is',r:['V']},{t:'my uncle',r:['SC']},{t:'.',r:['PUNC']}], translation:'수학을 가르치는 그 남자는 나의 삼촌이다.'},
      ],
      practice:[
        {id:'pr451', tokens:[{t:'I',r:['S']},{t:'have',r:['V']},{t:'a friend',r:['O','ANC']},{t:'who lives in London',r:['M']},{t:'.',r:['PUNC']}], translation:'나는 런던에 사는 친구가 있다.'},
        {id:'pr452', tokens:[{t:'The movie',r:['S','ANC']},{t:'that won the award',r:['M']},{t:'was',r:['V']},{t:'amazing',r:['SC']},{t:'.',r:['PUNC']}], translation:'상을 받은 그 영화는 놀라웠다.'},
      ],
      quiz:[
        {id:'qz451', sentence:'The girl ___ is singing is my sister.', choices:['who','which','whom','whose'], answer:0, hint:'사람+주격 → who'},
        {id:'qz452', sentence:'I found the book ___ was on the table.', choices:['which','who','whom','whose'], answer:0, hint:'사물+주격 → which/that'},
      ],
    },
    {id:46, title:'목적격 관계대명사 (who(m), which, that)', formula:'선행사 + who(m)/which/that + S\' + V\'',
      note:'목적격 관계대명사: 관계사절 안에서 목적어 역할. 자주 생략됨.',
      examples:[
        {id:'ex461', tokens:[{t:'The book',r:['S','ANC']},{t:'(that) I read',r:['M']},{t:'was',r:['V']},{t:'interesting',r:['SC']},{t:'.',r:['PUNC']}], translation:'내가 읽은 그 책은 흥미로웠다.'},
      ],
      practice:[
        {id:'pr461', tokens:[{t:'The teacher',r:['S','ANC']},{t:'whom we met yesterday',r:['M']},{t:'was',r:['V']},{t:'very kind',r:['SC']},{t:'.',r:['PUNC']}], translation:'어제 만난 그 선생님은 매우 친절했다.'},
        {id:'pr462', tokens:[{t:'I',r:['S']},{t:'like',r:['V']},{t:'the song',r:['O','ANC']},{t:'(that) she sang',r:['M']},{t:'.',r:['PUNC']}], translation:'나는 그녀가 부른 노래를 좋아한다.'},
      ],
      quiz:[
        {id:'qz461', sentence:'The man ___ you saw is my dad.', choices:['(whom)','who','whose','which'], answer:0, hint:'사람+목적격 → whom (생략 가능)'},
        {id:'qz462', sentence:'This is the pen ___ I bought yesterday.', choices:['(that)','who','whose','whom'], answer:0, hint:'사물+목적격 → that/which (생략 가능)'},
      ],
    },
    {id:47, title:'소유격 관계대명사 (whose)', formula:'선행사 + whose + 명사 + V\'',
      note:'whose: ~의 (소유격). 사람/사물 모두 사용 가능. whose+명사가 한 덩어리로 주어/목적어 역할.',
      examples:[
        {id:'ex471', tokens:[{t:'I know',r:['S']},{t:'a girl',r:['O','ANC']},{t:'whose father is a pilot',r:['M']},{t:'.',r:['PUNC']}], translation:'나는 아버지가 조종사인 소녀를 안다.'},
      ],
      practice:[
        {id:'pr471', tokens:[{t:'The house',r:['S','ANC']},{t:'whose roof is red',r:['M']},{t:'is',r:['V']},{t:'mine',r:['SC']},{t:'.',r:['PUNC']}], translation:'지붕이 빨간 그 집은 내 것이다.'},
      ],
      quiz:[
        {id:'qz471', sentence:'The boy ___ bike was stolen is crying.', choices:['whose','who','which','whom'], answer:0, hint:'~의 (소유격 관계대명사) → whose'},
      ],
    },
    {id:48, title:'관계대명사 what', formula:'what + S\' + V\' (= the thing(s) that)',
      note:'what: ~하는 것 (선행사를 포함). what = the thing(s) that/which. S, O, C 역할.',
      examples:[
        {id:'ex481', tokens:[{t:'What he said',r:['S']},{t:'was',r:['V']},{t:'true',r:['SC']},{t:'.',r:['PUNC']}], translation:'그가 말한 것은 사실이었다.'},
      ],
      practice:[
        {id:'pr481', tokens:[{t:'I',r:['S']},{t:"don't understand",r:['V']},{t:'what you mean',r:['O']},{t:'.',r:['PUNC']}], translation:'나는 네가 무슨 뜻인지 이해하지 못하겠다.'},
        {id:'pr482', tokens:[{t:'This',r:['S']},{t:'is',r:['V']},{t:'what I wanted',r:['SC']},{t:'.',r:['PUNC']}], translation:'이것이 내가 원했던 것이다.'},
      ],
      quiz:[
        {id:'qz481', sentence:'___ matters most is your health.', choices:['What','That','Which','Who'], answer:0, hint:'~하는 것(선행사 포함) → What'},
        {id:'qz482', sentence:'Show me ___ you bought.', choices:['what','that','which','who'], answer:0, hint:'네가 산 것을 → what (= the thing that)'},
      ],
    },
    {id:49, title:'관계부사 (where, when, why, how)', formula:'선행사 + where/when/why + S\' + V\'',
      note:'관계부사: 관계사절 안에서 부사 역할. the place+where, the time+when, the reason+why, the way+how (the way와 how는 같이 못 씀)',
      examples:[
        {id:'ex491', tokens:[{t:'This is',r:['S']},{t:'the place',r:['SC','ANC']},{t:'where I was born',r:['M']},{t:'.',r:['PUNC']}], translation:'이곳이 내가 태어난 장소이다.'},
      ],
      practice:[
        {id:'pr491', tokens:[{t:'I',r:['S']},{t:'remember',r:['V']},{t:'the day',r:['O','ANC']},{t:'when we first met',r:['M']},{t:'.',r:['PUNC']}], translation:'나는 우리가 처음 만난 날을 기억한다.'},
        {id:'pr492', tokens:[{t:'Tell me',r:['V']},{t:'the reason',r:['O','ANC']},{t:'why you were late',r:['M']},{t:'.',r:['PUNC']}], translation:'네가 왜 늦었는지 이유를 말해 줘.'},
      ],
      quiz:[
        {id:'qz491', sentence:'This is the restaurant ___ we had dinner.', choices:['where','which','when','that'], answer:0, hint:'장소+관계부사 → where'},
        {id:'qz492', sentence:'I know the reason ___ he left.', choices:['why','where','when','which'], answer:0, hint:'이유+관계부사 → why'},
      ],
    },
    {id:50, title:'전치사+관계대명사', formula:'전치사 + whom/which',
      note:'관계대명사가 전치사의 목적어일 때 전치사를 관계대명사 앞으로 이동 가능. 이때 that은 쓸 수 없고 생략도 불가.',
      examples:[
        {id:'ex501', tokens:[{t:'The girl',r:['S','ANC']},{t:'with whom I talked',r:['M']},{t:'is',r:['V']},{t:'a pianist',r:['SC']},{t:'.',r:['PUNC']}], translation:'내가 이야기한 그 소녀는 피아니스트이다.'},
      ],
      practice:[
        {id:'pr501', tokens:[{t:'This is',r:['S']},{t:'the chair',r:['SC','ANC']},{t:'on which I sat',r:['M']},{t:'.',r:['PUNC']}], translation:'이것이 내가 앉았던 의자이다.'},
      ],
      quiz:[
        {id:'qz501', sentence:'The man to ___ she spoke is a doctor.', choices:['whom','who','which','that'], answer:0, hint:'전치사 뒤 → whom (that 불가)'},
        {id:'qz502', sentence:'This is the house in ___ I grew up.', choices:['which','that','where','whom'], answer:0, hint:'전치사+관계대명사(사물) → which'},
      ],
    },
  ],
};
registerUnit(UNIT_11);
