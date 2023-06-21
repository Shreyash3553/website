import React from 'react';
import styled from 'styled-components';
import Robot from '..//assets//hiii.gif';

export default function Welcomescreen ({currentuser}) {
 
    // const [username,Setusername]=useState();

    // useEffect(()=>{
    //     getuser()
    // })
    
    // async function getuser(){
    //     Setusername(
    //         await JSON.parse(localStorage.getItem('linky-user')).username
    //     )
    // }
  return (
    <Container>
         <img src={Robot} alt="" />
         <br /><br /><br /> 
      <p>
        Welcome,  <span> {currentuser.username} !</span>
      </p>
      <p>Select chat to Start messaging.</p>
    </Container>
  )
}

const Container =styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #607d8b;
flex-direction: column;
img {
  height: 15rem;
  opacity: 1;
}
span {
  color: #e91e63;

}
p {
    border-right: solid 3px rgba(0,255,0,.75);
    white-space: nowrap;
    overflow: hidden;    
    font-family: 'Source Code Pro', monospace;  
    font-size: 28px;
    color: rgba(255,255,255,.70);
    span{
        font-size: 50px; 
        font-weight: bold;
        // font-family: Copperplate;
    }
  }
  
  /* Animation */
  p {
    animation: animated-text 4s steps(50,end) 1s 1 normal both,
               animated-cursor 900ms steps(50,end) infinite;
  }
  
  /* text animation */
  
  @keyframes animated-text{
    from{width: 0;}
    to{width: 472px;}
  }
  
  /* cursor animations */
  
  @keyframes animated-cursor{
    from{border-right-color: rgba(0,255,0,.75);}
    to{border-right-color: transparent;}
  }
 
` 