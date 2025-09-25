"use server"

import { getToken } from "@/utilities/token"
import axios from "axios"
import { jwtDecode } from "jwt-decode"

 export async function getUserOrders(){
    const token = await getToken()
    const {id} =jwtDecode(token as string)
    if(!token){
        throw new Error("User not authenticated")
    }
    const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)

    return data

 }