"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function Message({}: Props) {
  const [title, count] = useTypewriter({
    words: ["Generate Your Message of the Day"],
    loop: true,
    delaySpeed: 2000,
  });
  return <div className="text-center">{title}</div>;
}

export default Message;
