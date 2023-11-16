import React, { useState, useEffect } from "react";
import { IoIosArrowForward ,IoIosArrowBack} from "react-icons/io";


const Carousel = ({ images }) => {
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

  return (
    <div className="relative w-[90%] h-[70%] mx-auto mt-8 p-4 overflow-hidden bg-white rounded-2xl shadow-md">
      <div
        className="flex items-center justify-center transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${images.length}00%`,
          height: "70%",
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className=" object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 ml-1 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none z-10"
      >
       <IoIosArrowBack/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 mr-1 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none z-10"
      >
       <IoIosArrowForward />

      </button>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-gray-800" : "bg-gray-400"
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
