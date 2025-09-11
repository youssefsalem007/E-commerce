"use client"
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Categories from './../../categories/page';
import Image from 'next/image';
import { Category } from '@/types/product.type';



const SwiperCategory = ({categories}:  {categories:Category[]}) => {
  return (
    <div>
          <Swiper
      spaceBetween={0}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop= {true}
    >


        {categories.map((category , idx)=>
        <SwiperSlide key={idx}>

            <Image width={500} height={500} src={category.image} alt="category" className='h-[200] object-cover w-full' />
            <p className='my-3 text-center'>{category.name}</p>


        </SwiperSlide>
        
        
        
        )}

        
      
     
    </Swiper>
    </div>
        
    
  )
}

export default SwiperCategory