import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Menupage from "./pages/Menu";
import ContactPage from "./pages/ContactComponent";
import HomePage from "./pages/Home";
import DishPage from "./pages/Dish";
import AboutPage from "./pages/About";
import SearchPage from "./pages/Search";
import SalarySheetpage from "./pages/SalarySheet";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Menupage></Menupage>}></Route>
        <Route path="/Home" element={<HomePage></HomePage>}></Route>
        <Route path="/About" element={<AboutPage></AboutPage>}></Route>
        <Route path="/Contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="/Dish/:id" element={<DishPage></DishPage>}></Route>
        <Route
          path="/SalarySheet"
          element={<SalarySheetpage></SalarySheetpage>}
        ></Route>
        <Route path="/Search/:id" element={<SearchPage></SearchPage>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
