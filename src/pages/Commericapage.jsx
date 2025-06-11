import React from 'react'
import Commerical from '../components/Services04/Commerical'
import Navbar from '../components/Home/Navbar/Navbar'
import CommericalDetails from '../components/Services04/CommericalDetails'
import Appointment from '../components/About/Appointment'
import Footer from '../components/Home/Footer/Footer'

const Commericapage = () => {
    return (
        <div>
            <Navbar />

            <Commerical />
            <CommericalDetails/>
            <Appointment/>
            <Footer/>


        </div>
    )
}

export default Commericapage