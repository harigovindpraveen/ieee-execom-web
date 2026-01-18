
import React from 'react';

interface FindTeamCTAProps {
    onNavigate: (view: string) => void;
}

const FindTeamCTA: React.FC<FindTeamCTAProps> = ({ onNavigate }) => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Meet Your Team?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed mb-12">
          Team assignments are made after registration closes. Click below to check the status and see if your team is ready!
        </p>
        <button
            onClick={() => onNavigate('teams')}
            className="bg-white text-black px-8 py-3 text-sm font-bold tracking-wider hover:bg-gray-200 transition-colors"
        >
            Find Your Team
        </button>
      </div>
    </section>
  );
};

export default FindTeamCTA;
