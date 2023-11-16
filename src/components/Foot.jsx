import React from 'react';

const Foot = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white p-4 text-center">
      <p>&copy; {currentYear} Vital Vishwa Publications. All rights reserved.</p>
    </footer>
  );
};

export default Foot;
