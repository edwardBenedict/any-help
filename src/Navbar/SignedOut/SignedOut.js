import React from "react";
import { FaListUl } from "react-icons/fa";
import "./SignedOut.css";
import { useHistory } from "react-router-dom";

const SignedOut = () => {
  const history = useHistory();

  const goToSignUp = () => {
    history.push("/signup");
  };
  const goToLogin = () => {
    history.push("/login");
  };
  return (
    <div className="menu">
      <li className="dropdown">
        <a className="dp-btn" href="/">
          <FaListUl className="icon" />
        </a>
        <div className="dp-content">
          <button onClick={goToLogin}>Login</button>
          <button onClick={goToSignUp}>Sign Up</button>
        </div>
      </li>
    </div>
  );
};

export default SignedOut;
