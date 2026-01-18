
import React, { useState, useEffect } from 'react';

interface StudentRegistrationProps {
  onNavigateBack: () => void;
}

// Using a type for the timeLeft state for better type safety
type TimeLeft = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

// A smaller unit for the sub-countdown
const SubTimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold tracking-tighter text-white">
          {String(value).padStart(2, '0')}
        </span>
        <span className="text-xs uppercase tracking-widest text-gray-500">{label}</span>
    </div>
);


const StudentRegistration: React.FC<StudentRegistrationProps> = ({ onNavigateBack }) => {
  const calculateTimeLeft = (): TimeLeft => {
    // Set target date to October 7, 2026, 9:00 AM local time
    const difference = +new Date('2026-10-07T09:00:00') - +new Date();
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

  const registrationHasOpened = Object.keys(timeLeft).length === 0;

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center p-4 pt-24">
        <div className="flex justify-center items-center gap-x-3 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
            <p className="text-md font-bold tracking-widest text-gray-500">STUDENT REGISTRATION</p>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {registrationHasOpened ? 'Registration Is Open!' : 'Initializing Protocol...'}
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed mb-12 text-lg">
          {registrationHasOpened 
            ? 'You can now register for zerone 7.0. Click the button below to proceed with your application. We look forward to seeing you!' 
            : 'Registration opens on October 7, 2026. Stand by for connection to the registration server. We look forward to seeing you at zerone 7.0!'
          }
        </p>
        
        {/* Loading Animation & Countdown */}
        {!registrationHasOpened && (
          <div className="w-full max-w-2xl mb-12 flex flex-col items-center">
              
              {/* Loading Bar */}
              <div className="w-full mb-4">
                  <div className="text-sm font-bold tracking-widest text-gray-500 mb-2">CONNECTING TO SERVER</div>
                  <div className="w-full bg-gray-800/50 h-2 rounded-full overflow-hidden">
                      <div className="bg-cyan-400 h-2 animate-pulse w-full"></div>
                  </div>
              </div>
              
              {/* Countdown as sub-element */}
              <div className="flex justify-center items-center gap-4 md:gap-8 mt-4">
                {Object.entries(timeLeft).map(([interval, value]) => (
                    value !== undefined && <SubTimeUnit key={interval} value={value} label={interval} />
                ))}
              </div>
          </div>
        )}

        <button
            onClick={onNavigateBack}
            className="bg-white text-black px-8 py-4 text-md font-bold tracking-wider hover:bg-gray-200 transition-colors flex items-center gap-x-2"
        >
          {registrationHasOpened ? (
            <>
              Proceed to Register
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Go Back
            </>
          )}
        </button>
      </div>
  );
};

export default StudentRegistration;
