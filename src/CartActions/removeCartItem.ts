"use server"

import { getToken } from "@/utilities/token"
import axios from "axios"

export async function removeCartItemAction(id : string){
    const token = await getToken()

    if(!token){
        throw new Error("You must be logged in to remove from cart")
    }

    const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
        headers:{
            token: token as string
        }
    })
    return data
}