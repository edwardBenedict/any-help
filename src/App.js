import "./App.css";
import Login from "./Main/Login";
import SignUp from "./Main/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StyledAppWrapper } from "./App.style";

function App() {
  return (
    <StyledAppWrapper>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </StyledAppWrapper>
  );
}

export default App;
