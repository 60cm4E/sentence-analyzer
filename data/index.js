// 문장분석 트레이너 데이터 인덱스
// 각 유닛 파일을 script 태그로 로드한 뒤, 이 파일이 모든 유닛을 하나로 합침

// 성분 라벨 정의
const LABELS = {
  S:   { ko:'주어',       color:'#2563EB', bg:'#DBEAFE' },
  V:   { ko:'동사',       color:'#DC2626', bg:'#FEE2E2' },
  O:   { ko:'목적어',     color:'#059669', bg:'#D1FAE5' },
  SC:  { ko:'주격보어',   color:'#D97706', bg:'#FEF3C7' },
  IO:  { ko:'간접목적어', color:'#7C3AED', bg:'#EDE9FE' },
  DO:  { ko:'직접목적어', color:'#4F46E5', bg:'#E0E7FF' },
  OC:  { ko:'목적격보어', color:'#DB2777', bg:'#FCE7F3' },
  M:   { ko:'수식어',     color:'#6B7280', bg:'#F3F4F6' },
  ANC: { ko:'선행사',     color:'#B45309', bg:'#FEF3C7', bold:true },
  REL: { ko:'관계사',     color:'#6D28D9', bg:'#EDE9FE', bold:true },
  RCS: { ko:"관계절 S'",  color:'#1D4ED8', bg:'#DBEAFE' },
  RCV: { ko:"관계절 V'",  color:'#B91C1C', bg:'#FEE2E2' },
  RCO: { ko:"관계절 O'",  color:'#047857', bg:'#D1FAE5' },
  RCM: { ko:"관계절 M'",  color:'#4B5563', bg:'#F9FAFB' },
};

// 모든 유닛 등록 배열 (유닛 파일에서 push)
const ALL_UNITS = [];

// 유닛 등록 헬퍼
function registerUnit(unitData) {
  ALL_UNITS.push(unitData);
  ALL_UNITS.sort((a, b) => a.id - b.id);
}

// 모든 유닛에서 Points 배열 추출 (앱에서 사용)
function getAllPoints() {
  const pts = [];
  ALL_UNITS.forEach(u => {
    u.points.forEach(p => {
      pts.push({ ...p, unitId: u.id, unitTitle: u.title, chapter: u.chapter });
    });
  });
  return pts.sort((a, b) => a.id - b.id);
}

// 챕터 그룹 정보
const CHAPTERS = [
  { id:1, title:'문장의 구조',   units:[1,2] },
  { id:2, title:'동사의 역할',   units:[3,4,5] },
  { id:3, title:'to-v / v-ing / p.p.', units:[6,7,8] },
  { id:4, title:'문장의 확장',   units:[9,10,11,12] },
  { id:5, title:'특수구문',      units:[13,14,15] },
];
