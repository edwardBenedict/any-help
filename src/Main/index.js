import { auth } from "../Firebase";
import SignedIn from "../Navbar/SignedIn";
import SignedOut from "../Navbar/SignedOut";
import { useState, useEffect } from "react";

const Main = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsSignIn(true);
      } else {
        setIsSignIn(false);
      }
    });
  }, []);
  const link = isSignIn ? <SignedIn /> : <SignedOut />;
  const handleSignOut = () => {
    console.log("Sign Out");
    auth
      .signOut()
      .then(() => {
        console.log("Signed Out");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      {link}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Main;
