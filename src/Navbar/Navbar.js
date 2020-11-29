import React, { useContext } from "react";
import { FirebaseAuthContex } from "../Context/Context";
// import firebase from "../Firebase/index";
import {
  StyledNavbarLeftWrapper,
  StyledNavbarMainWrapper,
  StyledNavbarRightWrapper,
  StyledNavbarSearchBoxWrapper,
} from "./Navbar.style";
import { SearcBox } from "./SearchBox";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Navbar = () => {
  const { currentUser } = useContext(FirebaseAuthContex);

  const links = currentUser ? (
    <SignedIn displayName={currentUser?.displayName} />
  ) : (
    <SignedOut />
  );

  return (
    <StyledNavbarMainWrapper>
      <StyledNavbarLeftWrapper></StyledNavbarLeftWrapper>
      <StyledNavbarSearchBoxWrapper>
        <SearcBox />
      </StyledNavbarSearchBoxWrapper>

      <StyledNavbarRightWrapper>{links}</StyledNavbarRightWrapper>
    </StyledNavbarMainWrapper>
  );
};
export default Navbar;
