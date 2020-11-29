import { createContext, useState, useEffect } from "react";
import firebase from "../Firebase/index"

export const FirebaseAuthContex=createContext()

const AuthContex = (props) => {
    const [flag,setFlag]=useState(false)
    const [currentUser,setcurrentUser]=useState(false)
   
    useEffect(()=>{
        firebase.firebaseAuth.onAuthStateChanged((user)=>{
          setcurrentUser(user)
        })

    },[])

    return (
      <FirebaseAuthContex.Provider value={{ currentUser }}>
          
          {props.children}
      </FirebaseAuthContex.Provider>
    )
}

export default AuthContex