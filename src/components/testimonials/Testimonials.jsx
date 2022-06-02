import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar-1.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
// Import Swiper styles
// import 'swiper/css';
import 'swiper/swiper-bundle.min.css'
//import 'swiper/swiper.min.css'





const data = [
    {

        avatar: AVT1,
        name: "Trần Long",
        review: ' Moidi alias animi dolorem aliquam ae eum beatae maiores, consectetur praesentium quiusdam, commodi velit porro blanditis consequatur qui molestiae. Dolorem, perspiciatis aspenrnatus labore distinctio ratione deletus voluptartem dolores deserunt explicabo nostrum duimus quaso?'
    },

    {
        avatar: AVT1,
        name: "Trần DDinh",
        review: ' Moidi alias animi dolorem aliquam ae eum beatae maiores, consectetur praesentium quiusdam, commodi velit porro blanditis consequatur qui molestiae. Dolorem, perspiciatis aspenrnatus labore distinctio ratione deletus voluptartem dolores deserunt explicabo nostrum duimus quaso?'
    },
    {
        avatar: AVT1,
        name: "Trần NNghep",
        review: ' Moidi alias animi dolorem aliquam ae eum beatae maiores, consectetur praesentium quiusdam, commodi velit porro blanditis consequatur qui molestiae. Dolorem, perspiciatis aspenrnatus labore distinctio ratione deletus voluptartem dolores deserunt explicabo nostrum duimus quaso?'
    },
    {
        avatar: AVT1,
        name: "Trần HHieu",
        review: ' Moidi alias animi dolorem aliquam ae eum beatae maiores, consectetur praesentium quiusdam, commodi velit porro blanditis consequatur qui molestiae. Dolorem, perspiciatis aspenrnatus labore distinctio ratione deletus voluptartem dolores deserunt explicabo nostrum duimus quaso?'
    },

]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials__container'
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className='client__avatar'>
                                    <img src={avatar} />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__riview">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials