"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { AnimatedGradient } from "./ui/animated-gradient"

const experiences = [
  {
    title: "Vocational Trainee - Embedded System Design",
    company: "Crisp Bhopal",
    location: "Bhopal, India",
    period: "June 2024 – July 2024",
    description: [
      "Worked on 8051 microcontroller and other microprocessors, developing firmware for embedded applications.",
      "Designed and simulated sensor interfacing circuits and embedded solutions using Keil and SumulIDE.",
    ],
    tools: "8051 microcontroller, Keil, SumulIDE, Embedded System Design",
  },
  {
    title: "Vocational Trainee",
    company: "Smart City",
    location: "India",
    period: "June 2023 – July 2023",
    description: [
      "Explored urban automation and real-time traffic management systems.",
      "Studied smart parking, solar-powered street lighting, and waste management solutions.",
    ],
    tools: "Urban Automation, Traffic Management Systems, Smart City Solutions",
  },
  {
    title: "Vocational Trainee - Air Defense Gun Shop",
    company: "Gun Carriage Factory",
    location: "India",
    period: "June 2022 – July 2022",
    description: ["Observed manufacturing, assembly, and quality control processes of air defense guns."],
    tools: "Manufacturing Processes, Assembly, Quality Control",
  },
]

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">Work Experience</h2>
          </AnimatedGradient>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="mb-8 bg-[#111111] rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3
                className="text-xl font-semibold text-blue-400 mb-4"
                whileHover={{ color: "#60A5FA" }}
                transition={{ duration: 0.3 }}
              >
                {exp.title}
              </motion.h3>
              <motion.p className="text-gray-300 mb-1" whileHover={{ color: "#9CA3AF" }} transition={{ duration: 0.3 }}>
                {exp.company}
              </motion.p>
              <motion.p
                className="text-sm text-gray-400 mb-4"
                whileHover={{ color: "#D1D5DB" }}
                transition={{ duration: 0.3 }}
              >
                {exp.location} | {exp.period}
              </motion.p>
              <ul className="list-disc pl-5 text-gray-300 mb-4">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    className="mb-2"
                    whileHover={{ color: "#60A5FA", x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.p
                className="text-sm text-gray-400"
                whileHover={{ color: "#9CA3AF" }}
                transition={{ duration: 0.3 }}
              >
                Tools: {exp.tools}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

