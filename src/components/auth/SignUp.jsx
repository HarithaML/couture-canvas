import React, {useState} from "react";
import InputField from "../reusable/InputField";

import Button from "../reusable/Button";

import {createUserDocumentFromAuth, createUserWithEmailAndPasswordLocal} from "../../utils/Firebase";


const SignUp = () => {


    const [formData, setFormData] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleInputChange = (field, value) => {
        setFormData({...formData, [field]: value});
    };

    const handleSignUp = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = formData;

        // Validation checks
        if (!displayName || !email || !password || !confirmPassword) {
            // Handle missing fields
            console.error("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            // Handle password mismatch
            console.error("Passwords do not match.");
            setFormData({
                password: "",
                confirmPassword: "",
            });
            return;
        }

        try {
            // Use Firebase function to create user with email and password
            const user = await createUserWithEmailAndPasswordLocal(email, password);


            await createUserDocumentFromAuth(user, {displayName});

            // Clear form data
            setFormData({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });

            // Handle successful sign-up (you can redirect or show a success message)
            console.log("User successfully signed up.");

        } catch (error) {
            // Handle error from createUserWithEmailAndPasswordFunction
            console.error("Error during sign-up:", error.message);
        }
    };
    const inputFields = [
        {type: "text", id: "displayName", label: "Display Name"},
        {type: "email", id: "email", label: "Email"},
        {type: "password", id: "password", label: "Password"},
        {type: "password", id: "confirmPassword", label: "Confirm Password"},
    ];

    return (
        <div className="w-1/2 m-4 p-4 h-[800px] bg-white  sign-in rounded-xl flex flex-col items-center justify-center">

            <span className=" text-5xl mb-4">New User?</span>
            <span className="sign-title text-5xl ">Sign Up</span>
            <form className="mt-6">
                {inputFields.map((field) => (
                    <InputField
                        key={field.id}
                        type={field.type}
                        id={field.id}
                        label={field.label}
                        value={formData[field.id]}
                        onChange={(value) => handleInputChange(field.id, value)}
                    />
                ))}

            </form>
            <Button onClick={handleSignUp}>
                Sign Up
            </Button>


        </div>
    );
};

export default SignUp;
