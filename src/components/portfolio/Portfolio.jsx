import React from "react";
import './portfolio.css'
import IMG1 from "../../assets/portfolio-1.png"
import IMG2 from "../../assets/portfolio-2.png"
import IMG3 from "../../assets/portfolio-3.png"
import IMG4 from "../../assets/portfolio-4.png"
import IMG5 from "../../assets/portfolio-5.png"
import IMG6 from "../../assets/portfolio-6.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: ' Cryto Currrecy Dashboard & Financial Visualization',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/18013185-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'

  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/17992262-Orion-UI-kit-Charts-templates-infographics-in-Figma'

  },
  {
    id: 3,
    image: IMG3,
    title: ' Charts templates & infographics in Figma',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/17919820-Orion-UI-kit-Charts-templates-infographics-in-Figma'

  },
  {
    id: 4,
    image: IMG4,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/17774116-Orion-UI-kit-Charts-templates-infographics-in-Figma/attachments/12941528?mode=media'

  },
  {
    id: 5,
    image: IMG5,
    title: ' Cryto Currrecy Dashboard & Financial Visualization',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/18013185-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'

  },
  {
    id: 6,
    image: IMG6,
    title: ' Cryto Currrecy Dashboard & Financial Visualization',
    github: 'https://github.com/',
    demo: 'https://www.google.com/search?q=anhr&rlz=1C1UEAD_enVN958VN958&sxsrf=APq-WBso18q1xw_aNkpG5ff-T1Kuu50NSw:1650460576844&tbm=isch&source=iu&ictx=1&vet=1&fir=lDlPEe504KDU_M%252CemL41ZuoM8cr2M%252C_%253BWPYfzwOTGtZffM%252Cab9aPOCKIGryYM%252C_%253BgbcODV4cYDqwnM%252CgnrTvpDlJPrk2M%252C_%253BaFluS1se0VaNWM%252C-7kGD3oeCyiNgM%252C_%253BqG_qOB_UZ8U7RM%252CFhY9r36g8sqm0M%252C_%253BqvTgkWnoWfB7fM%252CNAXi1ED1YzX0EM%252C_%253BHdfA3TLXTdijBM%252CR6dQV6P2ZLjRvM%252C_%253BYdYNujiy506ykM%252ChFQaqWDZpeVawM%252C_%253BQCjjuTzoPTajTM%252ChszAFfrow25-XM%252C_%253BzsEpUKDmRfYDgM%252CgnrTvpDlJPrk2M%252C_%253BNsOrmnelrHZHiM%252C-7kGD3oeCyiNgM%252C_%253Bj-hZ5LfFP11flM%252CqG9fRa3ezcuWPM%252C_%253BseyoOS2enBqpUM%252CgnrTvpDlJPrk2M%252C_%253BJZ3j_QgT1c8avM%252Cz_qlSD_HQT8VSM%252C_&usg=AI4_-kRwaiBllaRoAIq1VZdT8TSos3of8g&sa=X&ved=2ahUKEwjP5Zfj3KL3AhV3wjgGHR4IBHgQ9QF6BAgGEAE&biw=958&bih=927&dpr=1#imgrc=WPYfzwOTGtZffM'

  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target={'_blank'}>Github</a>
                  <a href={demo} className='btn btn-primary' target={'_blank'}>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio