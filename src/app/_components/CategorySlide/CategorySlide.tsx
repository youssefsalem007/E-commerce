import getAllCategories from '@/apis/categories'
import React from 'react'
import SwiperCategory from './../SwiperCategory/SwiperCategory';
import { Category } from '@/types/product.type';

const CategorySlide = async() => {
  const data:Category[] = await getAllCategories()
  console.log(data);
  
  return (
    <div className='mb-3'> 
        <SwiperCategory categories = {data}/>

    </div>
  )
}

export default CategorySlide