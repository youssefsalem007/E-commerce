"use server"
import axios from "axios";
import { getToken } from "../utilities/token";


export async function addToCartAction(id : string){

   const token =  await getToken()

   if(!token){
    throw new Error("You must be logged in to add to cart")
   }

  const values = {
    productId: id
}
   const {data} = await  axios.post("https://ecommerce.routemisr.com/api/v1/cart"  , 
    values , {headers:{
        token:token as string
    }}
   )

   return data




}