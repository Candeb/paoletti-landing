import React from 'react';
import logo from '../../assets/logo-paoletti.png';
import "./Header.css"

const Header = () => {
  return (
    <div className='header-container'> 
      <div className="nav-logo">
        <img src={logo} alt="Logo Paoletti" />
      </div>
      
      <nav className="nav-container">
        <ul className="nav-menu">
          <li><a href="#inicio" className='nav-text'>Inicio</a></li>
          <li><a href="#sobre-nosotros" className='nav-text'>Sobre Nosotros</a></li>
          <li><a href="#marcas" className='nav-text'>Marcas</a></li>
        </ul>

        <div className="nav-buttons">
          <button className="btn-contact">Contacto</button>
          <button className="btn-orders">Pedidos</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
