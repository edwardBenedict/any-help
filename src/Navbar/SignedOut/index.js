import { StyledFlexWrapper } from "../Navbar.style";

import {Link, useHistory} from "react-router-dom";

const SignedOut = (props) => {
  console.log(props)
  const history=useHistory()

  const goToSignUp=()=>{
    history.push("/signup")
  }
  const goToLogin=()=>{
    history.push("/login")
  }
  return (
    <StyledFlexWrapper>
      <button onClick={goToLogin} style={{marginRight:"1rem"}}>Login</button>
      <button onClick={goToSignUp}>SignUp</button>
    </StyledFlexWrapper>
  );
};

export default SignedOut;
