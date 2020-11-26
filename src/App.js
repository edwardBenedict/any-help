import "./App.css";
import Login from "./Main/Login";
import SignUp from "./Main/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
