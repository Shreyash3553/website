import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/logo.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { loginrout } from '../utils/APIRoutes'

function Login() {
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  }

  useEffect(() => {
    if (localStorage.getItem('linky-user')) {
      window.location.href = '/chat'
    }
  }, [])
  const [value, Setvalue] = useState({
    username: '',
    password: '',
  })

  const handleChange = (event) => {
    Setvalue({ ...value, [event.target.name]: event.target.value })
    console.log(Setvalue)
    // console.log(event);
  }

  const handleValidation = () => {
    const { password, username } = value
    if (username.length === '') {
      toast.error('Username is Required', toastOptions)
      return false
    } else if (password.length === '') {
      toast.error('Password is Required', toastOptions)
      return false
    }

    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (handleValidation()) {
      const { password, username } = value

      const { data } = await axios.post(loginrout, {
        username,
        password,
      })
      if (data.status === false) {
        toast.error(data.message, toastOptions)
      }
      if (data.status === true) {
        // toast.success(data.message ,toastOptions)
        await localStorage.setItem('linky-user', JSON.stringify(data.user))
        await console.log(data)
        window.location.href = '/'
      }
    }
  }

  return (
    <>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="Logo" />
            <h1>Linky</h1>
          </div>

          <input
            type="text"
            placeholder=" enter your username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder=" enter your password"
            name="password"
            onChange={(e) => handleChange(e)}
          />

          <button type="submit">Login</button>
          <span>
            {' '}
            Not Registered..? <Link to="/register"> Register</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  )
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
//   background-color: #131324;
background-color: #0A66C2;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    // background-color: #00000076;
    background-color: #03a9f4 ;

    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border: 0.1rem solid  #212121;
  
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #ecd03d;
      outline: none;
    }
  }
  button {
    // background-color: #4e0eff;
    background-color:  #ecd03d;
    #f48fb1
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`

export default Login
