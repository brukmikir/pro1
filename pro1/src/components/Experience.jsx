import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { color, motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import SectionWrap from "../Hoc/SectionWrap";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import { div } from "framer-motion/client";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex w-full justify-center items-center'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-60% h-60% object-contain"
        />
      </div>
    }
  >
    <div className="text-white text-[24px] font-bold">{experience.title}</div>
    <p className="text-[16px] font-semibold text-blue-300 " style={{margin: 0}}>{experience.company_name}</p>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work So Far</p>
        <h3 className={`${styles.sectionHeadText} text-4xl`}>
          Work Experiences.
        </h3>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrap(Experience, "experience");
