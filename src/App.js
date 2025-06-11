
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
         <Route path='/services/commercial-landscaping' element={<Commericapage/>} />



        
      </Routes>
    </>
  );
};

export default App;
