import React from 'react'
import Lawncare from '../components/Services02/Lawncare'
import Navbar from '../components/Home/Navbar/Navbar'
import LawncareDetails from '../components/Services02/LawncareDetails'
import Appointment from '../components/About/Appointment'
import Footer from '../components/Home/Footer/Footer'

const Lawncarepage = () => {
    return (
        <div>
            <Navbar />
            <Lawncare />
            <LawncareDetails/>
            <Appointment/>
            <Footer/>





        </div>
    )
}

export default Lawncarepage