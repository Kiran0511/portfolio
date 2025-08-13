import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  // Coding-Themed Background - Optimized for About Section
  // --- Begin About Background ---
  const aboutBackground = (
    <div className="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
      {/* Matrix Code Rain - Reduced for About section */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 text-[#58A6FF]/60 text-xs font-mono leading-8"
            style={{ left: `${20 + i * 25}%` }}
            animate={{ y: [-50, typeof window !== 'undefined' ? window.innerHeight + 50 : 500] }}
            transition={{ duration: 18 + Math.random() * 6, repeat: Infinity, ease: "linear", delay: Math.random() * 12 }}
          >
            {["const", "function", "return", "class", "import", "export", "=>", "async", "if", "else", "for", "while", "{}", "[]", "()", "&&", "||", "===", "await", "try", "catch", "useState", "useEffect", "public", "static", "void", "System.out.println()", "new", "extends", "implements", "this", "super", "String", "int", "boolean", "private", "protected", "throws", "interface", "package", "import java.util.*;"].map((code, index) => code + " ")}
          </motion.div>
        ))}
      </div>
      {/* Floating Code Snippets - About-themed */}
      <div className="absolute inset-0">
        {[
          "const skills = ['React', 'Node.js'];",
          "function learn() { return growth; }",
          "const experience = 'Growing';",
          "while(passionate) { code++; }",
          "const goal = 'Excellence';"
        ].map((snippet, i) => (
          <motion.div
            key={i}
            className="absolute text-[#F778BA]/50 text-xs font-mono bg-[#0D1117]/80 px-2 py-1 rounded border border-[#F778BA]/30"
            style={{ left: `${Math.random() * 70}%`, top: `${Math.random() * 70}%` }}
            animate={{ x: [0, 20, -15, 0], y: [0, -12, 8, 0], opacity: [0.4, 0.8, 0.5, 0.6] }}
            transition={{ duration: 20 + Math.random() * 8, repeat: Infinity, ease: "easeInOut", delay: i * 4 }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>
      {/* Binary Rain - Simplified */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#58A6FF]/35 text-xs font-mono"
            style={{ left: `${10 + i * 15}%`, transform: `rotate(${Math.random() * 10 - 5}deg)` }}
            animate={{ y: [-60, typeof window !== 'undefined' ? window.innerHeight + 60 : 500] }}
            transition={{ duration: 25 + Math.random() * 10, repeat: Infinity, ease: "linear", delay: Math.random() * 20 }}
          >
            {Array.from({ length: 8 }, () => Math.random() > 0.5 ? '1' : '0').join(' ')}
          </motion.div>
        ))}
      </div>
      {/* Programming Symbols - About themed */}
      <div className="absolute inset-0">
        {["{ }", "< >", "=>", "&&", "||", "++"].map((symbol, i) => (
          <span key={i} className="absolute text-[#F778BA]/40 text-lg font-mono" style={{ left: `${10 + i * 15}%`, top: `${10 + i * 15}%` }}>{symbol}</span>
        ))}
      </div>

      {/* Code Editor Window - Experience themed (background, not overlapping headings) */}
      <motion.div
        className="absolute top-10 right-5 bg-[#0D1117]/90 border border-[#F778BA]/40 rounded-lg p-2 font-mono text-xs max-w-xs z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0, 0.8, 0.8, 0], 
          scale: [0.8, 1, 1, 0.8]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatDelay: 10,
        }}
        style={{ pointerEvents: 'none' }}
      >
        {/* <div className="space-y-1">
          <div><span className="text-[#F778BA]">const</span> <span className="text-[#58A6FF]">Experience</span> = &#123;</div>
          <div className="ml-2"><span className="text-[#F778BA]">2023</span> <span className="text-green-400">['WayToWebSoft']</span>,</div>
          <div className="ml-2"><span className="text-[#F778BA]">2024</span> <span className="text-green-400">['Techciti Software Pvt Ltd']</span>,</div>
          <div className="ml-2"><span className="text-[#F778BA]">2025</span> <span className="text-green-400">['NextGenAI']</span></div>
          <div>&#125;;</div>
        </div> */}
      </motion.div>

      {/* Subtle Holographic Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: `radial-gradient(circle at 30% 40%, rgba(88, 166, 255, 0.04) 0%, transparent 60%),radial-gradient(circle at 70% 60%, rgba(247, 120, 186, 0.04) 0%, transparent 60%)` }} />
    </div>
  );
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "NextGenAI Labs",
      location: "Bengaluru",
      period: "July 7, 2025 – Present",
      description: [
        "Implemented secure user authentication using Supabase Auth with email/password and JWT session handling",
        "Added role-based access control (RBAC) and protected API routes with real-time permission enforcement",
        "Integrated OpenAI and AssemblyAI APIs to enable document and video summarization features",
        "Implemented secure backend logic in Node.js for real-time processing and AI response handling",
        "Connected Supabase with Node.js backend for authentication, storage, and PostgreSQL data access",
        "Designed secure policies using Supabase RLS for real-time access control across multiple user roles"
      ],
      technologies: ["Node.js", "Supabase", "OpenAI", "AssemblyAI", "JWT", "PostgreSQL"],
      color: "#58A6FF"
    },
    {
      title: "Software Developer Intern",
      company: "Techciti Software Pvt Ltd",
      location: "Bengaluru",
      period: "Nov 2024 – Jan 2025",
      description: [
        "Java backend development for secure online banking app",
        "Core modules: account management, authentication, transaction processing using Java, Spring Boot, MySQL"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "Backend Development"],
      color: "#F778BA"
    },
    {
      title: "Full Stack Developer Intern",
      company: "Way 2 Websoft Technologies Pvt Ltd",
      location: "Bengaluru",
      period: "Jan 2023 – Mar 2023",
      description: [
        "Developed a dynamic, dataset driven web application using Node.js, Express.js, and MySQL",
        "Built and integrated backend APIs with frontend interfaces to support real time data operations and improve user experience"
      ],
      technologies: ["Node.js", "Express.js", "MySQL", "Full Stack"],
      color: "#58A6FF"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {aboutBackground}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Work <span className="text-[#58A6FF]">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#58A6FF] to-[#F778BA] mx-auto mb-6"></div>
            <p className="text-[#8B949E] max-w-2xl mx-auto text-sm sm:text-base">
              Professional experience gained through internships and hands-on projects 
              in software development and web technologies.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#58A6FF] to-[#F778BA] rounded-full"></div>
            
            {/* Mobile Timeline Line - Visible on mobile only */}
            <div className="lg:hidden absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-[#58A6FF] to-[#F778BA] rounded-full"></div>

            <div className="space-y-8 lg:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`flex items-start lg:items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  variants={itemVariants}
                >
                  {/* Mobile Layout */}
                  <div className="lg:hidden w-full">
                    <div className="flex items-start">
                      {/* Mobile Timeline Node */}
                      <div className="flex justify-center mr-6 mt-6">
                        <motion.div
                          className="w-4 h-4 rounded-full border-2 border-[#0D1117] relative z-10"
                          style={{ backgroundColor: exp.color }}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                        >
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: exp.color }}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.8, 0, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Mobile Content */}
                      <div className="flex-1">
                        <motion.div
                          className="bg-[#161B22] p-4 sm:p-6 rounded-2xl border border-[#58A6FF]/20 shadow-xl"
                          whileHover={{ 
                            y: -5,
                            boxShadow: "0 20px 40px rgba(88, 166, 255, 0.1)",
                            borderColor: exp.color + "40"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-start mb-4">
                            <motion.div
                              className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3"
                              style={{ backgroundColor: exp.color + "20" }}
                              whileHover={{ scale: 1.1, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Briefcase size={20} style={{ color: exp.color }} className="sm:w-6 sm:h-6" />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="text-lg sm:text-xl font-bold text-[#C9D1D9] mb-1">{exp.title}</h3>
                              <p className="text-[#58A6FF] font-semibold mb-2 text-sm sm:text-base">{exp.company}</p>
                              <div className="flex flex-col sm:flex-row sm:items-center text-[#8B949E] text-xs sm:text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                                <div className="flex items-center">
                                  <Calendar size={12} className="mr-1 sm:w-3.5 sm:h-3.5" />
                                  {exp.period}
                                </div>
                                <div className="flex items-center">
                                  <MapPin size={12} className="mr-1 sm:w-3.5 sm:h-3.5" />
                                  {exp.location}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2 sm:space-y-3 mb-4">
                            {exp.description.map((desc, descIndex) => (
                              <motion.div
                                key={descIndex}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: descIndex * 0.1 }}
                              >
                                <CheckCircle size={14} className="text-[#F778BA] mt-1 mr-2 flex-shrink-0 sm:w-4 sm:h-4" />
                                <span className="text-[#8B949E] text-xs sm:text-sm">{desc}</span>
                              </motion.div>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                className="px-2 py-1 sm:px-3 bg-[#0D1117] text-[#C9D1D9] text-xs rounded-full border border-[#58A6FF]/20"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: techIndex * 0.05 }}
                                whileHover={{ 
                                  scale: 1.05,
                                  backgroundColor: exp.color + "20",
                                  borderColor: exp.color
                                }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden lg:block w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      className="bg-[#161B22] p-6 rounded-2xl border border-[#58A6FF]/20 shadow-xl relative"
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 20px 40px rgba(88, 166, 255, 0.1)",
                        borderColor: exp.color + "40"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Arrow */}
                      <div 
                        className={`absolute top-6 w-4 h-4 transform rotate-45 bg-[#161B22] border-l border-t border-[#58A6FF]/20 ${
                          index % 2 === 0 ? '-right-2' : '-left-2'
                        }`}
                      ></div>

                      <div className={`flex items-start ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} mb-4`}>
                        <motion.div
                          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: exp.color + "20" }}
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Briefcase size={24} style={{ color: exp.color }} />
                        </motion.div>
                        <div className={index % 2 === 0 ? 'mr-4 text-right' : 'ml-4 text-left'}>
                          <h3 className="text-xl font-bold text-[#C9D1D9] mb-1">{exp.title}</h3>
                          <p className="text-[#58A6FF] font-semibold mb-2">{exp.company}</p>
                          <div className="flex items-center text-[#8B949E] text-sm space-x-4">
                            <div className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {exp.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin size={14} className="mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        {exp.description.map((desc, descIndex) => (
                          <motion.div
                            key={descIndex}
                            className="flex items-start"
                            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: descIndex * 0.1 }}
                          >
                            <CheckCircle size={16} className="text-[#F778BA] mt-1 mr-2 flex-shrink-0" />
                            <span className="text-[#8B949E] text-sm">{desc}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-[#0D1117] text-[#C9D1D9] text-xs rounded-full border border-[#58A6FF]/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: exp.color + "20",
                              borderColor: exp.color
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Desktop Timeline Node */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <motion.div
                      className="w-6 h-6 rounded-full border-4 border-[#0D1117] relative z-10"
                      style={{ backgroundColor: exp.color }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: exp.color }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.8, 0, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Desktop Empty space for alternating layout */}
                  <div className="hidden lg:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
