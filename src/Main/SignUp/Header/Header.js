import React from "react";
import { StyledImg, StyledHeader, StyledWrapper } from "./Header.style";

const Header = () => {
  return (
    <StyledWrapper>
      <StyledImg
        src="https://kdshirtshop.com/wp-content/uploads/2017/07/FOAM-FINGER-ORANGE-300X300PX.png"
        alt="Logo"
      />
      <StyledHeader>
        <i>
          <span style={{ fontSize: "6rem" }}>A</span>NY{"    "}
          <span style={{ fontSize: "6rem" }}>H</span>ELP
        </i>
      </StyledHeader>
    </StyledWrapper>
  );
};

export default Header;

// src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"
