import React, { useState } from "react";
import InputField from "../reusable/InputField";

import Button from "../reusable/Button";
import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
} from "../../utils/Firebase";




const SignIn = () => {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
  

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            console.log(user);
            
           setEmail("")
           setPassword("")
           
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


    const signInWithGoogle = async () => {
        try {
            await signInWithGooglePopup();
        } catch (error) {

        }
    };



    return (
        <div className=" m-4 p-4 h-[800px] bg-white rounded-xl flex flex-col justify-center items-center w-1/2">

               
                    <span className=" text-5xl mb-4" >Existing User?</span>
                    <span className="sign-title text-5xl ">Sign In</span>
              
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
                    <Button className=" flex-row gap-2" onClick={signInWithGoogle}>
                        <img alt="google" src="/images/google.png" className="w-[20px] h-[20px]" />
                        <span>Sign In With Google</span>
                    </Button>
                </div>
           
        </div>
    );
};

export default SignIn;
