import React from 'react'
import Routers from "../../Routers/Routers"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <React.Fragment>
      <div className='main'>
        <Navbar />
        <div>
          <Routers />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  )
}
