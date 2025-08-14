
import React, { useState, useEffect } from 'react';
import { useDownloadThankYou } from '../hooks/use-download-thankyou';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const showThankYou = useDownloadThankYou();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];


  // No longer needed: handleDownloadResume

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D1117]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="text-2xl font-bold text-[#58A6FF]"
            whileHover={{ scale: 1.05 }}
          >
            KIRAN M
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-[#C9D1D9] hover:text-[#58A6FF] transition-colors duration-300 relative"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58A6FF]"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Download Resume Button */}
          <a
            href="/kiran_resume.pdf"
            download
            className="hidden md:flex items-center space-x-2 bg-[#58A6FF] text-white px-4 py-2 rounded-lg hover:bg-[#1F6FEB] transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            onClick={showThankYou}
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-[#C9D1D9]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D1117]/95 backdrop-blur-md border-t border-[#58A6FF]/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-[#C9D1D9] hover:text-[#58A6FF] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/kiran_resume.pdf"
                download
                className="flex items-center space-x-2 bg-[#58A6FF] text-white px-3 py-2 rounded-lg hover:bg-[#1F6FEB] transition-colors duration-300 w-full mt-2"
                target="_blank"
                rel="noopener noreferrer"
                onClick={showThankYou}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
