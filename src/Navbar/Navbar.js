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

const Navbar = () => {
  const { currentUser } = useContext(FirebaseAuthContex);

  const links = currentUser ? (
    <SignedIn displayName={currentUser?.displayName} />
  ) : (
    <SignedOut />
  );

  return (
    <StyledNavbarMainWrapper>
      <StyledNavbarLeftWrapper>
        <StyledLogo src={logo} alt="" />
      </StyledNavbarLeftWrapper>
      <StyledNavbarSearchBoxWrapper>
        <SearcBox />
      </StyledNavbarSearchBoxWrapper>

      <StyledNavbarRightWrapper>{links}</StyledNavbarRightWrapper>
    </StyledNavbarMainWrapper>
  );
};
export default Navbar;
