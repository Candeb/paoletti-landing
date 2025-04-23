import React, { useState } from 'react';
import logo from '../../assets/logo-paoletti.png';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='header-container'>
      <div className="nav-logo">
        <img
          src={logo}
          alt="Logo Paoletti"
          onClick={() => {
            const home = document.getElementById("home");
            if (home) home.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <nav className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-menu">
          <li><a href="/" className='nav-text'>Inicio</a></li>
          <li><a href="#about-us" className='nav-text'>Sobre nosotros</a></li>
          <li><a href="#marcas" className='nav-text'>Marcas</a></li>
        </ul>

        <div className="nav-buttons">
          <button
            className="btn-contact"
            onClick={() => {
              const footer = document.getElementById("footer");
              if (footer) footer.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contacto
          </button>

          <button
            className="btn-orders"
            onClick={() => window.location.href = 'https://secure.sig2k.com/webs/paoletti@sigma-ar.defaultKart/sigkart/3.1/'}
          >
            Pedidos
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
