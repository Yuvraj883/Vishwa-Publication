import React, { useState } from 'react';

const Authors = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState(4);

  const showMoreImages = () => {
    // Increment the number of visible images
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 4);
  };

  const showLessImages = () => {
    // Decrement the number of visible images, but not below 4
    setVisibleImages((prevVisibleImages) => Math.max(prevVisibleImages - 4, 4));
  };

  return (
    <div className="w-[90%] mx-auto mt-8 bg-black rounded-2xl shadow-2xl py-20 p-4">
      <h2 className="text-3xl font-bold text-white text-center mb-14">Featured Authors</h2>
      <div className="flex flex-wrap justify-center">
        {images.slice(0, visibleImages).map((image, index) => (
          <div key={index} className="w-1/4 px-1 mb-4">
            <img
              src={image}
              alt={`Author ${index + 1}`}
              className="w-full h-full  rounded-md object-cover"
            />
          </div>
        ))}
      </div>
      {visibleImages < images.length ? (
        <div className="flex justify-center mt-4">
          <button
            onClick={showMoreImages}
            className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none mr-4"
          >
            Show More
          </button>
          {visibleImages > 4 && (
            <button
              onClick={showLessImages}
              className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none"
            >
              Show Less
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Authors;
