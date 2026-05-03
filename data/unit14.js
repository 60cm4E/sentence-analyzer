// Unit 14 - 가정법 (Points 58-61)
const UNIT_14 = {
  id:14, title:'가정법', chapter:{id:5,title:'특수하고 어려운 문장의 해석법'},
  points:[
    {id:58, title:'가정법 과거', formula:'If + S\' + V\'(과거형/were), S + would/could + V원형',
      note:'현재 사실과 반대되는 상상·소망. if절: 동사의 과거형(be→were), 주절: would/could/might+V원형. "만약 ~한다면, …할 텐데"',
      examples:[
        {id:'ex581', tokens:[{t:'If I were rich',r:['M']},{t:',',r:['PUNC']},{t:'I',r:['S']},{t:'would travel',r:['V']},{t:'the world',r:['O']},{t:'.',r:['PUNC']}], translation:'만약 내가 부자라면, 세계를 여행할 텐데.'},
      ],
      practice:[
        {id:'pr581', tokens:[{t:'If she knew the answer',r:['M']},{t:',',r:['PUNC']},{t:'she',r:['S']},{t:'would tell',r:['V']},{t:'you',r:['O']},{t:'.',r:['PUNC']}], translation:'그녀가 답을 안다면, 너에게 말할 텐데.'},
        {id:'pr582', tokens:[{t:'If I had more time',r:['M']},{t:',',r:['PUNC']},{t:'I',r:['S']},{t:'could learn',r:['V']},{t:'Japanese',r:['O']},{t:'.',r:['PUNC']}], translation:'시간이 더 있다면, 일본어를 배울 수 있을 텐데.'},
      ],
      quiz:[
        {id:'qz581', sentence:'If I ___ a bird, I would fly to you.', choices:['were','am','was','be'], answer:0, hint:'가정법 과거: be동사 → were'},
        {id:'qz582', sentence:'If she ___ here, she would help us.', choices:['were','is','was','be'], answer:0, hint:'현재 사실 반대 → 가정법 과거 (were)'},
      ],
    },
    {id:59, title:'가정법 과거완료', formula:'If + S\' + had p.p., S + would/could + have p.p.',
      note:'과거 사실과 반대되는 상상. if절: had p.p., 주절: would/could+have p.p. "만약 ~했더라면, …했을 텐데"',
      examples:[
        {id:'ex591', tokens:[{t:'If I had studied harder',r:['M']},{t:',',r:['PUNC']},{t:'I',r:['S']},{t:'would have passed',r:['V']},{t:'the exam',r:['O']},{t:'.',r:['PUNC']}], translation:'더 열심히 공부했더라면, 시험에 합격했을 텐데.'},
      ],
      practice:[
        {id:'pr591', tokens:[{t:'If she had left earlier',r:['M']},{t:',',r:['PUNC']},{t:'she',r:['S']},{t:'would not have missed',r:['V']},{t:'the bus',r:['O']},{t:'.',r:['PUNC']}], translation:'더 일찍 출발했더라면, 버스를 놓치지 않았을 텐데.'},
      ],
      quiz:[
        {id:'qz591', sentence:'If I ___ the truth, I would have told you.', choices:['had known','knew','know','have known'], answer:0, hint:'과거 사실 반대 → if+had p.p.'},
        {id:'qz592', sentence:'If it ___ rained, we would have gone on a picnic.', choices:["hadn't","didn't","doesn't","wasn't"], answer:0, hint:'가정법 과거완료 부정: if+had not p.p.'},
      ],
    },
    {id:60, title:'I wish / as if 가정법', formula:'I wish + S\' + V\'(과거형) / as if + S\' + V\'(과거형)',
      note:'I wish+가정법 과거: ~하면 좋을 텐데 (현재 소망) / I wish+가정법 과거완료: ~했으면 좋았을 텐데 (과거 소망) / as if+가정법: 마치 ~인 것처럼',
      examples:[
        {id:'ex601', tokens:[{t:'I',r:['S']},{t:'wish',r:['V']},{t:'I were taller',r:['O']},{t:'.',r:['PUNC']}], translation:'내가 더 키가 크면 좋을 텐데.'},
      ],
      practice:[
        {id:'pr601', tokens:[{t:'She',r:['S']},{t:'talks',r:['V']},{t:'as if she knew everything',r:['M']},{t:'.',r:['PUNC']}], translation:'그녀는 마치 모든 것을 아는 것처럼 말한다.'},
        {id:'pr602', tokens:[{t:'I',r:['S']},{t:'wish',r:['V']},{t:'I had studied harder',r:['O']},{t:'.',r:['PUNC']}], translation:'더 열심히 공부했으면 좋았을 텐데.'},
      ],
      quiz:[
        {id:'qz601', sentence:'I wish I ___ fly. (날 수 있으면 좋겠다)', choices:['could','can','will','am able to'], answer:0, hint:'I wish+가정법 과거: 현재 소망'},
        {id:'qz602', sentence:'He acts as if he ___ the boss.', choices:['were','is','was','be'], answer:0, hint:'as if+가정법 과거 → were'},
      ],
    },
    {id:61, title:'Without/But for 가정법', formula:'Without/But for ~, S + would/could + V / have p.p.',
      note:'Without/But for+명사 = If it were not for (현재) / If it had not been for (과거). "~이 없다면/없었다면"',
      examples:[
        {id:'ex611', tokens:[{t:'Without water',r:['M']},{t:',',r:['PUNC']},{t:'we',r:['S']},{t:'could not survive',r:['V']},{t:'.',r:['PUNC']}], translation:'물이 없다면, 우리는 생존할 수 없을 것이다.'},
      ],
      practice:[
        {id:'pr611', tokens:[{t:'But for your help',r:['M']},{t:',',r:['PUNC']},{t:'I',r:['S']},{t:'would have failed',r:['V']},{t:'.',r:['PUNC']}], translation:'네 도움이 없었다면, 나는 실패했을 것이다.'},
      ],
      quiz:[
        {id:'qz611', sentence:'___ your help, I couldn\'t have done it.', choices:['Without','With','Despite','Because of'], answer:0, hint:'~이 없었다면 → Without'},
        {id:'qz612', sentence:'But ___ the sun, nothing could live.', choices:['for','with','about','from'], answer:0, hint:'But for = Without = ~이 없다면'},
      ],
    },
  ],
};
registerUnit(UNIT_14);
