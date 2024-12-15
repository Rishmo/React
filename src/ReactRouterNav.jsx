import React from 'react';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

const ReactRouterNav = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="Contact" element={<Contact/>}></Route>
            <Route path="About" element={<About/>}></Route>
            <Route path="Login" element={<div>Login</div>}></Route>
            <Route path="*" element={<div>Error #404</div>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default ReactRouterNav
