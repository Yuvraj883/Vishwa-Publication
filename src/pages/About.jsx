
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import CompanyAimSection from '../components/CompanyAimSection';
import FounderSection from '../components/FounderSection';
import Foot from '../components/Foot';


const About = () => {
  return (
    <div>

      <FounderSection
        name="Mr. Vishwa Mohan Singh"
        description="Vishwa Mohan Singh is #1 Amazon Best Seller Author, Book Publishing Coach, educator, and business consultant. He is also the president of EFI, which is a group of entrepreneurs around the globe. His fan following consists mostly of those who lead others, rightfully so, since his passion is to help people reach their ultimate best as entrepreneurs and in their careers. His training sessions are spoken about with respect and awe. Almost all of his training sessions are filled with insights, high energy level, enthusiastic and enthralled participants. Vishwa Mohan Singh has been teaching and training authors and entrepreneurs for twenty years and has been a part of making many successful authors and entrepreneurs and helped many to achieve their goals. He has witnessed many success stories and knows the secrets of being a successful author, which all other best-selling authors have experimented with around the globe."
        imageSrc="/founders/vishwa_mohan_singh.png"
      />
      <FounderSection
        name="Ms. Prem Lata Singh"
        description="Prem Lata Singh is an educator and working in the field of women empowerment. She is also the vice president of EFI, which is a group of entrepreneurs around the globe. Prem Lata Singh has been in teaching and training for many years and has been a part of making many successful authors and entrepreneurs and helped many to achieve their goals. She has witnessed many success stories and knows the secrets of being a successful author, which all other best-selling authors have experimented with around the globe."
        imageSrc="/founders/prem_lata_singh.png"
      />
      <Foot></Foot>
    </div>
  );
};


export default About;
