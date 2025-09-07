import React from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt';
import SectionWrap from '../Hoc/SectionWrap';


import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h3 className={`${styles.sectionHeadText} text-4xl`}>Overview.</h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 max-w-3xl text-gray-500 leading-[30px]"
      >
        I am a skilled Software Engineer with expertise in JavaScript,
        Python, Java, C++, PHP, and frameworks like React and Laravel. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Porro quidem maxime necessitatibus aliquam, quod veniam iure error 
        voluptates rem tempore placeat incidunt, itaque excepturi saepe omnis 
        fugiat quam! Dolore, magni.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrap(About,"about") 
