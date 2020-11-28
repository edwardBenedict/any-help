import Login from "../Main/Login";
import SignUp from "../Main/SignUp";
import Main from "../Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar";


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
            <Main />
          </Route>
        </Switch>
    </div>
  );
}

export default AppRouter;
