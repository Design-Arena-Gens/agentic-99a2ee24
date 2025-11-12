"use client";

import { motion } from "framer-motion";
import { FaReact, FaAngular, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiRedux } from "react-icons/si";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const skills = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Angular", icon: FaAngular, color: "#DD0031" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      tech: "React, Redux, TypeScript",
      description: "Built a scalable e-commerce platform with advanced state management and real-time inventory updates.",
      highlights: ["Reduced load time by 40%", "Managed state for 10K+ products", "Implemented SSR"]
    },
    {
      title: "Enterprise Dashboard",
      tech: "Angular, RxJS, Material UI",
      description: "Developed a comprehensive dashboard for data visualization and analytics with reactive programming.",
      highlights: ["Real-time data streams", "Complex forms validation", "Role-based access control"]
    },
    {
      title: "Social Media App",
      tech: "Next.js, React, Tailwind CSS",
      description: "Created a modern social platform with server-side rendering and optimized performance.",
      highlights: ["10K+ active users", "Infinite scroll", "Image optimization"]
    },
    {
      title: "Project Management Tool",
      tech: "Angular, NgRx, Firebase",
      description: "Built a collaborative project management system with real-time updates and team collaboration features.",
      highlights: ["Drag-and-drop UI", "Real-time sync", "Offline support"]
    }
  ];

  const experience = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      achievements: [
        "Led migration from Angular to React for main product",
        "Improved Core Web Vitals scores by 35%",
        "Mentored 3 junior developers"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Digital Innovations Ltd.",
      period: "2022 - 2023",
      achievements: [
        "Developed 15+ responsive web applications",
        "Implemented CI/CD pipelines with 100% test coverage",
        "Reduced bundle size by 45% through optimization"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Frontend Developer
            </h1>
            <p className="text-3xl md:text-4xl gradient-text font-semibold mb-8">
              React & Angular Specialist
            </p>
            <p className="text-xl md:text-2xl text-light mb-12 max-w-3xl mx-auto">
              3 years of experience crafting high-performance, scalable web applications
              with modern frameworks and best practices
            </p>
            <div className="flex gap-6 justify-center text-3xl">
              <a href="#" className="hover:text-primary transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-dark/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center gap-4 p-6 rounded-lg bg-dark/80 card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <skill.icon style={{ color: skill.color }} className="text-6xl" />
                <span className="text-lg font-semibold">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="border-l-4 border-primary pl-8 py-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                <p className="text-primary text-xl mb-2">{exp.company}</p>
                <p className="text-light mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-light flex items-start">
                      <span className="text-primary mr-2">▹</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-dark/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-dark/80 p-8 rounded-lg border border-light/10 card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-primary mb-4">{project.tech}</p>
                <p className="text-light mb-6">{project.description}</p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-light mb-8">
              Available for freelance projects and full-time opportunities
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-primary text-dark font-bold text-lg rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-light/10">
        <div className="max-w-6xl mx-auto text-center text-light">
          <p>© 2025 Frontend Developer Portfolio. Built with React & Next.js</p>
        </div>
      </footer>
    </main>
  );
}
