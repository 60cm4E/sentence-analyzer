// Unit 02 - 수식어, 구와 절 (Points 06-08)
const UNIT_02 = {
  id: 2,
  title: '수식어, 구와 절',
  chapter: { id: 1, title: '문장의 구조' },
  points: [
    // ── Point 06: 수식어 ──
    {
      id: 6,
      title: '수식어',
      formula: 'M (Modifier)',
      note: '다른 말을 꾸며 주면서 의미를 더 자세하게 만드는 말. 형용사적 수식어: ~한, ~하는 (명사 수식) / 부사적 수식어: ~하게, ~히 (동사·형용사·부사·문장 수식)',
      examples: [
        {
          id:'ex061',
          tokens:[
            {t:'The tall girl',  r:['S']},
            {t:'next to John',   r:['M']},
            {t:'is',             r:['V']},
            {t:'my sister',      r:['SC']},
            {t:'.',              r:['PUNC']},
          ],
          translation:'John 옆의 키 큰 여자는 나의 여동생이다.',
          note: '"tall"과 "next to John"은 모두 girl을 수식하는 형용사적 수식어',
        },
        {
          id:'ex062',
          tokens:[
            {t:'The box',    r:['S']},
            {t:'is',         r:['V']},
            {t:'really',     r:['M']},
            {t:'heavy',      r:['SC']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'그 상자는 정말 무겁다.',
          note: '"really"는 형용사 heavy를 수식하는 부사적 수식어',
        },
      ],
      practice: [
        {
          id:'pr061',
          tokens:[
            {t:'She',           r:['S']},
            {t:'always',        r:['M']},
            {t:'eats',          r:['V']},
            {t:'breakfast',     r:['O']},
            {t:'early',         r:['M']},
            {t:'.',             r:['PUNC']},
          ],
          translation:'그녀는 항상 아침을 일찍 먹는다.',
        },
        {
          id:'pr062',
          tokens:[
            {t:'The old house',  r:['S']},
            {t:'on the hill',    r:['M']},
            {t:'looks',          r:['V']},
            {t:'very scary',     r:['SC']},
            {t:'.',              r:['PUNC']},
          ],
          translation:'언덕 위의 오래된 집은 매우 무섭게 보인다.',
        },
        {
          id:'pr063',
          tokens:[
            {t:'We',             r:['S']},
            {t:'walked',         r:['V']},
            {t:'quietly',        r:['M']},
            {t:'through the park',r:['M']},
            {t:'.',              r:['PUNC']},
          ],
          translation:'우리는 공원을 가로질러 조용히 걸었다.',
        },
      ],
      quiz: [
        { id:'qz061', sentence:'She speaks English very ___. (유창하게)', choices:['fluently','fluent','fluence','fluential'], answer:0, hint:'동사 speaks를 수식하므로 부사(fluently)가 와야 한다' },
        { id:'qz062', sentence:'There was a ___ smell in the room. (끔찍한)', choices:['terrible','terribly','terror','terrific'], answer:0, hint:'명사 smell 앞에서 수식하므로 형용사(terrible)가 와야 한다' },
      ],
    },

    // ── Point 07: 명사구, 형용사구, 부사구 ──
    {
      id: 7,
      title: '명사구, 형용사구, 부사구',
      formula: '구: S, V가 없는 두 단어 이상의 말',
      note: '명사구: ~하는 것, ~하기 (S/O/C 역할) / 형용사구: ~한, ~하는, ~된 (명사 수식) / 부사구: ~에, ~하게, ~할 때 (동사·형용사·부사·문장 수식)',
      examples: [
        {
          id:'ex071',
          tokens:[
            {t:'Studying alone', r:['S']},
            {t:'is',             r:['V']},
            {t:'a good idea',    r:['SC']},
            {t:'.',              r:['PUNC']},
          ],
          translation:'혼자 공부하는 것은 좋은 생각이다.',
          note: '"Studying alone"은 명사구로 주어(S) 역할',
        },
        {
          id:'ex072',
          tokens:[
            {t:'I',              r:['S']},
            {t:'love',           r:['V']},
            {t:'the tall building',r:['O']},
            {t:'on this street', r:['M']},
            {t:'.',              r:['PUNC']},
          ],
          translation:'나는 이 거리의 키가 큰 건물을 좋아한다.',
          note: '"on this street"은 building을 수식하는 형용사구(전치사구)',
        },
      ],
      practice: [
        {
          id:'pr071',
          tokens:[
            {t:'To finish the task', r:['S']},
            {t:'was',                r:['V']},
            {t:'not easy',           r:['SC']},
            {t:'.',                  r:['PUNC']},
          ],
          translation:'그 과제를 끝내는 것은 쉽지 않았다.',
        },
        {
          id:'pr072',
          tokens:[
            {t:'I',                  r:['S']},
            {t:'have',               r:['V']},
            {t:'some close friends',  r:['O']},
            {t:'to talk to',         r:['M']},
            {t:'.',                  r:['PUNC']},
          ],
          translation:'나는 이야기할 가까운 친구들이 좀 있다.',
        },
        {
          id:'pr073',
          tokens:[
            {t:'The woman',          r:['S']},
            {t:'waiting at the hospital', r:['M']},
            {t:'is',                 r:['V']},
            {t:'my grandmother',     r:['SC']},
            {t:'.',                  r:['PUNC']},
          ],
          translation:'병원에서 기다리고 있는 그 여자분은 나의 할머니이다.',
        },
      ],
      quiz: [
        { id:'qz071', sentence:'___ every day is important for health.', choices:['Exercising','Exercise','Exercised','To exercised'], answer:0, hint:'문장 주어 자리에 동명사(명사구)가 와서 "~하는 것"의 의미' },
        { id:'qz072', sentence:'I need something ___ . (읽을)', choices:['to read','reading','read','readable'], answer:0, hint:'something 뒤에서 수식하는 형용사적 표현 = to부정사구' },
      ],
    },

    // ── Point 08: 등위절, 종속절 ──
    {
      id: 8,
      title: '등위절, 종속절',
      formula: '절: S, V가 있는 두 단어 이상의 말',
      note: '등위절: and, or, but, so 등으로 연결되는 절 / 종속절: 주절 속에서 명사절, 형용사절, 부사절 역할을 하는 절',
      examples: [
        {
          id:'ex081',
          tokens:[
            {t:'I watched TV',     r:['S']},
            {t:'and',              r:['M']},
            {t:'Danny read a book',r:['S']},
            {t:'.',                r:['PUNC']},
          ],
          translation:'나는 TV를 보았다 그리고 Danny는 책을 읽었다.',
          note: 'and로 연결된 등위절 — 두 절이 대등한 관계',
        },
        {
          id:'ex082',
          tokens:[
            {t:'This is',          r:['S']},
            {t:'the laptop',       r:['SC']},
            {t:'/',                r:['DIV']},
            {t:'that I like to use',r:['M']},
            {t:'.',                r:['PUNC']},
          ],
          translation:'이것은 내가 사용하기 좋아하는 노트북이다.',
          note: '"that I like to use"는 the laptop을 수식하는 형용사절(관계대명사절)',
        },
      ],
      practice: [
        {
          id:'pr081',
          tokens:[
            {t:'She studied hard', r:['S']},
            {t:'but',              r:['M']},
            {t:'she failed the test',r:['S']},
            {t:'.',                r:['PUNC']},
          ],
          translation:'그녀는 열심히 공부했지만 시험에 떨어졌다.',
        },
        {
          id:'pr082',
          tokens:[
            {t:'I believe',         r:['S']},
            {t:'that we will achieve our goal',r:['O']},
            {t:'.',                  r:['PUNC']},
          ],
          translation:'나는 우리가 목표를 이룰 거라고 믿는다.',
        },
        {
          id:'pr083',
          tokens:[
            {t:'Before the rain starts',r:['M']},
            {t:',',                     r:['PUNC']},
            {t:'we',                    r:['S']},
            {t:'should go',             r:['V']},
            {t:'home',                  r:['M']},
            {t:'.',                     r:['PUNC']},
          ],
          translation:'비가 시작하기 전에, 우리는 집에 가야 한다.',
        },
      ],
      quiz: [
        { id:'qz081', sentence:'I was tired, ___ I went to bed early.', choices:['so','but','or','for'], answer:0, hint:'"그래서"의 의미로 결과를 나타내는 등위접속사 = so' },
        { id:'qz082', sentence:'___ you find anything strange, tell me.', choices:['If','But','And','Or'], answer:0, hint:'조건을 나타내는 종속접속사(부사절) = If' },
      ],
    },
  ],
};

registerUnit(UNIT_02);
