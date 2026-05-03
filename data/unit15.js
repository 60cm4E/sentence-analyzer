// Unit 15 - 특수구문 (Points 62-66)
const UNIT_15 = {
  id:15, title:'특수구문', chapter:{id:5,title:'특수하고 어려운 문장의 해석법'},
  points:[
    {id:62, title:'강조, 다양한 it', formula:'It is/was ~ that ... (강조) / do/does/did + V원형 / 가주어 it',
      note:'강조: It is[was] ~ that ...(~한 것은 바로 …이다), do[does/did]+V원형(정말 ~하다) / 가주어 it: It is+형/명+to-v/that절 (진주어가 뒤에)',
      examples:[
        {id:'ex621', tokens:[{t:'It was Tom',r:['S']},{t:'that',r:['M']},{t:'broke the window',r:['V']},{t:'.',r:['PUNC']}], translation:'창문을 깬 것은 바로 Tom이었다. (강조)'},
        {id:'ex622', tokens:[{t:'It',r:['S']},{t:'is',r:['V']},{t:'important',r:['SC']},{t:'to study every day',r:['M']},{t:'.',r:['PUNC']}], translation:'매일 공부하는 것은 중요하다. (가주어 it)'},
      ],
      practice:[
        {id:'pr621', tokens:[{t:'I',r:['S']},{t:'did finish',r:['V']},{t:'my homework',r:['O']},{t:'.',r:['PUNC']}], translation:'나는 정말로 숙제를 끝냈다. (동사 강조)'},
        {id:'pr622', tokens:[{t:'It',r:['S']},{t:'is',r:['V']},{t:'amazing',r:['SC']},{t:'that you painted this',r:['M']},{t:'.',r:['PUNC']}], translation:'네가 이것을 그렸다는 것이 놀랍다. (가주어+진주어)'},
      ],
      quiz:[
        {id:'qz621', sentence:'It was Mary ___ won the prize.', choices:['that','what','which','who is'], answer:0, hint:'It is/was ~ that 강조구문'},
        {id:'qz622', sentence:'I ___ tell you the truth yesterday.', choices:['did','was','have','am'], answer:0, hint:'동사 강조: did + V원형'},
      ],
    },
    {id:63, title:'부정구문', formula:'부분부정 / 전체부정 / 준부정어',
      note:'전체부정: not ~ any, no, none, never, neither / 부분부정: not ~ all, not ~ every, not ~ both (모두 ~인 것은 아니다) / 준부정어: hardly, seldom, rarely, few, little (~거의 없다)',
      examples:[
        {id:'ex631', tokens:[{t:'Not all students',r:['S']},{t:'passed',r:['V']},{t:'the test',r:['O']},{t:'.',r:['PUNC']}], translation:'모든 학생들이 시험에 합격한 것은 아니다. (부분부정)'},
      ],
      practice:[
        {id:'pr631', tokens:[{t:'She',r:['S']},{t:'hardly',r:['M']},{t:'studies',r:['V']},{t:'at home',r:['M']},{t:'.',r:['PUNC']}], translation:'그녀는 집에서 거의 공부하지 않는다. (준부정)'},
        {id:'pr632', tokens:[{t:'Neither of them',r:['S']},{t:'came',r:['V']},{t:'to the party',r:['M']},{t:'.',r:['PUNC']}], translation:'그들 중 어느 누구도 파티에 오지 않았다. (전체부정)'},
      ],
      quiz:[
        {id:'qz631', sentence:'Not ___ that glitters is gold.', choices:['all','every','none','any'], answer:0, hint:'부분부정: Not all = 모든 ~인 것은 아니다'},
        {id:'qz632', sentence:'She ___ ever goes out at night.', choices:['hardly','always','often','usually'], answer:0, hint:'준부정: hardly ever = 거의 ~않다'},
      ],
    },
    {id:64, title:'도치', formula:'부정어구 + 조V + S + V / 장소 부사(구) + V + S',
      note:'부정어구(Never, Hardly, Not only 등)가 문두에 오면 조동사+주어 도치. 장소·방향 부사(구)가 문두: V+S 도치 (대명사면 도치 안 함). So/Neither+조V+S: ~도 마찬가지다.',
      examples:[
        {id:'ex641', tokens:[{t:'Never',r:['M']},{t:'have I',r:['S']},{t:'seen',r:['V']},{t:'such a beautiful place',r:['O']},{t:'.',r:['PUNC']}], translation:'나는 그토록 아름다운 곳을 본 적이 없다.'},
      ],
      practice:[
        {id:'pr641', tokens:[{t:'Not only',r:['M']},{t:'does she',r:['S']},{t:'sing',r:['V']},{t:'well',r:['M']},{t:',',r:['PUNC']},{t:'but she also dances',r:['S']},{t:'.',r:['PUNC']}], translation:'그녀는 노래를 잘할 뿐만 아니라, 춤도 잘 춘다.'},
      ],
      quiz:[
        {id:'qz641', sentence:'Never ___ I seen such a thing!', choices:['have','did','was','am'], answer:0, hint:'부정어구 문두 → 조동사+주어 도치'},
        {id:'qz642', sentence:'"I like pizza." — "So ___ I."', choices:['do','am','did','like'], answer:0, hint:'So+조V+S: ~도 마찬가지다'},
      ],
    },
    {id:65, title:'생략, 대동사', formula:'공통 요소 생략 / do/does/did (대동사)',
      note:'반복되는 공통 요소 생략. 대동사 do: 앞에 나온 동사(구)를 대신함. if so(만약 그렇다면), if not(만약 아니라면) 등',
      examples:[
        {id:'ex651', tokens:[{t:'She',r:['S']},{t:'can play',r:['V']},{t:'the piano',r:['O']},{t:', and I',r:['S']},{t:'can',r:['V']},{t:', too',r:['M']},{t:'.',r:['PUNC']}], translation:'그녀는 피아노를 칠 수 있고, 나도 칠 수 있다.'},
      ],
      practice:[
        {id:'pr651', tokens:[{t:'He',r:['S']},{t:'runs',r:['V']},{t:'faster than I',r:['M']},{t:'do',r:['V']},{t:'.',r:['PUNC']}], translation:'그는 나보다 더 빨리 달린다. (do = run)'},
      ],
      quiz:[
        {id:'qz651', sentence:'She sings better than he ___.', choices:['does','do','is','sings'], answer:0, hint:'대동사: does = sings'},
        {id:'qz652', sentence:'"Do you like coffee?" — "Yes, I ___."', choices:['do','like','am','does'], answer:0, hint:'대동사 do로 반복 대체'},
      ],
    },
    {id:66, title:'동격, 삽입, 물주구문', formula:'명사, 명사(동격) / S(무생물주어) + V + O',
      note:'동격: 명사 바로 뒤에 같은 의미의 명사/절. 삽입: 콤마/대시로 추가 설명. 물주구문: 무생물주어가 주어인 문장, "~때문에/~덕분에/~하면"으로 해석.',
      examples:[
        {id:'ex661', tokens:[{t:'My friend Tom',r:['S']},{t:'lives',r:['V']},{t:'in Busan',r:['M']},{t:'.',r:['PUNC']}], translation:'내 친구 Tom은 부산에 산다. (Tom = 동격)'},
        {id:'ex662', tokens:[{t:'This medicine',r:['S']},{t:'will make',r:['V']},{t:'you',r:['O']},{t:'feel better',r:['OC']},{t:'.',r:['PUNC']}], translation:'이 약을 먹으면 기분이 나아질 것이다. (물주구문)'},
      ],
      practice:[
        {id:'pr661', tokens:[{t:'The fact',r:['S']},{t:'that she lied',r:['M']},{t:'surprised',r:['V']},{t:'everyone',r:['O']},{t:'.',r:['PUNC']}], translation:'그녀가 거짓말했다는 사실이 모두를 놀라게 했다. (동격절)'},
        {id:'pr662', tokens:[{t:'Heavy rain',r:['S']},{t:'prevented',r:['V']},{t:'us',r:['O']},{t:'from going out',r:['M']},{t:'.',r:['PUNC']}], translation:'폭우 때문에 우리는 외출하지 못했다. (물주구문)'},
      ],
      quiz:[
        {id:'qz661', sentence:'Seoul, the capital of Korea, ___ a big city.', choices:['is','are','were','am'], answer:0, hint:'동격(삽입): Seoul = the capital of Korea'},
        {id:'qz662', sentence:'The bad weather ___ us from playing outside.', choices:['prevented','made','let','had'], answer:0, hint:'물주구문: 무생물주어+prevent+O+from v-ing'},
      ],
    },
  ],
};
registerUnit(UNIT_15);
