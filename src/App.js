import React from "react";
// import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { Routes, Route } from 'react-router-dom';
import SetAvatar from "./components/SetAvatar";
import Chatting from "./pages/Chatting";
import Create from "./pages/Create";
import Login from "./pages/Login";

function App() {
  return (
    <> 
     
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/register' element={<Create />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/setavatar' element={<SetAvatar/>}/>
      <Route path='/chat' element={<Chatting />}/>
      </Routes>
      
    </>
  );
}

export default App;
