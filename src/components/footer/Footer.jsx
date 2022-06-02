import React from 'react'
import './footer.css'
import {AiFillFacebook,AiFillInstagram,AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/"><AiFillFacebook/></a>
        <a href="https://www.instagram.com/"><AiFillInstagram/></a>
        <a href="https://github.com/"><AiFillGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Copyright By MinhLong </small>
      </div>
    </footer>
  )
}

export default Footer