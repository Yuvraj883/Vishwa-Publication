import React from 'react';

const Distributors = () => {
  const distributorsImages = [
    '/brands/brand1.png',
    '/brands/brand2.png',
    '/brands/brand3.png',
    '/brands/brand4.png',
    '/brands/brand5.png',
    '/brands/brand6.png',
    '/brands/brand7.png',
    '/brands/brand8.png',
    '/brands/brand9.png',
    '/brands/brand10.png',

    // Add more image URLs as needed
  ];

  return (
    <div className="relative w-[90%] mx-auto mt-8 bg-library-bg rounded-lg shadow-md overflow-hidden">
      <h2 className="text-3xl font-bold text-white text-center mb-4">Our Distributors</h2>
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
