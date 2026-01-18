
import React from 'react';

interface LoginProps {
  onNavigateBack: () => void;
}

const Login: React.FC<LoginProps> = ({ onNavigateBack }) => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center p-4 pt-24">
      <div className="max-w-md w-full">
        <div className="flex justify-center items-center gap-x-3 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
          <p className="text-md font-bold tracking-widest text-gray-500">LOGIN</p>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Welcome Back
        </h1>
        
        <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="username" className="block text-sm font-bold tracking-wider text-gray-400 mb-2">USERNAME</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              className="w-full bg-[#0a192f] border border-gray-700 rounded-md p-3 text-white focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
              placeholder="Enter your username"
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="password"className="block text-sm font-bold tracking-wider text-gray-400 mb-2">PASSWORD</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className="w-full bg-[#0a192f] border border-gray-700 rounded-md p-3 text-white focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
          <div className="text-right">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-sm text-gray-400 hover:text-cyan-400 transition">Forgot password?</a>
          </div>
          <div>
            <button 
              type="submit"
              className="w-full bg-white text-black px-8 py-3 text-md font-bold tracking-wider hover:bg-gray-200 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
        
        <div className="mt-8">
          <button
              onClick={onNavigateBack}
              className="bg-transparent border border-gray-600 text-white px-8 py-4 text-md font-bold tracking-wider hover:bg-gray-800 transition-colors flex items-center gap-x-2 mx-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
