import React from "react";
import { useState, useEffect } from "react";


import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { repeat } from "maath/misc";
import pa from "../assets/images/pa.png";
import Button from "./Button";
import { arrowRight } from '../assets/icons'

const Hero = () => {
  const roles = ["Full Stack Developer", "Backend Dev", "React + Laravel Dev"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi,i'm <span className="text-[#915eff]">Biruk</span>
          </h1>

          <div className="relative h-[60px] overflow-hidden mt-2">
            <AnimatePresence mode="wait">
              <motion.h1
                key={roles[index]}
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute w-full text-6xl font-bold text-[white] text-left"
                style={{ transformOrigin: "50% 50% -20px" }} // 3D depth
              >
                {roles[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <p className={`${styles.heroSubText} mt-2 text-white-100 mb-10`}>
            I develope Softwares,User <br /> interfaces and Web applications
          </p>
        <Button name={'Hire Me'} imgUrl={arrowRight} backgroundColor={'#915eff'} className='mt-10'/>
        </div>
        <motion.div
        className="relative w-74 h-74 rounded-full overflow-hidden border-4 border-[#915eff] shadow-lg ml-50 mt-7"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, duration: 1 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        {/* animated glow around image */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#915eff] animate-pulse"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        />
        <img
          src={pa}
          alt="profile"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>
      </div>
      <ComputersCanvas />

      <div
        className="absolute xs:bottom-10 bottom-12 w-full
                      flex justify-center items-center " >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl
                                         border-4 border-secondary flex
                                         justify-center items-center p-2"
          >
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-2 "
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
