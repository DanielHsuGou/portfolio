import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile_picture.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import { TfiWindow } from "react-icons/tfi";
import { ImMobile } from "react-icons/im";
import { GrDatabase } from "react-icons/gr";
import { TbBug } from "react-icons/tb";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Hsu | Portfolio</title>
        <meta
          name="description"
          content="Daniel Hsu — Full-Stack Developer & Web Application Testing Portfolio"
        />
      </Head>
      <TransitionEffect />
      <div className="flex flex-col justify-center items-center pt-20">
        <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
          <Layout className="pt-0">
            <div className="flex lg:flex-col lg:gap-5 items-center justify-between w-full">
              <div className="w-1/2 lg:w-3/4">
                <Image
                  src={profilePic}
                  alt="Profile image"
                  className="w-full h-auto max-w-[600px]"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="w-1/2 lg:w-3/4 flex flex-col items-center self-center">
                <AnimatedText
                  text="Hi there, I'm..."
                  className="!text-base !text-left"
                />
                <AnimatedText
                  text="Daniel Hsu"
                  className="!text-6xl !text-left"
                />
                <p className="my-4 text-base font-medium">
                  As a detail-oriented full-stack developer and tester, I am dedicated to
                  turning ideas into reliable web applications. I also place
                  great importance on testing and verification in my work.
                  Explore my latest projects, showcasing my experience in web
                  development and testing.
                </p>
                {/* <div className="flex items-center self-start mt-2">
                  <Link
                    href="/danielhsu_cv.pdf"
                    target={"_blank"}
                    className="flex items-center bg-dark dark:bg-light text-light dark:text-vdark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light dark:hover:bg-vdark hover:text-dark dark:hover:text-light border border-solid border-transparent hover:border-dark dark:hover:border-light"
                  >
                    Resume <LinkArrow className={"w-6 ml-1"} />
                  </Link>
                </div> */}
              </div>
            </div>
          </Layout>
        </main>

        <main className="flex flex-col items-center w-full min-h-96 py-20 gap-10 bg-dark dark:bg-vdark">
          <AnimatedText
            text="Experienced in"
            className="!text-8xl lg:!text-7xl md:!text-6xl sm:!text-4xl text-light"
          />
          <div className="w-full grid grid-cols-2 md:grid-cols-1 gap-10 py-5 px-10 md:px-16 xl:px-20 text-dark">
            {/* Front-end Development */}
            <div className="bg-light dark:bg-vdark border border-solid border-dark dark:border-light w-full min-h-[20rem] rounded-2xl flex flex-col justify-between items-center text-center px-6 py-10 gap-5">
              <TfiWindow className="w-16 h-16 text-light bg-dark/50 dark:bg-primaryDark/20 p-3 rounded-2xl" />
              <AnimatedText
                text="Front-end Development"
                className="!text-2xl md:!text-xl"
              />
              <div className="font-medium text-dark dark:text-light/75 sm:text-sm">
                Crafting visually stunning and interactive user interfaces using
                ReactJS, NextJS, VueJS, and Tailwind CSS.
              </div>
            </div>

            {/* Back-end Development */}
            <div className="bg-light dark:bg-vdark border border-solid border-dark dark:border-light w-full min-h-[20rem] rounded-2xl flex flex-col justify-between items-center text-center px-6 py-10 gap-5">
              <GrDatabase className="w-16 h-16 text-light bg-dark/50 dark:bg-primaryDark/20 p-3 rounded-2xl" />
              <AnimatedText
                text="Back-end Development"
                className="!text-2xl md:!text-xl"
              />
              <div className="font-medium text-dark dark:text-light/75 sm:text-sm">
                Designing server-side databases and APIs with NodeJS, Express,
                PHP, Laravel, MySQL, and MongoDB.
              </div>
            </div>

            {/* Testing & Verification */}
            <div className="bg-light dark:bg-vdark border border-solid border-dark dark:border-light w-full min-h-[20rem] rounded-2xl flex flex-col justify-between items-center text-center px-6 py-10 gap-5">
              <TbBug className="w-16 h-16 text-light bg-dark/50 dark:bg-primaryDark/20 p-3 rounded-2xl" />
              <AnimatedText
                text="Testing & Verification"
                className="!text-2xl md:!text-xl"
              />
              <div className="font-medium text-dark dark:text-light/75 sm:text-sm">
                Performing manual, functional, regression, API, and
                cross-browser testing to ensure reliable web application
                releases.
              </div>
            </div>

            {/* Responsive Design */}
            <div className="bg-light dark:bg-vdark border border-solid border-dark dark:border-light w-full min-h-[20rem] rounded-2xl flex flex-col justify-between items-center text-center px-6 py-10 gap-5">
              <ImMobile className="w-16 h-16 text-light bg-dark/50 dark:bg-primaryDark/20 p-3 rounded-2xl" />
              <AnimatedText
                text="Responsive Design"
                className="!text-2xl md:!text-xl"
              />
              <div className="font-medium text-dark dark:text-light/75 sm:text-sm">
                Building and verifying websites that function flawlessly across
                various devices and screen sizes.
              </div>
            </div>
          </div>
        </main>

        <Layout className="pt-0 text-dark dark:text-light">
          <Skills />
        </Layout>
      </div>
    </>
  );
}