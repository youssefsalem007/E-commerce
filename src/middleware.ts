 import { getToken } from 'next-auth/jwt'
import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

   const token =  await getToken({req:request})
   
   const {pathname} = request.nextUrl

   const authPage = ["/login", "/register","/forget-password","/verify-code","/reset-password"]

   const routes = ["/","/allorders","/payment","/brands" , "/categories" , "/cart", "/productDetails" ]

   if(!token && routes.includes(pathname)){
    return NextResponse.redirect(new URL("/login", request.url))
   }

   if(token && authPage.includes(pathname)){
    return NextResponse.redirect(new URL("/" , request.url))
   }



  return NextResponse.next()
}
 
export const config = {
  matcher: ["/"  ,"/brands" ,"/payment","/allorders", "/categories" , "/cart", "/productDetails","/login", "/register" ,"/forget-password","/verify-code","/reset-password"],
}