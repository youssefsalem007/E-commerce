"use server"
import { getToken } from "@/utilities/token";
import axios from "axios";

export async function cashPaymentAction(id : string , values : object){
    const token = await getToken()

    if(!token){
        throw new Error("User not authenticated")
    }

    const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${id}` , values ,{
        headers:{
            token : token as string
        }
    })
    return data
}