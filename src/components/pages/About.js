import React from 'react';
import Vissionmission from './inc/Vissionmission';
import Navbar from "../inc/Navbar";
import Footer from "../inc/Footer";

function About() {
  return (
    <>
    <Navbar/>


        <section className='section border-bottom'>
            <div className="container">
                <h6 className='main-heading'>Our Company</h6>
                <div className="underline"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis ad explicabo similique sed quo labore illum obcaecati, doloribus modi corrupti at, ipsum quae numquam, deserunt dolor accusantium praesentium! Eaque?</p>
            </div>
        </section>
        {/* our vission mission */}
        <Vissionmission/>
        <Footer/> 
    </>
  )
}

export default About