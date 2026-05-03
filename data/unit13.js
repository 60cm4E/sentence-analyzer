// Unit 13 - 비교구문 (Points 55-57)
const UNIT_13 = {
  id:13, title:'비교구문', chapter:{id:5,title:'특수하고 어려운 문장의 해석법'},
  points:[
    {id:55, title:'as+형용사/부사+as', formula:'as + 형/부 + as ~ (원급 비교)',
      note:'as~as: ~만큼 …한/하게 (원급 비교) / not as~as: ~만큼 …하지는 않은/않게 (부정) / 배수+as~as: ~보다 X배 …한',
      examples:[
        {id:'ex551', tokens:[{t:'She',r:['S']},{t:'is',r:['V']},{t:'as tall as',r:['SC']},{t:'her brother',r:['M']},{t:'.',r:['PUNC']}], translation:'그녀는 그녀의 남동생만큼 키가 크다.'},
      ],
      practice:[
        {id:'pr551', tokens:[{t:'This test',r:['S']},{t:'is',r:['V']},{t:'not as easy as',r:['SC']},{t:'the last one',r:['M']},{t:'.',r:['PUNC']}], translation:'이 시험은 지난 번만큼 쉽지 않다.'},
        {id:'pr552', tokens:[{t:'He',r:['S']},{t:'runs',r:['V']},{t:'twice as fast as',r:['M']},{t:'I do',r:['M']},{t:'.',r:['PUNC']}], translation:'그는 나보다 두 배 빨리 달린다.'},
      ],
      quiz:[
        {id:'qz551', sentence:'She is ___ smart ___ her sister.', choices:['as / as','more / than','so / that','too / to'], answer:0, hint:'원급 비교: as + 형 + as'},
        {id:'qz552', sentence:'This room is not ___ big ___ that one.', choices:['as / as','more / than','so / that','too / to'], answer:0, hint:'원급 비교 부정: not as ~ as'},
      ],
    },
    {id:56, title:'비교급+than', formula:'형/부-er + than / more + 형/부 + than',
      note:'비교급+than: ~보다 더 …한/하게. 강조: much/even/far/a lot+비교급. the+비교급, the+비교급: ~하면 할수록 더 …하다',
      examples:[
        {id:'ex561', tokens:[{t:'She',r:['S']},{t:'is',r:['V']},{t:'taller than',r:['SC']},{t:'her brother',r:['M']},{t:'.',r:['PUNC']}], translation:'그녀는 그녀의 남동생보다 키가 크다.'},
      ],
      practice:[
        {id:'pr561', tokens:[{t:'The more you practice',r:['M']},{t:',',r:['PUNC']},{t:'the better',r:['SC']},{t:'you get',r:['S']},{t:'.',r:['PUNC']}], translation:'연습하면 할수록, 더 잘하게 된다.'},
        {id:'pr562', tokens:[{t:'This book',r:['S']},{t:'is',r:['V']},{t:'much more interesting than',r:['SC']},{t:'that one',r:['M']},{t:'.',r:['PUNC']}], translation:'이 책은 저 책보다 훨씬 더 흥미롭다.'},
      ],
      quiz:[
        {id:'qz561', sentence:'She is ___ than her sister.', choices:['smarter','smart','smartest','more smart'], answer:0, hint:'짧은 형용사: -er + than'},
        {id:'qz562', sentence:'The ___ you study, the ___ you learn.', choices:['more / more','most / most','much / much','many / many'], answer:0, hint:'the 비교급, the 비교급 구문'},
      ],
    },
    {id:57, title:'the+최상급', formula:'the + 형/부-est + in/of ~ / the most + 형/부 + in/of ~',
      note:'최상급: ~중에서 가장 …한/하게. in+장소/범위, of+복수명사. one of the+최상급+복수명사: 가장 ~한 …중 하나',
      examples:[
        {id:'ex571', tokens:[{t:'She',r:['S']},{t:'is',r:['V']},{t:'the tallest girl',r:['SC']},{t:'in our class',r:['M']},{t:'.',r:['PUNC']}], translation:'그녀는 우리 반에서 가장 키가 큰 소녀이다.'},
      ],
      practice:[
        {id:'pr571', tokens:[{t:'Seoul',r:['S']},{t:'is',r:['V']},{t:'one of the largest cities',r:['SC']},{t:'in Asia',r:['M']},{t:'.',r:['PUNC']}], translation:'서울은 아시아에서 가장 큰 도시 중 하나이다.'},
        {id:'pr572', tokens:[{t:'This',r:['S']},{t:'is',r:['V']},{t:'the most beautiful place',r:['SC']},{t:'I have ever visited',r:['M']},{t:'.',r:['PUNC']}], translation:'이곳은 내가 방문한 곳 중 가장 아름다운 곳이다.'},
      ],
      quiz:[
        {id:'qz571', sentence:'He is the ___ player on the team.', choices:['best','better','good','most good'], answer:0, hint:'최상급: the + best (불규칙 변화)'},
        {id:'qz572', sentence:'This is one of the ___ buildings in the city.', choices:['tallest','taller','tall','most tall'], answer:0, hint:'one of the + 최상급 + 복수명사'},
      ],
    },
  ],
};
registerUnit(UNIT_13);
