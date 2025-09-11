import React from 'react'
import errorImage from "./../../public/screens/404.jpg"
import Image  from 'next/image';

const ErrorPage = () => {
  return (
    <div className='w-full md:w-[80%] mx-auto px-5 my-5 md:px-0'>
        <Image src={errorImage} alt='errorImg'/>
        
    </div>
  )
}

export default ErrorPage