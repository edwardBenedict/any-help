import Login from "../Main/Login";
import SignUp from "../Main/SignUp";
import Main from "../Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function AppRouter() {
  console.log("hello");
  return (
      <Router>
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
      </Router>
  );
}

export default AppRouter;
