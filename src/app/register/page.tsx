"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { registerSchema, RegisterSchemaType } from '@/schema/register.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import {useForm } from 'react-hook-form'
import { toast } from 'sonner'


const Register = () => {

  const router = useRouter()

 const form =  useForm<RegisterSchemaType>({
  defaultValues: {
    
    name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:"", 
  },
  resolver: zodResolver(registerSchema),
 })

 async function handleRegister(values: RegisterSchemaType){ 

  try {
    const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
    console.log(data);

    toast.success(data.message ,{
      position: "top-center",
      duration: 4000,
    })
    router.push('/login')
    
  } catch (error:any) {
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
      <h1 className='text-3xl text-center mb-5 font-bold'>Register Form</h1>

      <Form {...form}>

        <form onSubmit={form.handleSubmit(handleRegister)}>
           <FormField
    control={form.control}
    name="name"
    render={({field}) => (
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input type='text' {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />



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

              <FormField
    control={form.control}
    name="rePassword"
    render={({field}) => (
      <FormItem>
        <FormLabel>Confirm Password</FormLabel>
        <FormControl>
          <Input type='password' {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />


              <FormField
    control={form.control}
    name="phone"
    render={({field}) => (
      <FormItem>
        <FormLabel>Phone</FormLabel>
        <FormControl>
          <Input type='tel' {...field} />
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

export default Register