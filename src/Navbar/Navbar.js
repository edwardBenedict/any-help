import React, { useContext } from "react";
import { FirebaseAuthContex } from "../Context/Context";
import {
  StyledNavbarLeftWrapper,
  StyledNavbarMainWrapper,
  StyledNavbarRightWrapper,
  StyledNavbarSearchBoxWrapper,
} from "./Navbar.style";
import SearcBox from "./SearchBox/SearchBox";
import SignedIn from "./SignedIn/SignedIn";
import SignedOut from "./SignedOut/SignedOut";

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
