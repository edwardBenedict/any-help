import "./App.css";
import { StyledAppWrapper } from "./App.style";
import AppRouter from "./Router/Router";
import AuthContex from "./Context/index"
function App() {
  console.log("hello");
  return (
    <AuthContex>
      <StyledAppWrapper>
        <AppRouter/>
      </StyledAppWrapper>
    </AuthContex>
  );
}

export default App;
