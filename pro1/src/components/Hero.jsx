import React from "react";
import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { repeat } from "maath/misc";
import Button from "./Button";
import { arrowRight } from "../assets/icons";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

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
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
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
          <Button
            name={"Hire Me"}
            imgUrl={arrowRight}
            backgroundColor={"#915eff"}
            className="mt-10"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>
        <div className="flex flex-col gap-4 ml-65 self-center -mt-25">
          <a href="https://www.instagram.com/senbarok/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-white hover:text-[#915eff] transition-colors cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/mikir-biruk-739229346/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-white hover:text-[#915eff] transition-colors cursor-pointer" />
          </a>
          <a href="https://github.com/brukmikir" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-white hover:text-[#915eff] transition-colors cursor-pointer" />
          </a>
        </div>
        {/* profile image moved to About section */}
      </div>
      <ComputersCanvas />

      <div
        className="absolute xs:bottom-10 bottom-12 w-full
                      flex justify-center items-center "
      >
        <a href="#introduction">
          <div className="w-[42px] h-[64px] rounded-3xl flex justify-center items-center p-2">
            <motion.div
              animate={{ y: [0, 22, 0] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="mb-2 flex items-center justify-center"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.5 11l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
              </svg>
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
