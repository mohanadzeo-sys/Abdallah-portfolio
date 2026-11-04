import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToggleBtn></ToggleBtn>
    </>
  );
}
