"use client"

import { motion } from "framer-motion"
import { Code } from "lucide-react"
import { Spotlight } from "./ui/spotlight"

const Hero = () => {
  return (
    <Spotlight className="min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Hi, I'm <span className="text-blue-400">Aamodit Saini</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 relative">
            Web Developer & Electronics Engineer
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </h2>
          <p className="text-gray-400 mb-8">
            B.Tech student in Electronics and Telecommunication Engineering at Jabalpur Engineering College. Passionate
            about web development and embedded systems, with experience in building responsive web applications and
            working with microcontrollers.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-transform duration-300 ease-out hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative text-white font-semibold">Get in Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[length:200%_100%] animate-gradient-x" />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
        >
          <Code className="w-48 h-48 text-blue-400" />
        </motion.div>
      </div>
    </Spotlight>
  )
}

export default Hero

