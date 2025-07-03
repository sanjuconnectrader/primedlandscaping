import React from 'react'
import Navbar from '../components/Home/Navbar/Navbar'
import Zod from '../components/Services09/Zod'
import Zoddetails from '../components/Services09/Zoddetails'
import Appointment from '../components/About/Appointment'
import Footer from '../components/Home/Footer/Footer'

const Zodpage = () => {
  return (
    <div>
        <Navbar/>
        <Zod/>
        <Zoddetails/>
        <Appointment/>
        <Footer/>
    </div>
  )
}

export default Zodpage