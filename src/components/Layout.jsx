
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className="content">
        {children}


        </div>
        <Footer/>
    </div>
  )
}

export default Layout