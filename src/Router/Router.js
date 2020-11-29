import Login from "../Main/Login";
import SignUp from "../Main/SignUp";
import MainPage from "../Main/MainPage";
import { Switch, Route } from "react-router-dom";

function AppRouter() {
  console.log("hello");
  return (
    <div>
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
    </div>
  );
}

export default AppRouter;
