
import React from 'react';

interface RegisterCTAProps {
  onNavigate: (view: string) => void;
}

const RegisterCTA: React.FC<RegisterCTAProps> = ({ onNavigate }) => {
  return (
    <div className="py-24 md:py-32 text-center">
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); onNavigate('register'); }}
        className="text-5xl md:text-7xl font-bold tracking-tighter relative inline-block group"
        aria-label="Register for zerone 7.0"
      >
        <div className="inline-flex items-center px-8 py-4">
          {/* Rolling Text Animation */}
          <span className="relative inline-block overflow-hidden h-[1.2em]">
            <span className="inline-block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
              Register Now
            </span>
            <span className="absolute left-0 inline-block transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
              Register Now
            </span>
          </span>
          {/* Arrow Animation */}
          <span 
            className="ml-4 opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
            aria-hidden="true"
          >
            →
          </span>
        </div>
        {/* Underline Animation */}
        <span className="absolute bottom-2 left-0 w-0 h-1 bg-current transition-all duration-500 group-hover:w-full"></span>
      </a>
    </div>
  );
};

export default RegisterCTA;
