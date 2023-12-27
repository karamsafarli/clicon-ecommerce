import Navbar from "./navbar/Navbar"
import Footer from './footer/Footer';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout