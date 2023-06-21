import React from 'react';
import styled from 'styled-components';
import {BiPowerOff} from 'react-icons/bi'

export default function Logout() {
    
    const handleClick =() =>{
        localStorage.clear();
        window.location.href='/login'
    }
  return (
    <Button onClick={handleClick}>
        <BiPowerOff/>
    </Button>
  )
}

const Button =styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:0.5rem;
background-color:#9a86f3;
border-radius:0.5rem;
border:none;
cursor:pointer; 
svg{
    font-size:1.3rem;
    color:#ffcc80;
}
`