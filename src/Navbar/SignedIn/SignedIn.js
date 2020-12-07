import React from "react";
import { FaListUl } from "react-icons/fa";
import "../SignedOut/SignedOut.css";
import firebase from "../../Firebase/Firebase";
import { useHistory } from "react-router-dom";

const SignedOut = ({ displayName }) => {
  const history = useHistory();

  const logout = () => {
    firebase.signOut();
    history.push("/");
  };

  const newQuestion = () => {
    history.push("/newquestion");
  };

  return (
    <div className="menu">
      <li className="dropdown">
        <a className="dp-btn" href="/">
          <FaListUl className="icon" />
        </a>
        <div className="dp-content">
          <button onClick={logout}>Logout</button>
          <button onClick={newQuestion}>New Question</button>
          <button>{displayName}</button>
        </div>
      </li>
    </div>
  );
};

export default SignedOut;
