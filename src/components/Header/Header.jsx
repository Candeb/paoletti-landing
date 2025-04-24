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
            const inicio = document.getElementById("inicio");
            if (inicio) inicio.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}


      <nav className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-menu">
          <li>
            <a href="#inicio" className='nav-text' onClick={() => setIsMenuOpen(false)}>Inicio</a>
          </li>
          <li>
            <a href="#sobre-nosotros" className='nav-text' onClick={() => setIsMenuOpen(false)}>Sobre nosotros</a>
          </li>
          <li>
            <a href="#marcas" className='nav-text' onClick={() => setIsMenuOpen(false)}>Marcas</a>
          </li>

        </ul>

        <div className="nav-buttons">
          <button
            className="btn-contact"
            onClick={() => {
              const footer = document.getElementById("footer");
              if (footer) footer.scrollIntoView({ behavior: "smooth" });
              setIsMenuOpen(false)
            }}
          >
            Contacto
          </button>

          <button
            className="btn-orders"
            onClick={() => window.location.href = 'https://secure.sig2k.com/webs/paoletti@sigma-ar.defaultKart/sigkart/3.1/'

            }
          >
            Pedidos
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
