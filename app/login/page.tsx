// app/login/page.tsx/
"use client"
import { useAppSelector } from '@/app/redux/hooks';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// import { Button } from '@components/ui/button';
// import { Button, Input, Label } from '@components/ui/button';

export default function LoginForm() {
  const email = useAppSelector((state) => state.email.value);
  const [showEmail, setShowEmail] = useState(false);

  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmail(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, []);

  return (
<>
    {/* //from app/login/page.tsx/, delay 1 sec before render */}
    {showEmail ? <pre>email: {email}</pre> : <p>Loading email...</p>}

    <pre>email: {email}</pre>
    {/* // <form onSubmit={handleSubmit}> */}
      {/* // <Label htmlFor="email">Email</Label>
      // {/* <Input type="email" id="email" value={email}  */}
      {/* // // onChange={(e) => setEmail(e.target.value)}  */}
      {/* /> */}
       {/* <Label htmlFor="password">Password</Label> */}
       {/* <Input type="password" id="password" value={password}  */}
       {/* // onChange={(e) => setPassword(e.target.value)}  */}
       {/* /> */}
       {/* <Button type="submit">Login</Button> */}
     {/* </form>  */}
    </>    
  )
}