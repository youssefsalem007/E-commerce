import getAllCategories from '@/apis/categories'
import Image from 'next/image'
import React from 'react'

const Categories = async() => {
  const data= await getAllCategories()
  return (
    <div className='w-full md:w-[80%] mx-auto py-10 px-0'>
<div className="flex flex-wrap justify-center">
  {data.map((data:any, idx:number) => (
    <div key={idx} className="w-full md:w-1/2 p-2 flex justify-center">
      <Image src={data.image} alt="catImg" width={200} height={200} />
    </div>
  ))}
</div>
    </div>
  )
}

export default Categories