
import React from 'react';

interface RegisterProps {
  onNavigate: (view: string) => void;
}

const Register: React.FC<RegisterProps> = ({ onNavigate }) => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center p-4 pt-24">
      <div className="max-w-4xl w-full">
        <div className="flex justify-center items-center gap-x-3 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
            <p className="text-md font-bold tracking-widest text-gray-500">REGISTRATION</p>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Choose Registration Type
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed mb-12 text-lg">
          Register as an individual student to participate in the event. If you have already registered, you can find your assigned team here once they are announced.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Student Registration Card */}
          <div 
            onClick={() => onNavigate('student-registration')}
            className="bg-[#0a192f] p-10 rounded-lg text-left cursor-pointer border-2 border-transparent hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2"
          >
            <h2 className="text-3xl font-bold text-white mb-3">Student Registration</h2>
            <p className="text-gray-400 mb-6">For all first-year students who wish to participate in zerone 7.0. Register here to be assigned to a team.</p>
            <span className="font-bold text-cyan-400 text-lg flex items-center gap-2">
              Register as Student <span aria-hidden="true">→</span>
            </span>
          </div>

          {/* Team Registration Card */}
          <div 
            onClick={() => onNavigate('teams')}
            className="bg-[#0a192f] p-10 rounded-lg text-left cursor-pointer border-2 border-transparent hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2"
          >
            <h2 className="text-3xl font-bold text-white mb-3">Find Your Team</h2>
            <p className="text-gray-400 mb-6">Already registered? Check here after the event begins to see your team assignment and meet your teammates.</p>
            <span className="font-bold text-cyan-400 text-lg flex items-center gap-2">
              View Teams <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>

        <div className="mb-12">
            <p className="text-gray-400">
                Already registered?{' '}
                <a 
                    href="#"
                    onClick={(e) => { e.preventDefault(); onNavigate('login'); }}
                    className="font-bold text-cyan-400 hover:text-cyan-300 transition"
                >
                    Login
                </a>
            </p>
        </div>
        
        <button
            onClick={() => onNavigate('main')}
            className="bg-transparent border border-gray-600 text-white px-8 py-4 text-md font-bold tracking-wider hover:bg-gray-800 transition-colors flex items-center gap-x-2 mx-auto"
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

export default Register;
