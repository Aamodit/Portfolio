"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { AnimatedGradient } from "./ui/animated-gradient"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">About Me</h2>
          </AnimatedGradient>
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            "I'm a B.Tech student in Electronics and Telecommunication Engineering at Jabalpur Engineering College (2022-2026). My academic journey has equipped me with a strong foundation in both web development and embedded systems design.",
            "With experience as a Vocational Trainee at multiple organizations, I've gained practical knowledge in embedded system design, urban automation, and manufacturing processes. I'm passionate about creating innovative solutions that bridge hardware and software.",
            "I'm actively involved in various technical communities and hackathons, constantly exploring new technologies and tools to enhance my skills. I'm excited about the potential of web development and embedded systems to create impactful solutions for real-world problems.",
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-gray-300 mb-6"
              whileHover={{ scale: 1.05, color: "#60A5FA" }}
              transition={{ duration: 0.2 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

