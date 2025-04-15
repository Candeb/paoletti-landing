import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Footer.css';
import logo from '../../assets/logo-paoletti.png';


const Footer = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    localidad: '',
    telefono: '',
    consulta: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_k5e0j9p',     // reemplazá con tu SERVICE ID
      'template_8d8qs4f',    // reemplazá con tu TEMPLATE ID
      formData,
      'urHpUukTbE14qPpwM'      // reemplazá con tu PUBLIC KEY
    )
    .then(() => alert('Mensaje enviado con éxito!'))
    .catch(err => {
      console.error(err);
      alert('Hubo un error al enviar el mensaje.');
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Formulario */}
        <div className="footer-form">
          <h3>Contacto</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Nombre y Apellido" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="localidad" placeholder="Localidad" onChange={handleChange} />
            <input type="text" name="telefono" placeholder="Teléfono" onChange={handleChange} />
            <textarea name="consulta" placeholder="Tu consulta..." onChange={handleChange} required />
            <button type="submit">Enviar</button>
          </form>
        </div>

        {/* Logo y links */}
        <div className="footer-links">
          <img src={logo} alt="Logo Paoletti" className="footer-logo" />
          <nav>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
              <li><a href="/marcas">Marcas</a></li>
            </ul>
          </nav>

          {/* Redes sociales */}
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://wa.me/5491112345678" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Paoletti Mayoristas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
