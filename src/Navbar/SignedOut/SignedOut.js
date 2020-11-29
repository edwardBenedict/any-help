// import {  } from "../Navbar.style";
import { StyledFlexWrapper, StyledButton } from "./SignedOut.style";

import { useHistory } from "react-router-dom";

const SignedOut = (props) => {
  console.log(props);
  const history = useHistory();

  const goToSignUp = () => {
    history.push("/signup");
  };
  const goToLogin = () => {
    history.push("/login");
  };
  return (
    <StyledFlexWrapper>
      <StyledButton onClick={goToLogin}>Login</StyledButton>
      <StyledButton onClick={goToSignUp}>Sign Up</StyledButton>
    </StyledFlexWrapper>
  );
};

export default SignedOut;
