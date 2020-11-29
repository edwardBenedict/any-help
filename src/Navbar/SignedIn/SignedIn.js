import { StyledFlexWrapper, StyledButton } from "../SignedOut/SignedOut.style";
import { Link, useHistory } from "react-router-dom";
import firebase from "../../Firebase/Firebase";

const SignedIn = ({ displayName }) => {
  console.log(displayName);

  const logOut = () => {
    firebase.signOut();
  };

  return (
    <StyledFlexWrapper>
      <StyledButton onClick={logOut} style={{ marginRight: "1rem" }}>
        Logout
      </StyledButton>
      <StyledButton style={{ marginRight: "1rem" }}>New Question</StyledButton>
      <StyledButton>{displayName}</StyledButton>
    </StyledFlexWrapper>
  );
};

export default SignedIn;
