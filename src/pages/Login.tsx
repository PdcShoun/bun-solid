import { A } from '@solidjs/router'
import { Counter } from '@/components/Counter'
import { FormLogin } from '@/forms/login'

const Login = () => {
  return (
    <>
      <Counter />
      <FormLogin />
      <p>
        Don't have an account? <A href="/register">Register</A>
      </p>
    </>
  )
}

export default Login
