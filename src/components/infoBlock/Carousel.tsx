'use client'

import { useState } from 'react';

interface CarouselProps {
  cards: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.ceil(cards.length / 2) - 1;

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex justify-between shadow-2xl md:px-5">
      <button className="text-gray-600 md:mr-4 text-5xl" onClick={goToPrevSlide}>
        {'<'}
      </button>
      <div className="overflow-hidden">
        <div className="flex flex-col transition-transform duration-500 ease-in-out transform lg:flex-row">
          {cards.map((card, index) => {
            if (index >= currentIndex * 2 && index < (currentIndex + 1) * 2) {
              return (
                <div key={index} className=" md:w-[40rem] p-4">
                  {card}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <button className="text-gray-600 md:ml-4 text-5xl" onClick={goToNextSlide}>
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;