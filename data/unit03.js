// Unit 03 - 동사의 시제 (Points 09-13)
const UNIT_03 = {
  id: 3,
  title: '동사의 시제',
  chapter: { id: 2, title: '동사의 역할' },
  points: [
    // ── Point 09: 현재, 과거, 미래 ──
    {
      id: 9,
      title: '현재, 과거, 미래',
      formula: '현재: V(s) / 과거: V-ed / 미래: will V / be going to V',
      note: '현재: ~하다, ~이다 (상태·습관·사실) / 과거: ~했다, ~이었다 / 미래: ~할 것이다, ~일 것이다',
      examples: [
        {
          id:'ex091',
          tokens:[
            {t:'I',          r:['S']},
            {t:'take',       r:['V']},
            {t:'a walk',     r:['O']},
            {t:'/',          r:['DIV']},
            {t:'after dinner',r:['M']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'나는 저녁 식사 후에 산책한다. (현재의 습관)',
        },
        {
          id:'ex092',
          tokens:[
            {t:'We',         r:['S']},
            {t:'watched',    r:['V']},
            {t:'the movie',  r:['O']},
            {t:'together',   r:['M']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'우리는 그 영화를 함께 보았다. (과거)',
        },
      ],
      practice: [
        {
          id:'pr091',
          tokens:[
            {t:'She',        r:['S']},
            {t:'plays',      r:['V']},
            {t:'the piano',  r:['O']},
            {t:'every day',  r:['M']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'그녀는 매일 피아노를 친다.',
        },
        {
          id:'pr092',
          tokens:[
            {t:'They',       r:['S']},
            {t:'will visit', r:['V']},
            {t:'the museum', r:['O']},
            {t:'tomorrow',   r:['M']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'그들은 내일 박물관을 방문할 것이다.',
        },
        {
          id:'pr093',
          tokens:[
            {t:'He',         r:['S']},
            {t:'lost',       r:['V']},
            {t:'his wallet', r:['O']},
            {t:'yesterday',  r:['M']},
            {t:'.',          r:['PUNC']},
          ],
          translation:'그는 어제 지갑을 잃어버렸다.',
        },
      ],
      quiz: [
        { id:'qz091', sentence:'The earth ___ around the sun. (돌다)', choices:['goes','went','will go','is going'], answer:0, hint:'과학적 사실 → 현재시제' },
        { id:'qz092', sentence:'She ___ to the park yesterday.', choices:['went','goes','will go','going'], answer:0, hint:'yesterday → 과거시제' },
      ],
    },

    // ── Point 10: be v-ing (진행형) ──
    {
      id: 10,
      title: 'be v-ing (진행형)',
      formula: 'am/are/is + V-ing (현재진행) / was/were + V-ing (과거진행)',
      note: '현재진행: ~하고 있다, ~하는 중이다 / 과거진행: ~하고 있었다 / 미래진행: will be V-ing',
      examples: [
        {
          id:'ex101',
          tokens:[
            {t:'She',         r:['S']},
            {t:'is reading',  r:['V']},
            {t:'a novel',     r:['O']},
            {t:'right now',   r:['M']},
            {t:'.',           r:['PUNC']},
          ],
          translation:'그녀는 지금 소설을 읽고 있다.',
        },
      ],
      practice: [
        {
          id:'pr101',
          tokens:[
            {t:'The kids',     r:['S']},
            {t:'were playing', r:['V']},
            {t:'in the garden',r:['M']},
            {t:'.',            r:['PUNC']},
          ],
          translation:'아이들은 정원에서 놀고 있었다.',
        },
        {
          id:'pr102',
          tokens:[
            {t:'I',              r:['S']},
            {t:'am studying',    r:['V']},
            {t:'for the exam',   r:['M']},
            {t:'.',              r:['PUNC']},
          ],
          translation:'나는 시험을 위해 공부하고 있다.',
        },
      ],
      quiz: [
        { id:'qz101', sentence:'Look! The baby ___ . (웃고 있다)', choices:['is smiling','smiles','smiled','smile'], answer:0, hint:'Look! → 지금 일어나는 동작 → 현재진행형' },
        { id:'qz102', sentence:'She ___ TV when I called.', choices:['was watching','watched','is watching','watches'], answer:0, hint:'과거의 특정 시점에 진행 중이던 동작 → 과거진행형' },
      ],
    },

    // ── Point 11: have/has p.p. (현재완료) ① ──
    {
      id: 11,
      title: 'have/has p.p. (현재완료) ①',
      formula: 'have/has + p.p.',
      note: '계속: ~해 왔다 / 경험: ~한 적 있다 / 완료: ~(완료)했다 / 결과: (그 결과) ~하다. 과거의 일이 현재까지 영향을 미침.',
      examples: [
        {
          id:'ex111',
          tokens:[
            {t:'I',            r:['S']},
            {t:'have lived',   r:['V']},
            {t:'here',         r:['M']},
            {t:'for ten years',r:['M']},
            {t:'.',            r:['PUNC']},
          ],
          translation:'나는 10년 동안 여기에 살아왔다. (계속)',
        },
      ],
      practice: [
        {
          id:'pr111',
          tokens:[
            {t:'She',          r:['S']},
            {t:'has visited',  r:['V']},
            {t:'Paris',        r:['O']},
            {t:'twice',        r:['M']},
            {t:'.',            r:['PUNC']},
          ],
          translation:'그녀는 파리를 두 번 방문한 적이 있다. (경험)',
        },
        {
          id:'pr112',
          tokens:[
            {t:'He',           r:['S']},
            {t:'has just finished',r:['V']},
            {t:'his homework', r:['O']},
            {t:'.',            r:['PUNC']},
          ],
          translation:'그는 방금 숙제를 끝냈다. (완료)',
        },
      ],
      quiz: [
        { id:'qz111', sentence:'I ___ never ___ sushi before.', choices:['have / eaten','had / eat','has / ate','have / ate'], answer:0, hint:'경험: have never p.p. = ~한 적 없다' },
        { id:'qz112', sentence:'She ___ here since 2020.', choices:['has lived','lived','lives','is living'], answer:0, hint:'since 2020 → 과거부터 현재까지 계속 → 현재완료' },
      ],
    },

    // ── Point 12: have/has p.p. (현재완료) ② ──
    {
      id: 12,
      title: 'have/has p.p. (현재완료) ②',
      formula: 'have/has + p.p. (심화)',
      note: '현재완료는 yesterday, last ~, ago 등 구체적 과거 시점과 함께 쓸 수 없다. cf. 과거시제는 현재와 관계없는 과거의 일.',
      examples: [
        {
          id:'ex121',
          tokens:[
            {t:'I',            r:['S']},
            {t:'have lost',    r:['V']},
            {t:'my key',       r:['O']},
            {t:'.',            r:['PUNC']},
          ],
          translation:'나는 열쇠를 잃어버렸다. (결과: 지금도 없음)',
        },
      ],
      practice: [
        {
          id:'pr121',
          tokens:[
            {t:'They',        r:['S']},
            {t:'have known',   r:['V']},
            {t:'each other',   r:['O']},
            {t:'for a long time',r:['M']},
            {t:'.',            r:['PUNC']},
          ],
          translation:'그들은 오랫동안 서로를 알아왔다.',
        },
        {
          id:'pr122',
          tokens:[
            {t:'The train',   r:['S']},
            {t:'has already left',r:['V']},
            {t:'.',            r:['PUNC']},
          ],
          translation:'기차가 이미 떠나버렸다. (결과: 지금 없음)',
        },
      ],
      quiz: [
        { id:'qz121', sentence:'I have lived here ___ 2015.', choices:['since','for','ago','from'], answer:0, hint:'특정 시점부터 현재까지 = since + 시점' },
        { id:'qz122', sentence:'She has studied English ___ five years.', choices:['for','since','ago','in'], answer:0, hint:'기간 = for + 기간' },
      ],
    },

    // ── Point 13: had p.p. (과거완료) ──
    {
      id: 13,
      title: 'had p.p. (과거완료)',
      formula: 'had + p.p.',
      note: '과거의 특정 시점 이전에 일어나거나 과거까지 영향을 준 일. 계속/경험/완료/결과 용법.',
      examples: [
        {
          id:'ex131',
          tokens:[
            {t:'She',          r:['S']},
            {t:'had already left',r:['V']},
            {t:'/',            r:['DIV']},
            {t:'when I arrived',r:['M']},
            {t:'.',            r:['PUNC']},
          ],
          translation:'내가 도착했을 때 그녀는 이미 떠나버렸었다.',
        },
      ],
      practice: [
        {
          id:'pr131',
          tokens:[
            {t:'He',           r:['S']},
            {t:'had never seen',r:['V']},
            {t:'snow',         r:['O']},
            {t:'/',            r:['DIV']},
            {t:'before he moved to Korea',r:['M']},
            {t:'.',            r:['PUNC']},
          ],
          translation:'그는 한국으로 이사 오기 전에 눈을 본 적이 없었다.',
        },
        {
          id:'pr132',
          tokens:[
            {t:'The movie',    r:['S']},
            {t:'had already started',r:['V']},
            {t:'/',            r:['DIV']},
            {t:'when we arrived at the theater',r:['M']},
            {t:'.',            r:['PUNC']},
          ],
          translation:'우리가 극장에 도착했을 때 영화는 이미 시작했었다.',
        },
      ],
      quiz: [
        { id:'qz131', sentence:'When I got home, my mom ___ already ___ dinner.', choices:['had / cooked','has / cooked','was / cooking','is / cooking'], answer:0, hint:'과거 시점(got home) 이전에 완료 → 과거완료' },
        { id:'qz132', sentence:'She ___ never ___ abroad before she turned 20.', choices:['had / traveled','has / traveled','was / traveling','did / travel'], answer:0, hint:'과거 시점(turned 20) 이전의 경험 → 과거완료' },
      ],
    },
  ],
};

registerUnit(UNIT_03);
