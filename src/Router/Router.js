import Login from "../Main/Login/Login";
import SignUp from "../Main/SignUp/SignUp";
import MainPage from "../Main/MainPage";
import { Switch, Route } from "react-router-dom";
import { StyledWrapper } from "./Router.style";
import NewQuestion from "../Main/Questions/NewQuestion/NewQuestion";

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
        <Route path="/newquestion">
          <NewQuestion />
        </Route>
        <Route>
          <MainPage />
        </Route>
      </Switch>
    </StyledWrapper>
  );
}

export default AppRouter;
