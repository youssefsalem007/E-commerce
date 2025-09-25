"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CartContext } from '@/Context/CartContext'
import { cashPaymentAction } from '@/PaymentActions/cashPayment'
import React, { useContext, useRef } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation';
import { onlinePaymentAction } from '@/PaymentActions/onlinePayment'

const Payment = () => {
  const router = useRouter()
  const { cartId, afterPayment } = useContext(CartContext)

  
  const details = useRef<HTMLInputElement>(null)
  const phone = useRef<HTMLInputElement>(null)
  const city = useRef<HTMLInputElement>(null)

  async function cashPayment(){
    const values = {
      shippingAddress:{
        details: details.current?.value || "", // أضف || "" عشان ما تبقاش undefined
        phone: phone.current?.value || "",
        city: city.current?.value || ""
      }
    }

    try {
      const data = await cashPaymentAction(cartId, values)
      console.log(data);

      toast.success(data.status,{
        position:"top-center",
        duration:1000
      })
      afterPayment()
      router.push("/allorders")
      
    } catch (error) {
      console.log(error);
    }
  }

  async function onlinePayment(){
    const values = {
      shippingAddress:{
        details: details.current?.value || "",
        phone: phone.current?.value || "", 
        city: city.current?.value || ""
      }
    }

    try {
      const data = await onlinePaymentAction(cartId, values)
      console.log(data);

      if(data.status === "success"){
        window.location.href = data.session.url 
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='w-full md:w-1/2 mx-auto my-10 px-5 md:px-0'>
      <h1 className='mb-10 text-center text-3xl font-bold'>Payment</h1>

      <div>
        <label htmlFor="details">Details</label>
        <Input ref={details} type='text' id='details' className='mb-4'/>

        <label htmlFor="phone">Phone</label>
        <Input ref={phone} type='text' id='phone' className='mb-4'/>

        <label htmlFor="city">City</label>
        <Input ref={city} type='text' id='city' className='mb-4'/>

        <Button onClick={cashPayment}>Cash Payment</Button>
        <Button onClick={onlinePayment} className='ms-5'>Online Payment</Button>
      </div>
    </div>
  )
}

export default Payment