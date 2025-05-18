"use client"

import { TypeAnimation } from "react-type-animation"
import { useState, useEffect } from "react"
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github } from "lucide-react"

export function Subtitle() {
  return (
    <div className="h-[28px] overflow-hidden">
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
        className="text-lg text-[#5E54CC] font-medium"
      />
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#EAE7F9] text-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-6  md:grid-cols-3 gap-12 flex justify-between">
        {/* Column 1 - Brand Info */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-extrabold text-[#5E54CC] mb-3">Medinova</h2>
          <p className="text-sm font-medium text-gray-700 mb-6">
            &copy; 2025 Medinova. All rights reserved.
          </p>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#C36B8C]" />
              <p>IIIT Nagpur, Hostel Block A, Nagpur</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#C36B8C]" />
              <p>pradyumn17.iiitn@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#C36B8C]" />
              <p>+91-8080792138</p>
            </div>
          </div>
        </div>

        {/* Columns 2 and 3 */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Column 2 - Company Info */}
          <div>
            <h3 className="font-semibold text-[#5E54CC] mb-4 text-lg">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-[#C36B8C] transition-colors flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Why Medinova?</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C36B8C] transition-colors flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C36B8C] transition-colors flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Testimonials</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C36B8C] transition-colors flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Careers</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Support & Social */}
          <div>
            <h3 className="font-semibold text-[#5E54CC] mb-4 text-lg">Support</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-[#C36B8C] transition-colors flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C36B8C] transition-colors flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C36B8C] transition-colors flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Terms of Service</span>
                </a>
              </li>
            </ul>
            <div className="flex space-x-5 mt-6">
              <a href="#" className="text-gray-600 hover:text-[#5E54CC] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#5E54CC] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#5E54CC] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#5E54CC] transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const features = [
  {
    title: "AI-Powered Diagnostics",
    subtitle: "for Accurate Results",
    desc: "Advanced algorithms analyze symptoms and medical data to assist doctors in making precise diagnoses.",
    image: "key_feature1.png",
    layout: "large",
  },
  {
    title: "Streamlined Workflows",
    subtitle: "to save valuable time",
    desc: "Automate routine tasks and documentation to let doctors focus more on patient care.",
    image: "k2.svg",
    layout: "small",
  },
  {
    title: "Comprehensive Patient Insights",
    subtitle: "",
    desc: "Gain holistic views of patient health with integrated data from multiple sources.",
    image: "k3.jpg",
    layout: "small",
  },
]

export function KeyFeatures() {
  const [focusedIndex, setFocusedIndex] = useState(null)

  return (
    <section className="bg-white text-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#5E54CC]">Key Features</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
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
                    ? "scale-[1.03] z-10 shadow-xl shadow-[#5E54CC]/10"
                    : "opacity-70 scale-[0.98]"
              }
              bg-cover bg-center min-h-[300px] flex flex-col justify-end
              border border-[#EAE7F9] group
            `}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(94,84,204,0.8)), url(${item.image})`,
            }}
          >
            <div className="p-6 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
              <div className="w-12 h-1 bg-[#C36B8C] mb-4 rounded-full transform origin-left transition-all duration-500 group-hover:w-20"></div>
              <h2 className="text-xl font-bold text-white leading-snug mb-2">
                {item.title} <span className="text-[#EAE7F9]">{item.subtitle}</span>
              </h2>
              <p className="text-white/90 mt-2 opacity-0 transform transition-all duration-500 group-hover:opacity-100">
                {item.desc}
              </p>
              {index === 0 && (
                <button className="mt-6 border border-white text-white px-5 py-2 text-sm rounded-full hover:bg-white hover:text-[#5E54CC] transition-colors opacity-0 transform transition-all duration-500 group-hover:opacity-100">
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
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left - Logo & Links */}
        <div className="flex items-center">
          <div className="text-[#5E54CC] font-bold text-2xl mr-10">Medinova</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#5E54CC] transition-colors text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-[#5E54CC] transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-[#5E54CC] transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#" className="text-gray-700 hover:text-[#5E54CC] transition-colors text-sm font-medium">
              The Team
            </a>
          </div>
        </div>

        {/* Right - Login/Signup or Chat */}
        <div className="hidden md:flex items-center space-x-6">
          {isLoggedIn ? (
            <button className="text-white bg-[#5E54CC] px-5 py-2 rounded-full hover:bg-[#4A43A3] transition-colors font-medium">
              Open Dashboard
            </button>
          ) : (
            <>
              <a href="/login" className="text-gray-700 hover:text-[#5E54CC] transition-colors font-medium">
                Login
              </a>
              <a
                href="/signup"
                className="text-white bg-[#5E54CC] px-5 py-2 rounded-full hover:bg-[#4A43A3] transition-colors font-medium"
              >
                Get Started
              </a>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 hover:text-[#5E54CC]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#EAE7F9] mt-4 rounded-lg p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-gray-700 hover:text-[#5E54CC] transition-colors py-2 px-4 rounded-md hover:bg-white"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#5E54CC] transition-colors py-2 px-4 rounded-md hover:bg-white"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#5E54CC] transition-colors py-2 px-4 rounded-md hover:bg-white"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#5E54CC] transition-colors py-2 px-4 rounded-md hover:bg-white"
            >
              The Team
            </a>

            <div className="pt-4 border-t border-[#B4898A]/30">
              {isLoggedIn ? (
                <button className="w-full text-white bg-[#5E54CC] px-4 py-2 rounded-md hover:bg-[#4A43A3] transition-colors font-medium">
                  Open Dashboard
                </button>
              ) : (
                <div className="flex flex-col space-y-3">
                  <a
                    href="/login"
                    className="text-center text-gray-700 hover:text-[#5E54CC] transition-colors py-2 px-4 rounded-md hover:bg-white"
                  >
                    Login
                  </a>
                  <a
                    href="/signup"
                    className="text-center text-white bg-[#5E54CC] px-4 py-2 rounded-md hover:bg-[#4A43A3] transition-colors font-medium"
                  >
                    Get Started
                  </a>
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
    <div className="bg-[#EAE7F9] text-gray-800 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#5E54CC]/10 text-[#5E54CC] text-sm font-medium mb-4">
            About Medinova
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            What is <span className="text-[#5E54CC]">Medinova</span>?
          </h2>
          <div className="w-24 h-1 bg-[#C36B8C] mx-auto rounded-full mb-8"></div>
        </div>

        {/* Wide single card */}
        <div className="bg-white p-10 rounded-3xl border border-[#B4898A]/20 shadow-2xl max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Medinova is a cutting-edge AI-powered platform designed specifically for healthcare professionals. It
            bridges the gap between advanced technology and medical expertise, making quality care more accessible,
            efficient, and seamless for doctors and patients alike.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            By automating routine tasks, providing diagnostic assistance, and offering comprehensive patient insights,
            Medinova empowers doctors to focus on what matters most: delivering exceptional care.
          </p>
          <button className="mt-8 border border-[#5E54CC] text-[#5E54CC] px-6 py-3 rounded-full hover:bg-[#5E54CC] hover:text-white transition-colors font-medium">
            Learn More About Our Mission
          </button>
        </div>
      </div>
    </div>
  );
}


export default function Heroheader() {
  return (
    <div className="bg-white text-gray-800 min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text Section */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#5E54CC]/10 text-[#5E54CC] text-sm font-medium mb-2">
              AI-Powered Medical Assistant
            </div>
            <h1 className="text-5xl font-bold leading-tight">
              <span className="text-[#5E54CC]">Medi</span>nova
            </h1>
            <Subtitle />
            <p className="text-gray-600 mt-4 max-w-lg">
              Empowering healthcare professionals with AI-driven tools that streamline workflows, enhance diagnostic
              accuracy, and improve patient outcomes.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/signup"
                className="px-6 py-3 bg-[#5E54CC] text-white rounded-full hover:bg-[#4A43A3] transition-colors font-medium"
              >
                Get Started
              </a>
              <button className="px-6 py-3 border border-[#C36B8C] text-[#C36B8C] rounded-full hover:bg-[#C36B8C]/10 transition-colors font-medium">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 w-full h-[400px] lg:h-[500px] relative flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-[#5E54CC]/10 rounded-full"></div>
            <img
              src="heroheader.svg"
              alt="Medical assistant illustration"
              className="relative z-10 w-auto h-auto max-h-full max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Heroheader />
      <What />
      <KeyFeatures />
      <Footer />
    </div>
  )
}
