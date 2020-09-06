import { useAuth } from '@redwoodjs/auth'

const LoginPage = () => {
  const { logIn } = useAuth()
  return (
    <>
      <h1>LoginPage</h1>
      <button onClick={logIn}>Login</button>
    </>
  )
}

export default LoginPage
