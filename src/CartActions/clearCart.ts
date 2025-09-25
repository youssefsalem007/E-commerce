"use server"

import { getToken } from "@/utilities/token"
import axios from "axios"

export async function clearCartAction(){
   const token =  await getToken()

   if(!token){
    throw new Error("User not authenticated")
   }

   const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
    headers:{
        token : token as string
    }
   })
   return data
}