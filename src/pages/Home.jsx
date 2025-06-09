import React from 'react'
import Navbar from '../components/Home/Navbar/Navbar'
import Header from '../components/Home/Header/Header'
import Abouthome from '../components/Home/About/Abouthome'
import Service from '../components/Home/Service/Service'
import Client from '../components/Home/Client/Client'
import Footer from '../components/Home/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Abouthome />
            <Service />
            <Client />
            <Footer />
        </div>
    )
}

export default Home