// import { useState } from "react"
import { motion } from 'framer-motion';
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import About from './About'
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="font-sans text-black bg-white scroll-smooth">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      {/* About Section */}
      <About />
      {/* Call to Action */}
      <motion.section className="px-6 py-16 bg-[#3F78F9]" initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to elevate your pitch?
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Get started with PitchMate and make your next pitch your best one yet.
          </p>
          <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="cursor-pointer px-6 py-3 mt-6 text-[#3F78F9] bg-white font-semibold rounded-lg hover:bg-gray-300">
            <Link to="/bot">Start for Free</Link>
          </motion.button>
        </div>
      </motion.section>
      {/* Footer */}
      <footer id="contact" className="px-6 py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-black">&copy; {new Date().getFullYear()} PitchMate. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#3F78F9] text-sm">Facebook</a>
            <a href="#" className="hover:text-[#3F78F9] text-sm">Twitter</a>
            <a href="#" className="hover:text-[#3F78F9] text-sm">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
