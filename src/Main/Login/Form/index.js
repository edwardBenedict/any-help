import { useState } from "react";
import { StyledInput, StyledButton } from "./Form.style";
import { auth } from "../../../Firebase";

const Form = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (validate()) {
      alert(JSON.stringify(validate()));
      console.log(values);
      auth
        .signInWithEmailAndPassword(values.email, values.password)
        .then((e) => (window.location.href = "/"));
    }
  };
  const validate = () => {
    const errors = {};

    if (!values.email) {
      return (errors.email = "Fill the Email Address");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      return (errors.email = "Invalid Email Address");
    }
    if (!values.password) {
      return (errors.password = "Enter Your Password");
    }
    return "Signed In Succesfully!";
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <StyledButton type="submit" value="Login">
          Login
        </StyledButton>
        <br />
        <a href="/" style={{ fontSize: "1rem", color: "white" }}>
          Forgot Password?
        </a>
        <br />
        <a href="/signup" style={{ fontSize: "1rem", color: "white" }}>
          Don't have an account?
        </a>
      </form>
    </div>
  );
};

export default Form;
