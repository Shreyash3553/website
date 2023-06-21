import React from 'react'
import Navbar from '../inc/Navbar'
import Footer from '../inc/Footer'

function Contact() {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Donate to Developer</h6>
                  <hr />
                  <div className="form-group mb-1">
                    <label htmlFor="" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="Enter Full Name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-1">
                    <label htmlFor="" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name=""
                      placeholder="Enter Email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-1">
                    <label htmlFor="" className="form-label">
                      Amount
                    </label>
                    <input
                      type="number"
                      name="amount"
                      placeholder="Enter amount"
                      className="form-control"
                    />
                  </div> <br></br>
                  <div className="form-group mb-1">
                    <button
                      type="button"
                      className="btn btn-primary shadow w-100 py-2"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <h5 className="main-heading">Address Information</h5>
                  <div className="underline"></div>
                  <p className="mt-3">
                    B-101 /1, Raheja Plaza, Lal Bahadur Shastri Rd, Hiranandani
                    Gardens, Panchkutir Ganesh Nagar, Ghatkopar West, Mumbai,
                    Maharashtra 400086
                  </p>
                  <p>Email : connect@cloudstrats.com</p>
                  <p>Phone : 022 6977 1818</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
