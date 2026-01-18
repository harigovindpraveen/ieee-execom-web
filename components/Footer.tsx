
import React from 'react';

// Reusable social icon component for the footer
const SocialIcon: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-400 hover:text-cyan-400 transform hover:-translate-y-px transition-all duration-300"
  >
    {children}
  </a>
);

interface FooterProps {
  onNavigate: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, view?: string) => {
    e.preventDefault();

    if (view) {
      onNavigate(view);
      return;
    }

    const href = e.currentTarget.getAttribute('href');

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    if (!href || href.charAt(0) !== '#') return;

    const element = document.querySelector(href);
    if (element) {
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
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-12 gap-y-12 md:gap-8">
          
          <div className="md:col-span-5 lg:col-span-4">
            <a href="#" onClick={(e) => handleNavClick(e)} className="inline-block text-3xl font-bold text-white mb-4 transition-colors duration-300 hover:text-cyan-400">
              zerone 7.0
            </a>
            <p className="text-sm text-gray-400 max-w-xs">
              The ultimate ice-breaker festival for first-year students, hosted by IEEE SB CEK.
            </p>
            <div className="flex items-center gap-4 mt-6">
                <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/ieee.png" alt="IEEE Logo" className="h-6 filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                </a>
                <a href="http://ieee.ce-kgr.org" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/ieeesb.png" alt="IEEE SB CEK Logo" className="h-8 filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                </a>
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-white tracking-wider mb-4">EVENT</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" onClick={(e) => handleNavClick(e, 'events')} className="hover:text-cyan-400 hover:-translate-y-px transition-all duration-300 block">Schedule</a></li>
                <li><a href="#" onClick={(e) => handleNavClick(e, 'teams')} className="hover:text-cyan-400 hover:-translate-y-px transition-all duration-300 block">Teams</a></li>
                <li><a href="#faq" onClick={(e) => handleNavClick(e)} className="hover:text-cyan-400 hover:-translate-y-px transition-all duration-300 block">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white tracking-wider mb-4">ABOUT</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="http://ieee.ce-kgr.org" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 hover:-translate-y-px transition-all duration-300 block">IEEE SB CEK</a></li>
                <li><a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 hover:-translate-y-px transition-all duration-300 block">IEEE Global</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white tracking-wider mb-4">CONTACT</h4>
               <ul className="space-y-3 text-sm">
                <li><a href="mailto:ieeesb@ce-kgr.org" className="hover:text-cyan-400 hover:-translate-y-px transition-all duration-300 block">Email Us</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="cursor-default">Contact Page</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 text-center sm:text-left mb-4 sm:mb-0">
            &copy; 2026 zerone 7.0. All rights reserved. | Harigovind P S4 CSE
          </p>
          <div className="flex space-x-6">
            <SocialIcon href="https://www.instagram.com/ieeesbcekgr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" label="IEEE SB CEK Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.356 2.175 8.736 2.163 12 2.163m0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zM12 18a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" /></svg>
            </SocialIcon>
            <SocialIcon href="https://www.youtube.com/@ieeesbcekidangoor" label="IEEE SB CEK YouTube">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.411 0 5.846 0 12s.488 8.589 4.385 8.816c3.6.245 11.626.246 15.23 0C23.512 20.589 24 18.154 24 12s-.488-8.589-4.385-8.816zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
