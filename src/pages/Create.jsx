import React ,{useState ,useEffect}from 'react'
import { Link ,} from 'react-router-dom'
import styled from 'styled-components';
import Logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {registerroute} from '../utils/APIRoutes'

function Create() {

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem('linky-user')) {
     window.location.href ='/chat'
    }
  }, []);

  
  const [ value,Setvalue] = useState ({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  const handleChange = (event) => {
    Setvalue({...value,[event.target.name]: event.target.value})
    console.log(Setvalue);
    // console.log(event);
  };


  const handleValidation = () => {
    const { password, confirmPassword, username, email } = value;
 if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 5) {
      toast.error(
        "Password should be equal or greater than 5 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }  else  if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } 

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
     if ( handleValidation() ){
      const { password,  username, email } = value;

      const {data}= await axios.post(registerroute ,{
        username,email,password
      });
     if(data.status === false){
      toast.error(data.message ,toastOptions)
     }  
     if(data.status === true){
      // toast.success(data.message ,toastOptions)
     await localStorage.setItem('linky-user' ,JSON.stringify(data))
     await console.log(data);
     window.location.href ='/setavatar'
     }
     }

  }

  return (
    <>
      <FormContainer>
        <form  action= "" onSubmit={(event) => handleSubmit(event)} >
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
              type="email"
              placeholder=" enter your email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
              <input
              type="password"
              placeholder=" enter your password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
              <input
              type="password"
              placeholder=" confirm your password"
              name="confirmPassword"
              onChange={(e) => handleChange(e)}
            />
            <button type="submit">Create</button>
            <span> already have an account ?<Link to="/login"> Login</Link></span>
        
        </form>
      </FormContainer>
      <ToastContainer/>
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

export default Create
