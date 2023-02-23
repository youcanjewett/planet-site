import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../pages/Home';
import Venus from '../pages/Venus';
import Earth from '../pages/Earth';
import Mars from '../pages/Mars';
import Jupiter from '../pages/Jupiter';
import Saturn from '../pages/Saturn';
import Uranus from '../pages/Uranus';
import Neptune from '../pages/Neptune';
import "../App.css";

const Navigation = () => {

return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/venus" element={<Venus />} />
            <Route path="/earth" element={<Earth />} />
            <Route path="/mars" element={<Mars />} />
            <Route path="/jupiter" element={<Jupiter />} />
            <Route path="/saturn" element={<Saturn />} />
            <Route path="/uranus" element={<Uranus />} />
            <Route path="/neptune" element={<Neptune />} />

        </Routes>
    </BrowserRouter>
)
};

export default Navigation;
