import getSingleProduct from '@/apis/singleProduct'
import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import AddBtnCard from '@/app/_components/AddBtnCard/AddBtnCard'
import AddWishlistCard from '@/app/_components/AddWishlistCard/AddWishlistCard'


const ProductDetails = async ({ params }: any) => {
  const { id } = params;
  const data = await getSingleProduct(id);


  console.log(data);
  
  return (
    <div className=' w-full px-5 md:w-[80%] md:px-0 mx-auto my-10 flex items-center flex-col md:flex-row'>

      <div className='w-full md:w-1/3'>
      <Image src={data.imageCover} alt="img" className='w-full' width={500} height={500}/>

      </div>

      <div className='w-full md:w-2/3 m-10 md:m-0 ps-10'>
      <h2 className='text-2xl text-green-500 font-bold'>{data.title}</h2>
      <p className='my-5'>{data.description}</p>
      <p className='my-5'>{data.category.name}</p>

        <div className='w-full my-5 flex justify-between items-center'>
      <p>{data.price} EGP</p>
      <p>{data.ratingsAverage} <i className='fa-solid fa-star text-yellow-300'></i></p>

    </div>

    <div><AddBtnCard id={data.id}/></div>
    <div className='mt-5'>
    <AddWishlistCard id={data.id}/>
    </div>
    
    


      </div>

    </div>
  )
}

export default ProductDetails