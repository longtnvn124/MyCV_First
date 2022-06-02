import React from "react";
import './about.css'
import ME from '../../assets/me_about.png'
import { RiAwardLine } from 'react-icons/ri'
import { RiUser3Line } from 'react-icons/ri'
import { BsFolder } from 'react-icons/bs'
const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <RiAwardLine className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ year working</small>
                        </article>

                        <article className="about__card">
                            <RiUser3Line className='about__icon' />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <BsFolder className='about__icon' />
                            <h5>Projects</h5>
                            <small>3+ Conpleted</small>
                        </article>

                    </div>
                    <p>
                        Lorem ipsun dolor sit amet consectetur adipisicing elit. Eaque eos voluptatem eius dolorem
                        maiores nihil ducimus at rem ullam reprehemderit quidem quya deserunt, molestiae, eligendi
                        amet repellat molestias quos totam.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
                
            </div>
        </section>
    )
}

export default About  