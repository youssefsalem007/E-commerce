import { getUserOrders } from '@/apis/getUserOrders'
import { CartItem, Order, Orders } from '@/types/order.type';
import Image from 'next/image';
import React from 'react'

const AllOrders = async() => {
    const data : Orders= await getUserOrders()
    console.log(data);
    
  return (
    <div className='w-full nd:w-[80%] mx-auto my-10 px-5 md:px-0 '>

        <div className='allOrders'>
            {data.map(function(order : Order , idx:number){
                return <div className='p-5 bg-slate-100 mb-5' key={idx}>

                    <div className='flex border-b-[1px] border-green-300 pb-5'>
                      {order.cartItems.map(function(item : CartItem , idx:number){
                        return <div className='w-1/6 me-3' key={idx}>
                            <Image src={item.product.imageCover} alt={item.product.title} className='w-full' width={200} height={200}/>
                            <h2 className='line-clamp-1'>{item.product.title}</h2>
                          
                        </div>
                        
                      })}

                   

                     
                    </div>
                       <div className='ms-5'>
                         <h2>Payment Method Type: {order.paymentMethodType}</h2>
                         <h2>Total Order Price: {order.totalOrderPrice} EGP</h2>

                      </div>

                </div>
            })}
        </div>

    </div>
  )
}

export default AllOrders
