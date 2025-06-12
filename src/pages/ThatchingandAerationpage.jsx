import ThatchingandAeration from '../components/Services05/ThatchingandAeration'
import Navbar from '../components/Home/Navbar/Navbar'
import Appointment from '../components/About/Appointment'
import Footer from '../components/Home/Footer/Footer'
import ThatchingandAerationDetails from '../components/Services05/ThatchingandAerationDetails'

const ThatchingandAerationpage = () => {
    return (
        <div>
            <Navbar />
            <ThatchingandAeration />
            <ThatchingandAerationDetails/>
            <Appointment />
            <Footer />
        </div>
    )
}

export default ThatchingandAerationpage