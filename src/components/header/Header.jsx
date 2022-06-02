import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSosials from './HeaderSosials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Trần Minh Long</h1>  
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSosials/>

        <div className="me"> <img src={ME} alt="me" /> </div>
          
        <a href="#contact" className='scroll__down'>Sroll Down</a>
      </div>
    </header>
  )
}

export default Header