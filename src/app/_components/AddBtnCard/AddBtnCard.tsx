"use client"
import { addToCartAction } from '@/CartActions/addToCart'
import { Button } from '@/components/ui/button'
import { CartContext } from '@/Context/CartContext'

import React, { useContext } from 'react'
import { toast } from 'sonner'

const AddBtnCard = ({id}:{id : string}) => {

  const {addProductToCart} = useContext(CartContext)

    async function handleAddToCart(){

       const data = await addProductToCart(id)
       

       if(data.status === "success"){
        toast.success(data.message ,{
          duration:3000,
          position:"top-center"
        })

       }
       else{
        toast.error("failed to add to cart" ,{
          duration:3000,
          position:"top-center"
        })
       }
        

    }


  return (
    <div><Button variant="default" className='w-full' onClick={handleAddToCart}>Add To Cart</Button></div>
  )
}

export default AddBtnCard