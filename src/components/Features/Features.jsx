import React from 'react'
import "./Features.css"
import logo from '../../assets/logo-large.png';
import brandImage1 from '../../assets/marcas/1.png';
import brandImage2 from '../../assets/marcas/2.png';
import brandImage3 from '../../assets/marcas/3.png';
import brandImage4 from '../../assets/marcas/4.png';
import brandImage5 from '../../assets/marcas/5.png';
import brandImage6 from '../../assets/marcas/6.png';
import brandImage7 from '../../assets/marcas/7.png';
import brandImage9 from '../../assets/marcas/9.png';
import brandImage12 from '../../assets/marcas/12.png';
import { FaWhatsapp } from "react-icons/fa";
import { HiShoppingCart } from 'react-icons/hi';

const Features = () => {

  const brandImages = [brandImage7,
    brandImage5,

    brandImage3,

    brandImage6,
    brandImage1,
    brandImage12,
    brandImage9,
    brandImage2,
    brandImage4,
  ];


  return (
    <div className='features-container' >
      <div className='features-content-1'  >

        <h3 className='features-title'> Podes hacer tus pedidos fácil y rápido aqui</h3>
        <div className='features-info-container'>
          <p className='features-info-title'> Ofrecemos una amplia variedad de productos a precios competitivos. Tu satisfacción es nuestra prioridad, garantizando calidad y servicio. Descubre la mejor selección de productos al por mayor. Tu confianza es nuestra prioridad, compra con seguridad.
          </p>

          <div className='features-1-container-buttons'>
          <button className='features-primary-button' onClick={() => window.location.href = 'https://secure.sig2k.com/webs/paoletti@sigma-ar.defaultKart/sigkart/3.1/'} >
            <HiShoppingCart /> Hacer pedido
          </button>
          <button className='features-secondary-button' onClick={() => {
            const footer = document.getElementById("footer");
            if (footer) {
              footer.scrollIntoView({ behavior: "smooth" });
            }
          }}>
            Quiero contactarme
          </button>

          </div>


        </div>


      </div>



      <div className='features-content-2' >
        <p className='features-subtitle'>Alianzas con marcas líderes del mercado</p>

        <div className="carousel-wrapper">
          <div className="carousel-track">
            {[...brandImages, ...brandImages].map((image, index) => (
              <img key={index} src={image} alt={`brand-${index}`} className="carousel-image" />
            ))}
          </div>
        </div>


      </div>

      <div className='features-content-3' id='marcas' >
        <div className='features-text-info'>
          <p className='features-content-3-hedaer-title'> Compromiso </p>
          <h4 className='features-content-3-title'>Estamos para ayudarte en cada paso</h4>
          <p className='features-content-3-subtitle'>Podes hacer tu pedido online de forma ágil y desde donde estés. Y si preferís el trato directo, también podés comunicarte por WhatsApp con nuestro equipo de ventas o administración. <strong>
            Siempre estamos cerca para ayudarte. </strong>
          </p>
          <div className='features-content-3-container-buttons'>
            <button className='features-content-3-primary-btn' onClick={() => window.location.href = 'https://secure.sig2k.com/webs/paoletti@sigma-ar.defaultKart/sigkart/3.1/'} ><HiShoppingCart className="icon-button"/> Hacer pedido</button>
            <button
              className='features-content-3-secondary-btn'
              onClick={() => window.open('https://wa.me/3814190206', '_blank')}>
              <FaWhatsapp className="icon-button"/> Contactarse con Ventas

            </button>
            <button className='features-content-3-secondary-btn' onClick={() => window.open('https://wa.me/3815052973', '_blank')}>
              <FaWhatsapp className="icon-button" /> Contactarse con Administración
            </button>



          </div>

        </div>
        <div className='features-img-container'>
          <img src={logo} alt="" />

        </div>

      </div>



    </div>
  )
}

export default Features