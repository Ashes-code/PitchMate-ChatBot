import { useState } from "react"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [showAssistant, setShowAssistant] = useState(false);
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="relative max-w-7xl mx-auto flex flex-col-reverse items-center justify-between px-6 py-16 space-y-10 md:flex-row md:space-y-0 md:py-24 md:mt-10 md:h-screen">
        <div className="w-full md:w-1/2 mt-10">
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl text-gray-900">
            Perfect Your Pitch with <span className="text-[#3F78F9]">PitchMate</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            AI-powered assistant to help entrepreneurs craft compelling pitches and proposals.
          </p>
          <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="cursor-pointer px-6 py-3 mt-6 text-white bg-[#3F78F9] rounded-lg">
            <Link to="/bot">Try It Now</Link>
          </motion.button>
        </div>
        <div className="w-full md:w-1/2 flex justify-end mt-16 md:mt-0">
          <img
            src="/hero.png"
            alt="Hero Illustration"
            className=""
            title="PitchMate"
          />
        </div>
        <div className="max-w-7xl">
          <a href="">
          {showAssistant && (
            <p className="fixed bottom-10 right-28 bg-[#3F78F9] text-white rounded-lg font-bold text-xs py-3 px-4 transition-all duration-300 ease-in-out">
              PitchMate assistant is here for you
            </p>
          )} 
          <Link to="/bot">
            <img src="/logo.png" alt="PitchMate ChatBot" onMouseEnter={() => setShowAssistant(true)} onMouseLeave={() => setShowAssistant(false)} className="fixed cursor-pointer bottom-[-6px] right-20 h-14" />
          </Link>
          </a>
        </div>
      </motion.section>
  )
}

export default Hero