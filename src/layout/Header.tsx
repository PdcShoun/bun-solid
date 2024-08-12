import { A } from '@solidjs/router'

const Header = () => {
  return (
    <nav class="flex gap-4 bg-gray-800 p-4 text-slate-300">
      <A class="text-xl" href="/">
        Home
      </A>
      <A class="text-xl" href="/about">
        About
      </A>
      <A class="text-xl" href="/login">
        Login
      </A>
      <A class="text-xl" href="/users">
        User List
      </A>
      <A class="text-xl" href="/users/1">
        User 1
      </A>
    </nav>
  )
}
export default Header
