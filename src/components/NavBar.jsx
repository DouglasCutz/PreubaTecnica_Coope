import React from "react";
import '../css/NavBar.css';
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item">Inicio</div>
      <div className="navbar-item">Género</div>
      <div className="navbar-item">País</div>
      <div className="navbar-item">TV Shows</div>
      <div className="navbar-item">Películas</div>
    </nav>
  );
};

export default NavBar;
