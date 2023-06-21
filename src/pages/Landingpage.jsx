import React from 'react'
// import styled from 'styled-components'
// import 'https://fonts.googleapis.com';
// import 'https://fonts.gstatic.com';
// import 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400&display=swap';
import '../landingpage/css/bootstrap-icons.css'
import '../landingpage/css/bootstrap.min.css'
import '../landingpage/css/tooplate-clean-work.css'
import '../landingpage/js/jquery.min'
// import Logo from '../assets/logo.png'

export default function Landingpage() {
  return (
    <>
      {/* <Container> */}

      {/* <div classNameName="header">
            <div classNameName="brand">
              <img src={Logo} alt="Logo" />
              <h1>Linky</h1>
            </div>
          </div> */}

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="images/bubbles.png" className="logo img-fluid" alt="" />
            <span className="ms-2">Clean Work</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#section_5"
                  id="navbarLightDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-light"
                  aria-labelledby="navbarLightDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="services.html">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="coming-soon.html">
                      Coming Soon
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="page-404.html">
                      Page 404
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
              <li className="nav-item ms-3">
                {/* <a className="nav-link custom-btn custom-border-btn custom-btn-bg-white btn" href="#">Get started</a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* </Container> */}
    </>
  )
}

// const Container = styled.div`
// width: 100vw;
// display: flex;
// flex-direction: column;
// gap: 1rem;
// background-color: #1F1D2B;
// .header{
//   width: 115px;
//   .brand {
//     display: flex;
//     gap: 1rem;
//     justify-content: flex-start;
//     img {
//       height: 5rem;
//     }
//     h1 {
//       color: white;
//       text-transform: uppercase;
//     }
//   }
// }

// }

// `
