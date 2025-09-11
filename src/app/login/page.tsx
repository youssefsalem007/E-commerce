"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { loginSchema, LoginSchemaType } from '@/schema/login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import {useForm } from 'react-hook-form'
import { toast } from 'sonner'


const Login = () => {

  const router = useRouter()

 const form =  useForm<LoginSchemaType>({
  defaultValues: {
   
    email:"",
    password:"",
 
  },
  resolver: zodResolver(loginSchema),
 })

 async function handleLogin(values: LoginSchemaType){ 

  try {
    const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
    console.log(data);

    toast.success(data.message ,{
      position: "top-center",
      duration: 4000,
    })
    router.push('/')
    
  } catch (error) {
    console.log(error);

     toast.error(error.response?.data?.message ,{
      position: "top-center",
      duration: 4000,
    })
    
    
  }
  console.log(values);

 }
  return (
    <div className='mx-auto px-5 md:px-0 w-full my-12 md:w-1/2'>
      <h1 className='text-3xl text-center mb-5 font-bold'>Login Form</h1>

      <Form {...form}>

        <form onSubmit={form.handleSubmit(handleLogin)} className='space-y-3'>
 

            <FormField
    control={form.control}
    name="email"
    render={({field}) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type='email' {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />


            <FormField
    control={form.control}
    name="password"
    render={({field}) => (
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input type='password' {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />

    

  <Button  className='w-full mt-5'>Register Now</Button>
        </form>
 
</Form>


      
    </div>
  )
}

export default Login