
import React, { useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

const About = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);
  const hobbiesRef = useRef<HTMLDivElement>(null);

  // Memoized variants for performance
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }), []);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animated title with glitch effect
    if (titleRef.current) {
      const titleText = "About Me";
      const aboutSpan = titleRef.current.querySelector('.about-text') as HTMLElement;
      const meSpan = titleRef.current.querySelector('.me-text') as HTMLElement;
      
      if (aboutSpan && meSpan) {
        tl.fromTo([aboutSpan, meSpan], 
          { 
            opacity: 0,
            y: 30,
            rotationX: -60
          }, 
          { 
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.3)"
          }
        )
        .call(() => {
          // Subtle glitch effect on "Me"
          let glitchCount = 0;
          const glitchInterval = setInterval(() => {
            if (glitchCount > 2) {
              clearInterval(glitchInterval);
              meSpan.innerText = "Me";
              return;
            }
            
            const glitchChars = ['M3', 'M€', 'M£'];
            meSpan.innerText = glitchChars[Math.floor(Math.random() * glitchChars.length)];
            
            setTimeout(() => {
              meSpan.innerText = "Me";
            }, 80);
            
            glitchCount++;
          }, 400);
        });
      }
    }

    // Animated journey content
    if (journeyRef.current) {
      const paragraphs = journeyRef.current.querySelectorAll('p');
      
      tl.fromTo(paragraphs,
        {
          opacity: 0,
          x: -30,
          rotationY: -15
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out"
        }, "-=0.4"
      );
    }

    // Animated education cards
    if (educationRef.current) {
      const educationCards = educationRef.current.querySelectorAll('.education-card');
      
      tl.fromTo(educationCards,
        {
          opacity: 0,
          scale: 0.8,
          rotationX: -30
        },
        {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: "back.out(1.2)"
        }, "-=0.3"
      );
    }

    // Animated language and hobby items
    if (languagesRef.current) {
      const items = languagesRef.current.querySelectorAll('.lang-item');
      
      tl.fromTo(items,
        {
          opacity: 0,
          x: -20,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.2"
      );
    }

    if (hobbiesRef.current) {
      const items = hobbiesRef.current.querySelectorAll('.hobby-item');
      
      tl.fromTo(items,
        {
          opacity: 0,
          x: -20,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.4"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  const education = [
    {
      degree: "Masters of Computer Application",
      institution: "RV Institute of Technology and Management, Bengaluru",
      period: "2023 - Present",
      cgpa: "9.04",
      icon: <GraduationCap className="text-[#58A6FF]" size={24} />
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "St Joseph's College (Autonomous), Bengaluru",
      period: "2020 – 2023",
      cgpa: "8.85",
      icon: <Award className="text-[#F778BA]" size={24} />
    }
  ];

  const languages = ["English", "Hindi", "Kannada", "Tamil"];
  const hobbies = ["Travelling", "Writing Poems"];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Coding-Themed Background - Optimized for About Section */}
      <div className="absolute inset-0 overflow-hidden opacity-35">
        {/* Matrix Code Rain - Reduced for About section */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 text-[#58A6FF]/60 text-xs font-mono leading-8"
              style={{
                left: `${20 + i * 25}%`,
              }}
              animate={{
                y: [-50, window.innerHeight + 50],
              }}
              transition={{
                duration: 18 + Math.random() * 6,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 12,
              }}
            >
              {['const', 'function', 'return', 'class', 'import', 'export', '=>', 'async', 'if', 'else', 'for', 'while', '{}', '[]', '()', '&&', '||', '===', 'await', 'try', 'catch', 'useState', 'useEffect', 'public', 'static', 'void', 'System.out.println()', 'new', 'extends', 'implements', 'this', 'super', 'String', 'int', 'boolean', 'private', 'protected', 'throws', 'interface', 'package', 'import java.util.*;'].map((code, index) => (
                <motion.div
                  key={index}
                  className="mb-5 opacity-70"
                  animate={{
                    opacity: [0.3, 0.9, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {code}
                </motion.div>
              ))}
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
              style={{
                left: `${Math.random() * 70}%`,
                top: `${Math.random() * 70}%`,
              }}
              animate={{
                x: [0, 20, -15, 0],
                y: [0, -12, 8, 0],
                opacity: [0.4, 0.8, 0.5, 0.6],
              }}
              transition={{
                duration: 20 + Math.random() * 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 4,
              }}
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
              style={{
                left: `${10 + i * 15}%`,
                transform: `rotate(${Math.random() * 10 - 5}deg)`,
              }}
              animate={{
                y: [-60, window.innerHeight + 60],
              }}
              transition={{
                duration: 25 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 20,
              }}
            >
              {Array.from({ length: 8 }, () => Math.random() > 0.5 ? '1' : '0').map((bit, index) => (
                <motion.div
                  key={index}
                  className="mb-3"
                  animate={{
                    opacity: [0.2, 0.7, 0.2],
                    scale: [0.9, 1.1, 0.9],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {bit}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Programming Symbols - About themed */}
        <div className="absolute inset-0">
          {['{ }', '< >', '=>', '&&', '||', '++'].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-[#58A6FF]/30 text-lg font-mono font-bold"
              style={{
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
              }}
              animate={{
                rotate: [0, 120, 240, 360],
                scale: [0.6, 1.1, 0.6],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 40 + Math.random() * 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 6,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>

        {/* Code Editor Window - About themed */}
        <motion.div
          className="absolute top-10 right-5 bg-[#0D1117]/90 border border-[#F778BA]/40 rounded-lg p-2 font-mono text-xs max-w-xs"
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
        >
          <div className="space-y-1">
            <div><span className="text-[#F778BA]">const</span> <span className="text-[#58A6FF]">aboutMe</span> = &#123;</div>
            <div className="ml-2"><span className="text-[#F778BA]">education:</span> <span className="text-green-400">'MCA'</span>,</div>
            <div className="ml-2"><span className="text-[#F778BA]">experience:</span> <span className="text-green-400">'Growing'</span>,</div>
            <div className="ml-2"><span className="text-[#F778BA]">passion:</span> <span className="text-green-400">'Technology'</span></div>
            <div>&#125;;</div>
          </div>
        </motion.div>

        {/* Git Branch Visualization - Simplified */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-12">
          <defs>
            <linearGradient id="aboutGitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#58A6FF" />
              <stop offset="100%" stopColor="#F778BA" />
            </linearGradient>
          </defs>
          {[...Array(2)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${100 + i * 150} 150 Q ${200 + i * 150} 250 ${300 + i * 150} 350 T ${500 + i * 150} 550`}
              stroke="url(#aboutGitGradient)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6,3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                delay: i * 7,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>

      {/* Subtle Holographic Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: `
            radial-gradient(circle at 30% 40%, rgba(88, 166, 255, 0.04) 0%, transparent 60%),
            radial-gradient(circle at 70% 60%, rgba(247, 120, 186, 0.04) 0%, transparent 60%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 ref={titleRef} className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="about-text">About</span> <span className="me-text text-[#58A6FF]">Me</span>
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-[#58A6FF] to-[#F778BA] mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <motion.div variants={itemVariants}>
              <motion.div
                ref={journeyRef}
                className="bg-[#161B22] p-8 rounded-2xl border border-[#58A6FF]/20 shadow-xl"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(88, 166, 255, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-6 text-[#58A6FF]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  My Journey
                </motion.h3>
                <p className="text-[#8B949E] leading-relaxed mb-6">
                  I am a passionate MCA student and Software Developer with a strong foundation 
                  in modern web technologies. My journey in technology began with a curiosity 
                  about how things work, which led me to pursue computer applications.
                </p>
                <p className="text-[#8B949E] leading-relaxed mb-6">
                  With hands-on experience in both frontend and backend development, I've worked 
                  on various projects ranging from secure banking applications to hotel management 
                  systems. I thrive in collaborative environments and am always eager to learn 
                  new technologies.
                </p>
                <p className="text-[#8B949E] leading-relaxed">
                  My goal is to contribute meaningfully to organizations while continuously 
                  growing both personally and professionally in the ever-evolving tech landscape.
                </p>
              </motion.div>

              {/* Languages & Hobbies */}
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <motion.div
                  ref={languagesRef}
                  className="bg-[#161B22] p-6 rounded-xl border border-[#F778BA]/20"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  variants={itemVariants}
                >
                  <h4 className="text-xl font-semibold mb-4 text-[#F778BA] flex items-center">
                    <BookOpen size={20} className="mr-2" />
                    Languages
                  </h4>
                  <div className="space-y-2">
                    {languages.map((lang, index) => (
                      <motion.div
                        key={lang}
                        className="flex items-center lang-item"
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-[#F778BA] rounded-full mr-3"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        />
                        <span className="text-[#8B949E]">{lang}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  ref={hobbiesRef}
                  className="bg-[#161B22] p-6 rounded-xl border border-[#58A6FF]/20"
                  whileHover={{ scale: 1.02, rotateY: -5 }}
                  variants={itemVariants}
                >
                  <h4 className="text-xl font-semibold mb-4 text-[#58A6FF] flex items-center">
                    <Award size={20} className="mr-2" />
                    Hobbies
                  </h4>
                  <div className="space-y-2">
                    {hobbies.map((hobby, index) => (
                      <motion.div
                        key={hobby}
                        className="flex items-center hobby-item"
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-[#58A6FF] rounded-full mr-3"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        />
                        <span className="text-[#8B949E]">{hobby}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-8 text-center">
                <span className="text-[#F778BA]">Education</span>
              </h3>
              <div ref={educationRef} className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#161B22] p-6 rounded-xl border border-[#58A6FF]/20 relative overflow-hidden education-card"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 40px rgba(88, 166, 255, 0.1)",
                      borderColor: "rgba(88, 166, 255, 0.4)",
                      rotateY: 2
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#58A6FF] to-[#F778BA]"
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                    />
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 bg-[#58A6FF]/10 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.15, rotate: 180 }}
                        transition={{ duration: 0.4 }}
                      >
                        {edu.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-[#C9D1D9] mb-2">{edu.degree}</h4>
                        <p className="text-[#8B949E] mb-2">{edu.institution}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-[#58A6FF] font-medium">{edu.period}</span>
                          <motion.span 
                            className="bg-[#F778BA]/20 text-[#F778BA] px-3 py-1 rounded-full text-sm font-semibold"
                            whileHover={{ scale: 1.05 }}
                          >
                            CGPA: {edu.cgpa}
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
