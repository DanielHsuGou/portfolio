import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaPhp,
  FaWordpress,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiLaravel,
  SiMysql,
  SiMariadb,
  SiWoocommerce,
  SiPrimereact,
} from "react-icons/si";
import { TbWorld, TbApi, TbNetwork } from "react-icons/tb";

const iconClass = "w-5 h-5 md:w-4 md:h-4 sm:w-4 sm:h-4";

const SkillIcon = ({ name }) => {
  switch (name) {
    case "HTML": return <FaHtml5 className={iconClass} />;
    case "CSS": return <FaCss3Alt className={iconClass} />;
    case "Javascript": return <FaJsSquare className={iconClass} />;
    case "ReactJS":
    case "PrimeReact": return <FaReact className={iconClass} />;
    case "NextJS": return <SiNextdotjs className={iconClass} />;
    case "Tailwind CSS": return <SiTailwindcss className={iconClass} />;
    case "MongoDB": return <SiMongodb className={iconClass} />;
    case "Figma": return <FaFigma className={iconClass} />;
    case "Github": return <FaGitAlt className={iconClass} />;
    case "NodeJS": return <FaNodeJs className={iconClass} />;
    case "Express": return <SiExpress className={iconClass} />;
    case "PHP": return <FaPhp className={iconClass} />;
    case "Laravel": return <SiLaravel className={iconClass} />;
    case "MySQL": return <SiMysql className={iconClass} />;
    case "MariaDB": return <SiMariadb className={iconClass} />;
    case "RESTful APIs": return <TbApi className={iconClass} />;
    case "Magento": return <TbNetwork className={iconClass} />;
    case "WordPress": return <FaWordpress className={iconClass} />;
    case "WooCommerce": return <SiWoocommerce className={iconClass} />;
    case "Google Colab": return <TbNetwork className={iconClass} />;
    case "Basic ComfyUI": return <TbNetwork className={iconClass} />;
    default: return null;
  }
};

// 1. DESKTOP: Logically grouped and mathematically placed in perfect circles
const desktopSkills = [
  // --- INNER RING ---
  // Frontend (Right & Bottom)
  { name: "Javascript", x: "0vw", y: "-11vw" },
  { name: "ReactJS", x: "9vw", y: "-9vw" },
  { name: "NextJS", x: "14vw", y: "-3vw" },
  { name: "HTML", x: "14vw", y: "3vw" },
  { name: "CSS", x: "9vw", y: "9vw" },
  { name: "Tailwind CSS", x: "0vw", y: "11vw" },
  { name: "PrimeReact", x: "-9vw", y: "9vw" },
  // Backend (Left)
  { name: "NodeJS", x: "-14vw", y: "3vw" },
  { name: "Express", x: "-14vw", y: "-3vw" },
  { name: "RESTful APIs", x: "-9vw", y: "-9vw" },

  // --- OUTER RING ---
  // Tools & Design (Top)
  { name: "Github", x: "0vw", y: "-20vw" },
  { name: "Figma", x: "16vw", y: "-17vw" },
  { name: "Google Colab", x: "-16vw", y: "-17vw" },
  { name: "Basic ComfyUI", x: "-28vw", y: "-10vw" },
  // Backend (Right)
  { name: "PHP", x: "28vw", y: "-10vw" },
  { name: "Laravel", x: "32vw", y: "0vw" },
  // Database & E-Commerce (Bottom & Left)
  { name: "MySQL", x: "28vw", y: "10vw" },
  { name: "MongoDB", x: "16vw", y: "17vw" },
  { name: "MariaDB", x: "0vw", y: "20vw" },
  { name: "WooCommerce", x: "-16vw", y: "17vw" },
  { name: "Magento", x: "-28vw", y: "10vw" },
  { name: "WordPress", x: "-32vw", y: "0vw" },
];

// 2. MOBILE: Categorized layout
const mobileCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Javascript", "ReactJS", "NextJS", "Tailwind CSS", "PrimeReact"],
  },
  {
    title: "Backend & Database",
    skills: ["NodeJS", "Express", "PHP", "Laravel", "MongoDB", "MySQL", "MariaDB", "RESTful APIs"],
  },
  {
    title: "Tools & E-Commerce",
    skills: ["GitHub", "Figma", "Magento", "WordPress", "WooCommerce", "Google Colab", "Basic ComfyUI"],
  },
];

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark/80 text-light dark:bg-light/90 dark:text-vdark py-3 px-6 shadow-dark dark:shadow-light cursor-pointer absolute gap-2 sm:gap-1
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      <SkillIcon name={name} />
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <h2 className="font-bold text-8xl lg:text-7xl md:text-6xl sm:text-4xl mt-32 w-full text-center">
        Skills
      </h2>

      {isMobile ? (
        /* --- MOBILE VIEW --- */
        <div className="flex flex-col gap-10 px-4 py-12 w-full max-w-lg mx-auto">
          {mobileCategories.map((category) => (
            <div key={category.title} className="flex flex-col items-center">
              <h3 className="text-xl font-bold text-dark dark:text-light mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skillName) => (
                  <div
                    key={skillName}
                    className="flex items-center justify-center rounded-full font-semibold bg-dark/80 text-light dark:bg-light/90 dark:text-vdark py-2 px-4 shadow-dark dark:shadow-light gap-2 text-sm"
                  >
                    <SkillIcon name={skillName} />
                    {skillName}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* --- DESKTOP VIEW --- */
        <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] md:h-[70vh]">
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark/90 dark:bg-vdark text-light p-2 shadow-dark cursor-pointer z-10"
            whileHover={{ scale: 1.05 }}
          >
            <TbWorld className="w-14 h-14 md:w-10 md:h-10" />
          </motion.div>

          {desktopSkills.map((skill) => (
            <Skill key={skill.name} name={skill.name} x={skill.x} y={skill.y} />
          ))}
        </div>
      )}
    </>
  );
};

export default Skills;