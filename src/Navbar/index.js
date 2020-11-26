import React, { useEffect, useState } from "react";
import { SignedInLinks } from "../SignedInOutLinks/SignedInLinks";
import { SignedOutLinks } from "../SignedInOutLinks/SignedOutLinks";
import { StyledWrapper } from "./Navbar.style";
import { auth } from "../firrebase/fbconfig";
const Navbar = () => {
  const [flag, setFlag] = useState(false);
  console.log(auth);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    });
  }, []);
  const links = flag ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <StyledWrapper>
      <button>Clarusway Project Tracking System</button>
      {links}
    </StyledWrapper>
  );
};
export default Navbar;
