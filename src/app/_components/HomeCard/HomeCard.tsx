import React from 'react'
import {
  Card,
  CardContent,
 
  CardFooter,
  CardHeader,
 
} from "@/components/ui/card"
import Link  from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Product } from '@/types/product.type'




const HomeCard = ({product} : {product:Product}) => {
  return (
    
  
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3'>
      

        <div className='inner'>
          <Card className='p-2 gap-2'>
            <Link href={`/productDetails/${product.id}`}>
  <CardHeader className='p-0'>

    <Image 
  src={product.imageCover} 
  alt={product.title}
  width={500}
  height={500}

/>

  </CardHeader>
  <CardContent className='p-0'>
    <p className='font-bold text-green-500 mb-3'>{product.category.name}</p>
    <p className='line-clamp-1'>{product.title}</p>
  </CardContent>
  <CardFooter className='p-0'>
    <div className='w-full mt-5 flex justify-between items-center'>
      <p>{product.price} EGP</p>
      <p>{product.ratingsAverage} <i className='fa-solid fa-star text-yellow-300'></i></p>

    </div>
  </CardFooter>
   </Link>
      <Button variant="default" className='w-full'>Add To Cart</Button>

</Card>


        </div>
       

        </div>
      
 
    
        )
      }


export default HomeCard