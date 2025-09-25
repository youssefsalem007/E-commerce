"use client"
import { CartContext } from '@/Context/CartContext'
import React, { useContext } from 'react'
import Loading from '../loading'
import { Button } from '@/components/ui/button'
import { ProductCart } from '@/types/cart.type'
import Image from 'next/image'
import { toast } from 'sonner'
import Link from 'next/link'

const Cart = () => {
 
  const {isLoading, products , totalCartPrice , removeCartItem ,updateCart,clearCart}  = useContext(CartContext)

 async function removeItem(id:string){
  const data = await removeCartItem(id)
   if(data.status === "success"){
        toast.success("success to remove Item from cart" ,{
          duration:3000,
          position:"top-center"
        })

       }
       else{
        toast.error("failed to remove Item from cart" ,{
          duration:3000,
          position:"top-center"
        })
       }

  }

  async function UpdateCartItem(id:string ,count:number){
  const data = await updateCart(id ,count)
   if(data.status === "success"){
        toast.success("success to update Item from cart" ,{
          duration:3000,
          position:"top-center"
        })

       }
       else{
        toast.error("failed to update Item from cart" ,{
          duration:3000,
          position:"top-center"
        })
       }

  }

  if(isLoading){
    return <Loading/>;
  }

   if(products.length === 0){
    return <div className='flex justify-center items-center h-screen'>
         <i className='text-red-600 text-3xl font-bold'>No Data To Display</i>
        
    </div>;
  }
 
  
  return (
    <div className='w-full md:w-[80%] mx-auto my-10 px-5 md:px-0 bg-slate-100'>

      <div className='p-5'>
        <h1 className='text-2xl text-bold'>Shop Cart:</h1>
        <p className=' my-3 text-green-700 font-mono'> Total Price : {totalCartPrice}</p>

        <Button className='mb-10' onClick={()=>clearCart()}>Clear Cart</Button>
        <Button className='mb-10 ms-5'>
          <Link href={"/payment"}>Payment</Link>
        </Button>

        <div className='allProducts'>
          {products.map(function(product:ProductCart , idx : number){
            return <div key={idx} className='flex items-center justify-between py-3  border-b-[1px] border-green-700/35'> 
            <div className=' flex items-center gap-5'>

              <div>
              <Image src={product.product.imageCover} alt=''height={200} width={200}/>
              
              </div>

              <div>
                <h1>{product.product.title}</h1>
                <p className='my-3 text-green-700'>Price : {product.price}</p>

                <Button onClick={()=> removeItem(product.product.id)}>Remove</Button>

              </div>

            </div>

            <div className='flex items-center gap-2'>
               <Button onClick={()=> UpdateCartItem(product.product.id , product.count+1)}>+</Button>

              <p>{product.count}</p>
               <Button onClick={()=> UpdateCartItem(product.product.id , product.count-1)}>-</Button>

            </div>


            </div>
          })}
          
        </div>

      </div>

    </div>
  )
}

export default Cart