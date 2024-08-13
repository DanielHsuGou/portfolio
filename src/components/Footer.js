import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg md:text-sm">
      <Layout className="!py-8 flex sm:flex-col items-center justify-between !bg-dark dark:!bg-vdark text-light">
        <span className="">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
        <div className="flex items-center">
          Build With{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#10084;
          </span>
          by&nbsp;
          <Link href="/" className="underline underline-offset-2">
            Daniel Hsu
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
