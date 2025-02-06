import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div >
       <Swiper 
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide style={ {backgroundImage: 'url(src/assets/book1.png)'} }></SwiperSlide>
        <SwiperSlide style={ {backgroundImage: 'url(src/assets/book2.png)'} }></SwiperSlide>
        <SwiperSlide style={ {backgroundImage: 'url(src/assets/book3.png)'} }></SwiperSlide>
        <SwiperSlide style={ {backgroundImage: 'url(src/assets/book4.png)'} }></SwiperSlide>
        <SwiperSlide style={ {backgroundImage: 'url(src/assets/book5.png)'} }></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCard
