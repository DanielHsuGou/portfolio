import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-16 first:mt-0 last:mb-0 w-[60%] lg:w-[70%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full"
      >
        <h3 className="capitalize font-bold text-2xl md:text-lg">
          {position}&nbsp;
          <br></br>
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize text-xl lg:text-lg md:text-base"
          >
            @{company}
          </a>
        </h3>

        <p className="capitalize font-medium text-dark/75 dark:text-primaryDark/60 mt-3 mb-8 md:text-sm">
          {time} | {address}
        </p>

        <ul className="font-medium w-full md:text-sm space-y-6">
          {work.map((item, index) => {
            if (typeof item === "string") {
              return (
                <li key={index} className="list-disc pl-5">
                  {item}
                </li>
              );
            }
            return (
              <li
                key={index}
                className="pl-5 border-l-2 border-primary/50 dark:border-primaryDark/50"
              >
                {item.title && (
                  <div className="font-bold text-primary dark:text-primaryDark mb-1.5">
                    {item.title}
                  </div>
                )}
                <div className="leading-relaxed">{item.content}</div>
              </li>
            );
          })}
        </ul>
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
            position="Junior Full Stack Developer Program (Cohort 11)"
            company="CLAP @ JC x Generation"
            companyLink=""
            time="MAY 2024 – AUG 2024"
            address=""
            work={[
              {
                title: "Web Application Development",
                content:
                  "Built, debugged, and tested end-to-end web applications (Chat App, KMB ETA, To-Do List, and a News Chrome Extension) using ReactJS, NodeJS, Express, and MongoDB.",
              },
              {
                title: "UI/UX Design & Optimisation",
                content:
                  "Designed, evaluated, and improved UI/UX flows for responsive, error-free interactions.",
              },
            ]}
          />

          <Details
            position="Bachelor’s Degree in Animation and Visual Effects"
            company="Hong Kong Metropolitan University"
            companyLink=""
            time="2013 – 2017"
            address=""
            work={[
              {
                title: "Creative & Visual Training",
                content:
                  "Trained in creative design, digital visual effects, media production, animation, and motion graphics.",
              },
              {
                title: "Visual Design Fundamentals",
                content:
                  "Developed a sharp eye for visual detail, composition, typography, and color accuracy — skills directly transferable to pixel-perfect UI/UX testing.",
              },
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
