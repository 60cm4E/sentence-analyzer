// Unit 08 - v-ing (현재분사), p.p. (과거분사) (Points 31-36)
const UNIT_08 = {
  id: 8,
  title: 'v-ing (현재분사), p.p. (과거분사)',
  chapter: { id: 3, title: 'to-v / v-ing / p.p.' },
  points: [
    {id:31, title:'명사를 수식하는 v-ing와 p.p.', formula:'v-ing(~하는) / p.p.(~된) + 명사',
      note:'v-ing: ~하는, ~하고 있는 (능동·진행) / p.p.: ~된, ~당한 (수동·완료). 한 단어면 명사 앞, 두 단어 이상이면 명사 뒤에서 수식.',
      examples:[
        {id:'ex311', tokens:[{t:'The sleeping baby',r:['S']},{t:'looks',r:['V']},{t:'peaceful',r:['SC']},{t:'.',r:['PUNC']}], translation:'잠자고 있는 아기가 평화로워 보인다.'},
        {id:'ex312', tokens:[{t:'I',r:['S']},{t:'found',r:['V']},{t:'a broken window',r:['O']},{t:'.',r:['PUNC']}], translation:'나는 깨진 창문을 발견했다.'},
      ],
      practice:[
        {id:'pr311', tokens:[{t:'The girl',r:['S']},{t:'standing by the door',r:['M']},{t:'is',r:['V']},{t:'my friend',r:['SC']},{t:'.',r:['PUNC']}], translation:'문 옆에 서 있는 소녀는 내 친구이다.'},
        {id:'pr312', tokens:[{t:'I',r:['S']},{t:'read',r:['V']},{t:'a book',r:['O']},{t:'written in English',r:['M']},{t:'.',r:['PUNC']}], translation:'나는 영어로 쓰인 책을 읽었다.'},
      ],
      quiz:[
        {id:'qz311', sentence:'Look at the ___ bird. (날고 있는)', choices:['flying','flown','flew','fly'], answer:0, hint:'능동·진행 → v-ing(현재분사)'},
        {id:'qz312', sentence:'The ___ car was expensive to fix.', choices:['damaged','damaging','damage','damages'], answer:0, hint:'수동·완료 → p.p.(과거분사)'},
      ],
    },
    {id:32, title:'감정을 나타내는 v-ing와 p.p.', formula:'v-ing(~한 감정을 일으키는) / p.p.(~한 감정을 느끼는)',
      note:'v-ing: ~한 감정을 일으키는 (사물·사건 주어) / p.p.: ~한 감정을 느끼는 (사람 주어). exciting/excited, surprising/surprised, boring/bored, interesting/interested 등',
      examples:[
        {id:'ex321', tokens:[{t:'The movie',r:['S']},{t:'was',r:['V']},{t:'exciting',r:['SC']},{t:'.',r:['PUNC']}], translation:'그 영화는 흥미진진했다. (감정을 일으키는)'},
        {id:'ex322', tokens:[{t:'I',r:['S']},{t:'was',r:['V']},{t:'excited',r:['SC']},{t:'.',r:['PUNC']}], translation:'나는 흥분했다. (감정을 느끼는)'},
      ],
      practice:[
        {id:'pr321', tokens:[{t:'The news',r:['S']},{t:'was',r:['V']},{t:'shocking',r:['SC']},{t:'.',r:['PUNC']}], translation:'그 뉴스는 충격적이었다.'},
        {id:'pr322', tokens:[{t:'She',r:['S']},{t:'looked',r:['V']},{t:'bored',r:['SC']},{t:'during the lecture',r:['M']},{t:'.',r:['PUNC']}], translation:'그녀는 강의 중에 지루해 보였다.'},
      ],
      quiz:[
        {id:'qz321', sentence:'The game was very ___. (흥미로운)', choices:['interesting','interested','interest','interestingly'], answer:0, hint:'사물(game)이 주어 → v-ing'},
        {id:'qz322', sentence:'She was ___ by the result. (놀란)', choices:['surprised','surprising','surprise','surprises'], answer:0, hint:'사람(She)이 주어 → p.p.'},
      ],
    },
    {id:33, title:'S+V+O+OC (v-ing/p.p.)', formula:'S + V + O + v-ing/p.p.',
      note:'OC에 v-ing: O가 ~하고 있다고 V하다 (능동·진행) / OC에 p.p.: O가 ~되다고 V하다 (수동·완료)',
      examples:[
        {id:'ex331', tokens:[{t:'I',r:['S']},{t:'saw',r:['V']},{t:'her',r:['O']},{t:'dancing',r:['OC']},{t:'on the stage',r:['M']},{t:'.',r:['PUNC']}], translation:'나는 그녀가 무대에서 춤추는 것을 보았다.'},
      ],
      practice:[
        {id:'pr331', tokens:[{t:'She',r:['S']},{t:'heard',r:['V']},{t:'her name',r:['O']},{t:'called',r:['OC']},{t:'.',r:['PUNC']}], translation:'그녀는 자기 이름이 불리는 것을 들었다.'},
        {id:'pr332', tokens:[{t:'I',r:['S']},{t:'kept',r:['V']},{t:'the engine',r:['O']},{t:'running',r:['OC']},{t:'.',r:['PUNC']}], translation:'나는 엔진을 가동 상태로 유지했다.'},
      ],
      quiz:[
        {id:'qz331', sentence:'I saw him ___ the street. (건너는)', choices:['crossing','crossed','cross','to cross'], answer:0, hint:'지각동사 + O + v-ing (진행 강조)'},
        {id:'qz332', sentence:'She had her hair ___. (잘리다)', choices:['cut','cutting','to cut','cuts'], answer:0, hint:'have + O + p.p. (사역: O가 ~되게 하다)'},
      ],
    },
    {id:34, title:'분사구문: 시간, 원인, 조건', formula:'V-ing ~, 주절 / P.p. ~, 주절',
      note:'부사절을 분사를 이용해 짧게 줄인 것. 때(~할 때), 원인(~하므로, ~해서), 조건(만약 ~하면). 만드는 법: 접속사·주어 생략, 동사를 v-ing로.',
      examples:[
        {id:'ex341', tokens:[{t:'Walking to school',r:['M']},{t:',',r:['PUNC']},{t:'I',r:['S']},{t:'met',r:['V']},{t:'my friend',r:['O']},{t:'.',r:['PUNC']}], translation:'학교에 걸어가면서, 나는 친구를 만났다. (때)'},
      ],
      practice:[
        {id:'pr341', tokens:[{t:'Feeling tired',r:['M']},{t:',',r:['PUNC']},{t:'she',r:['S']},{t:'went',r:['V']},{t:'to bed early',r:['M']},{t:'.',r:['PUNC']}], translation:'피곤함을 느껴서, 그녀는 일찍 잠자리에 들었다. (원인)'},
        {id:'pr342', tokens:[{t:'Seen from above',r:['M']},{t:',',r:['PUNC']},{t:'the island',r:['S']},{t:'looks',r:['V']},{t:'like a heart',r:['SC']},{t:'.',r:['PUNC']}], translation:'위에서 보면, 그 섬은 하트 모양으로 보인다. (조건)'},
      ],
      quiz:[
        {id:'qz341', sentence:'___ the door, I heard a strange noise.', choices:['Opening','Opened','Open','To open'], answer:0, hint:'분사구문: 주절의 주어(I)가 능동 → v-ing'},
        {id:'qz342', sentence:'___ in simple English, the book is easy to read.', choices:['Written','Writing','Write','To write'], answer:0, hint:'주절의 주어(book)가 쓰여진(수동) → p.p.'},
      ],
    },
    {id:35, title:'분사구문의 시제와 태, 부정', formula:'Having p.p. ~ / (Being) p.p. ~ / Not v-ing ~',
      note:'완료시제: Having p.p. (~했을 때/~했으므로) / 수동태: (Being) p.p. ~ / 부정: Not/Never v-ing ~',
      examples:[
        {id:'ex351', tokens:[{t:'Having finished homework',r:['M']},{t:',',r:['PUNC']},{t:'he',r:['S']},{t:'played',r:['V']},{t:'games',r:['O']},{t:'.',r:['PUNC']}], translation:'숙제를 끝낸 후, 그는 게임을 했다.'},
      ],
      practice:[
        {id:'pr351', tokens:[{t:'Not knowing the answer',r:['M']},{t:',',r:['PUNC']},{t:'she',r:['S']},{t:'asked',r:['V']},{t:'the teacher',r:['O']},{t:'.',r:['PUNC']}], translation:'답을 몰라서, 그녀는 선생님에게 물었다.'},
      ],
      quiz:[
        {id:'qz351', sentence:'___ studied hard, she passed the exam.', choices:['Having','Being','Not','Has'], answer:0, hint:'완료 분사구문: Having p.p. (주절보다 먼저 일어남)'},
        {id:'qz352', sentence:'___ knowing what to do, he just sat there.', choices:['Not','Having','Being','Without'], answer:0, hint:'부정 분사구문: Not v-ing'},
      ],
    },
    {id:36, title:'주어·접속사가 있는 분사구문 / with+O+v-ing/p.p.', formula:'S\' + v-ing/p.p. / 접속사 + v-ing/p.p. / with + O + v-ing/p.p.',
      note:'주어가 다르면 분사 앞에 주어 남김 / 접속사+분사구문: 의미 명확화 / with+O+v-ing/p.p.: O가 ~한/된 채로',
      examples:[
        {id:'ex361', tokens:[{t:'With the door open',r:['M']},{t:',',r:['PUNC']},{t:'the room',r:['S']},{t:'was',r:['V']},{t:'cold',r:['SC']},{t:'.',r:['PUNC']}], translation:'문이 열린 채로, 방이 추웠다.'},
      ],
      practice:[
        {id:'pr361', tokens:[{t:'The sun having set',r:['M']},{t:',',r:['PUNC']},{t:'we',r:['S']},{t:'went',r:['V']},{t:'home',r:['M']},{t:'.',r:['PUNC']}], translation:'해가 진 후, 우리는 집에 갔다.'},
        {id:'pr362', tokens:[{t:'She',r:['S']},{t:'sat',r:['V']},{t:'with her eyes closed',r:['M']},{t:'.',r:['PUNC']}], translation:'그녀는 눈을 감은 채 앉아 있었다.'},
      ],
      quiz:[
        {id:'qz361', sentence:'She was reading with her cat ___ on her lap.', choices:['sitting','sat','sit','to sit'], answer:0, hint:'with + O + v-ing (O가 능동: 앉아 있는)'},
        {id:'qz362', sentence:'She left with her homework ___.', choices:['unfinished','unfinishing','unfinish','to unfinish'], answer:0, hint:'with + O + p.p. (O가 수동: 끝마쳐지지 않은)'},
      ],
    },
  ],
};
registerUnit(UNIT_08);
