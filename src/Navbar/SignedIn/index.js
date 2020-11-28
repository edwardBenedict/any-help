import { StyledFlexWrapper } from "../Navbar.style";
import {Link, useHistory} from "react-router-dom";
import firebase from "../../Firebase/index"

const SignedIn = ({displayName}) => {
  console.log(displayName)

  const logOut=()=>{
    firebase.signOut()
  }

 
  return (
    <StyledFlexWrapper>
      <button onClick={logOut} style={{marginRight:"1rem"}} >Logout</button>
      <button style={{marginRight:"1rem"}} >New Question</button>
  <button>{displayName}</button>
    </StyledFlexWrapper>
  );
};

export default SignedIn;
