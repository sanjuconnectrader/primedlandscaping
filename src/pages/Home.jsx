import React from 'react'
import Navbar from '../components/Home/Navbar/Navbar'
import Header from '../components/Home/Header/Header'
import Abouthome from '../components/Home/About/Abouthome'
import Service from '../components/Home/Service/Service'
import Client from '../components/Home/Client/Client'
import Footer from '../components/Home/Footer/Footer'
import Choose from '../components/Home/Choose/Choose'
import Turfhome from '../components/Home/Turfhome'
import Appointment from '../components/About/Appointment'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Abouthome />
            <Service />
            <Choose/>
            <Turfhome/>
            <Appointment/>
        
            <Footer />
        </div>
    )
}

export default Home