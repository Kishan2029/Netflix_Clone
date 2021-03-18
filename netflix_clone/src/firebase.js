import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBEA9imAMJGq545RHmlmr0PQ_be3HjX80A",
    authDomain: "netflix-clone-c930a.firebaseapp.com",
    projectId: "netflix-clone-c930a",
    storageBucket: "netflix-clone-c930a.appspot.com",
    messagingSenderId: "350400695924",
    appId: "1:350400695924:web:2308f954b7b4363bbf4b21",
    measurementId: "G-6HQ594GLRL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db;