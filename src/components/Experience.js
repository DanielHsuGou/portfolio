import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <br></br>
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <p className="capitalize font-medium text-dark/75 dark:text-primaryDark/75 my-2">
          {time} | {address}
        </p>
        <p className="font-medium w-full">{work}</p>
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
    <div className="my-64">
      <h2 className="font-bold text-8xl lg:text-7xl md:text-6xl sm:text-5xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Contract Administrator Assistant"
            company="RecruitFirst Limited"
            companyLink="https://www.recruitfirst.co/"
            time="2021-2022"
            address="Hong Kong"
            work="Designed print materials, posters and house programmes. Created visually appealing designs such as icons, banners, and simple illustrations for websites. Fulfilled requirements of designs and be receptive to criticism which improves the work."
          />
          <Details
            position="Accounts Clerk"
            company="Kintetsu World Express (HK) Limited"
            companyLink="https://www.kwe.com/"
            time="2018-2020"
            address="Hong Kong"
            work="Provided support for daily operations such as data entry, filing, issuing cheque and double entries. Assisted in administration, includes handling staff expenses, preparing letters and arrangement for courier. Communicated effectively with colleagues and managers verbally to support the entire workplace."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
