import React from 'react'
import Navbar from '../components/Home/Navbar/Navbar'
import HoaLandscaping from '../components/Services/HoaLandscaping'
import HoaLandscapingDetails from '../components/Services/HoaLandscapingDetails'
import Appointment from '../components/About/Appointment'
import Footer from '../components/Home/Footer/Footer'

const HoaLandscapingpage = () => {
  return (
    <div>
    <Navbar/>
    <HoaLandscaping/>
    <HoaLandscapingDetails/>
    <Appointment/>
    <Footer/>
    
    </div>
  )
}

export default HoaLandscapingpage