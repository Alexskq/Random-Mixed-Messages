"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

type Props = {};

function Message({}: Props) {
  const [title, count] = useTypewriter({
    words: ["Get inspired today"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="text-5xl lg:text-6xl font-semibold px-10 text-center mt-[200px] flex flex-col tracking-[5px]">
      <span>
        {title}
        <Cursor cursorColor="#50FDAC5E" />
      </span>
      <blockquote className="text-base italic font-thin mt-4">
        <p className="tracking-[5px]">&quot; Choose your inspiration &quot;</p>
      </blockquote>
    </div>
  );
}

export default Message;
