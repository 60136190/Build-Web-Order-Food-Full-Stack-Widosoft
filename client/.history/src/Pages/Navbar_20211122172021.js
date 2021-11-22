import React, { useEffect, useState } from "react";
import { HeaderNavbar } from "../Styles/Navbar";
const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleToggleNavbar = () => {
    setNav(!Nav);
  };
  //   const handleScroll = () => {
  //     if (window.scrollY > 60) {
  //       document.querySelector("#scroll-top").classList.add("active");
  //     } else {
  //       document.querySelector("#scroll-top").classList.remove("active");
  //     }
  //   };
  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   });
  return (
    <>
      <HeaderNavbar>
        <a href="#" className="logo">
          <i className="fas fa-utensils"></i>food Pizza
        </a>
        <div id="menu-bar" className="fas fa-bars "></div>
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#speciality">speciality</a>
          <a href="#popular">popular</a>
          <a href="#gallery">gallery</a>
          <a href="#review">review</a>
          <a href="#order">order</a>
        </nav>
      </HeaderNavbar>
    </>
  );
};

export default Navbar;
