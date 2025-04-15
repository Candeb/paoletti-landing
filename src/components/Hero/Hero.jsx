import React from 'react'
import "./Hero.css"
import heroImage from '../../assets/hero-image.png';


const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-content'>
        <div className='hero-text-container'>
          <h4 className='hero-title'>Compra inteligente para tu negocio</h4>
          <p className='hero-subtitle'>
            Ofrecemos una amplia variedad de productos al por mayor, garantizando calidad y precios competitivos. Confía en nosotros para abastecer tu negocio de manera eficiente y profesional.
          </p>
          <button className='hero-button'> Hacer Pedido </button>

        </div>
        <div>
          <img src={heroImage} alt="" />
        </div>

      </div>

    </div>
  )
}  

export default Hero