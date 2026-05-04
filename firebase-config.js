// ── Firebase Config (compat CDN) ───────────────────────────────────────────
// Firebase 앱/인증/DB 초기화. index.html에서 Firebase SDK 로드 후 실행됨.
// ⚠️ 아래 config 값을 Firebase Console에서 복사한 값으로 교체하세요!

const firebaseConfig = {
  apiKey: "AIzaSyCQ-1vFKfJBKbwwT-HR9TVWsRv888grDls",
  authDomain: "sentence-analyzer-bb4b4.firebaseapp.com",
  projectId: "sentence-analyzer-bb4b4",
  storageBucket: "sentence-analyzer-bb4b4.firebasestorage.app",
  messagingSenderId: "322053523784",
  appId: "1:322053523784:web:2acd0673c09c15233c8b7d",
  measurementId: "G-411BXNQ54Y"
};

firebase.initializeApp(firebaseConfig);
const fbAuth = firebase.auth();
const fbDb   = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// ── 교사 비밀번호 ──
const TEACHER_PIN = '56147458';

// ── Auth 상태 ──
let currentUser = null;  // { uid, displayName, email, photoURL }
let isTeacher   = false;
let studentDoc  = null;  // Firestore 학생 문서 데이터

function isFirebaseReady() {
  return firebaseConfig.apiKey !== "YOUR_API_KEY";
}

// ── Google 로그인 ──
async function loginWithGoogle() {
  if (!isFirebaseReady()) { showToast('⚠️ Firebase 설정이 필요합니다'); return null; }
  try {
    const result = await fbAuth.signInWithPopup(googleProvider);
    return result.user;
  } catch (e) {
    console.error('Login error:', e);
    showToast('로그인 실패: ' + e.message);
    return null;
  }
}

async function logoutUser() {
  await fbAuth.signOut();
  currentUser = null;
  isTeacher = false;
  studentDoc = null;
  updateAuthUI();
}

// ── Firestore: 학생 등록/조회 ──
async function ensureStudentDoc(user) {
  const ref = fbDb.collection('sa_students').doc(user.uid);
  const snap = await ref.get();
  if (snap.exists) {
    studentDoc = snap.data();
    // 마지막 로그인 갱신
    await ref.update({ lastLogin: firebase.firestore.FieldValue.serverTimestamp() });
  } else {
    // 첫 로그인 → 학생 문서 생성
    studentDoc = {
      name: user.displayName || '학생',
      email: user.email,
      photoURL: user.photoURL || '',
      class: '',
      xp: 0,
      streak: 0,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    };
    await ref.set(studentDoc);
  }
  return studentDoc;
}

// ── 진도 저장 ──
async function saveProgressToFirebase(pointId, data) {
  if (!currentUser || isTeacher) return;
  const key = `point_${String(pointId).padStart(2, '0')}`;
  const ref = fbDb.collection('sa_students').doc(currentUser.uid)
                   .collection('progress').doc(key);
  const snap = await ref.get();
  if (snap.exists) {
    const old = snap.data();
    // 더 높은 점수 유지
    if (data.practiceScore && old.practiceScore && old.practiceScore > data.practiceScore) {
      data.practiceScore = old.practiceScore;
    }
    if (data.quizScore && old.quizScore && old.quizScore > data.quizScore) {
      data.quizScore = old.quizScore;
    }
    await ref.update({ ...data, lastDate: new Date().toISOString().split('T')[0] });
  } else {
    await ref.set({ ...data, lastDate: new Date().toISOString().split('T')[0] });
  }
}

// ── XP/Streak 저장 ──
async function syncStatsToFirebase() {
  if (!currentUser || isTeacher) return;
  try {
    await fbDb.collection('sa_students').doc(currentUser.uid).update({
      xp: State.xp,
      streak: State.streak
    });
  } catch (e) { console.warn('Stats sync failed:', e); }
}

// ── 학생 한 명의 진도 전체 조회 ──
async function getStudentProgress(uid) {
  const snap = await fbDb.collection('sa_students').doc(uid)
                         .collection('progress').get();
  const progress = {};
  snap.forEach(d => { progress[d.id] = d.data(); });
  return progress;
}

// ── 전체 학생 목록 (교사용) ──
async function getAllStudents() {
  const snap = await fbDb.collection('sa_students').orderBy('name').get();
  const list = [];
  snap.forEach(d => { list.push({ id: d.id, ...d.data() }); });
  return list;
}
