import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import AboutPage from "./components/AboutPage/AboutPage.jsx";
import ServicesPage from "./components/ServicesPage/ServicesPage.jsx";
import WorkPage from "./components/WorkPage/WorkPage.jsx";
import ContactPage from "./components/ContactPage/ContactPage.jsx";
import Layout from "./components/Layout/Layout.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

function App() {
  let paths = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "home", element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "services", element: <ServicesPage /> },
        { path: "work", element: <WorkPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={paths}></RouterProvider>
    </>
  );
}

export default App;
