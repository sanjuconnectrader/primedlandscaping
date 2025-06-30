
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contactpage from './pages/Contactpage';
import Aboutpage from './pages/Aboutpage';
import Guarantees from './components/About/Guarantees';
import Guaranteepage from './pages/Guaranteepage';
import HoaLandscapingpage from './pages/HoaLandscapingpage';
import Lawncarepage from './pages/Lawncarepage';
import Hardscapingpage from './pages/Hardscapingpage';
import Commericapage from './pages/Commericapage';
import ThatchingandAerationpage from './pages/ThatchingandAerationpage';
import Pressurewashingpage from './pages/Pressurewashingpage';
import Blogpage from './pages/Blogpage';

import BlogDetails from './pages/BlogDetails';
import Irrigationpage from './pages/Irrigationpage';
import Turfpage from './pages/Turfpage';



const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <>

      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/who-we-are' element={<Aboutpage />} />
        <Route path='/contact' element={<Contactpage />} />

        <Route path='/about/our-guarantees' element={<Guaranteepage />} />
        <Route path='/services/hoa-landscaping' element={<HoaLandscapingpage />} />
        <Route path='/services/residential-landscaping' element={<Lawncarepage />} />
        <Route path='/services/hardscaping' element={<Hardscapingpage />} />
        <Route path='/services/commercial-landscaping' element={<Commericapage />} />
        <Route path='/services/thatching-&-aeration' element={<ThatchingandAerationpage/>} />
        <Route path='/services/pressure-washing' element={<Pressurewashingpage/>} />
        <Route path='/services/irrigation' element={<Irrigationpage/>} />
        <Route path='/services/turf-installation' element={<Turfpage/>} />
    




         <Route path='/blog' element={<Blogpage/>} />
        <Route path="/blogs/:id" element={<BlogDetails/>} />




      </Routes>
    </>
  );
};

export default App;
