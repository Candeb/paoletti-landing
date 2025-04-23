import React from 'react'
import "./About.css"
import televentas2 from '../../assets/about/televentas2.png';
import family from '../../assets/about/family.png'
import warehouse from '../../assets/about/warehouse.png'


const About = () => {
  return (
    <div className='about-container' id='about-us'>
      <div className='about-content'>
        <h3 className='about-title'>Desde 1962, construyendo confianza y crecimiento junto a nuestros clientes.</h3>
        <div className='about-info-container'>

          <div className='about-card-info'>
            <img src={family} alt="Depósito" />
            <p className='about-card-title'>Más de 60 años de experiencia en el rubro.</p>
            <p className='about-card-subtitle'>
              Iniciamos con una bicicleta recorriendo Tafí Viejo. Hoy, somos una empresa consolidada con múltiples sucursales en el NOA.
            </p>
          </div>

          <div className='about-card-info'>
            <img src={warehouse} alt="Pedidos" />
            <p className='about-card-title'>Relaciones sólidas con grandes marcas.</p>
            <p className='about-card-subtitle'>
              Distribuidores oficiales de Arcor, Eveready, Gilette, Massalin y más. Nuestra red de abastecimiento crece con cada década.
            </p>
          </div>

          <div className='about-card-info'>
            <img src={televentas2} alt="Televentas" />
            <p className='about-card-title'>Visión de futuro, con raíces familiares.</p>
            <p className='about-card-subtitle'>
              De generación en generación, seguimos apostando por la innovación, la sostenibilidad y el servicio personalizado.
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default About