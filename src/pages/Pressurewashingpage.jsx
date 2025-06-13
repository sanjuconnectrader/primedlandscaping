import React from 'react'
import Navbar from '../components/Home/Navbar/Navbar'
import Footer from '../components/Home/Footer/Footer'
import Pressurewashing from '../components/Services06/Pressurewashing'
import Appointment from '../components/About/Appointment'
import PressureWashingDetails from '../components/Services06/Pressurewashingdetails'

const Pressurewashingpage = () => {
    return (
        <div>
        <Navbar/>
        <Pressurewashing/>
        <PressureWashingDetails/>

       


        <Footer/>

        </div>
    )
}

export default Pressurewashingpage