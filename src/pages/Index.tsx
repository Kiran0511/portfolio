
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <div className="bg-[#0D1117] text-[#C9D1D9] min-h-screen overflow-x-hidden">
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </motion.div>
      <ScrollToTop />
    </div>
  );
};

export default Index;
