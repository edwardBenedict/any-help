import "./App.css";
import Login from "./Main/Login";
import SignUp from "./Main/SignUp";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StyledAppWrapper } from "./App.style";

function App() {
  console.log("hello");
  return (
    <StyledAppWrapper>
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
    </StyledAppWrapper>
  );
}

export default App;
