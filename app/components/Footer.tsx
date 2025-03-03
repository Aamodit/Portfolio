import Link from "next/link"
import VisitorCounter from "./VisitorCounter"

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              Aamodit Saini
            </Link>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/aamoditsaini/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Aamodit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              GitHub
            </a>
            <a href="mailto:aamoditsaini@gmail.com" className="hover:text-blue-400 transition-colors cursor-pointer">
              Email
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <VisitorCounter />
          <div className="text-sm text-gray-400 mt-2">
            © {new Date().getFullYear()} Aamodit Saini. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

