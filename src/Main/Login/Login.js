import Header from "../SignUp/Header/Header";
import Form from "./Form/Form";
import { StyledLoginWrapper } from "./Login.style";

const Login = () => {
  return (
    <StyledLoginWrapper>
      <Header />
      <Form />
    </StyledLoginWrapper>
  );
};

export default Login;
