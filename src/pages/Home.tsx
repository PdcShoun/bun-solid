import { Show, createEffect } from 'solid-js'
import { useNavigate } from '@solidjs/router'
import { useAppContext } from '@/Context'

const Home = () => {
  const [logged, login, logout] = useAppContext()
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  const userLogout = () => {
    logout()
    localStorage.removeItem('token')
    navigate('/login', { replace: true })
  }

  createEffect(() => {
    console.log('Home', { logged: logged(), token })
    if (!token) {
      console.log('Rediarect')
      navigate('/login', { replace: true })
    }
  })

  return (
    <>
      <div>
        <Show when={logged()} fallback={<h2>Not Login</h2>}>
          <h2>Logged</h2>
        </Show>
        <br />
        <button onclick={() => login()}>Login</button>
        <button onclick={() => userLogout()}>Logout</button>
        <h1 class="text-xl">Home</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
          quidem!
        </p>
      </div>
    </>
  )
}

export default Home
