import Spline from '@splinetool/react-spline';
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import { useEffect } from 'react';

export  function Spline_AI() {
  return (
    <Spline scene="https://prod.spline.design/9qYTaPUIGzy3vz8g/scene.splinecode" />
  );
}

export function Subtitle(){
  return <>
  <TypeAnimation
  sequence={[
    'Built for Doctors. Backed by Tech.', // First sentence
    2000, // Wait 2s
    '', // Clear text
    'Simplifying Medical Workflows', // Second sentence
    2000,
    '',
    'Assisting Doctors. Enhancing Care.',
    2000,
    '',
  ]}
  wrapper="p"
  cursor={true}
  repeat={Infinity}
  className="text-lg text-gray-600"
/>
  </>
}

export function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1 - Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Medinova</h2>
          <p className="text-sm text-gray-400">&copy; 2025 Medinova. All rights reserved.</p>
          <div className="mt-4 space-y-1 text-sm text-gray-400">
            <p><i className="fas fa-map-marker-alt mr-2"></i>123 Health Street, Pune, MH</p>
            <p><i className="fas fa-envelope mr-2"></i>contact@medinova.ai</p>
            <p><i className="fas fa-phone mr-2"></i>+91-9876543210</p>
          </div>
        </div>

        {/* Column 2 - Product Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Product</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Admissions</a></li>
            <li><a href="#" className="hover:text-white">Diagnosis Help</a></li>
            <li><a href="#" className="hover:text-white">Report Summary</a></li>
            <li><a href="#" className="hover:text-white">Patient Outcomes</a></li>
          </ul>
        </div>

        {/* Column 3 - Company Info */}
        <div>
          <h3 className="font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Why Medinova?</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        {/* Column 4 - Support & Social */}
        <div>
          <h3 className="font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
          <div className="flex space-x-4 mt-4 text-white">
            <a href="#"><i className="fab fa-x-twitter hover:text-gray-400"></i></a>
            <a href="#"><i className="fab fa-linkedin hover:text-gray-400"></i></a>
            <a href="#"><i className="fab fa-instagram hover:text-gray-400"></i></a>
            <a href="#"><i className="fab fa-github hover:text-gray-400"></i></a>
          </div>
        </div>

      </div>
    </footer>
  );
}

const features = [
  {
    title: "Driving Global Impact",
    subtitle: "with Seamless Solutions",
    desc: "Connecting the world through innovative strategies and delivering excellence across borders.",
    image: "/path-to-image1.jpg",
    layout: "large",
  },
  {
    title: "Speed Redefined",
    subtitle: "to deliver unmatched efficiency.",
    desc: "Experience unparalleled speed and efficiency to keep you ahead of the curve.",
    image: "/path-to-image2.jpg",
    layout: "small",
  },
  {
    title: "Infinite Opportunities, Limitless Growth",
    subtitle: "",
    desc: "Redefine what's possible—unlock your potential and thrive without limits.",
    image: "/path-to-image3.jpg",
    layout: "small",
  },
];

export  function KeyFeatures() {
  const [focusedIndex, setFocusedIndex] = useState(null);

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setFocusedIndex(index)}
            onMouseLeave={() => setFocusedIndex(null)}
            className={`
              rounded-2xl overflow-hidden relative p-6 transition-all duration-300
              ${item.layout === "large" ? "md:col-span-2 row-span-2" : ""}
              ${
                focusedIndex === null
                  ? "opacity-100 scale-100"
                  : focusedIndex === index
                  ? "scale-[1.02] z-10"
                  : "opacity-30 blur-sm"
              }
              bg-cover bg-center min-h-[300px] flex flex-col justify-end
            `}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="bg-black/50 p-4 rounded-xl backdrop-blur">
              <h2 className="text-xl font-bold text-white leading-snug">
                {item.title}{" "}
                <span className="text-purple-400">{item.subtitle}</span>
              </h2>
              <p className="text-sm text-gray-300 mt-2">{item.desc}</p>
              {index === 0 && (
                <button className="mt-4 border border-white px-4 py-2 text-sm rounded hover:bg-white hover:text-black transition">
                  Discover more
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const cookie = document.cookie.includes('loggedIn=true');
    setIsLoggedIn(cookie);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-3">
      <div className="flex justify-between items-center">
        
        {/* Left - Logo & Links */}
        <div className="flex items-center space-x-6">
          <img src="/logo.png" alt="Medinova_logo" className="h-10 w-auto" />
          <a href="#" className="text-gray-700 hover:text-black">Home</a>
          <a href="#" className="text-gray-700 hover:text-black">Services</a>
          <a href="#" className="text-gray-700 hover:text-black">The Devs</a>
        </div>

        {/* Right - Login/Signup or Chat */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <button className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
              Chat
            </button>
          ) : (
            <>
              <a href="#" className="underline text-gray-700 hover:text-black">Login</a>
              <button className="text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700">
                Signup
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export function What() {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What is Medinova?</h2>
        <p className="text-lg text-gray-300">
          Medinova is a modern solution designed to revolutionize healthcare access and delivery.
          It bridges the gap between technology and medical services, making quality care more accessible, efficient, and seamless for everyone.
        </p>
      </div>
    </div>
  );
}




export default function Heroheader() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 min-h-screen pt-20">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold">Medinova</h1>
        <Subtitle></Subtitle>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          Get Started
        </button>
      </div>

      {/* Right Spline iframe Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Spline_AI></Spline_AI>
      </div>
    </div>
  );
}

