
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import { z } from 'zod';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
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
        {/* <div className="space-y-1">
          <div><span className="text-[#F778BA]">const</span> <span className="text-[#58A6FF]">mySkills</span> = &#123;</div>
          <div className="ml-2"><span className="text-[#F778BA]">frontend:</span> <span className="text-green-400">['Next.js']</span>,</div>
          <div className="ml-2"><span className="text-[#F778BA]">backend:</span> <span className="text-green-400">['Node.js', 'Express.js']</span>,</div>
          <div className="ml-2"><span className="text-[#F778BA]">database:</span> <span className="text-green-400">['MongoDB', 'SQL']</span></div>
          <div>&#125;;</div>
        </div> */}
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


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    subject: z.string().min(2, 'Subject is required'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  // Custom handleSubmit for validation and Basin integration
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const newErrors: { [key: string]: string } = {};
      Object.entries(fieldErrors).forEach(([key, val]) => {
        if (val && val[0]) newErrors[key] = val[0];
      });
      setErrors(newErrors);
      return;
    }
    setErrors({});
    // Submit to Basin using a hidden form submit
    (e.target as HTMLFormElement).submit();
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "kiranm1102@gmail.com",
      href: "mailto:kiranm1102@gmail.com",
      color: "#58A6FF"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 9739896965",
      href: "tel:+919739896965",
      color: "#F778BA"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Bengaluru, India",
      href: "#",
      color: "#58A6FF"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      href: "https://github.com/Kiran0511",
      color: "#C9D1D9"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      href: "https://linkedin.com/in/kiran-m-a3b52a274",
      color: "#0077B5"
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
  <section id="contact" className="py-20 bg-[#0D1117] relative overflow-hidden">
  {skillsBackground}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className="text-[#58A6FF]">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#58A6FF] to-[#F778BA] mx-auto mb-6"></div>
            <p className="text-[#8B949E] max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and innovation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="bg-[#0D1117] p-8 rounded-2xl border border-[#58A6FF]/20 mb-8"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(88, 166, 255, 0.1)" }}
              >
                <h3 className="text-2xl font-bold text-[#C9D1D9] mb-6 flex items-center">
                  <MessageCircle size={28} className="mr-3 text-[#F778BA]" />
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      className="flex items-center p-4 bg-[#161B22] rounded-xl border border-[#58A6FF]/10 hover:border-[#58A6FF]/30 transition-all duration-300 group"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <motion.div
                        className="p-3 rounded-lg mr-4"
                        style={{ backgroundColor: info.color + "20" }}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div style={{ color: info.color }}>
                          {info.icon}
                        </div>
                      </motion.div>
                      <div>
                        <h4 className="text-[#C9D1D9] font-semibold mb-1">{info.title}</h4>
                        <p className="text-[#8B949E] group-hover:text-[#58A6FF] transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="bg-[#0D1117] p-8 rounded-2xl border border-[#58A6FF]/20"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(88, 166, 255, 0.1)" }}
              >
                <h3 className="text-xl font-bold text-[#C9D1D9] mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-[#161B22] rounded-xl border border-[#58A6FF]/20 hover:border-[#58A6FF]/40 transition-all duration-300 group"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -5,
                        borderColor: social.color
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div style={{ color: social.color }} className="group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <motion.form
                action="https://usebasin.com/f/cbb1149203d9"
                method="POST"
                onSubmit={handleSubmit}
                className="bg-[#0D1117] p-8 rounded-2xl border border-[#58A6FF]/20"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(88, 166, 255, 0.1)" }}
              >
                <h3 className="text-2xl font-bold text-[#C9D1D9] mb-6">Send Message</h3>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="name" className="block text-[#C9D1D9] mb-2 font-semibold">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#161B22] border border-[#58A6FF]/20 rounded-lg text-[#C9D1D9] placeholder-[#8B949E] focus:border-[#58A6FF] focus:outline-none transition-colors"
                        placeholder="Your Name"
                        whileFocus={{ scale: 1.02, borderColor: "#58A6FF" }}
                      />
                      {errors.name && (
                        <div className="text-[#F778BA] text-sm mt-1">{errors.name}</div>
                      )}
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="email" className="block text-[#C9D1D9] mb-2 font-semibold">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#161B22] border border-[#58A6FF]/20 rounded-lg text-[#C9D1D9] placeholder-[#8B949E] focus:border-[#58A6FF] focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                        whileFocus={{ scale: 1.02, borderColor: "#58A6FF" }}
                      />
                      {errors.email && (
                        <div className="text-[#F778BA] text-sm mt-1">{errors.email}</div>
                      )}
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="subject" className="block text-[#C9D1D9] mb-2 font-semibold">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#161B22] border border-[#58A6FF]/20 rounded-lg text-[#C9D1D9] placeholder-[#8B949E] focus:border-[#58A6FF] focus:outline-none transition-colors"
                      placeholder="What's this about?"
                      whileFocus={{ scale: 1.02, borderColor: "#58A6FF" }}
                    />
                    {errors.subject && (
                      <div className="text-[#F778BA] text-sm mt-1">{errors.subject}</div>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="message" className="block text-[#C9D1D9] mb-2 font-semibold">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-[#161B22] border border-[#58A6FF]/20 rounded-lg text-[#C9D1D9] placeholder-[#8B949E] focus:border-[#58A6FF] focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project or just say hello!"
                      whileFocus={{ scale: 1.02, borderColor: "#58A6FF" }}
                    />
                    {errors.message && (
                      <div className="text-[#F778BA] text-sm mt-1">{errors.message}</div>
                    )}
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-[#58A6FF] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1F6FEB] transition-colors duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </motion.button>
                </div>
              </motion.form>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center border-t border-[#58A6FF]/20 pt-8"
          >
            <p className="text-[#8B949E] mb-4">
              © 2025 Kiran M All Rights Reserved.
            </p>
            {/* <motion.div
              className="flex justify-center space-x-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {["❤️", "⚡", "🚀"].map((emoji, index) => (
                <motion.span
                  key={emoji}
                  className="text-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
