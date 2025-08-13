
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Hotel } from 'lucide-react';

const Projects = () => {
  // Coding-Themed Background - Optimized for About Section
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
            {["const", "function", "return", "class", "import", "export", "=>", "async", "if", "else", "for", "while", "{}", "[]", "()", "&&", "||", "===", "await", "try", "catch", "useState", "useEffect"].map((code, index) => code + " ")}
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
      {/* Subtle Holographic Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: `radial-gradient(circle at 30% 40%, rgba(88, 166, 255, 0.04) 0%, transparent 60%),radial-gradient(circle at 70% 60%, rgba(247, 120, 186, 0.04) 0%, transparent 60%)` }} />
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
      bgColor: "bg-[#58A6FF]/10"
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
      bgColor: "bg-[#F778BA]/10"
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
      {aboutBackground}
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
                      <motion.button
                        className="w-full flex items-center justify-center space-x-2 bg-[#58A6FF] text-white px-6 py-3 rounded-lg hover:bg-[#1F6FEB] transition-colors duration-300 text-base"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </motion.button>
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
