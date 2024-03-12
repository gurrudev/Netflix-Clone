import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBueF2exJYrDEhkeuDc6xKOaEP4VXKqGWo",
    authDomain: "neflix-30554.firebaseapp.com",
    projectId: "neflix-30554",
    storageBucket: "neflix-30554.appspot.com",
    messagingSenderId: "35757164016",
    appId: "1:35757164016:web:1b089040a2c6362eac8935"
  
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore()
const auth = firebase.auth()

export { auth};
export default db;

