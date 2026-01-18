
import React from 'react';

interface ScrollToTopButtonProps {
  onClick: () => void;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 bg-cyan-400 text-black p-3 rounded-full shadow-lg hover:bg-cyan-300 transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
