// app/sign-up/page.tsx/
//from app/sign-up/page/, how to session name to browser, use context
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useSelector, useDispatch } from 'react-redux';
import { setEmail } from '@/app/redux/features/email/emailSlice';
import Link from 'next/link';
// import { toast } from "@/components/ui/use-toast"
// import { useAuth } from '../../context/AuthContext';
// import { useName } from '../context/NameContext';
//import { useName } from '../hooks/useName';
//const { setName } = useName();

const signUpSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 4 characters.' }),
})

// const { storeName } = useAuth();

type SignUpValues = z.infer<typeof signUpSchema>

export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email.value);
  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })
/////////////from game id////////////

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  if (email) {
    // Here you would typically send the email to your server
    console.log("Email submitted:", email)
    toast({
      title: "Email Submitted",
      description: `We've received your email: ${email}`,
    })
    setEmail("")
  } else {
    toast({
      title: "Error",
      description: "Please enter a valid email address",
      variant: "destructive",
    })
  }
}

const handleEmailChange = (e) => {
  dispatch(setEmail(e.target.value));
};


////////////////////////////
  async function onSubmit(data: SignUpValues) {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    // toast({
    //   title: "Account created!",
    //   description: `Welcome, ${data.name}! Your account has been successfully created.`,
    // })
    // setName(data.name);
    // storeName(data.name); 
    form.reset()
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create your account to get started.</CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              type="text" 
              placeholder="John Doe"
              {...form.register('name')}
            />
            {form.formState.errors.name && (
              <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="john@example.com"
              onChange={handleEmailChange} 
              {...form.register('email')}
            />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password"
              {...form.register('password')}
            />
            {form.formState.errors.password && (
              <p className="text-sm text-red-500">{form.formState.errors.password.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Link href="/login">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </Button>
          </Link>
        </CardFooter>
      </form>
    </Card>
  )
}