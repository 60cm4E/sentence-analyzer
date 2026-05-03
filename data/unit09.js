// Unit 09 - 접속사(부사절), 병렬구조 (Points 37-40)
const UNIT_09 = {
  id:9, title:'접속사(부사절) / 병렬구조', chapter:{id:4,title:'문장의 확장'},
  points:[
    {id:37, title:'때를 나타내는 부사절', formula:'when/while/before/after/until/since/as/once + S\'+V\'',
      note:'부사절은 접속사가 이끄는 종속절. 때: when(~할 때), while(~하는 동안), before(~하기 전에), after(~한 후에), until(~할 때까지), since(~한 이래로), as(~할 때, ~하면서), once(일단 ~하면)',
      examples:[
        {id:'ex371', tokens:[{t:'When I got home',r:['M']},{t:',',r:['PUNC']},{t:'my mom',r:['S']},{t:'was cooking',r:['V']},{t:'dinner',r:['O']},{t:'.',r:['PUNC']}], translation:'내가 집에 왔을 때, 엄마가 저녁을 요리하고 있었다.'},
      ],
      practice:[
        {id:'pr371', tokens:[{t:'She',r:['S']},{t:'waited',r:['V']},{t:'until the rain stopped',r:['M']},{t:'.',r:['PUNC']}], translation:'그녀는 비가 멈출 때까지 기다렸다.'},
        {id:'pr372', tokens:[{t:'Before you leave',r:['M']},{t:',',r:['PUNC']},{t:'please',r:['M']},{t:'lock',r:['V']},{t:'the door',r:['O']},{t:'.',r:['PUNC']}], translation:'떠나기 전에, 문을 잠가 주세요.'},
      ],
      quiz:[
        {id:'qz371', sentence:'___ I was sleeping, someone knocked on the door.', choices:['While','During','For','Since'], answer:0, hint:'~하는 동안(절) → While (접속사)'},
        {id:'qz372', sentence:"I'll wait ___ you come back.", choices:['until','while','after','since'], answer:0, hint:'~할 때까지 → until'},
      ],
    },
    {id:38, title:'원인·이유·결과·목적을 나타내는 부사절', formula:'because/since/as + S\'+V\' / so ~ that / so that',
      note:'원인: because/as/since(~하기 때문에) / 결과: so+형/부+that(너무 ~해서 …하다), such+명사+that / 목적: so that(~하기 위해서), for fear that(~하지 않도록)',
      examples:[
        {id:'ex381', tokens:[{t:'She was late',r:['S']},{t:'because she missed the bus',r:['M']},{t:'.',r:['PUNC']}], translation:'그녀는 버스를 놓쳐서 늦었다.'},
      ],
      practice:[
        {id:'pr381', tokens:[{t:'He',r:['S']},{t:'was',r:['V']},{t:'so tired',r:['SC']},{t:'that he fell asleep',r:['M']},{t:'.',r:['PUNC']}], translation:'그는 너무 피곤해서 잠들어 버렸다.'},
        {id:'pr382', tokens:[{t:'I',r:['S']},{t:'saved',r:['V']},{t:'money',r:['O']},{t:'so that I could buy a bike',r:['M']},{t:'.',r:['PUNC']}], translation:'나는 자전거를 살 수 있도록 돈을 모았다.'},
      ],
      quiz:[
        {id:'qz381', sentence:'He was ___ happy that he cried.', choices:['so','such','too','very'], answer:0, hint:'so + 형용사 + that = 너무 ~해서 …하다'},
        {id:'qz382', sentence:'___ it was raining, the game was canceled.', choices:['Because','Although','Unless','If'], answer:0, hint:'원인: Because = ~하기 때문에'},
      ],
    },
    {id:39, title:'조건·양보를 나타내는 부사절', formula:'if/unless/although/even though + S\'+V\'',
      note:'조건: if(만약 ~한다면), unless(~하지 않는다면 = if not) / 양보: although/even though/though(비록 ~일지라도)',
      examples:[
        {id:'ex391', tokens:[{t:'If it rains tomorrow',r:['M']},{t:',',r:['PUNC']},{t:'we',r:['S']},{t:'will stay',r:['V']},{t:'home',r:['M']},{t:'.',r:['PUNC']}], translation:'내일 비가 오면, 우리는 집에 있을 것이다.'},
      ],
      practice:[
        {id:'pr391', tokens:[{t:'Although she was tired',r:['M']},{t:',',r:['PUNC']},{t:'she',r:['S']},{t:'kept',r:['V']},{t:'studying',r:['O']},{t:'.',r:['PUNC']}], translation:'비록 피곤했지만, 그녀는 계속 공부했다.'},
        {id:'pr392', tokens:[{t:'You',r:['S']},{t:"won't pass",r:['V']},{t:'the test',r:['O']},{t:'unless you study hard',r:['M']},{t:'.',r:['PUNC']}], translation:'열심히 공부하지 않으면 시험에 통과하지 못할 것이다.'},
      ],
      quiz:[
        {id:'qz391', sentence:'___ you hurry, you will miss the bus.', choices:['Unless','If','Although','Because'], answer:0, hint:'unless = if not = ~하지 않으면'},
        {id:'qz392', sentence:'___ it was cold, she went out without a jacket.', choices:['Although','Because','If','Unless'], answer:0, hint:'양보: Although = 비록 ~일지라도'},
      ],
    },
    {id:40, title:'병렬구조', formula:'A and/or/but B (같은 형태)',
      note:'등위접속사(and, or, but)로 연결되는 요소는 같은 형태여야 한다. both A and B, either A or B, neither A nor B, not only A but also B',
      examples:[
        {id:'ex401', tokens:[{t:'She',r:['S']},{t:'likes',r:['V']},{t:'both singing and dancing',r:['O']},{t:'.',r:['PUNC']}], translation:'그녀는 노래하기와 춤추기 둘 다 좋아한다.'},
      ],
      practice:[
        {id:'pr401', tokens:[{t:'He',r:['S']},{t:'is',r:['V']},{t:'not only smart but also kind',r:['SC']},{t:'.',r:['PUNC']}], translation:'그는 똑똑할 뿐만 아니라 친절하기도 하다.'},
        {id:'pr402', tokens:[{t:'Neither she nor I',r:['S']},{t:'was',r:['V']},{t:'invited',r:['SC']},{t:'.',r:['PUNC']}], translation:'그녀도 나도 초대받지 못했다.'},
      ],
      quiz:[
        {id:'qz401', sentence:'She enjoys reading and ___.', choices:['writing','write','to write','wrote'], answer:0, hint:'병렬구조: and 앞뒤 형태 일치 (v-ing and v-ing)'},
        {id:'qz402', sentence:'Not only he but also she ___ the prize.', choices:['won','wins','winning','win'], answer:0, hint:'not only A but also B에서 동사는 B에 수 일치'},
      ],
    },
  ],
};
registerUnit(UNIT_09);
