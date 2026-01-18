import React from 'react';

// FIX: Use React.ReactNode instead of JSX.Element to resolve the "Cannot find namespace 'JSX'" error.
const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({ icon, value, label }) => (
  <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg text-center transition-transform hover:scale-105 duration-300">
    <div className="flex justify-center items-center mb-4 h-12">
      {icon}
    </div>
    <p className="text-5xl font-bold text-blue-500">{value}</p>
    <p className="text-gray-400 mt-2">{label}</p>
  </div>
);

const AboutIEEE: React.FC = () => {
  return (
    <section className="bg-black text-gray-300 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <span className="inline-block bg-gray-800 bg-opacity-50 text-blue-500 text-xs font-bold px-3 py-1 rounded-full mb-4">
              Advancing Technology for Humanity
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              COLLEGE OF ENGINEERING<br />KIDANGOOR
            </h2>
            <p className="text-3xl text-blue-500 my-4 font-light tracking-wider">| IEEE SB CE KGR</p>
            <div className="w-24 h-1 bg-blue-500 mb-6 mx-auto md:mx-0"></div>
            <p className="font-bold text-lg text-white mb-2">OUR MISSION</p>
            <p className="text-lg mb-4">
              Empowering engineering students through technical innovation and professional development.
            </p>
            <p className="text-gray-400">
              Join us in building technology for a better tomorrow through collaboration, innovation, and excellence in engineering practices.
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <a href="https://www.instagram.com/ieeesbcekgr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Visit IEEE SB CEK on Instagram" className="w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-black hover:border-blue-500 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.356 2.175 8.736 2.163 12 2.163m0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zM12 18a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
              <a 
                href="http://ieee.ce-kgr.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 text-black font-bold py-3 px-8 rounded-md hover:bg-blue-400 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                JOIN IEEE <span aria-hidden="true">→</span>
              </a>
              <a 
                href="http://ieee.ce-kgr.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-gray-600 text-white font-bold py-3 px-8 rounded-md hover:bg-gray-800 hover:border-gray-500 transition-colors duration-300"
              >
                EXPLORE EVENTS
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 w-full mt-10 md:mt-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="IEEE Student Branch members collaborating" 
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white text-xs px-3 py-1 rounded-md">
                Est. 2010
              </div>
            </div>
          </div>
        </div>

        {/* Impact in Numbers Section */}
        <div className="mt-24 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">Our Impact in Numbers</h3>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <StatCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
              value="100+"
              label="Members"
            />
            <StatCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
              value="17+"
              label="Events"
            />
            <StatCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>}
              value="2+"
              label="Awards"
            />
            <StatCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
              value="20+"
              label="Years"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIEEE;