import React, { useContext } from "react";
import { FirebaseAuthContex } from "../Context/Context";
import {
  StyledNavbarLeftWrapper,
  StyledNavbarMainWrapper,
  StyledNavbarRightWrapper,
  StyledNavbarSearchBoxWrapper,
  StyledLogo,
} from "./Navbar.style";
import SearcBox from "./SearchBox/SearchBox";
import SignedIn from "./SignedIn/SignedIn";
import SignedOut from "./SignedOut/SignedOut";
import logo from "../assets/logo.png";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const { currentUser } = useContext(FirebaseAuthContex);
  const history = useHistory();

  const links = currentUser ? (
    <SignedIn displayName={currentUser?.displayName} />
  ) : (
    <SignedOut />
  );

  const handleHomeClick = () => {
    history.push("/");
  };

  return (
    <StyledNavbarMainWrapper>
      <StyledNavbarLeftWrapper>
        <StyledLogo src={logo} alt="any-help-logo" onClick={handleHomeClick} />
      </StyledNavbarLeftWrapper>
      <StyledNavbarSearchBoxWrapper>
        <SearcBox />
      </StyledNavbarSearchBoxWrapper>

      <StyledNavbarRightWrapper>{links}</StyledNavbarRightWrapper>
    </StyledNavbarMainWrapper>
  );
};
export default Navbar;
