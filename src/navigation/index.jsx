import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "../components/header/Header";
// import About from "../components/about/About";
// import MobileButtonMenu from "../components/header/MobileButtonMenu";
// import PlanetData from "../components/planetData/PlanetData";

import Home from '../pages/Home';
import Venus from '../pages/Venus';
import "../App.css";
// need react router

const Navigation = () => {
//   return (
//     <>
//       <Header />
//       <MobileButtonMenu />
//       <div className="main-container">
//         <About />
//         <PlanetData />
//       </div>
//     </>
//   );

return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/venus" element={<Venus />} />
        </Routes>
    </BrowserRouter>
)
};

export default Navigation;
