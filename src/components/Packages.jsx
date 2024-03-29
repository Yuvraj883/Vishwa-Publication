import React from 'react';
// import BestSelling from './BestSelling';

const Packages = () => {
  const packageImages = [
    '/packages/p3.png',
    '/packages/p2.png',
    '/packages/p4.png',
    '/packages/p1.png',
    '/packages/p5.png',
  ];

  return (
    <div className="relative w-[90%] mx-auto mt-8 bg-gray-100 p-8 rounded-2xl shadow-md">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Our Packages</h2>
      <div className="flex flex-wrap">
        {packageImages.map((image, index) => (
          <div key={index} className="w-1/5 p-2">
            <img
              src={image}
              alt={`Package ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
          <a href="https://wa.me/9999762706">Know More</a>
        </button>
      </div>
    </div>
  );
};

export default Packages;
