import "./App.css";
import { StyledAppWrapper } from "./App.style";
import AppRouter from "./Router/Router";
import AuthContex from "./Context/index"
import Navbar from "./Navbar";
function App() {
  console.log("hello");
  return (
    <AuthContex>
      <Navbar/>
      <StyledAppWrapper>
        <AppRouter/>
      </StyledAppWrapper>
    </AuthContex>
  );
}

export default App;
