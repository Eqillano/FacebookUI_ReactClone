import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVD9scqa-V47IX27SocSsFG1uAyLIpRqw",
  authDomain: "face-2e5e9.firebaseapp.com",
  databaseURL: "https://face-2e5e9.firebaseio.com",
  projectId: "face-2e5e9",
  storageBucket: "face-2e5e9.appspot.com",
  messagingSenderId: "254699239022",
  appId: "1:254699239022:web:323ebc83167bacdfe2187f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
