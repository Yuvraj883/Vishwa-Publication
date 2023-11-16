import React from 'react';
// import { Routes } from 'react-router-dom';
import Routers from './router';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Foot from './components/Foot';
import Header from './components/Header';


const App = ()=>{
  
  return(
    <>
    <Header></Header>
    <Navbar></Navbar>
      <Outlet/>
      <Routers/>
      <Foot></Foot>
    </>
  )
}
export default App; 