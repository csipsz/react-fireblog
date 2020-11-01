import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCJSqZwpP95dLdrQX_JSSAlSSderxJlEnw",
    authDomain: "react-fireblog-d9c0f.firebaseapp.com",
    databaseURL: "https://react-fireblog-d9c0f.firebaseio.com",
    projectId: "react-fireblog-d9c0f",
    storageBucket: "react-fireblog-d9c0f.appspot.com",
    messagingSenderId: "309205566908",
    appId: "1:309205566908:web:f6270b088911144bd117b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;