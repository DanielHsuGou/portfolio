import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] lg:w-[70%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl md:text-lg">{type}</h3>
        <p className="capitalize font-medium text-dark/75 dark:text-primaryDark/60 my-2 md:text-sm">
          {time} | {place}
        </p>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 md:my-48 sm:my-36">
      <h2 className="font-bold text-8xl lg:text-7xl md:text-6xl sm:text-4xl mb-32 md:mb-16 w-full text-center">
        Education
      </h2>

      <div
        ref={ref}
        className="w-[75%] xl:w-[85%] lg:w-[95%] md:w-full mx-auto relative"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 md:left-6 sm:left-5 md:w-[3px] sm:w-[2px] top-0 w-[4px] h-full bg-dark dark:bg-primaryDark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 md:ml-2">
          <Details
            type="Junior Full Stack Developer Program (Cohort 11)"
            time="2024"
            place="CLAP@JC x Generation"
            info="Took part in a bootcamp tailored for goal-oriented participants entering the IT industry. Demonstrated frontend and backend development. Designed UI and improved UX across various projects."
          />
          <Details
            type="Bachelor of Fine Arts in Animation and Visual Effects"
            time="2013-2017"
            place="Hong Kong Metropolitan University"
            info="Trained in creative design skills, digital visual effects, media production, animation and motion graphics. Understood design principles, color theory, typography and creating visually appealing interfaces."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
