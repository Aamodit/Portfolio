"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Linkedin, Phone, FileText, Github, Send } from "lucide-react"
import { AnimatedGradient } from "./ui/animated-gradient"
import Link from "next/link"

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission without a backend
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitMessage("Thank you for your message. I'll get back to you soon!")
    setFormData({ name: "", email: "", message: "" })
  }

  const contactInfo = [
    { icon: Mail, text: "aamoditsaini@gmail.com", href: "mailto:aamoditsaini@gmail.com" },
    { icon: Linkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/aamodit-saini/", target: "_blank" },
    { icon: Github, text: "GitHub", href: "https://github.com/Aamodit", target: "_blank" },
    { icon: Phone, text: "+91-9179949698", href: "tel:+919179949698" },
  ]

  return (
    <section id="contact" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">Get in Touch</h2>
          </AnimatedGradient>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-[#1A1A1A] border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-[#1A1A1A] border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-[#1A1A1A] border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
            {submitMessage && <p className="mt-4 text-green-400">{submitMessage}</p>}
          </div>
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.target || "_self"}
                rel={item.target ? "noopener noreferrer" : ""}
                className="flex items-center p-4 bg-[#1E1E1E] rounded-lg hover:bg-[#252525] transition-colors duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-6 h-6 mr-4 text-blue-400" />
                <span className="text-white text-lg">{item.text}</span>
              </motion.a>
            ))}
            <Link href="/resume" className="w-full">
              <motion.div
                className="flex items-center justify-center p-4 bg-[#1E1E1E] rounded-lg hover:bg-[#252525] transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-6 h-6 mr-4 text-blue-400" />
                <span className="text-white text-lg">View Resume</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

