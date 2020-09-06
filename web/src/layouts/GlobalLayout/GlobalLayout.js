import Nav from '../../components/Nav'

const GlobalLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export default GlobalLayout
