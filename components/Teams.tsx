
import React from 'react';

interface TeamsProps {
  onNavigateBack: () => void;
}

const Teams: React.FC<TeamsProps> = ({ onNavigateBack }) => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center p-4">
        <div className="flex justify-center items-center gap-x-3 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
            <p className="text-md font-bold tracking-widest text-gray-500">TEAMS</p>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Team Assignments Pending
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed mb-12 text-lg">
          Team distribution will begin only after individual registrations are completed and the event starts. Once you've registered, check back here after the event kicks off to find your team!
        </p>
        <button
            onClick={onNavigateBack}
            className="bg-white text-black px-8 py-4 text-md font-bold tracking-wider hover:bg-gray-200 transition-colors flex items-center gap-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Go Back
        </button>
      </div>
  );
};

export default Teams;
