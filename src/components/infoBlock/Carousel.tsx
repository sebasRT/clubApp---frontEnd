'use client'

interface CarouselProps {
  cards: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {

  return (
    <div className="flex justify-center shadow-2xl md:px-5">
      <div className="overflow-hidden">
        <div className="flex flex-col transition-transform duration-500 ease-in-out transform lg:flex-row">
          {cards.map((card, index) => {
              return (
                <div key={index} className="w-[16rem] min-[425px]:w-[22rem] md:w-[40rem] p-4">
                  {card}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;