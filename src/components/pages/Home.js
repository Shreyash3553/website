import React, { useEffect } from 'react'
// import Slider from '../inc/Slider';
// import { Link } from 'react-router-dom';
// import Vissionmission from './inc/Vissionmission';
// import service1 from '../images/service1.jpg';
// import service2 from '../images/service2.jpg';
// import service3 from '../images/service3.jpg';
import Navbar from '../inc/Navbar'
import Footer from '../inc/Footer'
import Logo from '../../assets/logo.png';

function Home() {
  useEffect(() => {
    if (localStorage.getItem('linky-user')) {
      window.location.href = '/chat'
    }
  }, [])
  return (
    <>
      <Navbar />
      {/* <Slider/> */}
        <div className='container'>
            <div className='topsection'>
                <div className='left-section'><p>
                Never miss a moment with voice and video calls
From a group call to classmates to a quick call with mom, feel like you’re in the same room with voice and video calls.</p></div>
                {/* <div className='right-section'> <img src={Logo} alt="Logo" /></div> */}
            </div>
        </div>
      <Footer />
    </>
  )
}

export default Home
