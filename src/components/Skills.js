import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { TbWorld } from "react-icons/tb";

const Skill = ({ name, x, y }) => {
  const getIcon = () => {
    switch (name) {
      case "HTML":
        return <FaHtml5 className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4" />;
      case "CSS":
        return <FaCss3Alt className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4" />;
      case "Javascript":
        return <FaJsSquare className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4" />;
      case "ReactJS":
        return <FaReact className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4" />;
      case "NextJS":
        return <SiNextdotjs className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4" />;
      case "Tailwind CSS":
        return (
          <SiTailwindcss className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4" />
        );
      case "MongoDB":
        return <SiMongodb className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4" />;
      case "Figma":
        return <FaFigma className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4" />;
      case "Github":
        return <FaGitAlt className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4" />;
      case "NodeJS":
        return <FaNodeJs className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4" />;
      case "Express":
        return <SiExpress className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4" />;
      default:
        return null;
    }
  };
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark/80 text-light dark:bg-light/90 dark:text-vdark py-3 px-6 shadow-dark dark:shadow-light cursor-pointer absolute gap-2 sm:gap-1
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-light xs:dark:bg-vdark xs:p-0
      xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      {getIcon()}
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl lg:text-7xl md:text-6xl sm:text-4xl mt-32 w-full text-center">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] md:h-[70vh] sm:h-[60vh] xs:h-[50vh]
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark/90 dark:bg-vdark text-light p-2 shadow-dark cursor-pointer z-10
          xs:text-xs xs:p-1"
          whileHover={{ scale: 1.05 }}
        >
          <TbWorld className="w-14 h-14 md:w-10 md:h-10 xs:w-8 xs:h-8" />
        </motion.div>

        <Skill name="HTML" x="-17vw" y="-5vw" />
        <Skill name="CSS" x="-2vw" y="-13vw" />
        <Skill name="Javascript" x="16vw" y="-7vw" />
        <Skill name="ReactJS" x="-8vw" y="10vw" />
        <Skill name="NextJS" x="15vw" y="7vw" />
        <Skill name="Tailwind CSS" x="25vw" y="18vw" />
        <Skill name="MongoDB" x="-35vw" y="7vw" />
        <Skill name="Figma" x="37vw" y="1vw" />
        <Skill name="Github" x="-22vw" y="-18vw" />
        <Skill name="NodeJS" x="-22vw" y="22vw" />
        <Skill name="Express" x="25vw" y="-18vw" />
      </div>
    </>
  );
};

export default Skills;
