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

        <p className="capitalize font-medium text-dark/75 dark:text-primaryDark/60 mt-3 mb-6 md:text-sm">
          {time} | {address}
        </p>

        <ul className="font-medium w-full md:text-sm space-y-4">
          {work.map((block, index) => {
            return (
              <li key={index} className="pl-5 border-l-2 border-primary/50 dark:border-primaryDark/50">
                <div className="font-bold text-primary dark:text-primaryDark mb-2">
                  {block.title}
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  {block.content.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
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
  // 移除 useSpring，使用原生 scrollYProgress；保留offset修复“刚进入就跑到底”
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["20% end", "80% start"],
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
        {/* 直接使用原生 scrollYProgress，无弹簧平滑 */}
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
                title: "Development & Testing — OSS & B2B Mall",
                content: [
                  "Developed and tested internal OSS platforms (ReactJS/NodeJS) and B2B mall applications (PrimeReact/PHP/Laravel).",
                  "Managed user roles and access control; supported business‑partner workflows: partner login, product onboarding, order placement and order administration.",
                  "Built partner‑facing APIs for eSIM ordering and provisioning, integrated with upstream provider APIs to process eSIM orders.",
                  "Configured SMTP settings, customisable senders and email templates for eSIM confirmation and provision‑failure notifications."
                ]
              },
              {
                title: "Internal CMS Enhancements",
                content: [
                  "Implemented database query functions for generating order summary reports within internal CMS.",
                  "Optimised workflows by building new upload pages for images and eSIM details to server and database."
                ]
              },
              {
                title: "E‑Commerce & Integration",
                content: [
                  "Administered and tested core user journeys across Magento, WordPress and WooCommerce.",
                  "Managed product catalog updates, frontend customisations, coupon/discount rules and checkout/payment workflows.",
                  "Developed and tested PayMe and MPay payment integrations.",
                  "Built custom Magento plugins for Magento‑internal CMS data sync and custom coupon logic.",
                  "Implemented webhooks triggered from Shopify and Shopee to feed customer order data to mall backend.",
                  "Delivered RNR workflows on Magento Web Store integrated with iamsmart."
                ]
              },
              {
                title: "Version Control & API Testing",
                content: [
                  "Utilised GitHub for version control and issue tracking.",
                  "Leveraged Postman for API testing and validation."
                ]
              }
            ]}
          />

          <Details
            position="Contract Administrator Assistant (Design & Visual)"
            company="RecruitFirst Limited"
            companyLink="https://www.recruitfirst.co/"
            time="Dec 2021 - Oct 2022"
            address="Hong Kong"
            work={[
              {
                title: "Visual & Layout Verification",
                content: [
                  "Designed print materials, posters, house programmes and web assets (icons, banners, illustrations).",
                  "Ensured strict adherence to brand guidelines, typography and layout accuracy."
                ]
              },
              {
                title: "Stakeholder Feedback Integration",
                content: [
                  "Fulfilled design requirements for multiple projects.",
                  "Iteratively refined deliverables based on team feedback to improve output quality."
                ]
              }
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
                title: "Data Accuracy & Support",
                content: [
                  "Performed daily accounting clerical operations and maintained accurate records.",
                  "Verified financial records and identified data discrepancies.",
                  "Assisted general administrative tasks efficiently."
                ]
              },
              {
                title: "Cross‑team Communication",
                content: [
                  "Communicated effectively with colleagues and managers for daily operations."
                ]
              }
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
