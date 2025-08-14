
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Hotel } from 'lucide-react';

const Projects = () => {
  // Coding-Themed Background - Same as Skills Section
  const skillsBackground = (
    <div className="absolute inset-0 overflow-hidden opacity-35">
      {/* Matrix Code Rain - Same as Skills section */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 text-[#58A6FF]/60 text-xs font-mono leading-8"
            style={{ left: `${20 + i * 25}%` }}
            animate={{ y: [-50, window.innerHeight + 50] }}
            transition={{ duration: 18 + Math.random() * 6, repeat: Infinity, ease: "linear", delay: Math.random() * 12 }}
          >
            {['const', 'function', 'return', 'class', 'import', 'export', '=>', 'async', 'if', 'else', 'for', 'while', '{}', '[]', '()', '&&', '||', '===', 'await', 'try', 'catch', 'useState', 'useEffect', 'public', 'static', 'void', 'System.out.println()', 'new', 'extends', 'implements', 'this', 'super', 'String', 'int', 'boolean', 'private', 'protected', 'throws', 'interface', 'package', 'import java.util.*;'].map((code, index) => (
              <motion.div
                key={index}
                className="mb-5 opacity-70"
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
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
            style={{ left: `${Math.random() * 70}%`, top: `${Math.random() * 70}%` }}
            animate={{ x: [0, 20, -15, 0], y: [0, -12, 8, 0], opacity: [0.4, 0.8, 0.5, 0.6] }}
            transition={{ duration: 20 + Math.random() * 8, repeat: Infinity, ease: "easeInOut", delay: i * 4 }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      {/* Binary Rain - Same as Skills */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#58A6FF]/35 text-xs font-mono"
            style={{ left: `${10 + i * 15}%`, transform: `rotate(${Math.random() * 10 - 5}deg)` }}
            animate={{ y: [-60, window.innerHeight + 60] }}
            transition={{ duration: 25 + Math.random() * 10, repeat: Infinity, ease: "linear", delay: Math.random() * 20 }}
          >
            {Array.from({ length: 8 }, () => Math.random() > 0.5 ? '1' : '0').map((bit, index) => (
              <motion.div
                key={index}
                className="mb-3"
                animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 5, repeat: Infinity, delay: index * 0.3 }}
              >
                {bit}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Programming Symbols - Same as Skills */}
      <div className="absolute inset-0">
        {['{ }', '< >', '=>', '&&', '||', '++'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-[#58A6FF]/30 text-lg font-mono font-bold"
            style={{ left: `${Math.random() * 80}%`, top: `${Math.random() * 80}%` }}
            animate={{ rotate: [0, 120, 240, 360], scale: [0.6, 1.1, 0.6], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 40 + Math.random() * 20, repeat: Infinity, ease: "easeInOut", delay: i * 6 }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Code Editor Window - Skills themed */}
      <motion.div
        className="absolute top-10 right-5 bg-[#0D1117]/90 border border-[#F778BA]/40 rounded-lg p-2 font-mono text-xs max-w-xs"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 0.8, 0.8, 0], scale: [0.8, 1, 1, 0.8] }}
        transition={{ duration: 15, repeat: Infinity, repeatDelay: 10 }}
      >
        <div className="space-y-1">
          <div><span className="text-[#F778BA]">const</span> <span className="text-[#58A6FF]">mySkills</span> = &#123;</div>
          <div className="ml-2"><span className="text-[#F778BA]">frontend:</span> <span className="text-green-400">['Next.js']</span>,</div>
          <div className="ml-2"><span className="text-[#F778BA]">backend:</span> <span className="text-green-400">['Node.js', 'Express.js']</span>,</div>
          <div className="ml-2"><span className="text-[#F778BA]">database:</span> <span className="text-green-400">['MongoDB', 'SQL']</span></div>
          <div>&#125;;</div>
        </div>
      </motion.div>

      {/* Git Branch Visualization - Same as Skills */}
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
            transition={{ duration: 20 + Math.random() * 10, repeat: Infinity, ease: "easeInOut", delay: i * 8 }}
          />
        ))}
      </svg>
    </div>
  );
  const projects = [
    {
      title: "Public Cloud-Based Secure File Sharing Platform with Expiring Access Tokens",
      description: "Designed and implemented a Node.js-based file-sharing system with asymmetric (RSA) and symmetric (AES) encryption for secure transfers.",
      technologies: ["Node.js", "Express", "RSA", "AES", "AWS S3", "Supabase", "ClamAV", "SMTP"],
      features: [
        "Integrated ClamAV to scan uploaded files for viruses, ensuring safe and secure file sharing",
        "Used AWS S3 for file storage, Supabase for user authentication, access logs, and role management",
        "Implemented OTP-based 2FA and expiring access tokens to enforce access control and file confidentiality",
        "Asymmetric and symmetric encryption for secure file transfers"
      ],
      icon: Shield,
      color: "text-[#58A6FF]",
      bgColor: "bg-[#58A6FF]/10",
      github: "https://github.com/Kiran0511/secure-file-sharing"
    },
    {
      title: "Full Stack Hotel Management Website",
      description: "Comprehensive hotel management system with room booking, reservations, and user management capabilities.",
      technologies: ["Bootstrap", "Node.js", "Express.js", "MySQL"],
      features: [
        "Room booking system",
        "Reservation management",
        "User authentication",
        "Admin dashboard"
      ],
      icon: Hotel,
      color: "text-[#F778BA]",
      bgColor: "bg-[#F778BA]/10",
      github: "https://github.com/Kiran0511/hotel-management-"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {skillsBackground}
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
        {/* <div className="space-y-1">
          <div><span className="text-[#F778BA]">const</span> <span className="text-[#58A6FF]">Projects</span> = &#123;</div>
          <div className="ml-2"><span className="text-[#F778BA]">1.</span> <span className="text-green-400">['Secure File Sharing System']</span>,</div>
          <div className="ml-2"><span className="text-[#F778BA]">2.</span> <span className="text-green-400">['Full Stack Hotel Management Website']</span>,</div>
          
          <div>&#125;;</div>
        </div> */}
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-[#58A6FF]">Projects</span>
          </h2>
          <p className="text-xl text-[#8B949E] max-w-3xl mx-auto">
            Showcasing my technical expertise through innovative solutions and full-stack development projects
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#161B22] border border-[#30363D] rounded-2xl p-8 hover:border-[#58A6FF]/50 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  {/* Project Icon */}
                  <motion.div
                    className={`p-6 rounded-2xl ${project.bgColor} flex-shrink-0`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent size={48} className={project.color} />
                  </motion.div>

                  {/* Project Details */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#C9D1D9] mb-4 group-hover:text-[#58A6FF] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#8B949E] text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-[#C9D1D9] font-semibold mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-center space-x-2 text-[#8B949E]"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: featureIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-[#58A6FF] rounded-full flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-[#C9D1D9] font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-[#0D1117] border border-[#30363D] rounded-full text-[#58A6FF] text-sm hover:border-[#58A6FF] transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: techIndex * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="w-full mt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center space-x-2 bg-[#58A6FF] text-white px-6 py-3 rounded-lg hover:bg-[#1F6FEB] transition-colors duration-300 text-base"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
