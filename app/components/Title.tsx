"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function Message({}: Props) {
  const [title, count] = useTypewriter({
    words: ["Get inspired today"],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div className="text-5xl lg:text-6xl font-semibold px-10 text-center mt-[200px] flex flex-col tracking-[5px]">
      <span className="font-[heading] uppercase text-4xl tracking-[10px]">
        {title}
        <Cursor cursorColor="#50FDAC5E" />
      </span>
      <blockquote className="text-lg italic font-thin mt-4 font-[body]">
        <p className="tracking-[5px]">&quot; Choose your inspiration &quot;</p>
      </blockquote>
    </div>
  );
}

export default Message;
