import SignedIn from "../Navbar/SignedIn";
import SignedOut from "../Navbar/SignedOut";
import { useState, useEffect } from "react";

const Main = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const link = isSignIn ? <SignedIn /> : <SignedOut />;

  return (
    <div>
      {link}
      <button onClick={()=>null}>Sign Out</button>
    </div>
  );
};

export default Main;
