import React,{useEffect} from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './fix.css';
function Navbar() {

  useEffect(() => {
    if (localStorage.getItem('linky-user')) {
     window.location.href ='/chat'
    }
  }, []);
  
  return (
    <>
    <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/#">  <img src={Logo} alt="Logo" /></Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    </>
  )
}

export default Navbar