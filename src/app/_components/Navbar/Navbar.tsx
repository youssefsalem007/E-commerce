"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import Image from 'next/image';
import logo from "./../../../../public/screens/freshcart-logo.svg"
import { signOut, useSession } from 'next-auth/react';
import { CartContext } from '@/Context/CartContext';
import { WishlistContext } from '@/Context/WishlistContext'; 
import { Badge } from "@/components/ui/badge"

type Props = {}
 
const Navbar = (props: Props) => {
  const { data: session, status } = useSession()
   const { numOfCart } = useContext(CartContext) as any
  const { numOfWishlist } = useContext(WishlistContext) as any
 
  return (
    <div className='bg-slate-300 py-5'>
      <div className='w-full md:w-[80%] mx-auto flex flex-col md:flex-row text-center justify-between items-center'>

        {/* logo & links */}
        <ul className='flex flex-col md:flex-row gap-6 text-center items-center'>

          {status === "authenticated" && 
          <>
            <li>
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link> 
            </li>

            <li>
              <Link href="/categories">Categories</Link>
            </li>

            <li>
              <Link href="/allorders">All Orders</Link>
            </li>

            <li>
              <Link href="/brands">Brands</Link>
            </li>

            <li>
              <Link href="/cart" className='relative'>
                Cart 
                <Badge className='absolute -top-[70%]'>
                  {numOfCart}
                </Badge>
              </Link>
            </li>

            <li>
              <Link href="/wishlist" className='relative'>
                <i className="fa-solid fa-heart ms-2"></i>
                <Badge className='absolute -top-[70%]'>
                  {numOfWishlist} 
                </Badge>
              </Link>
            </li>
          </>}

          {status === "loading" && <h1>Loading...</h1>}

          {status === "unauthenticated" && <Image src={logo} alt="logo" />}
        </ul>

        {/* icons */}
        <div className='flex flex-col md:flex-row gap-2 text-center items-center'>
          <div>
           <Link href="https://www.facebook.com/" target='_blank'><i className='fab fa-facebook-f mx-2'></i></Link> 
            <Link href="https://www.youtube.com/" target='_blank'><i className='fab fa-youtube mx-2'></i></Link> 
             <Link href="https://www.linkedin.com/" target='_blank'><i className='fab fa-linkedin mx-2'></i></Link> 
              <Link href="https://x.com/" target='_blank'><i className='fab fa-twitter mx-2'></i></Link> 
         
          </div>

          {status === "authenticated" && <>  
            <div>
              <button 
                className='pointer-coarse' 
                onClick={() => signOut({ callbackUrl:"/login" })}
              >
                Logout
              </button>
            </div> 
            <h1 className='text-green-600'>Hello {session.user.name}</h1>
          </>}

          {status === "unauthenticated" && <> 
            <div><Link href="/login">Login</Link></div>
            <div><Link href="/register">Register</Link></div>
          </>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
