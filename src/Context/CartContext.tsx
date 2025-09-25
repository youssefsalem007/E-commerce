import { getUserCartAction } from '@/CartActions/getUserCart';
import { Cart, ProductCart } from '@/types/cart.type';
import React, { createContext, useEffect, useState } from 'react'
import { addToCartAction } from '@/CartActions/addToCart'; 
import { removeCartItemAction } from '@/CartActions/removeCartItem';
import { updateCartAction } from '@/CartActions/updateCart';
import { clearCartAction } from '@/CartActions/clearCart';

interface CartContextType {
  isLoading: boolean;
  numOfCart: number;
  totalCartPrice: number;
  products: ProductCart[];
  cartId: string;
  addProductToCart: (id: string) => Promise<any>;
  removeCartItem: (id: string) => Promise<any>;
  updateCart: (id: string, count: number) => Promise<any>;
  clearCart: () => Promise<any>;
  afterPayment: () => void;
  getUserCart?: () => Promise<void>;
}
 export const CartContext = createContext<CartContextType>({} as CartContextType);

const CartContextProvider = ({children} : {children : React.ReactNode}) => {
 const [products, setProducts] = useState<ProductCart[]>([]);
const [numOfCart, setNumOfCart] = useState<number>(0);
const [totalCartPrice, setTotalCartPrice] = useState<number>(0);
const [cartId, setCartId] = useState<string>("");
const [isLoading, setIsLoading] = useState<boolean>(false);
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