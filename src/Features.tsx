import { motion } from 'framer-motion'

const Features = () => {
  return (
    <motion.section id="features" className="px-6 py-20 bg-gray-50 md:py-20" initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
    viewport={{ once: true }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 md:text-4xl md:mb-20">
          Why PitchMate?
        </h2>
        <div className="grid gap-10 mt-12 md:grid-cols-3">
          <motion.div className="p-6 bg-white rounded-lg shadow hover:shadow-lg" initial={{ opacity: 0, y: -30, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}>
            <h3 className="text-xl font-semibold text-[#3F78F9]">AI Coach</h3>
            <p className="mt-2 text-gray-600">
              Practice pitches and receive instant feedback powered by advanced AI.
            </p>
          </motion.div>
          <motion.div className="p-6 bg-white rounded-lg shadow hover:shadow-lg" initial={{ opacity: 0, y: -30, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}>
            <h3 className="text-xl font-semibold text-[#3F78F9]">Pitch Templates</h3>
            <p className="mt-2 text-gray-600">
              Access pitch deck templates for investors, customers, and more.
            </p>
          </motion.div>
          <motion.div className="p-6 bg-white rounded-lg shadow hover:shadow-lg" initial={{ opacity: 0, y: -30, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}>
            <h3 className="text-xl font-semibold text-[#3F78F9]">Speech Enhancer</h3>
            <p className="mt-2 text-gray-600">
              Improve tone, clarity, and confidence with our enhancement tools.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Features