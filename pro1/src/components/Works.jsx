import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import SectionWrap from "../Hoc/SectionWrap";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { div, p } from "framer-motion/client";

const ProjectCard = ({name,description,image,index,tags}) => (
  <Tilt
      className="xs:w-[250px] "
      tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1} transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full  p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="relative rounded-2xl  
                     min-h-[280px] w-[350px] flex  flex-col bg-[#050532]"
        >
          <img src={image} alt="im" className="w-full h-full flex object-contain rounded-2xl"/>
          <div className="absolute inset-0 flex  m-3 card-img_hover justify-end">
            <div onClick={()=>window.open(source_code_Link,"_blank")} className="black-gradient w-10 h-10 flex rounded-full 
                                                                                items-center justify-center cursor-pointer">
                                                                                  <img src={github} alt="git" className="h-1/2 
                                                                                  w-1/2 object-contain" />
            </div>
          </div>

          <div className="mt-5 m-3">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="text-gray-400 text-[16px]">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2 ">
            {tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
              
            ))}
          </div>
          </div>

          
        </div>
      </motion.div>
      
    </Tilt>
)

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h3 className={`${styles.sectionHeadText} text-4xl`}>
          Projects.
        </h3>
      </motion.div>
      <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-5 max-w-3xl text-gray-500 leading-[30px]"
            >
              During my Software Engineering journy i have build projects with JavaScript,
              Python, Java, C++, PHP, and frameworks like React and Laravel. 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Porro quidem maxime necessitatibus aliquam, quod veniam iure error 
              voluptates rem tempore placeat incidunt, itaque excepturi saepe omnis 
              fugiat quam! Dolore, magni.
            </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {projects.map((project,index) => (
          <ProjectCard key={'project-${index}'} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrap(Works, "");
