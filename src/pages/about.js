import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/profile_picture_2.png";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>Daniel Hsu | About Page</title>
        <meta
          name="description"
          content="About Daniel Hsu — Full-Stack Developer & Web Application Testing"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center pt-20">
        <Layout className="pt-16 lg:pt-10 md:pt-6 text-dark dark:text-light">
          <AnimatedText
            text="Detail-Oriented. Quality-Focused."
            className="mb-16 md:mb-10 lg:!text-7xl md:!text-6xl sm:!text-5xl"
          />

          <div className="flex lg:flex-col lg:items-center w-full gap-16 justify-between px-16 xl:px-0">
            <div className="hidden lg:block relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-vdark p-8 md:p-5 w-1/2 lg:w-3/4 sm:w-11/12 max-w-[560px]">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-[1rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="About image"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="flex flex-col items-start justify-start w-1/2 lg:w-full">
              <h2 className="mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75">
                Profile
              </h2>
              <p className="font-medium">
                Hi, I&apos;m <span className="font-bold">Daniel Hsu</span>, a
                detail-oriented programmer and UI/UX-focused technologist with a
                background in animation and visual effects. I have practical
                experience building web applications, internal platforms, and
                e-commerce operations, and I also place great importance on
                testing and verification in my work.
              </p>

              <p className="font-medium my-4">
                My technical background includes ReactJS, NextJS, NodeJS, PHP,
                Laravel, and CMS platforms such as WordPress, WooCommerce, and
                Magento. I combine this hands-on development experience with a
                sharp eye for visual detail to identify UI/UX inconsistencies,
                functional bugs, and edge cases early in the development
                lifecycle.
              </p>

              <p className="font-medium">
                I am comfortable performing manual testing, functional and
                regression testing, API validation using Postman, cross-browser
                testing, and bug tracking via GitHub, and I always aim to
                deliver reliable web application releases. In my spare time, I
                explore tools like Google Colab, GitHub, and basic ComfyUI, and
                I am focused on structured, detail-oriented digital and
                operational tasks.
              </p>
            </div>
            <div className="lg:hidden relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-vdark p-8 w-1/2 max-w-[560px]">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-[1rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="About image"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          <Education />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default about;