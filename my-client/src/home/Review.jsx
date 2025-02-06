import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar } from 'react-icons/fa6'
// import {Avatar} from 'flowbite-react';
import proPic from '../assets/profile.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-14'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        // className="mySwiper"
      >
        <SwiperSlide>
            <div className='mt-7 space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div>
                    <p className='mb-5'>Mast Book thi</p>
                    <img class="w-10 h-10 rounded-full mb-4" src={proPic} alt="Rounded avatar"></img>
                    <h5 className='twxt-lg font-medium'>Kevin Johnson</h5>
                    <p className='text-base'>CEO,BookMania</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mt-7 space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div>
                    <p className='mb-5'>Mast Book thi</p>
                    <img class="w-10 h-10 rounded-full mb-4" src={proPic} alt="Rounded avatar"></img>
                    <h5 className='twxt-lg font-medium'>Kevin Johnson</h5>
                    <p className='text-base'>CEO,BookMania</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mt-7 space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div>
                    <p className='mb-5'>Mast Book thi</p>
                    <img class="w-10 h-10 rounded-full mb-4" src={proPic} alt="Rounded avatar"></img>
                    <h5 className='twxt-lg font-medium'>Kevin Johnson</h5>
                    <p className='text-base'>CEO,BookMania</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mt-7 space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div>
                    <p className='mb-5'>Mast Book thi</p>
                    <img class="w-10 h-10 rounded-full mb-4" src={proPic} alt="Rounded avatar"></img>
                    <h5 className='twxt-lg font-medium'>Kevin Johnson</h5>
                    <p className='text-base'>CEO,BookMania</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mt-7 space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div>
                    <p className='mb-5'>Mast Book thi</p>
                    <img class="w-10 h-10 rounded-full mb-4" src={proPic} alt="Rounded avatar"></img>
                    <h5 className='twxt-lg font-medium'>Kevin Johnson</h5>
                    <p className='text-base'>CEO,BookMania</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mt-7 space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div>
                    <p className='mb-5'>Mast Book thi</p>
                    <img class="w-10 h-10 rounded-full mb-4" src={proPic} alt="Rounded avatar"></img>
                    <h5 className='twxt-lg font-medium'>Kevin Johnson</h5>
                    <p className='text-base'>CEO,BookMania</p>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  )
}

export default Review
