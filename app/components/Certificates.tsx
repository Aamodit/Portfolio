"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, ExternalLink } from "lucide-react"
import { AnimatedGradient } from "./ui/animated-gradient"

const certificates = [
  {
    title: "eLSI: Basics of Embedded Systems and Robotics with Merit",
    issuer: "e-YANTRA IIT Bombay",
    link: "https://drive.google.com/file/d/1Y42BjDozjeQQmbXwqwV8BmN5GFpKzU4B/view?usp=drive_link",
  },
  {
    title: "Data Science for Engineers",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/18nDNzlvhmvP2r-uJDy4sryFW7GhpqvCb/view?usp=drive_link",
  },
  {
    title: "Programming, Data Structures and Algorithms using Python",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1qPp7PHAqmi4yW0UB8Zjux1MkYIOAVymi/view?usp=drive_link",
  },
  {
    title: "C, C++, DSA Course",
    issuer: "Sameer Classes (Ideal Management Group)",
    link: "https://drive.google.com/file/d/1El8Kw7m01ppDtjO4Vk3uVkWoOPO8Cc6j/view?usp=drive_link",
  },
]

const activities = [
  "Student Coordinator @ eLSI Lab, IIT Bombay",
  "Core Team @ ACM-JEC, GDSC-JEC, JLUG-JEC",
  "Organizing Team & Branch Representative @ TEDxJEC (2024)",
  "Hackathon Finalist @ LNM Hacks 7.0 (2025), HackJEC (SIH College Round) (2024)",
  "Volunteer @ TIESD (National Conference) (2024)",
]

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certificates" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">Certificates & Activities</h2>
          </AnimatedGradient>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-6">Relevant Certificates</h3>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1A1A1A] p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: "#252525" }}
                >
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-white">{cert.title}</h4>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </div>
                    {cert.link && (
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-blue-400"
                        whileHover={{ scale: 1.2 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-6">Extracurricular Activities</h3>
            <div className="bg-[#1A1A1A] p-4 rounded-lg">
              <ul className="space-y-3">
                {activities.map((activity, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ color: "#60A5FA", x: 5 }}
                  >
                    <span className="text-blue-400 mr-2">•</span>
                    {activity}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates

