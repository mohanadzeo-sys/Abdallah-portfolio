import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";
import Services from "../Services/Services.jsx";
import Contact from "../Contact/Contact.jsx";
import Brands from "../Brands/Brands.jsx";
import { width } from "@fortawesome/free-brands-svg-icons/fa11ty";

export default function HomePage() {
  return (
    <>
      <Home></Home>
      <About></About>
      <Services></Services>
      <Brands variant="wide"></Brands>
      <Contact></Contact>
    </>
  );
}
