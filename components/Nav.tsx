import Link from 'next/link'
import { Button } from "@/components/ui/button"

const Nav = () => {
  return (
    <div>Nav
        <Link href="/sign-up">
        <Button>Sign up</Button>
      </Link>
      <Button>Login</Button>
      <Button>Forgot Password?</Button>
      <Button>Reset Password</Button>
    </div>
  )
}

export default Nav