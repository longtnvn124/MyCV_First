import React from 'react'
import './experience.css'
import { BsPatchCheck } from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
      <div className="experience__backend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon' />
              <dir>
              <h4>HTML</h4>
              <small className='Text-light'>Experienced</small>
              </dir>
            </article>

            <article className='experience__details'>
              <BsPatchCheck  className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='Text-light'>Intermadiate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheck  className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='Text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheck />
              <div>
              <h4>Bootstrap</h4>
              <small className='Text-light'>Experienced</small>

              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheck  className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='Text-light'>Experienced</small>
              </div>
            </article>


          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheck  className='experience__details-icon'/>
              <div>
              <h4>Node JS</h4>
              <small className='Text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheck  className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='Text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheck  className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='Text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheck  className='experience__details-icon'/>
              <div>
              <h4>MySQK</h4>
              <small className='Text-light'>Intermadiate</small>
              </div>
            </article>


          </div>
        </div>

      </div>
    </section>
  )
}

export default experience