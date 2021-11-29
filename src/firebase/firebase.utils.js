import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, getDoc, setDoc } from "firebase/firestore";

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

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if (!userAuth) return;
  //console.log('useAuth',userAuth)
  const userRef = doc(firestore,`users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);
  //console.log('snapShot', snapShot)

  if(!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log('check', displayName)
    try {
      await setDoc(userRef, { displayName, email, createdAt, ...additionalData})
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

//const doc = doc(firestore, '')
//const collection = collection(firestore,'/users');


// neglect below FTMT
export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  // 'login_hint': 'user@example.com'
   prompt: 'select_account'
  
});

export const signInWithGoogle = () => signInWithPopup(auth, provider)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });

  export default firebase;




// old codes
// provider.setCustomParameters({ prompt: 'select_account'});
// export const signInWithGoogle = () => signInWithPopup(provider);




















