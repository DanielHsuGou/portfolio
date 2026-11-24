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
  FaCheckCircle,
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
  SiVuedotjs,
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
    case "VueJS": return <SiVuedotjs className={iconClass} />;
    case "Tailwind CSS": return <SiTailwindcss className={iconClass} />;
    case "MongoDB": return <SiMongodb className={iconClass} />;
    case "Figma": return <FaFigma className={iconClass} />;
    case "GitHub":
    case "Github": return <FaGitAlt className={iconClass} />;
    case "NodeJS": return <FaNodeJs className={iconClass} />;
    case "Express": return <SiExpress className={iconClass} />;
    case "PHP": return <FaPhp className={iconClass} />;
    case "Laravel": return <SiLaravel className={iconClass} />;
    case "MySQL": return <SiMysql className={iconClass} />;
    case "MariaDB": return <SiMariadb className={iconClass} />;
    case "RESTful APIs": return <TbApi className={iconClass} />;
    case "API Validation": return <TbApi className={iconClass} />;
    case "Magento": return <TbNetwork className={iconClass} />;
    case "WordPress": return <FaWordpress className={iconClass} />;
    case "WooCommerce": return <SiWoocommerce className={iconClass} />;
    case "Postman": return <TbNetwork className={iconClass} />;
    case "OracleDB": return <TbNetwork className={iconClass} />;
    case "Manual Testing":
    case "Functional & Regression Testing":
    case "UI/UX & Cross-Browser Testing":
    case "Bug Tracking & Documentation":
    case "Test Case Execution":
    case "UAT Support":
      return <FaCheckCircle className={iconClass} />;
    default: return null;
  }
};

// ---- WEB DEVELOPMENT: DESKTOP CIRCLE ----
const desktopSkills = [
  // INNER RING
  { name: "Javascript", x: "0vw", y: "-11vw" },
  { name: "ReactJS", x: "9vw", y: "-9vw" },
  { name: "NextJS", x: "14vw", y: "-3vw" },
  { name: "HTML", x: "14vw", y: "3vw" },
  { name: "CSS", x: "9vw", y: "9vw" },
  { name: "Tailwind CSS", x: "0vw", y: "11vw" },
  { name: "PrimeReact", x: "-9vw", y: "9vw" },
  { name: "NodeJS", x: "-14vw", y: "3vw" },
  { name: "Express", x: "-14vw", y: "-3vw" },
  { name: "RESTful APIs", x: "-9vw", y: "-9vw" },

  // OUTER RING
  { name: "GitHub", x: "0vw", y: "-20vw" },
  { name: "Figma", x: "16vw", y: "-17vw" },
  { name: "Postman", x: "-16vw", y: "-17vw" },
  { name: "PHP", x: "28vw", y: "-10vw" },
  { name: "Laravel", x: "32vw", y: "0vw" },
  { name: "MySQL", x: "28vw", y: "10vw" },
  { name: "MongoDB", x: "16vw", y: "17vw" },
  { name: "MariaDB", x: "0vw", y: "20vw" },
  { name: "OracleDB", x: "-16vw", y: "17vw" },
  { name: "Magento", x: "-28vw", y: "10vw" },
  { name: "WordPress", x: "-32vw", y: "0vw" },
  { name: "WooCommerce", x: "-28vw", y: "-10vw" },
];

// ---- QA & TESTING: DESKTOP CIRCLE ----
const desktopQaSkills = [
  { name: "Manual Testing", x: "0vw", y: "-22vw" },
  { name: "Functional & Regression Testing", x: "17vw", y: "-14vw" },
  { name: "Bug Tracking & Documentation", x: "21vw", y: "5vw" },
  { name: "API Validation", x: "10vw", y: "20vw" },
  { name: "UAT Support", x: "-10vw", y: "20vw" },
  { name: "Test Case Execution", x: "-21vw", y: "5vw" },
  { name: "UI/UX & Cross-Browser Testing", x: "-17vw", y: "-14vw" },
];

// ---- MOBILE: WEB DEV CATEGORIES ----
const mobileCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Javascript", "ReactJS", "NextJS", "VueJS", "Tailwind CSS", "PrimeReact"],
  },
  {
    title: "Backend & Database",
    skills: ["NodeJS", "Express", "PHP", "Laravel", "MongoDB", "MySQL", "MariaDB", "OracleDB", "RESTful APIs"],
  },
  {
    title: "Tools & E-Commerce",
    skills: ["GitHub", "Postman", "Figma", "Magento", "WordPress", "WooCommerce"],
  },
];

// ---- MOBILE: QA SKILLS LIST ----
const qaSkillsList = [
  "Manual Testing",
  "Functional & Regression Testing",
  "UI/UX & Cross-Browser Testing",
  "API Validation",
  "Bug Tracking & Documentation",
  "Test Case Execution",
  "UAT Support",
];

const Skill = ({ name, x, y, small }) => {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-full font-semibold bg-dark/80 text-light dark:bg-light/90 dark:text-vdark shadow-dark dark:shadow-light cursor-pointer absolute gap-2 sm:gap-1
      ${
        small
          ? "py-1.5 px-3 text-[10px] md:text-[10px]"
          : "py-3 px-6 lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3"
      }`}
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

      {/* ================= WEB DEVELOPMENT ================= */}
      <div className="w-full max-w-6xl mx-auto mt-10">
        <h3 className="text-center text-4xl lg:text-3xl md:text-2xl font-bold text-dark dark:text-light mb-8">
          Web Development
        </h3>

        {isMobile ? (
          <div className="flex flex-col gap-10 px-4 py-6 w-full max-w-lg mx-auto">
            {mobileCategories.map((category) => (
              <div key={category.title} className="flex flex-col items-center">
                <h4 className="text-lg font-bold text-dark dark:text-light mb-3">
                  {category.title}
                </h4>
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
          <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] md:h-[70vh]">
            <motion.div
              className="flex items-center justify-center rounded-full font-semibold bg-dark/90 dark:bg-vdark text-light p-2 shadow-dark cursor-pointer z-10"
              whileHover={{ scale: 1.05 }}
            >
              <TbWorld className="w-14 h-14 md:w-10 md:h-10" />
            </motion.div>

            {desktopSkills.map((skill) => (
              <Skill
                key={skill.name}
                name={skill.name}
                x={skill.x}
                y={skill.y}
              />
            ))}
          </div>
        )}
      </div>

      {/* ================= QA & TESTING COMPETENCIES ================= */}
      <div className="w-full max-w-6xl mx-auto mt-16 mb-10">
        <h3 className="text-center text-4xl lg:text-3xl md:text-2xl font-bold text-dark dark:text-light mb-8">
          QA &amp; Testing Competencies
        </h3>

        {isMobile ? (
          <div className="flex flex-wrap justify-center gap-3 px-4">
            {qaSkillsList.map((skillName) => (
              <div
                key={skillName}
                className="flex items-center justify-center rounded-full font-semibold bg-dark/80 text-light dark:bg-light/90 dark:text-vdark py-2 px-4 shadow-dark dark:shadow-light gap-2 text-sm"
              >
                <SkillIcon name={skillName} />
                {skillName}
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] md:h-[70vh]">
            <motion.div
              className="flex items-center justify-center rounded-full font-semibold bg-dark/90 dark:bg-vdark text-light p-2 shadow-dark cursor-pointer z-10"
              whileHover={{ scale: 1.05 }}
            >
              <FaCheckCircle className="w-14 h-14 md:w-10 md:h-10" />
            </motion.div>

            {desktopQaSkills.map((skill) => (
              <Skill
                key={skill.name}
                name={skill.name}
                x={skill.x}
                y={skill.y}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Skills;