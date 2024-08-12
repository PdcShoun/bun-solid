import { A } from '@solidjs/router'
import { FormLogin } from '@/forms/login'

const Login = () => {
  return (
    <>
      <FormLogin />
      <p>
        Don't have an account? <A href="/register">Register</A>
      </p>
    </>
  )
}

export default Login
