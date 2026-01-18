
import React, { useEffect, useRef, useState } from 'react';

interface EventsProps {
  onNavigateBack: () => void;
}

const eventData = [
  { 
    title: 'quiz_run.exe',
    description: 'A fast-paced, high-energy quiz covering tech, trivia, and pop culture. Teams will battle it out to prove their knowledge and quick thinking.',
    poster: '/assets/1.png',
    details: {
      duration: '45 Minutes',
      rules: 'Team-based event. No mobile phones. Fastest finger first.',
      scoring: '10 points for a correct answer, -5 for a wrong one.'
    }
  },
  { 
    title: 'troll.ai',
    description: 'Unleash your creativity in this meme-making competition. Master the art of prompt engineering to generate the funniest and most original AI-powered trolls to win the crowd and the points.',
    poster: '/assets/2.png',
    details: {
      duration: '60 Minutes',
      rules: 'Team-based event. Prompts will be provided. Originality is key.',
      scoring: 'Judged on humor, creativity, and relevance to the prompt.'
    }
  },
  { 
    title: 'Pitch/Sell the Product',
    description: 'Step into the shoes of an entrepreneur. Teams will be given a mystery product and must create a compelling pitch to sell it to our panel of judges.',
    poster: '/assets/3.png',
    details: {
      duration: '15 Minutes per team',
      rules: 'Product revealed on the spot. 5 minutes for prep, 10 for presentation.',
      scoring: 'Based on presentation clarity, creativity, and sales strategy.'
    }
  },
  { 
    title: 'Treasure Hunt',
    description: 'A campus-wide scavenger hunt that will test your problem-solving skills and teamwork. Follow the clues, crack the codes, and race to the finish line.',
    poster: '/assets/4.png',
    details: {
      duration: '90 Minutes',
      rules: 'Team-based. All clues must be solved in order. First to the final treasure wins.',
      scoring: 'Primary points for winning. Bonus points for solving optional side-puzzles.'
    }
  },
];

const EventCard: React.FC<{ title: string; description: string; poster: string; details: any; index: number }> = ({ title, description, poster, details, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    cardRef.current && observer.unobserve(cardRef.current);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    const isReversed = index % 2 !== 0;

    return (
        <div 
            ref={cardRef}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-500 ease-in-out opacity-0 translate-y-10 hover:scale-[1.02]"
        >
            {/* Image Section */}
            <div className={`w-full md:w-5/12 group overflow-hidden rounded-lg ${isReversed ? 'md:order-2' : ''}`}>
                <img 
                    src={poster} 
                    alt={`${title} poster`} 
                    className="w-full h-auto object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110" 
                />
            </div>
            {/* Text Section */}
            <div className={`w-full md:w-7/12 ${isReversed ? 'md:order-1 md:text-right' : 'md:text-left'}`}>
                <p className="text-sm font-bold tracking-widest text-gray-500 mb-2">EVENT 0{index + 1}</p>
                <h3 className="text-4xl font-bold text-white mb-4">{title}</h3>
                <div className={`w-24 h-1 bg-cyan-400 mb-6 ${isReversed ? 'ml-auto' : ''}`}></div>
                <p className="text-gray-400 leading-relaxed">{description}</p>
                
                {/* Details Toggle Button */}
                <button
                    onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                    aria-expanded={isDetailsOpen}
                    className={`mt-6 text-cyan-400 font-semibold flex items-center gap-2 group transition-all duration-300 ${isReversed ? 'ml-auto' : ''}`}
                >
                    {isDetailsOpen ? 'Hide Details' : 'View Details'}
                    <svg
                        xmlns="http://www.w.org/2000/svg"
                        className={`w-4 h-4 transition-transform duration-300 ${isDetailsOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                {/* Collapsible Details Section */}
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isDetailsOpen ? 'max-h-96 mt-4' : 'max-h-0'
                    }`}
                >
                    <div className="border-t border-gray-800 pt-4 space-y-3 text-sm text-gray-400">
                        <p><strong className="text-gray-200 font-semibold">Duration:</strong> {details.duration}</p>
                        <p><strong className="text-gray-200 font-semibold">Rules:</strong> {details.rules}</p>
                        <p><strong className="text-gray-200 font-semibold">Scoring:</strong> {details.scoring}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Events: React.FC<EventsProps> = ({ onNavigateBack }) => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-4 pt-24">
        <div className="text-center">
            <div className="flex justify-center items-center gap-x-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
                <p className="text-md font-bold tracking-widest text-gray-500">THE EVENTS</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                What's Happening at Zerone 7.0
            </h1>
            <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed mb-24 text-lg">
                Get ready for a day packed with excitement, challenges, and fun. Here's a glimpse of the events we have lined up for you. Compete, collaborate, and create unforgettable memories.
            </p>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-24">
            {eventData.map((event, index) => (
                <EventCard key={event.title} {...event} index={index} />
            ))}
        </div>

        <div className="mt-24">
            <button
                onClick={onNavigateBack}
                className="bg-transparent border border-gray-600 text-white px-8 py-4 text-md font-bold tracking-wider hover:bg-gray-800 transition-colors flex items-center gap-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Go Back
            </button>
        </div>
    </div>
  );
};

export default Events;
