import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNav from "./Navbar.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/lamps" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
