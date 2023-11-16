import React, { useState, useEffect } from 'react';
import { IoIosArrowForward ,IoIosArrowBack} from "react-icons/io";

const Books = ({ images }) => {
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
    <div className="relative w-[90%] mx-auto mt-8 overflow-hidden bg-black rounded-2xl py-20 shadow-md p-4">
      <h2 className="text-3xl font-bold text-white text-center mb-10">Our Published Books</h2>
      <h3 className="text-lg text-gray-300 text-center mb-4">Available on Amazon</h3>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentSlide % totalSlides) * (100 / totalSlides)}%)`,
          width: `${totalSlides * 100}%`,
          height: '70%',
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-1/4 px-1">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-[500px] h-[300px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 ml-1 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none z-10"
      >
    
       < IoIosArrowBack/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 mr-1 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none z-10"
      >
     <IoIosArrowForward/>
      </button>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index * itemsPerPage)}
            className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${
              (currentSlide % totalSlides) === index ? 'bg-gray-800' : 'bg-gray-400'
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Books;
