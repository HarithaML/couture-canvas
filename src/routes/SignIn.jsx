import React from "react";
import { signInWithGooglePopup,createUserDocumentFromAuth } from "../utils/Firebase";

const SignIn = () => {
    const logGoogleUser = async () => {
        try {
            const {user} = await signInWithGooglePopup();
            console.log('Google Sign-In Response:', user);
            const userDocRef = await createUserDocumentFromAuth(user);
        } catch (error) {
            console.error('Error during Google Sign-In:', error);
        }
    }
    return (
        <div>
            <h1 className="">SignIn</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google Popup
            </button>
        </div>
    )

}

export default SignIn;