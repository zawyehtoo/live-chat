import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAYUl426R8wd58pxETnsmRsOKhwQDInryg",
    authDomain: "live-chat-1096d.firebaseapp.com",
    projectId: "live-chat-1096d",
    storageBucket: "live-chat-1096d.appspot.com",
    messagingSenderId: "841503491359",
    appId: "1:841503491359:web:ddadfbde9051637451dc2a"
  };

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore  = firebase.firestore()
const  timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore,timestamp, projectAuth}