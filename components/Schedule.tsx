
import React from 'react';

const scheduleData = [
  { time: '09:15 AM', title: 'Welcome & Ice Breaker' },
  { time: '10:00 AM', title: 'quiz_run.exe' },
  { time: '11:00 AM', title: 'troll.ai' },
  { time: '12:00 PM', title: 'Lunch Break' },
  { time: '01:00 PM', title: 'Pitch/Sell the Product' },
  { time: '02:00 PM', title: 'Treasure Hunt' },
  { time: '03:30 PM', title: 'Conclusion & Awards' },
  { time: '04:00 PM', title: 'Event Ends' },
];

const Schedule: React.FC = () => {
  return (
    <section id="events" className="bg-black text-white py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tighter">Event Schedule</h2>
        
        <div className="relative">
          {/* Vertical Timeline */}
          <div className="absolute top-2 h-full w-0.5 bg-gray-700 left-4 md:left-1/2 md:-translate-x-1/2"></div>
          
          {scheduleData.map((item, index) => (
            <div key={index} className="relative pl-12 md:pl-0 mb-12 last:mb-0">
              {/* Dot */}
              <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-cyan-400 border-2 border-black z-10 md:left-1/2 md:-translate-x-1/2"></div>
              
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-10' : 'md:mr-auto md:pr-10 md:text-right'}`}>
                <div className="p-6 bg-[#0a192f] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                  <p className="text-cyan-400 font-bold">{item.time}</p>
                  <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;