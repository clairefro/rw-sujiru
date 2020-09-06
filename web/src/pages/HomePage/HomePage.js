import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const auth = useAuth()
  console.log(auth)
  return (
    <>
      <h1>HomePage</h1>
      <Link to={routes.home()}>Home</Link>`
    </>
  )
}

export default HomePage
