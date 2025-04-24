import React, { useEffect, useState } from 'react';
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
  const [emailSent, setEmailSent] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { nombre, email, localidad, telefono, consulta } = formData;

    // Validación básica: que estén llenos los campos requeridos
    if (nombre.trim() && email.trim() && localidad.trim() && telefono.trim() && consulta.trim()) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

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
      .then(() => {
        setEmailSent(true);
      })
      .catch(err => {
        console.error(err);
        alert('There was an error sending the message.');
      });
  };

  const handleBackToForm = () => {
    setEmailSent(false);
    setFormData({
      nombre: '',
      email: '',
      localidad: '',
      telefono: '',
      consulta: '',
    });
  };

  return (
    <footer className="footer-container" id="footer">
      <div className="footer-content" >
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



              {emailSent ? (
                <div className="success-message">
                  <p className='success-message-title'>Your message was sent successfully!</p>
                  <button onClick={handleBackToForm}>Back to form</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <p className='footer-form-contact-title'>Estamos para ayudarte. Contactanos.</p>
                  <div className='footer-form-info'>
                    <input type="text" name="nombre" placeholder="Nombre y Apellido" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type="text" name="localidad" placeholder="Localidad" onChange={handleChange} />
                    <input type="text" name="telefono" placeholder="Teléfono" onChange={handleChange} />
                  </div>
                  <textarea name="consulta" placeholder="Tu consulta..." onChange={handleChange} required />
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={!isFormValid ? 'disabled-button' : ''}
                  >
                    Enviar
                  </button>
                </form>
              )}


            </div>

          </div>
        </div>

        <div className='footer-content-links'>


          <img src={logo} alt="Logo Paoletti" className="footer-logo"    onClick={() => {
            const inicio = document.getElementById("inicio");
            if (inicio) inicio.scrollIntoView({ behavior: "smooth" });
          }} />


          <div className="footer-links">

            <nav>
              <p className="title-footer">Menú</p>
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
                <li><a href="#marcas">Marcas</a></li>
              </ul>
            </nav>




            <div className='container-phone'>
              <p className="title-footer">Atencion al cliente </p>
              <ul>
                <li className='footer-contact' onClick={() => window.open('https://wa.me/3814190206', '_blank')}> Ventas: 3814190206 <FaWhatsapp /></li>
                <li className='footer-contact' onClick={() => window.open('https://wa.me/3815052973', '_blank')}>  Admin: 3815052973 <FaWhatsapp /></li>
              </ul>

            </div>

            <div className="container-social-icons">
              <p className="title-footer">Seguinos </p>
              <div className='social-icons'>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <IoLogoInstagram />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100063524224201&sk=photos&locale=es_LA" target="_blank" rel="noreferrer">
                  <IoLogoFacebook />
                </a>
                <a href="https://wa.me/5491112345678" target="_blank" rel="noreferrer">
                  <IoLogoYoutube />
                </a>
                <a href="https://www.linkedin.com/in/distribuidora-paoletti-srl-46bb3554/" target="_blank" rel="noreferrer">
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
