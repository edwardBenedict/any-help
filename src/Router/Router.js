import Login from "../Main/Login/Login";
import SignUp from "../Main/SignUp/SignUp";
import MainPage from "../Main/MainPage";
import { Switch, Route } from "react-router-dom";
import { StyledWrapper } from "./Router.style";

function AppRouter() {
  console.log("hello");
  return (
    <StyledWrapper>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route>
          <MainPage />
        </Route>
      </Switch>
    </StyledWrapper>
  );
}

export default AppRouter;
