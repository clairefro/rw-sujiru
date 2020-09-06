import { useAuth } from '@redwoodjs/auth'

const Nav = () => {
  const { logIn, logOut, isAuthenticated } = useAuth()
  return (
    <nav>
      {isAuthenticated ? (
        <button
          onClick={() => logOut({ redirectTo: process.env.AUTH0_REDIRECT_URI })}
        >
          Logout
        </button>
      ) : (
        <button onClick={logIn}>Login</button>
      )}
    </nav>
  )
}

export default Nav
