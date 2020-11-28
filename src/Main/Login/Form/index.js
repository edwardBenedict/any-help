import { useState } from "react";
import { StyledInput, StyledButton } from "./Form.style";
import firebase from "../../../Firebase/index"
import {useHistory} from "react-router-dom"
const Form = (props) => {

  const [loginError,setloginError]=useState(null)
  const history=useHistory()
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(validate())
    validate();
    if (validate()) {
      firebase.signIn(values.email,values.password).then((res)=>{
        if(res){
          setloginError(res) 
          return 
        }
        history.push("/")
      })

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
    return true;
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
  <p style={{color:"red"}}>{loginError}</p>
    </div>
  );
};

export default Form;
