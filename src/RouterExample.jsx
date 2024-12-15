import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const RouterExample = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<div>Home</div>}></Route>
            <Route path="Contact" element = {<div><a href="#">Contact</a></div>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterExample;

