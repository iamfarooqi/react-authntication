import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID

  // apiKey: "AIzaSyBiyndCC23uOSVmneZsZ5_3NTjCBwLGP_U",
  //   authDomain: "authentication-react-c3457.firebaseapp.com",
  //   databaseURL: "https://authentication-react-c3457-default-rtdb.firebaseio.com",
  //   projectId: "authentication-react-c3457",
  //   storageBucket: "authentication-react-c3457.appspot.com",
  //   messagingSenderId: "912070154230",
  //   appId: "1:912070154230:web:3cb1b76c07a713a0d959d7"
})

export const auth = app.auth()
export default app
