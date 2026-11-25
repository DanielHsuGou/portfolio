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
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaMicrosoft, // <-- added for Microsoft Office center
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

/* ------------------------------------------------------------------ */
/*  Inline SVG badges for Adobe apps (Ps / Ai / Ae / Pr)               */
/* ------------------------------------------------------------------ */
const AdobeBadge = ({ label }) => (
  <svg className={iconClass} viewBox="0 0 24 24" role="img" aria-label={label}>
    <rect x="0" y="0" width="24" height="24" rx="5" fill="currentColor" opacity="0.25" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="10"
      fontWeight="700"
      fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
      fill="currentColor"
    >
      {label}
    </text>
  </svg>
);

const IconPhotoshop = () => <AdobeBadge label="Ps" />;
const IconIllustrator = () => <AdobeBadge label="Ai" />;
const IconAfterEffects = () => <AdobeBadge label="Ae" />;
const IconPremierePro = () => <AdobeBadge label="Pr" />;

const SkillIcon = ({ name }) => {
  let IconComponent = null;
  switch (name) {
    case "HTML": IconComponent = FaHtml5; break;
    case "CSS": IconComponent = FaCss3Alt; break;
    case "Javascript": IconComponent = FaJsSquare; break;
    case "ReactJS":
    case "PrimeReact": IconComponent = FaReact; break;
    case "NextJS": IconComponent = SiNextdotjs; break;
    case "VueJS": IconComponent = SiVuedotjs; break;
    case "Tailwind CSS": IconComponent = SiTailwindcss; break;
    case "MongoDB": IconComponent = SiMongodb; break;
    case "Figma": IconComponent = FaFigma; break;
    case "GitHub":
    case "Github": IconComponent = FaGitAlt; break;
    case "NodeJS": IconComponent = FaNodeJs; break;
    case "Express": IconComponent = SiExpress; break;
    case "PHP": IconComponent = FaPhp; break;
    case "Laravel": IconComponent = SiLaravel; break;
    case "MySQL": IconComponent = SiMysql; break;
    case "MariaDB": IconComponent = SiMariadb; break;
    case "RESTful APIs": IconComponent = TbApi; break;
    case "API Validation": IconComponent = TbApi; break;
    case "Magento": IconComponent = TbNetwork; break;
    case "WordPress": IconComponent = FaWordpress; break;
    case "WooCommerce": IconComponent = SiWoocommerce; break;
    case "Postman": IconComponent = TbNetwork; break;
    case "OracleDB": IconComponent = TbNetwork; break;

    case "Photoshop": IconComponent = IconPhotoshop; break;
    case "Illustrator": IconComponent = IconIllustrator; break;
    case "After Effects": IconComponent = IconAfterEffects; break;
    case "Premiere Pro": IconComponent = IconPremierePro; break;

    case "Microsoft Word": IconComponent = FaFileWord; break;
    case "Microsoft Excel": IconComponent = FaFileExcel; break;
    case "Microsoft PowerPoint": IconComponent = FaFilePowerpoint; break;

    case "Manual Testing":
    case "Functional & Regression Testing":
    case "UI/UX & Cross‑Browser Testing":
    case "Bug Tracking & Documentation":
    case "Test Case Execution":
    case "UAT Support":
      IconComponent = FaCheckCircle;
      break;
    default:
      IconComponent = null;
  }

  if (!IconComponent) return null;
  return <IconComponent />;
};

// ---- WEB DEVELOPMENT: DESKTOP CIRCLE ----
const desktopSkills = [
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
  { name: "UI/UX & Cross‑Browser Testing", x: "-17vw", y: "-14vw" },
];

// ---- DESIGN: DESKTOP CIRCLE ----
const desktopDesignSkills = [
  { name: "Figma", x: "0vw", y: "-10vw" },
  { name: "Photoshop", x: "-10vw", y: "0vw" },
  { name: "Illustrator", x: "0vw", y: "10vw" },
  { name: "After Effects", x: "10vw", y: "-3vw" },
  { name: "Premiere Pro", x: "10vw", y: "3vw" },
];

// ---- MICROSOFT OFFICE: DESKTOP CIRCLE ----
const desktopOfficeSkills = [
  { name: "Microsoft Word", x: "-8vw", y: "-5vw" },
  { name: "Microsoft Excel", x: "8vw", y: "-5vw" },
  { name: "Microsoft PowerPoint", x: "0vw", y: "8vw" },
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
    title: "Tools & E‑Commerce",
    skills: ["GitHub", "Postman", "Figma", "Magento", "WordPress", "WooCommerce"],
  },
];

// ---- MOBILE: QA SKILLS LIST ----
const qaSkillsList = [
  "Manual Testing",
  "Functional & Regression Testing",
  "UI/UX & Cross‑Browser Testing",
  "API Validation",
  "Bug Tracking & Documentation",
  "Test Case Execution",
  "UAT Support",
];

// ---- MOBILE: DESIGN SKILLS LIST ----
const designSkillsList = [
  "Figma",
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Premiere Pro",
];

// ---- MOBILE: OFFICE SKILLS LIST ----
const officeSkillsList = [
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft PowerPoint",
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

/* ------------------------------------------------------------------ */
/*  Small circular cluster used by "Design" & "Microsoft Office"       */
/*  – increased size and scale so it no longer looks tiny              */
/* ------------------------------------------------------------------ */
const SmallCircle = ({ centerIcon, skills }) => (
  <div className="relative flex items-center justify-center w-[50vh] h-[50vh] rounded-full bg-circularLight dark:bg-circularDark">
    {/* center icon – kept at full size, drawn above the scaled layer */}
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark/90 dark:bg-vdark text-light p-2 shadow-dark cursor-pointer z-10"
      whileHover={{ scale: 1.05 }}
    >
      {centerIcon}
    </motion.div>

    {/* scaled-down ring of skills – scale increased from 0.62 → 0.8 */}
    <div
      className="absolute inset-0 flex items-center justify-center"
    >
      {skills.map((skill) => (
        <Skill key={skill.name} name={skill.name} x={skill.x} y={skill.y} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1280);
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
              <Skill key={skill.name} name={skill.name} x={skill.x} y={skill.y} />
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
              <Skill key={skill.name} name={skill.name} x={skill.x} y={skill.y} />
            ))}
          </div>
        )}
      </div>

      {/* ================= DESIGN + MICROSOFT OFFICE ================= */}
      {isMobile ? (
        <>
          {/* Design (mobile) */}
          <div className="w-full max-w-6xl mx-auto mt-16 mb-10">
            <h3 className="text-center text-4xl lg:text-3xl md:text-2xl font-bold text-dark dark:text-light mb-8">
              Design
            </h3>
            <div className="flex flex-wrap justify-center gap-3 px-4">
              {designSkillsList.map((skillName) => (
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

          {/* Microsoft Office (mobile) */}
          <div className="w-full max-w-6xl mx-auto mt-16 mb-10">
            <h3 className="text-center text-4xl lg:text-3xl md:text-2xl font-bold text-dark dark:text-light mb-8">
              Microsoft Office
            </h3>
            <div className="flex flex-wrap justify-center gap-3 px-4">
              {officeSkillsList.map((skillName) => (
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
        </>
      ) : (
        <div className="w-full max-w-6xl mx-auto mt-16 mb-10 flex flex-row items-start justify-center gap-64">
          {/* Design */}
          <div className="flex flex-col items-center">
            <h3 className="text-center text-4xl lg:text-3xl md:text-2xl font-bold text-dark dark:text-light mb-8">
              Design
            </h3>
            <SmallCircle
              centerIcon={<FaFigma className="w-14 h-14 md:w-10 md:h-10" />}
              skills={desktopDesignSkills}
            />
          </div>

          {/* Microsoft Office */}
          <div className="flex flex-col items-center">
            <h3 className="text-center text-4xl lg:text-3xl md:text-2xl font-bold text-dark dark:text-light mb-8">
              Microsoft Office
            </h3>
            <SmallCircle
              centerIcon={<FaMicrosoft className="w-14 h-14 md:w-10 md:h-10" />}
              skills={desktopOfficeSkills}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;