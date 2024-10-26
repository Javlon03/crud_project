import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; 
import { images } from '../data'; 

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-black">
      <AiOutlineLeft 
        onClick={prevSlide} 
        className="absolute left-5 text-4xl text-white cursor-pointer z-10"
      />
      <img 
        src={images[currentIndex].url} 
        alt="Slider Image"
        className="max-w-full h-auto mx-auto"
      />
      <AiOutlineRight 
        onClick={nextSlide} 
        className="absolute right-5 text-4xl text-white cursor-pointer z-10"
      />
    </div>
  );
}

export default Home;
