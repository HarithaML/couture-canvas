import React, {useState} from "react";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";

const Auth = () => {


    return (
        <div className="flex flex-row ">
            <SignUp/>
            <SignIn/>
        </div>
    );
};

export default Auth;