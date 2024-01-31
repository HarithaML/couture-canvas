import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXR8n75JaDIEiPgxQU0bQrD3vgOUSfck0",
    authDomain: "couture-canvas.firebaseapp.com",
    projectId: "couture-canvas",
    storageBucket: "couture-canvas.appspot.com",
    messagingSenderId: "1080018145996",
    appId: "1:1080018145996:web:a02eb527634aff44db6869"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    if (userAuth  && userAuth.uid) {
        const userDocRef = doc(db, 'users', userAuth.uid);
        console.log('User Document Reference:', userDocRef);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            console.log('User Data:', userData);
            return userDocRef;
        }else{
            console.error('user snapshot does not exist');
            const {displayName, email} = userAuth;
            const createdAt = new Date();
            try{
                await setDoc(userDocRef, {
                    displayName,
                    email,
                    createdAt
                });
            }catch (error) {
                console.log('error creating the user', error.message)
            }
        }
    } else {
        console.error('Invalid userAuth object:', userAuth);
    }
}