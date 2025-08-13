import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal } from 'lucide-react';

const Achievements = () => {
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
  const achievements = [
    {
      title: "Research Paper on Dynamic RBAC in Multi-Tenant Cloud",
      description: "Presented at the 2nd IEEE International Conference on \"New Frontiers in Communication, Automation, Management, and Security\", Presidency University",
      icon: Trophy,
      color: "text-[#F778BA]",
      image: "/image/research-paper.jpg"
    },
    {
      title: "Smart India Hackathon 2024 Finalist",
      description: "Selected as finalist in national level hackathon competition",
      icon: Trophy,
      color: "text-[#F778BA]",
      image: "/image/8dc8e8b6-0d9c-41e7-a91a-166cc5de4527.png"
    },
    {
      title: "Academic Topper – MCA (2024)",
      description: "Achieved top academic performance with CGPA: 9.04",
      icon: Award,
      color: "text-[#58A6FF]",
      image: "/image/52e9a774-470c-4b2b-af3b-949772b2e130.png"
    },
    {
      title: "Hackathon Runner-up",
      description: "Runner-up at INNOVEX Fest 2025 hackathon competition",
      icon: Medal,
      color: "text-[#58A6FF]",
      image: "/image/hackathon.jpg"
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
    hidden: { 
      scale: 0.8, 
      opacity: 0 
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
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
          <div><span className="text-[#F778BA]">const</span> <span className="text-[#58A6FF]">Achievements</span> = &#123;</div>
          <div className="ml-2"><span className="text-[#F778BA]">1:</span> <span className="text-green-400">['Academic Topper']</span>,</div>
          <div className="ml-2"><span className="text-[#F778BA]">2:</span> <span className="text-green-400">['Smart India Hackathon 2024 Finalist']</span>,</div>
          <div className="ml-2"><span className="text-[#F778BA]">3:</span> <span className="text-green-400">['Research Paper on Dynamic RBAC']</span></div>
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
            <span className="text-[#58A6FF]">Achievements</span> & Awards
          </h2>
          <p className="text-xl text-[#8B949E] max-w-3xl mx-auto">
            Recognition and milestones that reflect my dedication to excellence and continuous growth
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#161B22] border border-[#30363D] rounded-xl p-8 hover:border-[#58A6FF]/50 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                {achievement.image ? (
                  <div className="mb-6">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-64 sm:h-48 object-contain rounded-lg bg-[#161B22]"
                      style={{ background: '#161B22' }}
                    />
                  </div>
                ) : null}
                <div className="flex items-start space-x-4">
                  <motion.div
                    className={`p-3 rounded-lg bg-[#0D1117] ${achievement.color} flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#C9D1D9] mb-2 group-hover:text-[#58A6FF] transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-[#8B949E] leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-[#C9D1D9] mb-8 text-center">
            Additional <span className="text-[#F778BA]">Recognition</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Winner of Coding Event held at St Joseph’s University during Syntaxia Fest 2025. ",
              "Winner of IT Quiz Event held at Siddaganga Institute of Technology during Zerone Fest 2025.",
              "Winner of IT Quiz Event held at BMS Institute of Technology and Management during Technix 6.0 Fest 2025.",
              "2nd Place - Blind Coding, St Joseph's College (2022)",

              
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#161B22] border border-[#30363D] rounded-lg p-4 text-center hover:border-[#F778BA]/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <p className="text-[#8B949E] text-sm leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
