import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <section className='section footer bg-dark text-white'>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h4>Cloudstrats</h4>
                    <hr />
                    <p className='text-white'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet accusamus magnam error alias nihil temporibus labore corrupti nesciunt ea ducimus et omnis, id nulla? Voluptatum a perferendis mollitia ipsa!
                    </p>
                </div>
                <div className="col-md-4">
                    <h4>Quick Links</h4>
                    <hr />
                    <div><Link to='/'>Home</Link></div>
                    <div><Link to='/about'>About Us</Link></div>
                    <div><Link to='/contact'>Contact Us</Link></div>
                    {/* <div><Link to='/'></Link></div> */}
                </div>
                <div className="col-md-4">
                    <h4>Contact Information</h4>
                    <hr />
                    <div><p className="mb-1 text-white">B-101 /1, Raheja Plaza, Lal Bahadur Shastri Rd, Hiranandani Gardens, Panchkutir Ganesh Nagar, Ghatkopar West, Mumbai, Maharashtra 400086</p></div>
                    <div><p className="mb-1">022 6977 1818</p></div>
                    <div><p className="mb-1">connect@cloudstrats.com</p></div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer