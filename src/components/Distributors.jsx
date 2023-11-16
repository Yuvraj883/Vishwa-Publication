import React from 'react';
import library from '../images/library.png'

const Distributors = () => {

  const distributorsImages = [
    '/brands/brand1.jpeg',
    '/brands/brand2.png',
    '/brands/brand3.jpeg',
    '/brands/brand4.png',
    '/brands/brand5.jpeg',
    '/brands/brand6.png',
    '/brands/brand7.jpeg',
    '/brands/brand8.png',
    '/brands/brand9.jpeg',
    '/brands/brand10.png',

    // Add more image URLs as needed
  ];

  return (
    <div className="relative w-[90%] h-[70vh] flex flex-col items-center justify-center mx-auto mt-8 bg-cover bg-center rounded-lg shadow-md overflow-hidden" style={{ backgroundImage: 'url(../images/library.png)' }}>
        <img className='absolute w-screen -z-10 h-screen blur-sm' src={library} alt="library"/>
      <h2 className="text-4xl font-bold text-white text-center mb-4">Our Distributors & Event Partners</h2>
      <div className="flex flex-wrap">
        {distributorsImages.map((image, index) => (
          <div key={index} className="w-1/5 p-2">
            <img
              src={image}
              alt={`Distributor ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Distributors;
