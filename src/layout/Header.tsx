import { A } from '@solidjs/router'

const Header = () => {
  return (
    <div>
      <A href="/">Home</A>
      <A href="/about">About</A>
      <A href="/login">Login</A>
      <A href="/users">User List</A>
      <A href="/users/1">User 1</A>
    </div>
  )
}
export default Header
