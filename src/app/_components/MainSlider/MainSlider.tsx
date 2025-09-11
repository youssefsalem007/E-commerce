"use client"
import React from 'react'
import banner1 from "./../../../../public/screens/slider/grocery-banner.png"
import banner2 from "./../../../../public/screens/slider/grocery-banner-2.jpeg"


import slide1 from "./../../../../public/screens/slider/slider-image-1.jpeg"
import slide2 from "./../../../../public/screens/slider/slider-image-2.jpeg"
import slide3 from "./../../../../public/screens/slider/slider-image-3.jpeg"
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



const MainSlider = () => {
  return (
    <div className='mb-10 flex'>

        <div className='w-2/3'>
           <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop= {true}
    >
      <SwiperSlide><Image src={slide1} alt='slide1' className='h-[400px] object-cover w-full'/></SwiperSlide>
      <SwiperSlide><Image src={slide2} alt='slide2' className='h-[400px] object-cover w-full' /></SwiperSlide>
      <SwiperSlide><Image src={slide3} alt='slide2' className='h-[400px] object-cover w-full' /></SwiperSlide>
    
    </Swiper></div>

        <div className='w-1/3'>
        <Image src={banner1} alt="banner1" className='h-[200px] object-cover w-full'/>
        <Image src={banner2} alt="banner2" className='h-[200px] object-cover w-full'/>


        </div>

    </div>
 
  )
}

export default MainSlider