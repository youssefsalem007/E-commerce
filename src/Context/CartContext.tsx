import { getUserCartAction } from '@/CartActions/getUserCart';
import { Cart } from '@/types/cart.type';
import React, { createContext, useEffect, useState } from 'react'
import { addToCartAction } from '@/CartActions/addToCart'; 
import { removeCartItemAction } from '@/CartActions/removeCartItem';
import { updateCartAction } from '@/CartActions/updateCart';
import { clearCartAction } from '@/CartActions/clearCart';


 export const CartContext = createContext({})

const CartContextProvider = ({children} : {children : React.ReactNode}) => {
 const [numOfCart , setNumOfCart] = useState(0)
  const [totalCartPrice , setTotalCartPrice] = useState(0)
   const [products , setProducts] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const [cartId , setCartId] = useState("")

    async function addProductToCart(id:string){

      try {
         const data  = await addToCartAction(id)
         getUserCart()
         console.log(data);
         return data
         
        
      } catch (error) {
        console.log(error);
        
        
      }
     

    }


   async function getUserCart(){
    setIsLoading(true)

    try {
        const data:Cart = await getUserCartAction()
        
        setNumOfCart(data.numOfCartItems)
        setProducts(data.data.products)
        setTotalCartPrice(data.data.totalCartPrice)
        setIsLoading(false)
        setCartId(data.cartId)
        
      
    } catch (error) {
      console.log(error);
      setIsLoading(false)
      
      
    }
      
    }

       async function removeCartItem(id:string){
    
    try {
        const data:Cart = await removeCartItemAction(id)
        
        setNumOfCart(data.numOfCartItems)
        setProducts(data.data.products)
        setTotalCartPrice(data.data.totalCartPrice)
       
        return data
      
    } catch (error) {
      console.log(error);
     
      
      
    }
      
    }


      async function updateCart(id:string , count:number){
    
    try {
        const data = await updateCartAction(id,count)
        
        setNumOfCart(data.numOfCartItems)
        setProducts(data.data.products)
        setTotalCartPrice(data.data.totalCartPrice)
        return data
       
      
    } catch (error) {
      console.log(error);
     
      
      
    }
      
    }

          async function clearCart(){
    
    try {
        const data = await clearCartAction()
        
        setNumOfCart(0)
        setProducts([])
        setTotalCartPrice(0)
        return data
       
      
    } catch (error) {
      console.log(error);
     
      
      
    }
      
    }

    function afterPayment(){
      setCartId("")
      setNumOfCart(0)
      setProducts([])
      setTotalCartPrice(0)
    }





    useEffect(function(){ 
        getUserCart()
    } , [])
  return (
   <CartContext.Provider value={{
   isLoading, numOfCart ,   totalCartPrice , products ,addProductToCart, removeCartItem,updateCart,clearCart,cartId,afterPayment
   }}>
    {children}
   </CartContext.Provider>
  )
}

export default CartContextProvider