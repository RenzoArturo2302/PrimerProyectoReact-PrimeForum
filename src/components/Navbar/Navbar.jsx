import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import RelojTiempoReal from "./RelojTiempoReal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="superior">
          <Link to="/">
            <img src="src\assets\img\PRIME_FORUM.png" alt="" className="logo" />
          </Link>
          <ul>
            <li>
              <RelojTiempoReal />
            </li>
            <li>
              <NavLink to="/login" className="icon-text ">
                <i className="fa-solid fa-right-to-bracket fa-lg" />
                <p className="login-text">Iniciar Sesión</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="icon-text">
                <i className="fa-solid fa-right-from-bracket fa-lg" />
                <p className="login-text">Iniciar Sesión</p>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="bar-menu">
          <div
            className="menu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="inferior">
          {/*  Si menuOpen es true, entonces la clase className será "open". Si menuOpen es false, entonces la clase será una cadena vacía "".
           */}
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/library">Biblioteca</NavLink>
            </li>
            <li>
              <NavLink to="/posts">Foro</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contáctenos</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
