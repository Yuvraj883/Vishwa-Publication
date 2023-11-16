// Import necessary modules from 'react'
import React from 'react';

// Define the FounderSection component
const FounderSection = ({ name, description, imageSrc }) => {
  return (
    <div className="bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{name}</h2>
        <div className="flex mb-4">
          <img
            src={imageSrc}
            alt={`${name} `}
            className="w-20 h-20 rounded-full object-cover mr-4"
          />
          <p className="text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Export the FounderSection component
export default FounderSection;
