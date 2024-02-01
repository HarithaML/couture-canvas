import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const switchToSignUp = () => {
    setIsSignIn(false);
  };

  const switchToSignIn = () => {
    setIsSignIn(true);
  };

  return (
    <div className="">
      {isSignIn ? (
        <SignIn switchToSignUp={switchToSignUp} />
      ) : (
        <SignUp switchToSignIn={switchToSignIn} />
      )}
    </div>
  );
};

export default Auth;