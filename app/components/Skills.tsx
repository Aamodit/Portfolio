"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { AnimatedGradient } from "./ui/animated-gradient"

const skillGroups = [
  {
    category: "Web Development",
    skills: [
      {
        name: "HTML",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      },
      { name: "CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
      {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "React.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
      { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      {
        name: "Redux",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
      },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      {
        name: "Node.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Mongoose",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      { name: "RESTful APIs", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "JWT", icon: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg" },
      { name: "OAuth", icon: "https://oauth.net/images/oauth-logo-square.png" },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "C", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
      {
        name: "C++",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    category: "Embedded Systems",
    skills: [
      {
        name: "8051",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/embeddedc/embeddedc-original.svg",
      },
      { name: "Keil", icon: "/placeholder.svg?height=48&width=48" },
      { name: "SumulIDE", icon: "/placeholder.svg?height=48&width=48" },
    ],
  },
  {
    category: "Version Control & Deployment",
    skills: [
      { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
      {
        name: "GitHub",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      },
      { name: "Vercel", icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
    ],
  },
]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">Skills</h2>
          </AnimatedGradient>
          <p className="text-gray-400">The skills, tools and technologies I am really good at:</p>
        </motion.div>

        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400">{group.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {group.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 bg-[#1A1A1A] rounded-lg transition-colors"
                  whileHover={{ scale: 1.05, backgroundColor: "#252525" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-12 h-12 mb-3 relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain filter brightness-100 hover:brightness-110 transition-all"
                    />
                  </motion.div>
                  <span className="text-sm text-gray-300 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills

