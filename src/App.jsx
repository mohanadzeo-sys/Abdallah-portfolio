import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services.jsx";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ToggleBtn from "./components/ToggleBtn/ToggleBtn.jsx";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
      <ToggleBtn></ToggleBtn>
    </>
  );
}

export default App;
