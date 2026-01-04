import React from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt';
import SectionWrap from '../Hoc/SectionWrap';


import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import pa from "../assets/images/pa.png";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt
      className="xs:w-[250px] "
      tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1} transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-[#090909] rounded-[20px] py-5 px-12 
                     min-h-[280px] w-[250px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[18px] font-bold text-center mt-4">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div className="mt-2 flex flex-col-reverse lg:flex-row items-center gap-6">
        <div className="flex-1">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h3 className={`${styles.sectionHeadText} text-4xl`}>Overview.</h3>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-5 max-w-3xl text-gray-400 leading-[30px]"
          >
           💻 Passionate software engineering student focused on backend development
⚙️ Experienced with Laravel, Java, and SQL Server for scalable systems
🌐 Familiar with full-stack development, including React for modern user interfaces
🚀 Built job portals, management systems, and cloud-based projects
🔐 Strong in backend logic, RESTful APIs, and database design
🧠 Enjoy solving complex problems with clean, efficient code
🤝 Value teamwork, clarity, and maintainable solutions
🎯 Aspiring backend engineer driven to build impactful products
          </motion.p>
        </div>

        <motion.div
          className="flex-1 flex flex-col justify-center lg:justify-end items-center w-full"
          variants={fadeIn("right", "tween", 0.2, 1)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.div
            className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#915eff] shadow-lg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.9 }}
            whileHover={{ scale: 1.03, rotate: 2 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#915eff]"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            />
            <img src={pa} alt="profile" className="w-full h-full object-cover rounded-full" />
          </motion.div>

          <motion.div
            className="mt-6"
            variants={fadeIn("up", "spring", 0.3, 0.75)}
          >
            <a href="/cv.pdf" download="My_CV.pdf" className="inline-block">
              <button className="px-6 py-3 bg-[#915eff] text-white rounded-full font-semibold hover:bg-[#7c4dff] transition-all duration-300 shadow-lg hover:shadow-xl">
                Download CV
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      
    </>
  )
}

export default SectionWrap(About,"introduction") 
