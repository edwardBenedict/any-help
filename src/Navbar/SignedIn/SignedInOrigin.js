import { StyledFlexWrapper, StyledButton } from "../SignedOut/SignedOut.style";
// import { Link, useHistory } from "react-router-dom";
import firebase from "../../Firebase/Firebase";

const SignedIn = ({ displayName }) => {
  const logOut = () => {
    firebase.signOut();
  };

  return (
    <StyledFlexWrapper>
      <StyledButton onClick={logOut}>Logout</StyledButton>
      <StyledButton>New Question</StyledButton>
      <StyledButton>{displayName}</StyledButton>
    </StyledFlexWrapper>
  );
};

export default SignedIn;
