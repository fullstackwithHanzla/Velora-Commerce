import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useVisibleCount } from "../../../../shared/hooks/useVisibleCount";

const BrowseByCategorySlider = () => {
  const slides = [
    { id: 1, image: "/assets/BrowseByCategoryProducts/laptop.webp", categoryName: "Laptop & PC" },
    { id: 2, image: "/assets/BrowseByCategoryProducts/watch.webp", categoryName: "Watches" },
    { id: 3, image: "/assets/BrowseByCategoryProducts/mobile.webp", categoryName: "Mobile and Tablets" },
    { id: 4, image: "/assets/BrowseByCategoryProducts/health.webp", categoryName: "Sports and Health" },
    { id: 5, image: "/assets/BrowseByCategoryProducts/home-Appliances.webp", categoryName: "Home Appliances" },
    { id: 6, image: "/assets/BrowseByCategoryProducts/games.webp", categoryName: "Game and Videos and Televisions" },
    
  ];

  const visibleCount = useVisibleCount();
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(slides.length - visibleCount, 0);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [visibleCount, maxIndex]);

  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="w-full">
      {/* Header */}
      <div className="w-[90%] mx-auto my-10 flex justify-between items-center">
        <h1 className="text-md md:text-2xl font-medium">Browse By Category</h1>
        <div className="flex gap-1">
          <button onClick={prev} className='border  border-gray-600/30 rounded-md p-2 md:p-3 hover:bg-(--accent-secondary) hover:text-white'>
                 <FaAngleLeft className='size-3 md:size-5'/>
                </button>
            <button onClick={next} className='border border-gray-600/30  rounded-md p-2 md:p-3 hover:bg-(--accent-secondary) hover:text-white'>
                     <FaAngleRight className='size-3 md:size-5'/>
             </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden ">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleCount)}%)`,
          }}
        >
          {slides.map((s) => (
            <Link
              to={`category/${s.categoryName.replaceAll(" ","-")}`}
              key={s.id}
              className="shrink-0  flex flex-col items-center gap-5 p-5 hover:text-(--accent-secondary)"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="h-25 w-25 md:h-30 md:w-30 lg:h-40 lg:w-40  flex justify-center items-center rounded-full bg-[#F6F7FB]">
                <img src={s.image} alt={s.categoryName} className="w-10 md:w-15 lg:w-20"  />
              </div>
              <p className="text-[10px] md:text-[14px] lg:text-[15px]">{s.categoryName}</p>
            </Link>
          ))}
        </div>
      </div>
      <hr className="text-gray-600/20 mt-5"/>
    </div>
  );
};

export default BrowseByCategorySlider;