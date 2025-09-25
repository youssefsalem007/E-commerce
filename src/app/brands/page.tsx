import { getAllBrands } from '@/apis/allBrands'
import Image from 'next/image'
import React from 'react'

const Brands = async() => {
  const data= await getAllBrands()
  return (
    <div className='w-full md:w-[80%] mx-auto py-10 px-0'>
<div className="flex flex-wrap justify-center">
  {data.map((brand, idx) => (
    <div key={idx} className="w-full md:w-1/2 p-2 flex justify-center">
      <Image src={brand.image} alt="" width={200} height={200} />
    </div>
  ))}
</div>
    </div>
  )
}

export default Brands