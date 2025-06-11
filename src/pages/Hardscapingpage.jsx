import Appointment from '../components/About/Appointment'
import Footer from '../components/Home/Footer/Footer'
import Navbar from '../components/Home/Navbar/Navbar'
import Hardscaping from '../components/Services03/Hardscaping'
import HardscapingDetails from '../components/Services03/HardscapingDetails'
const Hardscapingpage = () => {
    return (
        <div>
            <Navbar />
            <Hardscaping/>
            <HardscapingDetails/>
            <Appointment/>
            <Footer/>
           
        </div>
    )
}

export default Hardscapingpage