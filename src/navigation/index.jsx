import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import MobileButtonMenu from "../components/header/MobileButtonMenu";
import Home from "../pages/Home";
import Venus from "../pages/Venus";
import Earth from "../pages/Earth";
import Mars from "../pages/Mars";
import Jupiter from "../pages/Jupiter";
import Saturn from "../pages/Saturn";
import Uranus from "../pages/Uranus";
import Neptune from "../pages/Neptune";
import data from "../data.json";
import "../App.css";


export const activeButtonContext = React.createContext({
  activeButtonId: "overview",
  setActiveButtonId: () => {}
});

const Navigation = () => {
  const [activeButtonId, setActiveButtonId] = useState("overview");
  const value = {activeButtonId, setActiveButtonId};

  

  return (
    <BrowserRouter>
      <activeButtonContext.Provider
       value={value}
      >
        <Header />
        <MobileButtonMenu />
        <Routes>
          <Route path="/" element={<Home planet={data[0]} /> }/>
          <Route path="/venus" element={<Venus />} />
          <Route path="/earth" element={<Earth />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/jupiter" element={<Jupiter />} />
          <Route path="/saturn" element={<Saturn />} />
          <Route path="/uranus" element={<Uranus />} />
          <Route path="/neptune" element={<Neptune />} />
        </Routes>
      </activeButtonContext.Provider>
    </BrowserRouter>
  );
};

export default Navigation;
