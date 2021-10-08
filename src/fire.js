import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCpwZlvv6eoelS7H6xBSON-n0Pl6pSqBsk",
    authDomain: "login-fd341.firebaseapp.com",
    projectId: "login-fd341",
    storageBucket: "login-fd341.appspot.com",
    messagingSenderId: "777117824240",
    appId: "1:777117824240:web:f1b24b205628dc66a1be35"
  };
const fire = firebase.initializeApp(firebaseConfig);
export default fire;