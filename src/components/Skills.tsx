import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef, useMemo } from "react";
import { 
  Code, 
  Cpu, 
  Target,
  Award 
} from "lucide-react";
import {

  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiAmazon,
  SiPostman
} from "react-icons/si";
import { DiJava } from "react-icons/di";

gsap.registerPlugin(TextPlugin);

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const technicalRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const otherSkillsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);

  // Memoized variants for performance
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.08 },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }), []);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animated title with glitch effect
    if (titleRef.current) {
      const mySpan = titleRef.current.querySelector('.my-text') as HTMLElement;
      const skillsSpan = titleRef.current.querySelector('.skills-text') as HTMLElement;
      
      if (mySpan && skillsSpan) {
        tl.fromTo([mySpan, skillsSpan], 
          { 
            opacity: 0,
            y: 40,
            rotationX: -70
          }, 
          { 
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "back.out(1.2)"
          }
        )
        .call(() => {
          // Subtle glitch effect on "Skills"
          let glitchCount = 0;
          const glitchInterval = setInterval(() => {
            if (glitchCount > 2) {
              clearInterval(glitchInterval);
              skillsSpan.innerText = "Skills";
              return;
            }
            
            const glitchChars = ['$k1ll$', 'Sk!11s', '$kills'];
            skillsSpan.innerText = glitchChars[Math.floor(Math.random() * glitchChars.length)];
            
            setTimeout(() => {
              skillsSpan.innerText = "Skills";
            }, 100);
            
            glitchCount++;
          }, 500);
        });
      }
    }

    // Animated description
    if (descriptionRef.current) {
      const words = descriptionRef.current.innerText.split(' ');
      descriptionRef.current.innerHTML = words.map((word, index) => 
        `<span class="word inline-block" style="--delay: ${index * 0.06}s">${word}</span>`
      ).join(' ');
      
      tl.fromTo(descriptionRef.current.querySelectorAll('.word'),
        {
          opacity: 0,
          y: 25,
          rotationX: -45,
          transformOrigin: "50% 100%"
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.5,
          stagger: {
            amount: 1,
            from: "start",
            ease: "power2.out"
          },
          ease: "back.out(1.3)"
        }, "-=0.3"
      );
    }

    // Animate skill cards
    [technicalRef, toolsRef, otherSkillsRef].forEach((ref, sectionIndex) => {
      if (ref.current) {
        const cards = ref.current.querySelectorAll('.skill-card');
        
        tl.fromTo(cards,
          {
            opacity: 0,
            scale: 0.8,
            rotationY: -20
          },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.1)"
          }, sectionIndex === 0 ? "-=0.2" : "-=0.4"
        );
      }
    });

    // Animate certifications
    if (certificationsRef.current) {
      const certCards = certificationsRef.current.querySelectorAll('.cert-card');
      
      tl.fromTo(certCards,
        {
          opacity: 0,
          x: 40,
          rotationY: -15
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out"
        }, "-=0.3"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  const technicalSkills = [
  { name: "Java", icon: <DiJava />, color: "#ED8B00" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Express JS", icon: <SiNodedotjs />, color: "#000000" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Cloud Computing", icon: <Cpu />, color: "#FF9900" }
  ];

  const technicalTools = [
    { name: "Wireshark", icon: <Code />, color: "#1679A7" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "Keycloak", icon: <Code />, color: "#4D9EE8" },
    { name: "AWS", icon: <SiAmazon />, color: "#FF9900" },
    { name: "OWASP ZAP", icon: <Code />, color: "#D22128" }
  ];

  const otherSkills = [
    {
      category: "Soft Skills",
      skills: ["Attention to Detail", "Adaptability", "Time Management", "Team Work", "Problem Solving"]
    }
  ];

  const certifications = [
    { name: "AWS Cloud Foundations", provider: "Amazon Web Services", year: "2023" },
    { name: "Ethical Hacking Course", provider: "Visvesvaraya Technological University", year: "2024" }
  ];

  return (
    <motion.section
      id="skills"
      className="relative min-h-screen py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={shouldReduceMotion ? {} : containerVariants}
    >
      {/* Coding-themed Background Animations - Same as About Section */}
      <div className="absolute inset-0 overflow-hidden opacity-35">
        {/* Matrix Code Rain - Same as About section */}
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

        {/* Floating Code Snippets - Skills-themed */}
        <div className="absolute inset-0">
          {[
            "const mySkills = ['Next.js'];",
            "function develop() { return innovation; }",
            "const expertise = 'Full-Stack';",
            "while(learning) { skills++; }",
            "const passion = 'Technology';"
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

        {/* Binary Rain - Same as About */}
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

        {/* Programming Symbols - Same as About */}
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

        {/* Code Editor Window - Skills themed */}
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
            <div><span className="text-[#F778BA]">const</span> <span className="text-[#58A6FF]">mySkills</span> = &#123;</div>
            <div className="ml-2"><span className="text-[#F778BA]">frontend:</span> <span className="text-green-400">['Next.js']</span>,</div>
            <div className="ml-2"><span className="text-[#F778BA]">backend:</span> <span className="text-green-400">['Node.js', 'Express.js']</span>,</div>
            <div className="ml-2"><span className="text-[#F778BA]">database:</span> <span className="text-green-400">['MongoDB', 'SQL']</span></div>
            <div>&#125;;</div>
          </div>
        </motion.div>

        {/* Git Branch Visualization - Same as About */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-12">
          <defs>
            <linearGradient id="skillsGitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#58A6FF" />
              <stop offset="100%" stopColor="#F778BA" />
            </linearGradient>
          </defs>
          {[...Array(2)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${100 + i * 150} 150 Q ${200 + i * 150} 250 ${300 + i * 150} 350 T ${500 + i * 150} 550`}
              stroke="url(#skillsGitGradient)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6,3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 8,
              }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={shouldReduceMotion ? {} : itemVariants}
        >
          <h2 
            ref={titleRef}
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{
              textShadow: '0 0 20px rgba(88, 166, 255, 0.5), 0 0 40px rgba(247, 120, 186, 0.3), 0 0 60px rgba(88, 166, 255, 0.2)'
            }}
          >
            <span className="my-text">My</span> <span className="skills-text text-[#58A6FF]">Skills</span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-[#58A6FF] to-[#F778BA] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <p 
            ref={descriptionRef}
            className="text-xl text-[#8B949E] max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical expertise, tools, and capabilities that drive innovation and excellence.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          ref={technicalRef}
          variants={shouldReduceMotion ? {} : itemVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-[#58A6FF] flex items-center">
            <Code size={28} className="mr-3" />
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card bg-[#0D1117] p-6 rounded-xl border border-[#58A6FF]/20 text-center group hover:border-[#58A6FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#58A6FF]/20"
                whileHover={shouldReduceMotion ? {} : { 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(88, 166, 255, 0.2)"
                }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              >
                <motion.div
                  className="mb-4 flex justify-center text-4xl"
                  style={{ color: skill.color }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.icon}
                </motion.div>
                <h4 className="font-semibold text-[#C9D1D9] group-hover:text-[#58A6FF] transition-colors">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          ref={toolsRef}
          variants={shouldReduceMotion ? {} : itemVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-[#F778BA] flex items-center">
            <Cpu size={28} className="mr-3" />
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technicalTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="skill-card bg-[#0D1117] p-6 rounded-xl border border-[#F778BA]/20 text-center group hover:border-[#F778BA]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#F778BA]/20"
                whileHover={shouldReduceMotion ? {} : { 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(247, 120, 186, 0.2)"
                }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              >
                <motion.div
                  className="mb-4 flex justify-center text-4xl"
                  style={{ color: tool.color }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.2, rotate: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {tool.icon}
                </motion.div>
                <h4 className="font-semibold text-[#C9D1D9] group-hover:text-[#F778BA] transition-colors">
                  {tool.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Skills */}
        <motion.div
          ref={otherSkillsRef}
          variants={shouldReduceMotion ? {} : itemVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-[#7C3AED] flex items-center">
            <Target size={28} className="mr-3" />
            Soft Skills
          </h3>
          {/* Soft Skills grid - styled like technical skills but smaller */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {otherSkills[0].skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-card bg-[#0D1117] p-3 rounded-lg border border-[#7C3AED]/20 text-center group hover:border-[#7C3AED]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#7C3AED]/20"
                whileHover={shouldReduceMotion ? {} : { scale: 1.07, y: -3 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              >
                <h4 className="font-semibold text-[#C9D1D9] group-hover:text-[#7C3AED] transition-colors text-sm">
                  {skill}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          ref={certificationsRef}
          variants={shouldReduceMotion ? {} : itemVariants}
        >
          <h3 className="text-2xl font-bold mb-8 text-[#10B981] flex items-center">
            <Award size={28} className="mr-3" />
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="cert-card bg-[#0D1117] p-6 rounded-xl border border-[#58A6FF]/20 group hover:border-[#58A6FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#58A6FF]/20"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, x: 5 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-[#C9D1D9] group-hover:text-[#10B981] transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-[#8B949E]">{cert.provider}</p>
                  </div>
                  <motion.span
                    className="bg-[#58A6FF]/20 text-[#58A6FF] px-3 py-1 rounded-full text-sm font-semibold"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                  >
                    {cert.year}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
