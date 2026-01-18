
import React, { useState, useEffect } from 'react';

// Using a type for the timeLeft state for better type safety
type TimeLeft = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    // Set target date to October 9, 2026, 9:00 AM local time
    const difference = +new Date('2026-10-09T09:00:00') - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    const value = timeLeft[interval as keyof TimeLeft];
    // Ensure value is not undefined before rendering
    if (value === undefined) return null;

    return (
      <div key={interval} className="text-center">
        <span className="text-4xl md:text-5xl font-bold tracking-tighter text-black">
          {String(value).padStart(2, '0')}
        </span>
        <span className="block text-xs uppercase tracking-widest text-gray-500">{interval}</span>
      </div>
    );
  });

  return (
    <div className="bg-white py-8 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm font-bold tracking-widest text-gray-500 mb-4">EVENT STARTS IN</h3>
        <div className="flex justify-center items-center gap-4 md:gap-8">
          {timerComponents.length ? timerComponents : <span className="text-2xl font-bold text-black">The event has begun!</span>}
        </div>
      </div>
    </div>
  );
};

export default Countdown;