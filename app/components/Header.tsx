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
          fgColor="gray"
          bgColor="transparent"
          className="text-gray-500 hover:animate-ping hover:duration-200"
        />

        <SocialIcon
          url="https://github.com/Alexskq"
          fgColor="gray"
          bgColor="transparent"
          className="text-gray-500 hover:animate-ping hover:duration-200"
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
            scale: 1.1,
          }}
          transition={{ duration: 1 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            network="email"
            fgColor="gray"
            bgColor="transparent"
            className="cursor-pointer"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Contact
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
