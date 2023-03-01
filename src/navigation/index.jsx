import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/header/Navbar";
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
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home planet={data[0]} /> }/>
          <Route path="/venus" element={<Venus planet={data[1]}/>} />
          <Route path="/earth" element={<Earth planet={data[2]}/>} />
          <Route path="/mars" element={<Mars planet={data[3]}/>} />
          <Route path="/jupiter" element={<Jupiter planet={data[4]}/>} />
          <Route path="/saturn" element={<Saturn planet={data[5]}/>} />
          <Route path="/uranus" element={<Uranus planet={data[6]}/>} />
          <Route path="/neptune" element={<Neptune planet={data[7]}/>} />
        </Routes>
      </activeButtonContext.Provider>
    </BrowserRouter>
  );
};

export default Navigation;
