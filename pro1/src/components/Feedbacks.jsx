import React from "react";
import { motion } from "framer-motion";
import SectionWrap from "../Hoc/SectionWrap";
import { styles } from "../styles";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { div } from "framer-motion/client";

const FeedbacksCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-[#020823] p-10 rounded-3xl xs:w-[320px] w-[280px]"
  >
    <p className="text-white font-black text-[48px]">&ldquo;</p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-3">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
        
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-[#050532] rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={`${styles.sectionHeadText} text-white`}>
            Testimonials.
          </h2>
        </motion.div>

        <div
          className={`${styles.paddingX} mt-20 pb-14 flex flex-row flex-wrap gap-7`}
        >
          {testimonials.map((testimonial, index) => (
            <FeedbacksCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrap(Feedbacks, "feedbacks");
