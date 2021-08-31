import firebase from "firebase/app";
import firestore from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCOP4N-o4Kvc7C2GqYLCW02TtszXKzlvHw",
    authDomain: "vue-blog-system-5bd39.firebaseapp.com",
    projectId: "vue-blog-system-5bd39",
    storageBucket: "vue-blog-system-5bd39.appspot.com",
    messagingSenderId: "379525339433",
    appId: "1:379525339433:web:06ea2e92abf9277c8ebf38"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);
  //database setup
  let db=firebase.firestore();
  export {db};