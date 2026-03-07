import React from "react";
import { FaStar } from "react-icons/fa6";

const QuickViewStars = ({ rating }) => {

  const stars = [1,2,3,4,5]

  return (
    <div className="flex items-center px-1 gap-1">
      {stars.map((star) => {

        const fill = Math.min(Math.max(rating - star + 1, 0), 1);
        const percentage = fill * 100;

        return (
          <div key={star} className="relative w-3 h-3">

            {/* gray base */}
            <FaStar className="absolute inset-0 text-gray-300 w-full h-full" />

            {/* gold fill */}
            <FaStar
              className="absolute inset-0 text-yellow-400 w-full h-full"
              style={{
                clipPath: `inset(0 ${100 - percentage}% 0 0)`
              }}
            />

          </div>
        );

      })}
    </div>
  );
};

export default QuickViewStars;