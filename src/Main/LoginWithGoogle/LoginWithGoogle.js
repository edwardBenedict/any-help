import React from "react";
import { StyledButton } from "./LoginWithGoogle.style";
import firebase from "../../Firebase/Firebase";
import { useHistory } from "react-router-dom";

const LoginWithGoogle = () => {
  const history = useHistory();
  const login = () => {
    console.log("Login With Google Button");
    firebase.useGoogleProvider();
    history.push("/");
  };
  return (
    <div>
      <StyledButton onClick={login}>With Google</StyledButton>
    </div>
  );
};

export default LoginWithGoogle;
