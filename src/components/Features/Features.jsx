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
import brandImage8 from '../../assets/marcas/8.png';
import brandImage9 from '../../assets/marcas/9.png';
import brandImage10 from '../../assets/marcas/10.png';
import brandImage11 from '../../assets/marcas/11.png';
import brandImage12 from '../../assets/marcas/12.png';
import { FaWhatsapp } from "react-icons/fa";


const Features = () => {
  return (
    <div className='features-container'>
      <div className='features-content-1'>
        
        <h3 className='features-title'> Podes hacer tus pedidos fácil y rápido aqui</h3>
        <div className='features-info-container'>
          <p className='features-info-title'> Ofrecemos una amplia variedad de productos a precios competitivos. Tu satisfacción es nuestra prioridad, garantizando calidad y servicio. Descubre la mejor selección de productos al por mayor. Tu confianza es nuestra prioridad, compra con seguridad.
            </p> 
            <button className='features-primary-button'>Hacer pedido</button>
            <button className='features-secondary-button'>Quiero contactarme</button>

        </div>


      </div>
      <div className='features-content-2'>
  <p className='features-subtitle'>Alianzas con marcas líderes del mercado</p>

  <div className="carousel-wrapper">
  <div className="carousel-track">
    <img src={brandImage1} alt="img1" className="carousel-image" />
    <img src={brandImage2} alt="img2" className="carousel-image" />
    <img src={brandImage3} alt="img3" className="carousel-image" />
    <img src={brandImage4} alt="img4" className="carousel-image" />
    <img src={brandImage5} alt="img1" className="carousel-image" />
    <img src={brandImage6} alt="img2" className="carousel-image" />
    <img src={brandImage7} alt="img1" className="carousel-image" />
    <img src={brandImage8} alt="img2" className="carousel-image" />
    <img src={brandImage9} alt="img3" className="carousel-image" />
    <img src={brandImage10} alt="img4" className="carousel-image" />
    <img src={brandImage11} alt="img1" className="carousel-image" />
    <img src={brandImage12} alt="img2" className="carousel-image" />
  </div>
</div>

</div>

<div className='features-content-3'>
  <div className='features-text-info'>
    <p  className='features-content-3-hedaer-title'> Confianza </p>
    <h4  className='features-content-3-title'>Comprometidos con tus compras mayoristas</h4>
    <p className='features-content-3-subtitle'>Nuestra misión es ofrecer productos de calidad a precios competitivos, facilitando la experiencia de compra al por mayor. Con años de experiencia en el sector, nos dedicamos a servir a nuestros clientes con profesionalismo y confianza.</p>
    <div className='features-content-3-container-buttons'>
      <button className='features-content-3-primary-btn'>Hacer Pedido</button>
      <button className='features-content-3-secondary-btn'> <FaWhatsapp /> Contactarse con Ventas</button>
      <button className='features-content-3-secondary-btn'> <FaWhatsapp /> Contactarse con Administración</button>
 
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