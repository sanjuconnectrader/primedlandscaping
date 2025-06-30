import React from 'react'
import Navbar from '../components/Home/Navbar/Navbar'
import Irrigation from '../components/Services07/Irrigation'
import IrrigationDetails from '../components/Services07/IrrigationDetails'
import Appointment from '../components/About/Appointment'
import Footer from '../components/Home/Footer/Footer'

const Irrigationpage = () => {
  return (
    <div>

    <Navbar/>
    <Irrigation/>
    <IrrigationDetails/>
    <Appointment/>
    <Footer/>


    </div>
  )
}

export default Irrigationpage