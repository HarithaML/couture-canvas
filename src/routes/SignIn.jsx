import React, { useEffect, useState } from "react";
import { getRedirectResult } from "firebase/auth";
import InputField from "../components/reusable/InputField";
import Button from "../components/reusable/Button";
import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
} from "../utils/Firebase";
import { HeartHandshake } from 'tabler-icons-react';



const SignIn = ({ switchToSignUp }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            console.log(response);
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/invalid-credential':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(error);
                    alert('An unexpected error occurred. Please try again.');
            }
        }
    };


    const logGoogleUser = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            console.log('Google Sign-In with popup Response:', user);
            // Handle the user as needed
        } catch (error) {
            console.error('Error during Google Sign-In with popup:', error);
        }
    };

    useEffect(() => {
        const handleRedirectResult = async () => {
            try {
                console.log('Attempting redirect result...');
                const response = await getRedirectResult(auth);
                console.log('Redirect result:', response);

                if (response && response.user) {
                    console.log('User authenticated:', response.user);
                    const userDocRef = await createUserDocumentFromAuth(response.user);
                    console.log('User document reference:', userDocRef);
                } else {
                    console.log('No user authenticated.');
                }
            } catch (error) {
                console.error('Error handling redirect result:', error);
                // Handle the error as needed
            }
        };

        // Call the function to handle redirect result
        handleRedirectResult();
    }, []); // Empty dependency array to ensure it runs only once on mount

    return (
        <div className="flex flex-row sign-in m-4 p-4 h-[800px]">
   
            <div className="bg-[#594157] w-1/2 flex items-center justify-center flex-col p-8 ">
                <HeartHandshake
                    size={200}
                    strokeWidth={2}
                    color={'#FFFFFF'}
                />
                <span className="signin-text text-6xl mb-4 font-bold text-white flex items-center"> Welcome back! </span>
                <span className="signin-text text-3xl font-bold text-white ">
                    We're delighted to see you again. Your presence brightens our digital space, and we're here to assist you every step of the way. If you have any questions or need support, feel free to reach out. Thank you for choosing us, and we look forward to making your experience with us even better this time around. Happy exploring!
                </span>
                <div className=" mt-8 ">
                    <span className="signin-button font-bold text-3xl text-white"> No account? </span>
                    <button className=" switch-to-signup border-2 p-2 rounded-xl ml-2" onClick={switchToSignUp}>
                        <span className=" signin-button font-bold text-3xl text-white ">Sign Up</span>
                    </button>
                </div>
            </div>
            <div className="bg-white w-1/2 sign-in rounded-xl flex flex-col items-center">
                <div className="mt-[200px]">
                    <span className="sign-title text-6xl ">SignIn</span>
                </div>
                <div className="flex flex-col mt-8 items-center justify-center" >
                    <InputField
                        type="email"
                        id="email"
                        label="Email"
                        value={email}
                        onChange={setEmail}
                    />
                    <InputField
                        type="password"
                        id="password"
                        label="Password"
                        value={password}
                        onChange={setPassword}
                    />
                </div>
                <div className="flex flex-row mt-8">
                    <Button onClick={handleSubmit}>Sign In</Button>
                    <Button className=" flex-row gap-2" onClick={logGoogleUser}>
                        <img alt="google" src="/images/google.png" className="w-[20px] h-[20px]" />
                        <span>Sign In With Google</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
