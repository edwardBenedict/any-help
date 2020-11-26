import { auth, provider } from "../../../Firebase";

const SignUpWithGoogle = () => {
  const sigInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("Sign In With Google");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h1>Sign Up With Google</h1>
      <button onClick={sigInWithGoogle}>Sign up with Google</button>
    </div>
  );
};

export default SignUpWithGoogle;
