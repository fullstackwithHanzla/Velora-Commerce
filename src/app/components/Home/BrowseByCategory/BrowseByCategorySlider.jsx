import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useVisibleCount } from "../../../../shared/hooks/useVisibleCount";

const BrowseByCategorySlider = () => {
  const slides = [
    { id: 1, image: "/src/assets/BrowseByCategoryProducts/laptop.webp", categoryName: "Laptop & PC" },
    { id: 2, image: "/src/assets/BrowseByCategoryProducts/watch.webp", categoryName: "Watches" },
    { id: 3, image: "/src/assets/BrowseByCategoryProducts/mobile.webp", categoryName: "Mobile & Tablets" },
    { id: 4, image: "/src/assets/BrowseByCategoryProducts/health.webp", categoryName: "Health & Sports" },
    { id: 5, image: "/src/assets/BrowseByCategoryProducts/home-Appliances.webp", categoryName: "Home Appliances" },
    { id: 6, image: "/src/assets/BrowseByCategoryProducts/games.webp", categoryName: "Games & Videos" },
    { id: 7, image: "/src/assets/BrowseByCategoryProducts/television.webp", categoryName: "Television" },
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
        <h1 className="text-md md:text-3xl font-medium">Browse By Category</h1>
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
              key={s.id}
              className="shrink-0  flex flex-col items-center gap-5 p-5"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="h-25 w-25 md:h-30 md:w-30 lg:h-40 lg:w-40  flex justify-center items-center rounded-full bg-gray-500/20">
                <img src={s.image} alt={s.categoryName} className="w-10 md:w-15 lg:w-20"  />
              </div>
              <p className="text-[10px] md:text-[14px] lg:text-[15px]">{s.categoryName}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseByCategorySlider;