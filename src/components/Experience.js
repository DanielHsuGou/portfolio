import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        className="w-full" // Added this to prevent the list from centering
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
        <p className="capitalize font-medium text-dark/75 dark:text-primaryDark/60 my-2 md:text-sm">
          {time} | {address}
        </p>
        
        {/* Changed to list. NO color classes added to <li> */}
        <ul className="font-medium w-full md:text-sm list-disc pl-5 space-y-1">
          {work.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 md:my-48 sm:my-36">
      <h2 className="font-bold text-8xl lg:text-7xl md:text-6xl sm:text-4xl mb-32 md:mb-16 w-full text-center">
        Experience
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
            position="Programmer"
            company="Quadcell Communication Limited"
            companyLink="https://www.quadcell.com/"
            time="Sep 2024 - Present"
            address="Hong Kong"
            work={[
              "Developed internal OSS platform using ReactJS, and NodeJS.",
              "Built B2B mail platforms with primereact and backend solutions utilizing PHP, Laravel.",
              "Administered WordPress, WooCommerce, and internal CMS platforms to support digital operations.",
              "Developed and Managed Magento Web Store operations, including product catalog handling, frontend customization, and coupon systems.",
              "Utilized Google Colab, GitHub, and basic ComfyUI during leisure time to explore automation and development workflows."
            ]}
          />
          
          <Details
            position="Contract Administrator Assistant"
            company="RecruitFirst Limited"
            companyLink="https://www.recruitfirst.co/"
            time="Dec 2021 - Oct 2022"
            address="Hong Kong"
            work={[
              "Designed print materials, posters and house programmes.",
              "Created visually appealing designs such as icons, banners, simple illustrations for websites.",
              "Fulfilled design requirement for various projects.",
              "Open to feedback, enhancing the quality of work."
            ]}
          />
          
          <Details
            position="Accounts Clerk"
            company="Kintetsu World Express (HK) Limited"
            companyLink="https://www.kwe.com/"
            time="Feb 2018 - Mar 2020"
            address="Hong Kong"
            work={[
              "Provided support for accounting clerical daily operations.",
              "Assisted in administrative tasks efficiently.",
              "Communicated effectively with colleagues and managers to support the entire workplace."
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;