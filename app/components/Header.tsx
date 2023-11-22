"use client";
import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/alexzoonekynd"
          // fgColor="gray"
          bgColor="transparent"
          className="text-gray-400 hover:scale-125 hover:duration-300 "
        />

        <SocialIcon
          url="https://github.com/Alexskq"
          // fgColor="gray"
          bgColor="transparent"
          className="text-gray-400 hover:scale-125 hover:duration-300 "
        />
        <SocialIcon
          url="https://lewagon-alumni.slack.com/team/U053J8Q0Z50"
          // fgColor="currentColor"
          bgColor="transparent"
          className="text-gray-200 hover:scale-125 hover:duration-300 "
        />
      </motion.div>

      <Link href="/contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          whileHover={{
            scale: 1.25,
          }}
          transition={{ duration: 0.3 }}
          className="flex flex-row items-center text-white cursor-pointer"
        >
          <SocialIcon
            network="email"
            fgColor="gray"
            bgColor="transparent"
            className="cursor-pointer"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-white font-[body] tracking-[2px]">
            Contact
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
