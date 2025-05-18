"use client"

import Spline from "@splinetool/react-spline"
import { TypeAnimation } from "react-type-animation"
import { useState, useEffect } from "react"
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github } from "lucide-react"

export function Spline_AI() {
  return <Spline scene="https://prod.spline.design/9qYTaPUIGzy3vz8g/scene.splinecode" />
}

export function Subtitle() {
  return (
    <div className="h-[28px] overflow-hidden">
      {" "}
      {/* Fixed height container */}
      <TypeAnimation
        sequence={[
          "Built for Doctors. Backed by Tech.", // First sentence
          2000, // Wait 2s
          "", // Clear text
          "Simplifying Medical Workflows", // Second sentence
          2000,
          "",
          "Assisting Doctors. Enhancing Care.",
          2000,
          "",
        ]}
        wrapper="p"
        cursor={true}
        repeat={Number.POSITIVE_INFINITY}
        className="text-lg text-teal-300"
      />
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Medinova</h2>
          <p className="text-sm text-gray-300">&copy; 2025 Medinova. All rights reserved.</p>
          <div className="mt-6 space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-teal-400" />
              <p>123 Health Street, Pune, MH</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-teal-400" />
              <p>contact@medinova.ai</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-teal-400" />
              <p>+91-9876543210</p>
            </div>
          </div>
        </div>

        {/* Column 2 - Product Links */}
        <div>
          <h3 className="font-semibold text-teal-400 mb-4 text-lg">Product</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#" className="hover:text-teal-300 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Admissions</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Diagnosis Help</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Report Summary</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Patient Outcomes</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Company Info */}
        <div>
          <h3 className="font-semibold text-teal-400 mb-4 text-lg">Company</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#" className="hover:text-teal-300 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Why Medinova?</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Blog</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Testimonials</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Careers</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Support & Social */}
        <div>
          <h3 className="font-semibold text-teal-400 mb-4 text-lg">Support</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#" className="hover:text-teal-300 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Contact Us</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Privacy Policy</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Terms of Service</span>
              </a>
            </li>
          </ul>
          <div className="flex space-x-5 mt-6">
            <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const features = [
  {
    title: "AI-Powered Diagnostics",
    subtitle: "for Accurate Results",
    desc: "Advanced algorithms analyze symptoms and medical data to assist doctors in making precise diagnoses.",
    image: "/placeholder.svg?height=600&width=800",
    layout: "large",
  },
  {
    title: "Streamlined Workflows",
    subtitle: "to save valuable time",
    desc: "Automate routine tasks and documentation to let doctors focus more on patient care.",
    image: "/placeholder.svg?height=400&width=600",
    layout: "small",
  },
  {
    title: "Comprehensive Patient Insights",
    subtitle: "",
    desc: "Gain holistic views of patient health with integrated data from multiple sources.",
    image: "/placeholder.svg?height=400&width=600",
    layout: "small",
  },
]

export function KeyFeatures() {
  const [focusedIndex, setFocusedIndex] = useState(null)

  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-teal-400">Key Features</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover how Medinova transforms medical practice with these powerful capabilities
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setFocusedIndex(index)}
            onMouseLeave={() => setFocusedIndex(null)}
            className={`
              rounded-2xl overflow-hidden relative transition-all duration-500 ease-in-out
              ${item.layout === "large" ? "md:col-span-2 md:row-span-2" : ""}
              ${
                focusedIndex === null
                  ? "opacity-100 scale-100"
                  : focusedIndex === index
                    ? "scale-[1.03] z-10 shadow-xl shadow-teal-900/20"
                    : "opacity-50 scale-[0.98]"
              }
              bg-cover bg-center min-h-[300px] flex flex-col justify-end
              border border-gray-800 group
            `}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url(${item.image})`,
            }}
          >
            <div className="p-6 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
              <div className="w-12 h-1 bg-teal-400 mb-4 rounded-full transform origin-left transition-all duration-500 group-hover:w-20"></div>
              <h2 className="text-xl font-bold text-white leading-snug mb-2">
                {item.title} <span className="text-teal-300">{item.subtitle}</span>
              </h2>
              <p className="text-gray-300 mt-2 opacity-0 transform transition-all duration-500 group-hover:opacity-100">
                {item.desc}
              </p>
              {index === 0 && (
                <button className="mt-6 border border-teal-400 text-teal-400 px-5 py-2 text-sm rounded-full hover:bg-teal-400 hover:text-gray-900 transition-colors opacity-0 transform transition-all duration-500 group-hover:opacity-100">
                  Learn more
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const cookie = document.cookie.includes("loggedIn=true")
    setIsLoggedIn(cookie)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-lg px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left - Logo & Links */}
        <div className="flex items-center">
          <div className="text-teal-400 font-bold text-2xl mr-10">Medinova</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium">
              The Team
            </a>
          </div>
        </div>

        {/* Right - Login/Signup or Chat */}
        <div className="hidden md:flex items-center space-x-6">
          {isLoggedIn ? (
            <button className="text-gray-900 bg-teal-400 px-5 py-2 rounded-full hover:bg-teal-500 transition-colors font-medium">
              Open Dashboard
            </button>
          ) : (
            <>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors font-medium">
                Login
              </a>
              <button className="text-gray-900 bg-teal-400 px-5 py-2 rounded-full hover:bg-teal-500 transition-colors font-medium">
                Get Started
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 hover:text-teal-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 mt-4 rounded-lg p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-gray-300 hover:text-teal-400 transition-colors py-2 px-4 rounded-md hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-teal-400 transition-colors py-2 px-4 rounded-md hover:bg-gray-700"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-teal-400 transition-colors py-2 px-4 rounded-md hover:bg-gray-700"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-teal-400 transition-colors py-2 px-4 rounded-md hover:bg-gray-700"
            >
              The Team
            </a>

            <div className="pt-4 border-t border-gray-700">
              {isLoggedIn ? (
                <button className="w-full text-gray-900 bg-teal-400 px-4 py-2 rounded-md hover:bg-teal-500 transition-colors font-medium">
                  Open Dashboard
                </button>
              ) : (
                <div className="flex flex-col space-y-3">
                  <a
                    href="#"
                    className="text-center text-gray-300 hover:text-teal-400 transition-colors py-2 px-4 rounded-md hover:bg-gray-700"
                  >
                    Login
                  </a>
                  <button className="text-gray-900 bg-teal-400 px-4 py-2 rounded-md hover:bg-teal-500 transition-colors font-medium">
                    Get Started
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function What() {
  return (
    <div className="bg-gray-900 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-teal-900/50 text-teal-400 text-sm font-medium mb-4">
            About Medinova
          </div>
          <h2 className="text-4xl font-bold mb-6 text-white">
            What is <span className="text-teal-400">Medinova</span>?
          </h2>
          <div className="w-24 h-1 bg-teal-400 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              Medinova is a cutting-edge AI-powered platform designed specifically for healthcare professionals. It
              bridges the gap between advanced technology and medical expertise, making quality care more accessible,
              efficient, and seamless for doctors and patients alike.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              By automating routine tasks, providing diagnostic assistance, and offering comprehensive patient insights,
              Medinova empowers doctors to focus on what matters most: delivering exceptional care.
            </p>
            <button className="mt-8 border border-teal-400 text-teal-400 px-6 py-3 rounded-full hover:bg-teal-400 hover:text-gray-900 transition-colors font-medium">
              Learn More About Our Mission
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-teal-900/50 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart Documentation</h3>
              <p className="text-gray-400 text-sm">Automated medical records with AI assistance</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-teal-900/50 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Enhanced Security</h3>
              <p className="text-gray-400 text-sm">HIPAA-compliant data protection</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-teal-900/50 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Insights</h3>
              <p className="text-gray-400 text-sm">Instant analysis of patient data</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-teal-900/50 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Team Collaboration</h3>
              <p className="text-gray-400 text-sm">Seamless sharing between specialists</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Heroheader() {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text Section */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-teal-900/50 text-teal-400 text-sm font-medium mb-2">
              AI-Powered Medical Assistant
            </div>
            <h1 className="text-5xl font-bold leading-tight">
              <span className="text-teal-400">Medi</span>nova
            </h1>
            <Subtitle />
            <p className="text-gray-300 mt-4 max-w-lg">
              Empowering healthcare professionals with AI-driven tools that streamline workflows, enhance diagnostic
              accuracy, and improve patient outcomes.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 bg-teal-500 text-gray-900 rounded-full hover:bg-teal-400 transition-colors font-medium">
                Get Started
              </button>
              <button className="px-6 py-3 border border-teal-500 text-teal-400 rounded-full hover:bg-teal-900/30 transition-colors font-medium">
                Watch Demo
              </button>
            </div>
            {/* <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-xs font-medium">
                  MD
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-xs font-medium">
                  RN
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-xs font-medium">
                  PT
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Trusted by <span className="text-teal-400 font-medium">2,000+</span> healthcare professionals
              </p>
            </div> */}
          </div>

          {/* Right Spline iframe Section */}
          <div className="lg:w-1/2 w-full h-[400px] lg:h-[500px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none lg:hidden"></div>
            <Spline_AI />
          </div>
        </div>
      </div>
    </div>
  )
}

export function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Heroheader />
      <What />
      <KeyFeatures />
      <Footer />
    </div>
  )
}
