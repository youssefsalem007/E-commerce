"use server"

import { getToken } from "@/utilities/token"

export async function getUserCartAction(){
    const token = await getToken()

    if(!token){
        throw new Error("You must be logged in to view cart")
    }


    const response  = await fetch("https://ecommerce.routemisr.com/api/v1/cart" ,
        {
            headers:{
                token:token as string
            }
        }
        

    )
    const data = await response.json()
    return data
}