import React from 'react'
import "./About.css"
import teleVentas from '../../assets/about/televentas.png';
import imgOrders from '../../assets/about/inst03.png';
import deposito from '../../assets/about/deposito.jpg'



const About = () => {
  return (
    <div className='about-container'>
      <div className='about-content'>
        <h3 className='about-title'> Conectando a los mejores proveedores con los minoristas de confianza. </h3>
        <div className='about-info-container'>
          <div className='about-card-info'>
            <img src={deposito} alt="Logo Paoletti" />

            <p className='about-card-title'>Comprometidos con la calidad y el servicio al cliente excepcional.</p>
            <p className='about-card-subtitle'>Nuestra historia se centra en ofrecer productos de calidad a precios competitivos.</p>

          </div>
          <div className='about-card-info'>
            <img src={imgOrders} alt="Logo Paoletti" />

            <p className='about-card-title'>Comprometidos con la calidad y el servicio al cliente excepcional.</p>
            <p className='about-card-subtitle'>Nuestra historia se centra en ofrecer productos de calidad a precios competitivos.</p>

          </div>
          <div className='about-card-info'>
            <img src={teleVentas} alt="Logo Paoletti" />

            <p className='about-card-title'>Visión: ser el líder en distribución mayorista en nuestra región.</p>
            <p className='about-card-subtitle'>Nos esforzamos por construir relaciones sólidas con nuestros clientes y proveedores.</p>

          </div>
        </div>


      </div>
    </div>
  )
}

export default About