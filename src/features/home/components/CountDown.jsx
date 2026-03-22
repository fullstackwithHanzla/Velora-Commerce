import React, { memo, useEffect, useState } from "react";

const CountDown = memo(({ targetDate }) => {
  const targetTimeStamp =
    typeof targetDate === "number"
      ? targetDate
      : new Date(targetDate).getTime();

  const getCountDownTarget = () => {
    const saved = localStorage.getItem("countDownTarget");
    if (saved && !isNaN(Number(saved))) {
      return Number(saved);
    }
    localStorage.setItem("countDownTarget", targetTimeStamp);
    return targetTimeStamp;
  };

  const [countDownTarget] = useState(getCountDownTarget);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateCountDown = () => {
      const now = Date.now();
      const difference = countDownTarget - now;

      if (difference <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        localStorage.removeItem("countDownTarget");
        clearInterval(intervalId);
        return;
      }

      const days = String(
        Math.floor(difference / (1000 * 60 * 60 * 24)),
      ).padStart(2, "0");
      const hours = String(
        Math.floor((difference / (1000 * 60 * 60)) % 24),
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((difference / (1000 * 60)) % 60),
      ).padStart(2, "0");
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
        2,
        "0",
      );

      setTimeLeft({ days, hours, minutes, seconds });
    };
    updateCountDown();
    const intervalId = setInterval(updateCountDown, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countDownTarget]);

  return (
    <div className="flex items-center justify-center gap-3">
      {Object.values(timeLeft).map((value, index) => (
        <div
          key={index}
          className="px-3 py-1 border border-gray-600/30 bg-white rounded-lg"
        >
          <h3 className="font-medium text-lg md:text-2xl">{value}</h3>
        </div>
      ))}
    </div>
  );
});

export default CountDown;