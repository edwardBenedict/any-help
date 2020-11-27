import React, { useEffect, useState,useContext } from "react";
import { FirebaseAuthContex } from "../Context";
import firebase from "../Firebase/index"

const Navbar = () => {
  const {currentUser}=useContext(FirebaseAuthContex)
  return (
   <button>button</button>
    
  );
};
export default Navbar;
