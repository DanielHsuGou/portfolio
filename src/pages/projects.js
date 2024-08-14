import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import { TbWorld } from "react-icons/tb";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import chat from "../../public/images/projects/chat_app.png";
import kmb from "../../public/images/projects/kmb_eta.png";
import toDoList from "../../public/images/projects/to_do_list.png";
import studentCard from "../../public/images/projects/student_card.png";
import newsChromeExtension from "../../public/images/projects/news_chromeExtension.png";
import animal from "../../public/images/projects/animal.png";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  tags,
  figmaLink,
  dbLink,
}) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl bg-dark dark:bg-light">
      {/* <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-3xl rounded-[2.5rem] bg-dark" /> */}
      <motion.div
        className="w-full flex lg:flex-col items-center justify-between relative rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-vdark p-12 lg:px-0 lg:py-9 shadow-md shadow-dark dark:shadow-light"
        whileHover={{ scale: 1.01, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Link
          href={link}
          target="_blank"
          className="w-1/2 lg:w-11/12 cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-1/2 lg:w-11/12 flex flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6">
          <span className="text-primary dark:text-primaryDark font-medium text-xl md:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="text-dark dark:text-light my-2 w-full text-left text-4xl md:text-2xl font-bold">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light md:text-sm">
            {summary}
          </p>
          <div className="w-[77%] xl:md:w-[75%] md:w-[77%] flex gap-2 flex-wrap mt-3">
            {tags.map((tag, index) =>
              tag !== "Figma" && tag !== "Database" ? (
                <div
                  key={index}
                  className="rounded-3xl bg-dark/90 hover:bg-primary text-light dark:bg-light/90 dark:hover:bg-primaryDark dark:text-vdark py-1 px-2 font-semibold text-xs"
                >
                  {tag}
                </div>
              ) : tag === "Figma" ? (
                <a
                  href={figmaLink}
                  key={index}
                  target="_blank"
                  className="cursor-pointer rounded-3xl bg-dark/90 hover:bg-primary text-light dark:bg-light/90 dark:hover:bg-primaryDark dark:text-vdark py-1 px-2 font-semibold text-xs"
                >
                  {tag}
                </a>
              ) : (
                <a
                  href={dbLink}
                  key={index}
                  target="_blank"
                  className="cursor-pointer rounded-3xl bg-dark/90 hover:bg-primary text-light dark:bg-light/90 dark:hover:bg-primaryDark dark:text-vdark py-1 px-2 font-semibold text-xs"
                >
                  {tag}
                </a>
              )
            )}
          </div>
          <div className="mt-2 flex items-center justify-end gap-5 absolute bottom-6 right-8 xl:bottom-2 xl:right-3 xl:gap-3">
            <Link href={link} target="_blank" className="text-lg">
              <TbWorld className="w-8 h-8 sm:w-7 sm:h-7 text-dark hover:text-primary dark:text-light dark:hover:text-primaryDark" />
            </Link>
            <Link
              href={github}
              target="_blank"
              className="w-9 sm:w-8 text-dark hover:text-primary dark:text-light dark:hover:text-primaryDark"
            >
              <GithubIcon />
            </Link>
          </div>
        </div>
      </motion.div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, position, tags }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl bg-dark dark:bg-light relative">
      {/* <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-3xl rounded-[2rem] bg-dark" /> */}
      <motion.div
        className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-vdark p-6 lg:px-7 lg:py-9 md:px-6 sm:px-5 relative shadow-md shadow-dark dark:shadow-light"
        whileHover={
          position === "left" ? { x: 20, y: -20 } : { x: -20, y: -20 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg h-80"
        >
          <Image src={img} alt={title} className="w-full h-full object-cover" />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary dark:text-primaryDark font-medium text-xl md:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="text-dark dark:text-light my-2 w-full text-left text-2xl md:text-xl font-bold">
              {title}
            </h2>
          </Link>
          <div className="w-[77%] xl:md:w-[75%] md:w-[77%] flex gap-2 flex-wrap mt-2">
            {tags &&
              tags.map((tag, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-dark/90 hover:bg-primary text-light dark:bg-light/90 dark:hover:bg-primaryDark dark:text-vdark py-1 px-2 font-semibold text-xs"
                >
                  {tag}
                </div>
              ))}
          </div>

          <div className="mt-2 flex items-center justify-end gap-4 absolute bottom-4 right-6 xl:bottom-2 xl:right-3 xl:gap-3">
            <Link href={link} target="_blank" className="text-lg">
              <TbWorld className="w-7 h-7 text-dark hover:text-primary dark:text-light dark:hover:text-primaryDark" />
            </Link>
            <Link
              href={github}
              target="_blank"
              className="w-8 text-dark hover:text-primary dark:text-light dark:hover:text-primaryDark"
            >
              <GithubIcon />
            </Link>
          </div>
        </div>
      </motion.div>
    </article>
  );
};

const projects = () => {
  const featuredProjects = [
    {
      title: "Chat App",
      img: chat,
      summary:
        "A Chat App using NextJS, Tailwind CSS, MongoDB for storing user, chat data and Pusher for realtime chat. It can add friends and create servers. You can easily DM messages and chat in communities whenever you want.",
      link: "https://chat-sync-fswd.vercel.app/",
      github: "https://github.com/DanielHsuGou/chat-sync",
      type: "Featured Project",
      tags: [
        "NextJS",
        "Tailwind",
        "MongoDB",
        "Cloudinary",
        "Pusher",
        "Framer-Motion",
        "Vercel",
        "Figma",
        "Database",
      ],
      figmaLink:
        "https://www.figma.com/design/Mfuh57vWyoomXQlQyimZK2/Direct-messaging-app-(Community)?node-id=0-1&t=julLgdyPWCbXd2T0-1",
      dbLink:
        "https://miro.com/app/board/uXjVKvW8Yos=/?share_link_id=744637723135",
    },
    {
      title: "KMB Bus ETA",
      img: kmb,
      summary:
        "A web application that displays the estimated time of arrival (ETA) for buses operated by the Kowloon Motor Bus Company (KMB) in Hong Kong. Users can enter a bus route number and the site will provide the ETA for the next few buses on that route. The site features a simple and clean interface with a keypad-style layout for inputting bus route numbers.",
      link: "https://danielhsugou.github.io/KMB-Bus-ETA/",
      github: "https://github.com/DanielHsuGou/KMB-Bus-ETA",
      type: "Featured Project",
      tags: ["HTML", "CSS", "Javascript", "API"],
    },
  ];

  const projects = [
    {
      title: "News Chrome Extension",
      img: newsChromeExtension,
      link: "https://danielhsugou.github.io/news-chromeExtension/",
      github: "https://github.com/DanielHsuGou/news-chromeExtension",
      type: "Project",
      position: "left",
      tags: ["HTML", "CSS", "Javascript", "API"],
    },
    {
      title: "To Do List",
      img: toDoList,
      link: "https://danielhsugou.github.io/To-Do-List/",
      github: "https://github.com/DanielHsuGou/To-Do-List",
      type: "Project",
      position: "right",
      tags: ["HTML", "CSS", "Javascript"],
    },
    {
      title: "Student Card",
      img: studentCard,
      link: "https://danielhsugou.github.io/Student-Card/",
      github: "https://github.com/DanielHsuGou/Student-Card",
      type: "CSS Project",
      position: "left",
      tags: ["HTML", "CSS"],
    },
    {
      title: "Animal Siblings",
      img: animal,
      link: "https://danielhsugou.github.io/Animal-Siblings/",
      github: "https://github.com/DanielHsuGou/Animal-Siblings",
      type: "CSS Exercise",
      position: "right",
      tags: ["HTML", "CSS"],
    },
  ];

  return (
    <>
      <Head>
        <title>Daniel Hsu | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center pt-20 px-20 xl:px-10 lg:px-14 md:px-0">
        <Layout className="pt-16">
          <AnimatedText
            text="Practice Makes Improvement!"
            className="mb-16 lg:!text-7xl md:!text-6xl sm:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-16 lg:gap-12 md:gap-7">
            {featuredProjects.map((project, index) => (
              <div className="col-span-12 md:pb-7" key={index}>
                <FeaturedProject
                  title={project.title}
                  img={project.img}
                  summary={project.summary}
                  link={project.link}
                  github={project.github}
                  type={project.type}
                  tags={project.tags}
                  figmaLink={project.figmaLink}
                  dbLink={project.dbLink}
                />
              </div>
            ))}

            {projects.map((project, index) => (
              <div className="col-span-6 lg:col-span-12 md:pb-7" key={index}>
                <Project
                  title={project.title}
                  img={project.img}
                  link={project.link}
                  github={project.github}
                  type={project.type}
                  position={project.position}
                  tags={project.tags}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
