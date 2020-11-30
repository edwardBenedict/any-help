import { useState } from "react";
import { StyledInput, StyledButton, StyledWrapper } from "./Form.style";
import firebase from "../../../Firebase/Firebase";
import { useHistory } from "react-router-dom";
import LoginWithGoogle from "../../LoginWithGoogle/LoginWithGoogle";

function App() {
  const history = useHistory();
  const [values, setValues] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    policy: false,
  });
  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    validate();
    console.log(validate());
    if (validate()) {
      history.push("/");
      console.log(values);
      firebase.signUp(values.displayName, values.email, values.password);
    }
  };

  const validate = () => {
    const errors = {};

    if (!values.displayName) {
      return (errors.displayName = "Fill the display name");
    }

    if (!values.email) {
      return (errors.email = "Fill the Email Address");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      return (errors.email = "Invalid Email Address");
    }
    if (!values.password) {
      return (errors.password = "Enter Your Password");
    } else if (values.password.length < 8) {
      return (errors.password = "Password must be min 8 characters!");
    } else if (values.password.search(/\d/) === -1) {
      return (errors.password = "Password must contain number!");
    } else if (values.password.search(/[A-Z]/) === -1) {
      return (errors.password =
        "Password must contain capital and lowercase letter!");
    } else if (values.password.search(/[a-z]/) === -1) {
      return (errors.password = "Password must contain lowercase letter!");
    } else if (values.password.search(/[^a-zA-Z0-9!@#$%^&*()_+]/) === -1) {
      return (errors.password = "Password must contain special character!");
    } else if (!values.confirmPassword) {
      return (errors.password = "Confirm Password");
    } else if (!(values.password === values.confirmPassword)) {
      return (errors.password = "Didn't Match Password");
    }
    if (!values.policy) {
      return (errors.policy = "You should accept Privacy Policy!");
    }
    return true;
  };

  const handleChange = (e) => {
    if (e.target.id !== "policy") {
      setValues({ ...values, [e.target.id]: e.target.value });
    } else {
      setValues({ ...values, [e.target.id]: e.target.checked });
    }
  };

  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="displayName"
          id="displayName"
          onChange={handleChange}
          value={values.displayName}
          placeholder="Display Name"
        />
        <br />
        <StyledInput
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={values.email}
          placeholder="Email Address"
        />

        <br />
        <StyledInput
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={values.password}
          placeholder="Password"
        />
        <br />
        <StyledInput
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={handleChange}
          value={values.confirmPassword}
          placeholder="Confirm Password"
        />
        <br />
        <input
          type="checkbox"
          name="policy"
          id="policy"
          value={values.policy}
          onChange={handleChange}
        />
        <span style={{ fontSize: "1.2rem", paddingLeft: "0.5rem" }}>
          I accept the{" "}
          <a href="/" style={{ color: "white" }}>
            Privacy Policy
          </a>
          .
        </span>
        <br />
        <StyledButton type="submit" value="Register">
          Register
        </StyledButton>
      </form>
      <LoginWithGoogle />
      <p style={{ fontSize: "1rem" }}>
        Already have an account?{" "}
        <a href="/login" style={{ color: "white" }}>
          Login.
        </a>
      </p>
    </StyledWrapper>
  );
}

export default App;
