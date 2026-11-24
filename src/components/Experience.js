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
        
        {/* Increased margin bottom for date/address */}
        <p className="capitalize font-medium text-dark/75 dark:text-primaryDark/60 mt-3 mb-8 md:text-sm">
          {time} | {address}
        </p>

        {/* Increased space between each item to space-y-6 */}
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
                {/* Subtitle on its own line */}
                {item.title && (
                  <div className="font-bold text-primary dark:text-primaryDark mb-1.5">
                    {item.title}
                  </div>
                )}
                {/* Content on the next line */}
                <div className="leading-relaxed">
                  {item.content}
                </div>
              </li>
            );
          })}
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
            position="Programmer (Web Development & Testing)"
            company="Quadcell Communication Limited"
            companyLink="https://www.quadcell.com/"
            time="Sep 2024 - Present"
            address="Hong Kong"
            work={[
              {
                title: "End-to-End Feature & Regression Testing",
                content:
                  "Conducted thorough functional, UI, and regression testing across internal OSS platforms (ReactJS/NodeJS) and B2B mall applications (PrimeReact/PHP/Laravel) prior to deployment.",
              },
              {
                title: "E-Commerce & Workflow Validation",
                content:
                  "Managed and tested critical user journeys on Magento, WordPress, and WooCommerce platforms—validating product catalog updates, frontend customizations, coupon/discount logic and checkout/payment flows (including developing and testing PayMe and MPay payment integrations) to prevent production defects.",
              },
              {
                title: "Debugging & Root Cause Analysis",
                content:
                  "Diagnosed frontend rendering issues, backend API discrepancies, and database errors, collaborating closely with team members to reproduce, document, and resolve bugs.",
              },
              {
                title: "Tools & Workflow",
                content:
                  "Utilized GitHub for version control and issue tracking, and Postman for API testing and validation.",
              },
            ]}
          />

          <Details
            position="Contract Administrator Assistant"
            company="RecruitFirst Limited"
            companyLink="https://www.recruitfirst.co/"
            time="Dec 2021 - Oct 2022"
            address="Hong Kong"
            work={[
              {
                title: "Visual & Layout Verification",
                content:
                  "Designed and proofed print materials, posters, house programmes, and web assets (icons, banners, illustrations), ensuring strict adherence to brand guidelines, typography, and layout accuracy.",
              },
              {
                title: "Stakeholder Feedback Integration",
                content:
                  "Reviewed deliverables against project requirements and iteratively refined outputs based on team feedback to achieve zero-defect final delivery.",
              },
            ]}
          />

          <Details
            position="Accounts Clerk"
            company="Kintetsu World Express (HK) Limited"
            companyLink="https://www.kwe.com/"
            time="Feb 2018 - Mar 2020"
            address="Hong Kong"
            work={[
              {
                title: "Data Accuracy & Reconciliation",
                content:
                  "Performed daily accounting clerical operations with high attention to detail, verifying financial records, cross-checking documentation, and identifying data discrepancies.",
              },
              {
                title: "Cross-Team Communication",
                content:
                  "Communicated clearly with colleagues and managers to resolve administrative bottlenecks and maintain accurate operational records.",
              },
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;