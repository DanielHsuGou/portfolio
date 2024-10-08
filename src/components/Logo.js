import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 lg:mt-0">
      <MotionLink
        href="/"
        className="w-16 h-16 lg:w-14 lg:h-14 bg-vdark text-light border border-solid border-transparent dark:border-light/75 dark:bg-vdark flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#1b1b1b",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#1b1b1b",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        DH
      </MotionLink>
    </div>
  );
};

export default Logo;
