
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useDownloadThankYou } from '../hooks/use-download-thankyou';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  // GSAP-powered particle explosion/ripple effect for buttons ONLY
  const buttonRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    buttonRefs.current.forEach((btn) => {
      if (!btn) return;
      // Remove all previous hover listeners and effect elements
      btn.onmouseenter = null;
      btn.onmouseleave = null;
      Array.from(btn.querySelectorAll('.gsap-shimmer, .gsap-underline')).forEach(el => el.remove());
      
      // Only add particle effects on larger screens for performance
      const isMobile = window.innerWidth < 768;
      if (isMobile) return;
      
      btn.addEventListener('mouseenter', (e) => {
        const rect = btn.getBoundingClientRect();
        const btnCenterX = rect.width / 2;
        const btnCenterY = rect.height / 2;
        const numParticles = 6; // Reduced from 8 for better performance
        const colors = ['#58A6FF', '#F778BA', '#fff', '#8B949E', '#ED8B00', '#22D3EE'];
        const codeSymbols = ['{ }', '<>', '=>', ';', '()', '[]', '&&', '||'];
        const particles: HTMLSpanElement[] = [];
        for (let i = 0; i < numParticles; i++) {
          const particle = document.createElement('span');
          particle.className = 'gsap-particle';
          particle.style.position = 'absolute';
          particle.style.left = btnCenterX + 'px';
          particle.style.top = btnCenterY + 'px';
          particle.style.fontSize = '12px';
          particle.style.fontFamily = 'monospace';
          particle.style.fontWeight = 'bold';
          particle.style.color = colors[Math.floor(Math.random() * colors.length)];
          particle.style.pointerEvents = 'none';
          particle.style.zIndex = '3';
          particle.style.opacity = '0.92';
          particle.style.userSelect = 'none';
          particle.innerText = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
          btn.style.position = 'relative';
          btn.appendChild(particle);
          particles.push(particle);
        }
        particles.forEach((particle, i) => {
          const angle = (Math.PI * 2 * i) / numParticles + Math.random() * 0.3;
          const distance = 24 + Math.random() * 8; // Reduced distance
          gsap.to(particle, {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
            scale: 0.7 + Math.random() * 0.5,
            opacity: 0,
            rotate: Math.random() * 360,
            duration: 0.45 + Math.random() * 0.1,
            ease: 'power2.out',
            onComplete: () => {
              if (particle.parentNode) particle.parentNode.removeChild(particle);
            }
          });
        });
      });
    });
  }, []);
  const nameRef = useRef<HTMLSpanElement>(null);
  const showThankYou = useDownloadThankYou();
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Memoize animation variants to prevent recreation
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
      transition: { duration: 0.5 }
    }
  }), []);

  useEffect(() => {
    // GSAP animation for profile image
    if (imageRef.current) {
      gsap.fromTo(imageRef.current,
        {
          scale: 0.8,
          rotate: -10,
          opacity: 0
        },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
        }
      );

      // Subtle floating effect
      gsap.to(imageRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: 'sine.inOut',
      });
    }
    const tl = gsap.timeline();

    // Optimized glitch effect for name
    if (nameRef.current) {
      const nameText = nameRef.current.innerText;
      const glitchChars = '!@#$%^&*(){}[]';
      
      tl.fromTo(nameRef.current, 
        { 
          opacity: 0,
          scale: 0.9,
          rotationX: -45
        }, 
        { 
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(1.4)"
        }
      )
      .call(() => {
        // Simplified glitch effect - fewer iterations for performance
        let glitchCount = 0;
        const glitchInterval = setInterval(() => {
          if (glitchCount > 3) {
            clearInterval(glitchInterval);
            nameRef.current!.innerText = nameText;
            return;
          }
          
          const glitchedText = nameText.split('').map(char => 
            Math.random() < 0.2 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
          ).join('');
          
          nameRef.current!.innerText = glitchedText;
          
          setTimeout(() => {
            nameRef.current!.innerText = nameText;
          }, 60);
          
          glitchCount++;
        }, 300);
      });
    }

    // Optimized holographic title effect
    if (titleRef.current) {
      const titles = [
        "Software Developer",
        "MCA Student",
        "Full-Stack Enthusiast", 
        "Problem Solver",
        "Tech Explorer"
      ];
      
      let currentIndex = 0;
      
      tl.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 25,
          skewX: -8
        },
        {
          opacity: 1,
          y: 0,
          skewX: 0,
          duration: 0.7,
          ease: "power2.out"
        }, "-=0.4"
      )
      .call(() => {
        const cycleText = () => {
          gsap.to(titleRef.current, {
            duration: 0.25,
            opacity: 0,
            y: -15,
            ease: "power2.in",
            onComplete: () => {
              currentIndex = (currentIndex + 1) % titles.length;
              titleRef.current!.innerHTML = titles[currentIndex];
              gsap.fromTo(titleRef.current, 
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
              );
            }
          });
        };
        
        // Longer interval for performance
        setInterval(cycleText, 4000);
      });
    }

    // Optimized description animation
    if (descriptionRef.current) {
      const words = descriptionRef.current.innerText.split(' ');
      descriptionRef.current.innerHTML = words.map((word, index) => 
        `<span class="word inline-block" style="--delay: ${index * 0.08}s">${word}</span>`
      ).join(' ');
      
      tl.fromTo(descriptionRef.current.querySelectorAll('.word'),
        {
          opacity: 0,
          y: 30,
          rotationX: -60,
          transformOrigin: "50% 100%"
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.6,
          stagger: {
            amount: 1.2,
            from: "start",
            ease: "power2.out"
          },
          ease: "back.out(1.4)"
        }, "-=0.2"
      );
    }

    // Optimized magnetic hover effect for details
    if (detailsRef.current) {
      const details = detailsRef.current.children;
      
      tl.fromTo(details,
        {
          opacity: 0,
          x: -30,
          rotationY: -30
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.6"
      );

      // Simplified magnetic effect
      Array.from(details).forEach(detail => {
        const element = detail as HTMLElement;
        
        element.addEventListener('mousemove', (e) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(element, {
            x: x * 0.15,
            y: y * 0.15,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.4,
            ease: "elastic.out(1, 0.5)"
          });
        });
      });
    }

    // Optimized button animation
    if (buttonsRef.current) {
      tl.fromTo(buttonsRef.current.children,
        {
          opacity: 0,
          scale: 0,
          rotation: 90
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "elastic.out(1, 0.7)"
        }, "-=0.3");
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
  <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Java-themed Code Snippet Fade-in - Hidden on mobile */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        <motion.div
          className="absolute text-xs font-mono text-[#ED8B00]/80 bg-[#0D1117]/80 px-3 py-2 rounded shadow-lg border border-[#ED8B00]/30"
          style={{
            left: '70%',
            top: '60%',
            zIndex: 0,
            pointerEvents: 'none',
            opacity: 0.8
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 0.8, 0.8, 0], y: [20, 0, 0, -20] }}
          transition={{ duration: 8, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
        >
          {'System.out.println("Hello, World!");'}
        </motion.div>
      </div>
      {/* Animated Code Snippet Fade-ins - Reduced on mobile */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        {["console.log('Hello World!');", "const user = 'Kiran';", "system.out.println('Let dreams be dreams.');", "if (success) { celebrate(); }", "<Portfolio />", "npm run dev", "export default Hero;"]
          .map((snippet, i) => (
            <motion.div
              key={i}
              className="absolute text-xs font-mono text-[#58A6FF]/60 bg-[#0D1117]/70 px-2 py-1 rounded shadow-lg"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.7
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: [0, 0.7, 0.7, 0], y: [20, 0, 0, -20] }}
              transition={{ duration: 7 + Math.random() * 3, repeat: Infinity, repeatDelay: 2 + Math.random() * 2, ease: "easeInOut", delay: i * 1.2 }}
            >
              {snippet}
            </motion.div>
          ))}
      </div>
      {/* Optimized Coding-Themed Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {/* Reduced Matrix Code Rain - 4 columns for performance */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 text-[#58A6FF]/40 text-xs font-mono leading-6"
              style={{
                left: `${15 + i * 20}%`,
              }}
              animate={{
                y: [-50, window.innerHeight + 50],
              }}
              transition={{
                duration: 15 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            >
              {['const', 'function', 'return', 'class', 'import', '{}', '=>', 'async', 'if', 'else', 'for', 'while', 'export', '()', '&&', '||', '===', '!==', 'await', 'try', 'catch', 'useState', 'useEffect', 'map', 'filter', 'public', 'static', 'void', 'System.out.println()', 'new', 'extends', 'implements', 'this', 'super', 'String', 'int', 'boolean', 'private', 'protected', 'throws', 'interface', 'package', 'import java.util.*;'].map((code, index) => (
                <motion.div
                  key={index}
                  className="mb-4 opacity-50"
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                >
                  {code}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Optimized Floating Code Snippets - 6 instead of 8 */}
        <div className="absolute inset-0">
          {[
            "const hello = 'world';",
            "if (coding) { dream(); }",
            "function solve() { return true; }",
            "npm install creativity",
            "const passion = Infinity;",
            "console.log('Building dreams...')"
          ].map((snippet, i) => (
            <motion.div
              key={i}
              className="absolute text-[#F778BA]/35 text-xs font-mono bg-[#0D1117]/70 px-2 py-1 rounded border border-[#F778BA]/15"
              style={{
                left: `${Math.random() * 75}%`,
                top: `${Math.random() * 75}%`,
              }}
              animate={{
                x: [0, 25, -15, 0],
                y: [0, -15, 10, 0],
                opacity: [0.2, 0.7, 0.3, 0.5],
              }}
              transition={{
                duration: 18 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 3,
              }}
            >
              {snippet}
            </motion.div>
          ))}
        </div>

        {/* Optimized Binary Rain - 8 columns instead of 15 */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#58A6FF]/15 text-xs font-mono"
              style={{
                left: `${8 + i * 10}%`,
                transform: `rotate(${Math.random() * 15 - 7.5}deg)`,
              }}
              animate={{
                y: [-80, window.innerHeight + 80],
              }}
              transition={{
                duration: 20 + Math.random() * 8,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 15,
              }}
            >
              {Array.from({ length: 12 }, () => Math.random() > 0.5 ? '1' : '0').map((bit, index) => (
                <motion.div
                  key={index}
                  className="mb-2"
                  animate={{
                    opacity: [0.1, 0.6, 0.1],
                    scale: [0.9, 1.1, 0.9],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {bit}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Terminal Commands Animation - Hidden on mobile for performance */}
        <motion.div
          className="absolute bottom-10 left-10 bg-[#0D1117]/85 border border-[#58A6FF]/25 rounded-lg p-3 font-mono text-sm max-w-md hidden lg:block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: [0, 0.8, 0.8, 0], y: [40, 0, 0, -40] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 5,
          }}
        >
          <div className="flex items-center mb-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <span className="text-[#8B949E] ml-2 text-xs">Terminal</span>
          </div>
          <div className="text-[#58A6FF]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, delay: 1 }}
              className="overflow-hidden whitespace-nowrap text-xs"
            >
              $ npm run dev
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
              className="text-[#F778BA] mt-1 text-xs"
            >
              ✨ Building amazing things...
            </motion.div>
          </div>
        </motion.div>

        {/* Code Editor Simulation - Hidden on mobile */}
        <motion.div
          className="absolute top-20 right-10 bg-[#0D1117]/85 border border-[#F778BA]/25 rounded-lg p-3 font-mono text-xs max-w-sm hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: [0, 0.8, 0.8, 0], 
            scale: [0.9, 1, 1, 0.9]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatDelay: 8,
          }}
        >
          <div className="space-y-1">
            <div><span className="text-[#F778BA]">const</span> <span className="text-[#58A6FF]">developer</span> = &#123;</div>
            <div className="ml-2"><span className="text-[#F778BA]">name:</span> <span className="text-green-400">'Kiran M'</span>,</div>
            <div className="ml-2"><span className="text-[#F778BA]">passion:</span> <span className="text-green-400">'Coding'</span>,</div>
            <div className="ml-2"><span className="text-[#F778BA]">status:</span> <span className="text-green-400">'Ready to code!'</span></div>
            <div>&#125;;</div>
          </div>
        </motion.div>

        {/* Optimized Programming Symbols - 8 instead of 13 */}
        <div className="absolute inset-0">
          {['{ }', '< >', '=>', '&&', '===', '++', '?.', '||'].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-[#58A6FF]/20 text-lg font-mono font-bold"
              style={{
                left: `${Math.random() * 85}%`,
                top: `${Math.random() * 85}%`,
              }}
              animate={{
                rotate: [0, 180, 360],
                scale: [0.7, 1.3, 0.7],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 35 + Math.random() * 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 4,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>

        {/* Optimized Git Branch Visualization - 3 instead of 4 */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-8">
          <defs>
            <linearGradient id="gitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#58A6FF" />
              <stop offset="100%" stopColor="#F778BA" />
            </linearGradient>
          </defs>
          {[...Array(3)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${70 + i * 120} 120 Q ${170 + i * 120} 220 ${270 + i * 120} 320 T ${470 + i * 120} 520`}
              stroke="url(#gitGradient)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="8,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: i * 4,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>

      {/* Simplified Holographic Glow Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: `
            radial-gradient(circle at 25% 35%, rgba(88, 166, 255, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 75% 65%, rgba(247, 120, 186, 0.06) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center lg:text-left lg:flex lg:items-center lg:justify-between gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 relative leading-tight"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block sm:inline">Hi, I'm&nbsp;
                  <span 
                    ref={nameRef} 
                    className="text-[#58A6FF] relative inline-block cursor-pointer hover:text-[#F778BA] transition-colors duration-300"
                    style={{
                      textShadow: '0 0 30px rgba(88, 166, 255, 0.5)',
                      filter: 'drop-shadow(0 0 10px rgba(88, 166, 255, 0.3))'
                    }}
                  >
                    KIRAN M
                  </span>
                </span>
              </motion.h1>
              <div 
                ref={titleRef}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#8B949E] mb-4 sm:mb-6 h-8 sm:h-12 relative font-medium holographic-text whitespace-nowrap overflow-hidden text-ellipsis"
              >
                <motion.span
                  className="absolute right-0 top-0 inline-block w-1 h-6 sm:h-8 bg-[#58A6FF] ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 3 }}
                />
              </div>
            </motion.div>

            <p 
              ref={descriptionRef}
              className="text-sm sm:text-base lg:text-lg text-[#8B949E] mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Looking forward to work in an organization where I can learn and use my skills 
              and knowledge to deliver value added results that provide me job satisfaction 
              and self-development.
            </p>

            <div ref={detailsRef} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-6 sm:mb-8">
              <div className="flex items-center space-x-2 text-[#8B949E] text-sm sm:text-base">
                <MapPin size={16} className="text-[#F778BA] flex-shrink-0" />
                <span>Bengaluru</span>
              </div>
              <div className="flex items-center space-x-2 text-[#8B949E] text-sm sm:text-base">
                <Phone size={16} className="text-[#F778BA] flex-shrink-0" />
                <span>9739896965</span>
              </div>
              <div className="flex items-center space-x-2 text-[#8B949E] text-sm sm:text-base">
                <Mail size={16} className="text-[#F778BA] flex-shrink-0" />
                <span className="hidden sm:inline">kiranm1102@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </div>
            </div>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              {/* GitHub Button */}
              <motion.a
                ref={el => buttonRefs.current[0] = el}
                href="https://github.com/Kiran0511"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center space-x-2 bg-[#58A6FF] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-[#1F6FEB] transition-all duration-300 overflow-hidden hover:shadow-lg text-sm sm:text-base"
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Github size={16} className="relative z-10" />
                <span className="relative z-10">GitHub</span>
              </motion.a>
              {/* LinkedIn Button */}
              <motion.a
                ref={el => buttonRefs.current[1] = el}
                href="https://linkedin.com/in/kiran-m-a3b52a274"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center space-x-2 border border-[#58A6FF] text-[#58A6FF] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-[#58A6FF] hover:text-white transition-all duration-300 overflow-hidden hover:shadow-lg text-sm sm:text-base"
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#58A6FF] to-[#F778BA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Linkedin size={16} className="relative z-10" />
                <span className="relative z-10">LinkedIn</span>
              </motion.a>
              {/* Download Resume Button - Consistent Style */}
              <motion.a
                ref={el => buttonRefs.current[2] = el}
                href="/kiran_resume.pdf"
                download
                className="group relative flex items-center justify-center space-x-1.5 bg-[#58A6FF] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-[#1F6FEB] transition-all duration-300 overflow-hidden hover:shadow-lg text-sm sm:text-base"
                whileTap={{ scale: 0.98 }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={showThankYou}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                {/* Download Icon */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 flex-shrink-0">
                  <path d="M12 3v14m0 0l-5-5m5 5l5-5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="relative z-10">Download Resume</span>
              </motion.a>
            </div>
          </div>

          {/* Profile Image with GSAP animation */}
          <motion.div 
            className="lg:w-1/2 order-1 lg:order-2 mt-0 lg:mt-0 mb-8 lg:mb-0 flex justify-center"
            variants={itemVariants}
          >
            <div
              ref={imageRef}
              className="relative"
              style={{ willChange: 'transform' }}
              onMouseEnter={() => {
                if (imageRef.current) {
                  gsap.to(imageRef.current, {
                    scale: 1.05,
                    rotate: 3,
                    boxShadow: '0 0 32px 8px #58A6FF55',
                    duration: 0.4,
                    ease: 'power2.out',
                  });
                }
              }}
              onMouseLeave={() => {
                if (imageRef.current) {
                  gsap.to(imageRef.current, {
                    scale: 1,
                    rotate: 0,
                    boxShadow: '0 0 0 0 #58A6FF00',
                    duration: 0.5,
                    ease: 'power2.out',
                  });
                }
              }}
            >
              <div
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-[#58A6FF] to-[#F778BA] p-1"
              >
                <div className="w-full h-full rounded-full bg-[#0D1117] p-2 flex items-center justify-center">
                  <img 
                    src="/image/photo.jpg"
                    alt="Kiran M - Full Stack Developer"
                    className="w-full h-full rounded-full object-cover shadow-2xl bg-[#222]"
                    width="320"
                    height="320"
                    loading="lazy"
                    style={{ filter: 'none' }}
                  />
                </div>
              </div>
              <motion.div
                className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#F778BA] rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-white text-lg sm:text-xl">👋</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#58A6FF] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 sm:h-3 bg-[#58A6FF] rounded-full mt-1.5 sm:mt-2"
            animate={{
              height: [8, 4, 8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;