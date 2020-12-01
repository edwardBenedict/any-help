import React from "react";
import { FaListUl } from "react-icons/fa";
import "../SignedOut/SignedOut.css";
import firebase from "../../Firebase/Firebase";

const SignedOut = ({ displayName }) => {
  const logout = () => {
    firebase.signOut();
  };
  return (
    <div className="menu">
      <li className="dropdown">
        <a className="dp-btn" href="/">
          <FaListUl className="icon" />
        </a>
        <div className="dp-content">
          <button onClick={logout}>Logout</button>
          <button>New Question</button>
          <button>{displayName}</button>
        </div>
      </li>
    </div>
  );
};

export default SignedOut;
