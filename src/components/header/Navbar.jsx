import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header.css";

const Navbar = () => {

    
    const navItem = document.querySelectorAll(".nav-item");
    navItem.forEach(n => n.addEventListener("click", closeMenu));

    function mobileMenu() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        document.body.classList.add("fixed");
    
    }

    function closeMenu() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("fixed");
    }


    return (
        <div className="header">
            <nav className = "navbar">
            <h2 className="nav-logo">The Planets</h2>
            <ul className="nav-menu">
                <li className="nav-item" >
                    <div className="item-title">
                        <div className="planet-icon" style={{backgroundColor:"#419EBB"}}></div>
                        <Link to="/" className="menu-planet" onClick={() => {closeMenu()}}>Mercury</Link>
                    </div>
                    <div className="chevron-icon">
                        <img src='icon-chevron.svg' alt="arrow" />
                    </div>
                </li>
                <li className="nav-item" >
                    <div className="item-title">
                        <div className="planet-icon" style={{backgroundColor:"#EDA249"}}></div>
                        <Link to="/venus" className="menu-planet" onClick={() => {closeMenu()}}>Venus</Link>
                    </div>
                    <div className="chevron-icon">
                        <img src='icon-chevron.svg' alt="arrow" />
                    </div>
                </li>
                <li className="nav-item" >
                    <div className="item-title">
                        <div className="planet-icon" style={{backgroundColor:"#6f2ed6"}}></div>
                        <Link to="/earth" className="menu-planet" onClick={() => {closeMenu()}}>Earth</Link>
                    </div>
                    <div className="chevron-icon">
                        <img src='icon-chevron.svg' alt="arrow" />
                    </div>
                </li>
                <li className="nav-item" >
                    <div className="item-title">
                        <div className="planet-icon" style={{backgroundColor:"#D14C32"}}></div>
                        <Link to="/mars" className="menu-planet" onClick={() => {closeMenu()}}>Mars</Link>
                    </div>
                    <div className="chevron-icon">
                        <img src='icon-chevron.svg' alt="arrow" />
                    </div>
                </li>
                <li className="nav-item" >
                    <div className="item-title">
                        <div className="planet-icon" style={{backgroundColor:"#D83A34"}}></div>
                        <Link to="/jupiter" className="menu-planet" onClick={() => {closeMenu()}}>Jupiter</Link>
                    </div>
                    <div className="chevron-icon">
                        <img src='icon-chevron.svg' alt="arrow" />
                    </div>
                </li>
                <li className="nav-item" >
                    <div className="item-title">
                        <div className="planet-icon" style={{backgroundColor:"#CD5120"}}></div>
                        <Link to="/saturn" className="menu-planet" onClick={() => {closeMenu()}}>Saturn</Link>
                    </div>
                    <div className="chevron-icon">
                        <img src='icon-chevron.svg' alt="arrow" />
                    </div>
                </li>
                <li className="nav-item" >
                    <div className="item-title">
                        <div className="planet-icon" style={{backgroundColor:"#1ec2a4"}}></div>
                        <Link to="/uranus" className="menu-planet" onClick={() => {closeMenu()}}>Uranus</Link>
                    </div>
                    <div className="chevron-icon">
                        <img src='icon-chevron.svg' alt="arrow" />
                    </div>
                </li>
                <li className="nav-item" >
                    <div className="item-title">
                        <div className="planet-icon" style={{backgroundColor:"#2d68f0"}}></div>
                        <Link to="/neptune" className="menu-planet" onClick={() => {closeMenu()}}>Neptune</Link>
                    </div>
                    <div className="chevron-icon">
                        <img src='icon-chevron.svg' alt="arrow" />
                    </div>
                </li>
                
            </ul>

            <div className="hamburger">
            <button className="header-toggle" onClick={()=>{mobileMenu()}}>
                <img src="icon-hamburger.svg" alt="hamburger icon" />
      
            </button>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;