import {initializeApp} from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    signOut,
} from 'firebase/auth';
import {collection, doc, getDoc, getDocs, getFirestore, query, setDoc, writeBatch} from 'firebase/firestore';

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

// Create Google authentication provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

// Get authentication and Firestore instances
export const auth = getAuth();
export const db = getFirestore();


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
};

// Function to sign in with Google using a popup
export const signInWithGooglePopup = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const {user} = result;
        return {user};
    } catch (error) {
        throw new Error(`Google Sign-In with Popup failed: ${error.message}`);
    }
};


// Function to sign in with Google using redirect
export const signInWithGoogleRedirect = async () => {
    try {
        await signInWithRedirect(auth, provider);
        // Assuming you'll handle the redirect in another part of your app
    } catch (error) {
        throw new Error(`Google Sign-In with Redirect failed: ${error.message}`);
    }
};

// Function to create or retrieve a user document from Firestore based on user authentication data
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    try {
        if (userAuth && userAuth.uid) {
            // Create a reference to the user's document in the 'users' collection
            const userDocRef = doc(db, 'users', userAuth.uid);
            console.log('user Document Reference:', userDocRef);

            // Get the snapshot of the user's document
            const userDocSnapshot = await getDoc(userDocRef);

            if (userDocSnapshot.exists()) {
                // If the document exists, log user data and return the document reference
                const userData = userDocSnapshot.data();
                console.log('user Data:', userData);
                return userDocRef;
            } else {
                // If the document doesn't exist, create it with user information
                console.error('user snapshot does not exist');
                const {displayName, email} = userAuth;
                const createdAt = new Date();

                try {
                    await setDoc(userDocRef, {
                        displayName,
                        email,
                        createdAt,
                        ...additionalInformation
                    });
                } catch (error) {
                    console.error('Error creating the user:', error.message);
                }
            }
        } else {
            console.error('Invalid userAuth object:', userAuth);
        }
    } catch (error) {
        console.error('Error in createUserDocumentFromAuth:', error.message);
    }
};


export const createUserWithEmailAndPasswordLocal = async (email, password) => {
    try {
        if (!email || !password) {
            throw new Error("Email and password are required.");
        }

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log("user successfully created:", user);
        return user;
    } catch (error) {
        console.error("Error creating user:", error.message);
        throw error;
    }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);