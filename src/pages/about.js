import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/profile_picture_2.png";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const about = () => {
  return (
    <>
      <Head>
        <title>Daniel Hsu | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center pt-20">
        <Layout className="pt-16 lg:pt-10 md:pt-6 text-dark dark:text-light">
          <AnimatedText
            text="Passion is Energy!"
            className="mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl"
          />

          <div className="flex lg:flex-col lg:items-center w-full gap-16 justify-between px-16 xl:px-0">
            <div className="hidden lg:block relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-vdark p-8 w-1/2 lg:w-3/4 max-w-[560px]">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-[1rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="About image"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="flex flex-col items-start justify-start w-1/2 lg:w-3/4">
              <h2 className="mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75">
                Profile
              </h2>
              <p className="font-medium">
                Hi, I'm Daniel Hsu, an aspiring web developer with a passion for
                creating functional and user-centered digital experiences.
                During my university studies, I majored in animation and visual
                effects, which has given me a deep appreciation for crafting
                visually stunning and engaging digital products.
              </p>

              <p className="font-medium my-4">
                Although I'm new to the industry, I recently completed a
                full-stack web development bootcamp where I had the opportunity
                to combine my design experience with modern web technologies,
                including HTML, CSS, JavaScript, React, Node.js, and SQL
                databases. I'm excited to apply these knowledge to build
                responsive and interactive websites from the ground up.
              </p>

              <p className="font-medium">
                While I may lack professional experience, I'm eager to learn and
                grow as a web developer. I look forward to the opportunity to
                contribute my passion and skills to your next project, and to
                continue honing my craft in a professional setting.
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
