import "./App.css";
import { StyledAppWrapper } from "./App.style";
import AppRouter from "./Router/Router";
import AuthContex from "./Context/Context";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function App() {
  console.log("hello");
  return (
    <StyledAppWrapper>
      <AuthContex>
        <Navbar />
        <AppRouter />
        <Footer />
      </AuthContex>
    </StyledAppWrapper>
  );
}

export default App;
