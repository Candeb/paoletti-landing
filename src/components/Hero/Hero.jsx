import React from 'react'
import "./Hero.css"
import heroImage from '../../assets/hero-image.png';
import { HiShoppingCart } from 'react-icons/hi';
const Hero = () => {
  return (
    <div className='hero-container' id='inicio'>
      <div className='hero-content'>
        <div className='hero-text-container'>
          <h4 className='hero-title'>Compra inteligente para tu negocio</h4>
          <p className='hero-subtitle'>
            Ofrecemos una amplia variedad de productos al por mayor, garantizando calidad y precios competitivos. Confía en nosotros para abastecer tu negocio de manera eficiente y profesional.
          </p>
          <button className='hero-button' onClick={() => window.location.href = 'https://secure.sig2k.com/webs/paoletti@sigma-ar.defaultKart/sigkart/3.1/'}>    <HiShoppingCart style={{fontSize:"24px"}}/>Hacer pedido</button>

        </div>
        <div className='container-hero-image'>
          <img src={heroImage} alt="" />
        </div>

      </div>

    </div>
  )
}  

export default Hero 