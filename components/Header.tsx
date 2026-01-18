
import React from 'react';

// Reusable component for social media links to avoid repetition
const SocialLinks: React.FC<{ className?: string }> = ({ className }) => (
  <>
    <a href="https://www.instagram.com/ieeesbcekgr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="IEEE SB CEK Instagram" className={`${className} transition-colors duration-300`}>
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.356 2.175 8.736 2.163 12 2.163m0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zM12 18a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
      </svg>
    </a>
    <a href="https://www.youtube.com/@ieeesbcekidangoor" target="_blank" rel="noopener noreferrer" aria-label="IEEE SB CEK YouTube" className={`${className} transition-colors duration-300`}>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.411 0 5.846 0 12s.488 8.589 4.385 8.816c3.6.245 11.626.246 15.23 0C23.512 20.589 24 18.154 24 12s-.488-8.589-4.385-8.816zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    </a>
  </>
);


interface HeaderProps {
  isScrolled: boolean;
  onNavigate: (view: string) => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, onNavigate, currentView }) => {
  const headerBaseClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out";
  const headerInitialClasses = "bg-white text-black h-48 md:h-40";
  const headerScrolledClasses = "bg-black text-white h-16 shadow-lg";

  const isHomePage = currentView === 'main';
  const buttonAction = () => onNavigate(isHomePage ? 'register' : 'main');
  const buttonText = isHomePage ? 'Register' : 'Home';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, view?: string) => {
    e.preventDefault();

    if (view) {
      onNavigate(view);
      return;
    }

    const href = e.currentTarget.getAttribute('href');
    if (!href || href.charAt(0) !== '#') return;

    const element = document.querySelector(href);
    if (element) {
        // h-16 = 4rem = 64px. This is the height of the scrolled header.
        const headerOffset = 64; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <header className={`${headerBaseClasses} ${isScrolled ? headerScrolledClasses : headerInitialClasses}`}>
      {/* Scrolled State */}
      <div className={`transition-opacity duration-500 ease-in-out ${isScrolled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold tracking-wider">zerone 7.0</span>
            <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/ieee.png" alt="IEEE Logo" className="h-6 filter brightness-0 invert" />
            </a>
            <a href="http://ieee.ce-kgr.org" target="_blank" rel="noopener noreferrer">
              <img src="/assets/ieeesb.png" alt="IEEE SB CEK Logo" className="h-8 filter brightness-0 invert" />
            </a>
          </div>
          <div className="flex items-center space-x-6">
            {currentView !== 'events' && (
              <a href="#" onClick={(e) => handleNavClick(e, 'events')} className="text-sm tracking-wider border-b border-dotted border-white pb-1">
                Events
              </a>
            )}
            <a href="#" onClick={(e) => handleNavClick(e, 'teams')} className="text-sm tracking-wider border-b border-dotted border-white pb-1">
              Teams
            </a>
            <a href="#faq" onClick={(e) => handleNavClick(e)} className="text-sm tracking-wider border-b border-dotted border-white pb-1">
              FAQ
            </a>
            {currentView !== 'login' && (
              <a href="#" onClick={(e) => handleNavClick(e, 'login')} className="text-sm tracking-wider border-b border-dotted border-white pb-1">
                Login
              </a>
            )}
            <SocialLinks className="text-white hover:text-gray-300" />
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); buttonAction(); }}
              className="bg-white text-black px-6 py-2 text-sm font-bold tracking-wider"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>

      {/* Initial State */}
      <div className={`absolute top-0 left-0 right-0 transition-opacity duration-500 ease-in-out ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 flex flex-col justify-between h-48 md:h-40">
          <div className="flex justify-between items-start w-full">
            <div className="flex items-end gap-6">
                <h1 className="text-5xl font-bold tracking-tighter">zerone 7.0</h1>
                <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/ieee.png" alt="IEEE Logo" className="h-10 filter grayscale brightness-0" />
                </a>
                <a href="http://ieee.ce-kgr.org" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/ieeesb.png" alt="IEEE SB CEK Logo" className="h-12 filter grayscale brightness-0" />
                </a>
            </div>
            <div className="flex items-center space-x-6 mt-2">
              {currentView !== 'events' && (
                <a href="#" onClick={(e) => handleNavClick(e, 'events')} className="text-sm tracking-wider border-b-2 border-dotted border-black pb-1">
                  Events
                </a>
              )}
              <a href="#" onClick={(e) => handleNavClick(e, 'teams')} className="text-sm tracking-wider border-b-2 border-dotted border-black pb-1">
                Teams
              </a>
              <a href="#faq" onClick={(e) => handleNavClick(e)} className="text-sm tracking-wider border-b-2 border-dotted border-black pb-1">
                FAQ
              </a>
              {currentView !== 'login' && (
                <a href="#" onClick={(e) => handleNavClick(e, 'login')} className="text-sm tracking-wider border-b-2 border-dotted border-black pb-1">
                  Login
                </a>
              )}
              <SocialLinks className="text-black hover:text-gray-600" />
            </div>
          </div>
          <div className="flex justify-between items-end w-full text-xs md:text-sm">
            <div className="flex flex-col gap-y-1">
              <p>9th October 2026</p>
              <p>CGPC Hall, CE Kidangoor</p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); buttonAction(); }}
                className="bg-black text-white px-8 py-3 text-sm font-bold tracking-wider"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
