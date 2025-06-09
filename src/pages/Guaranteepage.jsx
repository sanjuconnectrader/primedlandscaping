import React from 'react'
import Navbar from '../components/Home/Navbar/Navbar'
import Guarantees from '../components/About/Guarantees'
import Footer from '../components/Home/Footer/Footer'
import Appointment from '../components/About/Appointment'

const Guaranteepage = () => {
  return (
    <div>
        <Navbar/>
        <Guarantees/>
        <Appointment/>
        <Footer/>
    </div>
  )
}

export default Guaranteepage