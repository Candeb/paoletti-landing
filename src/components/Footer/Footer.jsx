import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Footer.css';
import logo from '../../assets/logo-paoletti.png';
import { FaWhatsapp } from 'react-icons/fa';
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoYoutube, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import teleVentas from '../../assets/about/televentas.png';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

const Footer = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    localidad: '',
    telefono: '',
    consulta: '',
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_k5e0j9p',
      'template_8d8qs4f',
      formData,
      'urHpUukTbE14qPpwM'
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
        <div className='footer-form-container'>


          <div className="footer-form">
            <div
              className={`footer-form-toggle ${showForm ? 'open' : ''}`}
              onClick={() => setShowForm(!showForm)}
            >

              <h3>¿Querés hablar con nosotros?</h3>
              {showForm ? <IoChevronUp size={20} /> : <IoChevronDown size={20} />}
            </div>


            <div className={`footer-form-contact ${showForm ? 'open' : ''}`}>
              <img src={teleVentas} alt="Televentas" />
              <form onSubmit={handleSubmit}>
                <p className='footer-form-contact-title'>Estamos para ayudarte. Contactanos.</p>
                <div className='footer-form-info'>
                  <input type="text" name="nombre" placeholder="Nombre y Apellido" onChange={handleChange} required />
                  <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                  <input type="text" name="localidad" placeholder="Localidad" onChange={handleChange} />
                  <input type="text" name="telefono" placeholder="Teléfono" onChange={handleChange} />
                </div>
                <textarea name="consulta" placeholder="Tu consulta..." onChange={handleChange} required />
                <button type="submit">Enviar</button>
              </form>
            </div>

          </div>
        </div>

        <div className='footer-content-links'>



          <img src={logo} alt="Logo Paoletti" className="footer-logo" />

          <div className="footer-links">

            <nav>
              <p className="title-footer">Menú</p>
              <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
                <li><a href="/marcas">Marcas</a></li>
              </ul>
            </nav>




            <div className='container-phone'>
              <p className="title-footer">Atencion al cliente </p>
              <ul>
                <li><a href="/"> Ventas: 3814190206 <FaWhatsapp /></a></li>
                <li><a href="/sobre-nosotros"> Admin: 3815052973 <FaWhatsapp /></a></li>
              </ul>

            </div>

            <div className="container-social-icons">
              <p className="title-footer">Seguinos </p>
              <div className='social-icons'>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <IoLogoInstagram />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                  <IoLogoFacebook />
                </a>
                <a href="https://wa.me/5491112345678" target="_blank" rel="noreferrer">
                  <IoLogoYoutube />
                </a>
                <a href="https://wa.me/5491112345678" target="_blank" rel="noreferrer">
                  <IoLogoLinkedin />
                </a>

              </div>
            </div>

          </div>

        </div>
      </div>




      <div className="footer-bottom">

        <p>© 2025 José V Paoletti y Cía SRL. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
