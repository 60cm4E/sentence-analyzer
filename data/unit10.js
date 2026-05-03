// Unit 10 - 접속사와 의문사 (명사절) (Points 41-44)
const UNIT_10 = {
  id:10, title:'접속사와 의문사 (명사절)', chapter:{id:4,title:'문장의 확장'},
  points:[
    {id:41, title:'명사절: that+주어+동사', formula:'that + S\' + V\' → S, O, C 역할',
      note:'that절: ~하는 것(S), ~하는 것을(O), ~하는 것(C). 동격: the fact/idea/news that ~ = ~라는 사실/생각/소식',
      examples:[
        {id:'ex411', tokens:[{t:'I',r:['S']},{t:'think',r:['V']},{t:'that she is right',r:['O']},{t:'.',r:['PUNC']}], translation:'나는 그녀가 옳다고 생각한다.'},
        {id:'ex412', tokens:[{t:'That he passed the test',r:['S']},{t:'made',r:['V']},{t:'us',r:['O']},{t:'happy',r:['OC']},{t:'.',r:['PUNC']}], translation:'그가 시험에 합격한 것은 우리를 행복하게 했다.'},
      ],
      practice:[
        {id:'pr411', tokens:[{t:'The problem',r:['S']},{t:'is',r:['V']},{t:'that we have no time',r:['SC']},{t:'.',r:['PUNC']}], translation:'문제는 우리에게 시간이 없다는 것이다.'},
        {id:'pr412', tokens:[{t:'I',r:['S']},{t:'believe',r:['V']},{t:'that dreams come true',r:['O']},{t:'.',r:['PUNC']}], translation:'나는 꿈은 이루어진다고 믿는다.'},
      ],
      quiz:[
        {id:'qz411', sentence:'___ she won the prize surprised everyone.', choices:['That','What','Which','Who'], answer:0, hint:'~한 것(사실)이 → That절이 주어'},
        {id:'qz412', sentence:'I know ___ you are telling the truth.', choices:['that','what','which','who'], answer:0, hint:'~라는 것을 → that절이 목적어'},
      ],
    },
    {id:42, title:'명사절: whether/if+주어+동사', formula:'whether/if + S\' + V\' → S, O, C',
      note:'whether/if절: ~하는지(를/는). that절은 확실한 사실, whether/if절은 불확실하거나 의문시되는 점. if절은 O로만 쓸 수 있음.',
      examples:[
        {id:'ex421', tokens:[{t:'I',r:['S']},{t:"don't know",r:['V']},{t:'whether she will come',r:['O']},{t:'.',r:['PUNC']}], translation:'나는 그녀가 올지 모르겠다.'},
      ],
      practice:[
        {id:'pr421', tokens:[{t:'Whether he is honest',r:['S']},{t:'is',r:['V']},{t:'not clear',r:['SC']},{t:'.',r:['PUNC']}], translation:'그가 정직한지는 확실하지 않다.'},
        {id:'pr422', tokens:[{t:'I',r:['S']},{t:'wonder',r:['V']},{t:'if this shirt fits me',r:['O']},{t:'.',r:['PUNC']}], translation:'이 셔츠가 나에게 맞는지 궁금하다.'},
      ],
      quiz:[
        {id:'qz421', sentence:'___ he comes or not is not important.', choices:['Whether','If','That','What'], answer:0, hint:'주어 자리: Whether만 가능 (If 불가)'},
        {id:'qz422', sentence:'I wonder ___ she likes me.', choices:['if','that','what','which'], answer:0, hint:'~인지 궁금하다 → if/whether (목적어)'},
      ],
    },
    {id:43, title:'명사절: 의문사+주어+동사', formula:'의문사 + S\' + V\' → S, O, C',
      note:'의문사(who, what, which, when, where, how, why)+S\'+V\': 간접의문문. 의문사절은 S, O, C 역할. 어순 주의: 의문사+주어+동사 (도치 X)',
      examples:[
        {id:'ex431', tokens:[{t:'I',r:['S']},{t:"don't know",r:['V']},{t:'where he lives',r:['O']},{t:'.',r:['PUNC']}], translation:'나는 그가 어디에 사는지 모른다.'},
      ],
      practice:[
        {id:'pr431', tokens:[{t:'What she said',r:['S']},{t:'was',r:['V']},{t:'true',r:['SC']},{t:'.',r:['PUNC']}], translation:'그녀가 말한 것은 사실이었다.'},
        {id:'pr432', tokens:[{t:'Tell me',r:['V']},{t:'how you solved this problem',r:['O']},{t:'.',r:['PUNC']}], translation:'이 문제를 어떻게 풀었는지 말해 줘.'},
      ],
      quiz:[
        {id:'qz431', sentence:'I want to know ___ she is doing. (무엇을)', choices:['what','that','if','which'], answer:0, hint:'의문사절: what + S + V = ~하는 것을'},
        {id:'qz432', sentence:'Can you tell me where ___ ? (우체국이 있는지)', choices:['the post office is','is the post office','the post office are','are the post office'], answer:0, hint:'간접의문문: 의문사+주어+동사 (도치 안 함)'},
      ],
    },
    {id:44, title:'의문사+to-v', formula:'의문사 + to-V',
      note:'의문사+to-v: what to-v(무엇을 ~할지), how to-v(어떻게 ~할지), where to-v(어디서 ~할지), when to-v(언제 ~할지), whether to-v(~할지 말지). S, O, C로 쓰임.',
      examples:[
        {id:'ex441', tokens:[{t:'I',r:['S']},{t:"don't know",r:['V']},{t:'what to do',r:['O']},{t:'.',r:['PUNC']}], translation:'나는 무엇을 해야 할지 모르겠다.'},
      ],
      practice:[
        {id:'pr441', tokens:[{t:'She',r:['S']},{t:'taught',r:['V']},{t:'me',r:['IO']},{t:'how to cook pasta',r:['DO']},{t:'.',r:['PUNC']}], translation:'그녀는 나에게 파스타를 어떻게 요리하는지 가르쳐 주었다.'},
        {id:'pr442', tokens:[{t:'The question',r:['S']},{t:'is',r:['V']},{t:'where to go',r:['SC']},{t:'.',r:['PUNC']}], translation:'문제는 어디로 갈지이다.'},
      ],
      quiz:[
        {id:'qz441', sentence:'Please tell me ___ to get to the station.', choices:['how','what','where','why'], answer:0, hint:'어떻게 ~할지 → how to-v'},
        {id:'qz442', sentence:'She decided ___ to wear for the party.', choices:['what','how','where','when'], answer:0, hint:'무엇을 ~할지 → what to-v'},
      ],
    },
  ],
};
registerUnit(UNIT_10);
