import "./App.css";
import { StyledAppWrapper } from "./App.style";
import AppRouter from "./Router/Router";
import AuthContex from "./Context/Context";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function App() {
  console.log("hello");
  return (
    <AuthContex>
      <Navbar />
      <StyledAppWrapper>
        <AppRouter />
      </StyledAppWrapper>
      <Footer />
    </AuthContex>
  );
}

export default App;
