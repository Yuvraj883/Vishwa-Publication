// import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import React, { useState, useEffect } from 'react';
import Books from './components/Books';




function App() {


// Import all images from the 'galleryImages' folder with a filename pattern
// const imageContext = require.context('!file-loader!../public/galleryImages', false, /\.(jpg|jpeg|png)$/);
// const images = imageContext.keys().map((path) => imageContext(path).default || imageContext(path));

const images = [
  '/galleryImages/img1.png',
  '/galleryImages/img2.png',
  '/galleryImages/img3.png'

]

const books = [
  'books/book1.png',
  'books/book2.png',
  'books/book3.png',
  'books/book4.png',
  'books/book5.png',
  'books/book6.png',
  'books/book7.png',
  'books/book8.png',
  'books/book9.png',
  'books/book10.png',
  'books/book11.png',
  'books/book12.png',
  'books/book13.png',
  'books/book14.png'


]

  const [loader, setLoader] = useState(true);
  console.log(images[0]);

 useEffect(()=>{
  setTimeout(()=>{
    <p className='bg-red-500'>Hello Moto</p>
    setLoader(false);
  },2000)
 });

  return (
   <>
  
  {
    !loader && 
    <div>
      <Header></Header>
   <Navbar></Navbar>
   <Carousel images={images}></Carousel>
   <Books images={books}></Books>

    </div>
  }
  {
    loader &&
    <div className=' flex flex-col justify-center items-center h-[100%] text-3xl '>
      <p>Loading...</p>
    </div>
  }
   
   </>
  );
}

export default App;
