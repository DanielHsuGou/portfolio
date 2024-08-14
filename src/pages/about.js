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
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center pt-20">
        <Layout className="pt-16 lg:pt-10 md:pt-6 text-dark dark:text-light">
          <AnimatedText
            text="Passion is Energy!"
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
                Hi, I&apos;m <span className="font-bold">Daniel Hsu</span>, an
                aspiring web developer with a passion for creating functional,
                user-centered digital experiences. With a background in
                animation and visual effects, I have a strong appreciation for
                crafting visually stunning and engaging digital products.
              </p>

              <p className="font-medium my-4">
                I recently completed a full-stack development bootcamp, where I
                had the opportunity to combine my design knowledge with modern
                web technologies, gaining skills in HTML, CSS, JS, ReactJS,
                NextJS, NodeJS, and NoSQL databases.
              </p>

              <p className="font-medium">
                While I&apos;m new to the industry, I&apos;m eager to learn and
                grow as a web developer. I&apos;m excited to contribute my
                passion and skills to your next project, to build responsive and
                interactive websites, and to continue honing my craft in a
                professional setting.
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
