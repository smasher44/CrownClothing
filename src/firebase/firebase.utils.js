import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, getDoc, setDoc} from "firebase/firestore";

const firebaseConfig = { // these properties are given by the firebase
  apiKey: "AIzaSyBo8coHfZlrghmoAsHb7bKpOVdTgV5seoU",
  authDomain: "crwn-79e24.firebaseapp.com",
  projectId: "crwn-79e24", 
  storageBucket: "crwn-79e24.appspot.com",
  messagingSenderId: "844349018350",
  appId: "1:844349018350:web:e5a7f3158635b4720ae3ff",
  measurementId: "G-JFS2EJ19BP",
}

const firebase = initializeApp( firebaseConfig ); // initialization
export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if (!userAuth) return; // if userAuth is null you get out with this function
    //console.log('useAuth',userAuth)
    const userRef = doc(firestore,`users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);
    //console.log('snapShot', snapShot)
    if(!snapShot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      //console.log('check', displayName)
      try {
        await setDoc(userRef, { displayName, email, createdAt, ...additionalData})
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  // 'login_hint': 'user@example.com'
   prompt: 'select_account'
});

export const signInWithGoogle = () => signInWithPopup(auth, provider)

export default firebase;


