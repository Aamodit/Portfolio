"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Share2, Github } from "lucide-react"
import { AnimatedGradient } from "./ui/animated-gradient"

const projects = [
  {
    title: "Serve Easy Website",
    description:
      "A service aggregator platform connecting users with local professionals (plumbers, electricians, laundry services). Integrated with a Telegram bot for real-time updates and bookings. Features secure payment gateways and real-time notifications for an enhanced user experience.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    liveLink: "https://serve-easy.vercel.app/",
    githubLink: "https://github.com/Aamodit/serve-easy",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Telegram API", "Payment Gateway"],
    status: "Under Development",
  },
  {
    title: "Disney Plus Clone",
    description:
      "A visually accurate clone of Disney+, focusing on UI/UX consistency and responsiveness. Built with React.js and Tailwind CSS for a smooth front-end experience. Optimized for cross-device compatibility with dynamic content rendering.",
    image: "https://images.unsplash.com/photo-1643208589884-1aa3a8a67b67?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveLink: "https://aamodit-disney-plus-clone.vercel.app",
    githubLink: "https://github.com/Aamodit/Disney-Plus-Clone",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
  },
  {
    title: "Coming Soon: MERN Stack Project",
    description:
      "An exciting new project leveraging the full MERN (MongoDB, Express.js, React.js, Node.js) stack is in the works. Stay tuned for a powerful and innovative web application!",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    liveLink: "#",
    githubLink: "#",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    status: "Coming Soon",
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">Projects</h2>
          </AnimatedGradient>
          <p className="text-gray-400">Some of the notable projects I've built:</p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="flex flex-col lg:flex-row gap-8 items-center bg-[#1A1A1A] rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
              </motion.div>
              <div className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <motion.h3
                  className="text-2xl font-bold text-white mb-4"
                  whileHover={{ color: "#60A5FA" }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}{" "}
                  {project.status && <span className="text-sm font-normal text-blue-400 ml-2">({project.status})</span>}
                </motion.h3>
                <motion.p
                  className="text-gray-400 mb-6"
                  whileHover={{ color: "#9CA3AF" }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-[#252525] text-gray-300 rounded-full text-sm"
                      whileHover={{ scale: 1.1, backgroundColor: "#3B82F6", color: "#FFFFFF" }}
                      transition={{ duration: 0.3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.liveLink !== "#" && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubLink !== "#" && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub Repo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

