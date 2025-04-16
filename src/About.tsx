import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.section id="about" className="px-6 py-20" initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    viewport={{ once: true }}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Empowering Founders</h2>
        <p className="mt-6 text-lg text-gray-600">
          PitchMate is designed to give founders, entrepreneurs, and innovators the tools
          they need to communicate their vision confidently and clearly. Whether you're
          preparing for your first investor meeting or launching your tenth product,
          PitchMate has your back.
        </p>
      </div>
    </motion.section>
  )
}

export default About