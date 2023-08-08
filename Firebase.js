import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBRl5J48Vwzj14BhyNaiWtrUSFwn4w-J_k",
  authDomain: "netflix-clone-140f4.firebaseapp.com",
  projectId: "netflix-clone-140f4",
  storageBucket: "netflix-clone-140f4.appspot.com",
  messagingSenderId: "105921772965",
  appId: "1:105921772965:web:4f299cc337a10262ffbc4c"
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore()
const auth = firebase.auth()

export { auth};
export default db;

