import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Foot from '../components/Foot';

const Gallery = () => {
  // Replace these image URLs with your own
  const imageUrls = [
    '/galleryImages/img2.png',
    '/galleryImages/img3.png',
    '/galleryImages/img4.png',
    '/galleryImages/img5.png',
    '/galleryImages/img6.png',
    '/galleryImages/img7.png',
    '/galleryImages/img8.png',
    '/galleryImages/img9.png',
    '/galleryImages/img10.png',
    '/galleryImages/img11.png',
    '/galleryImages/img12.png',
    '/galleryImages/img13.png',
    '/galleryImages/img14.png',
    '/galleryImages/img15.png',
    '/galleryImages/img16.png',
    '/galleryImages/img17.png',
    '/galleryImages/img18.png',
    '/galleryImages/img19.png',
    '/galleryImages/img20.png',
    '/galleryImages/img21.png',
    '/galleryImages/img22.png',
    '/galleryImages/img23.png',
    '/galleryImages/img24.png',
    '/galleryImages/img25.png',
    '/galleryImages/img26.png',
    '/galleryImages/img27.png',
    '/galleryImages/img28.png',
    '/galleryImages/img29.png',
    '/galleryImages/img30.png',
    '/galleryImages/img100.png',




   
   
  ];

  // Function to chunk the array into rows of three
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  // Chunk the imageUrls into rows of three
  const imageRows = chunkArray(imageUrls, 3);

  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <div className="container w-[80vw] mx-auto mt-8 py-16">
      <h2 className="text-4xl font-bold mb-4">Gallery</h2>
      {imageRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex mb-4">
          {row.map((imageUrl, colIndex) => (
            <div key={colIndex} className="flex-1 pr-4">
              <img src={imageUrl} alt={` ${rowIndex * 3 + colIndex + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      ))}
    </div>
    <Foot></Foot>
    </>
  );
};

export default Gallery;
