import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="px-6 py-4 shadow-md fixed w-full top-3 backdrop-blur left-0 right-0 z-50 bg-[#3F78F9]/25 max-w-7xl mx-auto rounded-full">
      <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-between ">
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a href="#" className="flex items-center">
            <img src="/logo.png" alt="PitchMate Logo" title="PitchMate ChatBot" className="flex h-16 items-center"/>
            <p className="text-2xl font-bold text-black ml-3 md:ml-0">PitchMate</p>
          </a>
        </motion.div>
        <nav className="hidden space-x-6 md:flex">
          <a href="#features" className="hover:underline hover:decoration-[#3F78F9] decoration-2 underline-offset-4 text-lg font-semibold">Features</a>
          <a href="#about" className="hover:underline hover:decoration-[#3F78F9] decoration-2 underline-offset-4 text-lg font-semibold">About</a>
          <a href="#contact" className="hover:underline hover:decoration-[#3F78F9] decoration-2 underline-offset-4 text-lg font-semibold">Contact</a>
        </nav>
        <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="cursor-pointer px-4 py-2 text-white bg-[#3F78F9] rounded-full md:block hidden">
          <Link to="/bot">Get Started</Link>
        </motion.button>
      </div>
    </header>
  )
}

export default Header