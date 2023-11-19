"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

type Props = {};

function Message({}: Props) {
  const [title, count] = useTypewriter({
    words: ["Generate Your Message of the Day"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="text-5xl lg:text-6xl font-semibold px-10 text-center">
      <span>{title}</span>
      <Cursor cursorColor="#50FDAC5E" />

      <Link className="play-btn py-5" href="#" />
    </div>
  );
}

export default Message;
