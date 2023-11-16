import React, { useState, useEffect } from 'react';

const EminentPersonalities = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  const itemsPerPage = 4;
  const totalSlides = Math.ceil(images.length / itemsPerPage);

  return (
    <div className="relative w-[90%] mx-auto mt-8 bg-black rounded-lg shadow-md overflow-hidden">
      <h2 className="text-3xl font-bold text-white text-center mb-4">Eminent Personalities</h2>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
          width: `${totalSlides * 100}%`,
          height: '70%',
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-1/4 px-1">
            <img
              src={image}
              alt={`Personality ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none z-10"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none z-10"
      >
        &gt;
      </button>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${
              currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default EminentPersonalities;
