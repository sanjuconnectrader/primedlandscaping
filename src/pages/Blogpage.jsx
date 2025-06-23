import React from 'react'
import Navbar from '../components/Home/Navbar/Navbar'
import Blogheader from '../components/Blogs/Blogheader'
import Allblogs from '../components/Blogs/Allblogs'
import Footer from '../components/Home/Footer/Footer'


const Blogpage = () => {
    return (
        <div>
        <Navbar/>

        <Allblogs/>
        <Footer/>
 


        </div>
    )
}

export default Blogpage