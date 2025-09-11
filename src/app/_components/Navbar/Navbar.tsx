import Link from 'next/link'
import React from 'react'
import Image  from 'next/image';
import logo from "./../../../../public/screens/freshcart-logo.svg"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='bg-slate-300 py-5'>
        <div className='w-full md:w-[80%] mx-auto flex flex-col md:flex-row text-center justify-between items-center'>

            {/* logo & links */}
            <ul className='flex flex-col md:flex-row gap-6 text-center items-center'>
                <li>
                    <Link href="/">
                    <Image src={logo} alt="logo" />
                    </Link> 
                </li>



                 <li>
                    <Link href="/categories">
                    Categories
                    </Link>
                </li>


              <li>
                 <Link href="/brands">
                    Brands
                    </Link>
                </li>
               <li>
                  <Link href="/cart">
                    Cart
                    </Link>
                </li>
            </ul>

            {/* icons */}


            <div className='flex flex-col md:flex-row gap-2 text-center items-center'>
                <div>
                    <i className='fab fa-facebook-f mx-2'></i>
                    <i className='fab fa-youtube mx-2'></i>
                    <i className='fab fa-linkedin mx-2'></i>
                    <i className='fab fa-twitter mx-2' ></i>


                </div>



                <div className='flex flex-col md:flex-row gap-4 items-center'>


                   <Link href="/login">
                    Login
                    </Link>


                    <Link href="/register">
                    Register
                    </Link>
 
                <button>Logout</button>  
                </div>





            </div>



        </div>



    </div>
  )
}

export default Navbar