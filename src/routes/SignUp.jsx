import React, { useState } from "react";
import InputField from "../components/reusable/InputField";
import Button from "../components/reusable/Button";
import { createUserDocumentFromAuth, createUserWithEmailAndPasswordLocal } from "../utils/Firebase";


const SignUp = ({ switchToSignIn }) => {
    const [formData, setFormData] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSignUp = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = formData;

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

            await createUserDocumentFromAuth(user, { displayName });

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
        { type: "text", id: "displayName", label: "Display Name" },
        { type: "email", id: "email", label: "Email" },
        { type: "password", id: "password", label: "Password" },
        { type: "password", id: "confirmPassword", label: "Confirm Password" },
    ];

    return (
        <div className="flex flex-row sign-up  m-4 p-4 h-[800px]">
            <div className="bg-[#594157] flex items-center justify-center flex-col p-8 w-1/2 " >


                <span className="signin-text text-3xl font-bold text-white">Register with us and explore the latest trends, exclusive offers, and personalized recommendations just for you.</span>
                <div className=" mt-8 ">
                    <span className=" signin-button   font-bold  text-3xl text-white"> Already have an account?</span>
                    <button className="switch-to-signIn  border-2  p-2 rounded-xl ml-2" onClick={switchToSignIn}>
                        <span className=" signin-button  font-bold  text-3xl text-white">Sign In</span>
                    </button>
                </div>

            </div>
            <div className="bg-white w-1/2 sign-in rounded-xl flex flex-col items-center justify-center p-4">
                <div className="flex flex-col items-center justify-center">
                    <span className="sign-title text-6xl">Sign Up</span>
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
                    <Button  onClick={handleSignUp} >
                            Sign Up
                        </Button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
