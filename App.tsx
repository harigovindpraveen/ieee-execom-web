
// FIX: Import useState, useRef, and useEffect from React.
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RegisterCTA from './components/RegisterCTA';
import ImageGallery from './components/ImageGallery';
import AboutIEEE from './components/AboutIEEE';
import Schedule from './components/Schedule';
import FindTeamCTA from './components/Content';
import Teams from './components/Teams';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Register from './components/Register';
import StudentRegistration from './components/StudentRegistration';
import ScrollToTopButton from './components/ScrollToTopButton';
import Login from './components/Login';
import Events from './components/Events';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [view, setView] = useState('main');
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
      setShowScrollButton(scrollY > 300);

      if (heroRef.current) {
        // Switch to dark mode when the bottom of the hero section scrolls above the top of the viewport
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setIsDarkMode(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateTo = (targetView: string) => {
    setView(targetView);
    window.scrollTo(0, 0); // Scroll to top on view change
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (view === 'teams') {
    return (
      <>
        <Teams onNavigateBack={() => navigateTo('main')} />
        {showScrollButton && <ScrollToTopButton onClick={scrollToTop} />}
      </>
    );
  }
  
  if (view === 'register') {
    return (
      <div className="bg-black">
        <Header isScrolled={true} onNavigate={navigateTo} currentView={view} />
        <Register onNavigate={navigateTo} />
        {showScrollButton && <ScrollToTopButton onClick={scrollToTop} />}
      </div>
    );
  }
  
  if (view === 'student-registration') {
    return (
      <div className="bg-black">
        <Header isScrolled={true} onNavigate={navigateTo} currentView={view} />
        <StudentRegistration onNavigateBack={() => navigateTo('register')} />
        {showScrollButton && <ScrollToTopButton onClick={scrollToTop} />}
      </div>
    );
  }

  if (view === 'login') {
    return (
      <div className="bg-black">
        <Header isScrolled={true} onNavigate={navigateTo} currentView={view} />
        <Login onNavigateBack={() => navigateTo('register')} />
        {showScrollButton && <ScrollToTopButton onClick={scrollToTop} />}
      </div>
    );
  }

  if (view === 'events') {
    return (
      <div className="bg-black">
        <Header isScrolled={true} onNavigate={navigateTo} currentView={view} />
        <Events onNavigateBack={() => navigateTo('main')} />
        {showScrollButton && <ScrollToTopButton onClick={scrollToTop} />}
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-700 ease-in-out ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header isScrolled={isScrolled} onNavigate={navigateTo} currentView="main" />
      <main>
        <div ref={heroRef}>
          <Hero />
        </div>
        <RegisterCTA onNavigate={navigateTo} />
        <ImageGallery isDarkMode={isDarkMode} />
        <AboutIEEE />
        <Schedule />
        <FindTeamCTA onNavigate={navigateTo} />
        <FAQ />
      </main>
      <Footer onNavigate={navigateTo} />
      {showScrollButton && <ScrollToTopButton onClick={scrollToTop} />}
    </div>
  );
};

export default App;
