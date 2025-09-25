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
import { signIn } from 'next-auth/react'
import { sign } from 'crypto'
import Link from 'next/link'


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


 const res = await signIn("credentials",{
  email: values.email,
  password: values.password,
  redirect: false,
  callbackUrl: "/"
 })
 console.log(res);
 
  
  if(res?.ok){
    toast.success("login success" ,{
      position: "top-center",
      duration: 3000,
    })

    window.location.href = res?.url || "/"



  }
      else{
         toast.error(res?.error ,{
      position: "top-center",
      duration: 3000,
    })

    }
    

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

    
  <Link href={"/forget-password"} className='text-green-600'>
  Forgot Password
  </Link>
  <Button  className='w-full mt-5'>Login</Button>
        </form>
 
</Form>


      
    </div>
  )
}

export default Login