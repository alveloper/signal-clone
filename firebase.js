// (1) 임포트하기
// import * as firebase from "firebase" 하고도 필요한 건 직접 임포트 해야 함
import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMSDCVdZB2I5ZIx1oHR6hUoC2s1lMucJ4",
  authDomain: "signal-clone-4c9eb.firebaseapp.com",
  projectId: "signal-clone-4c9eb",
  storageBucket: "signal-clone-4c9eb.appspot.com",
  messagingSenderId: "641544522092",
  appId: "1:641544522092:web:f7675c96859bc324ff4b49",
};

// (2) app 만들기
let app;

// (3) 길이가 0일 때만 (= 최초 생성일 때만) initialize.
// 이미 initialized 됐으면 firebase app instance를 가져옴
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// (4) db, auth 생성
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };