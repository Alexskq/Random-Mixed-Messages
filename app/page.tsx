import Image from "next/image";
import Header from "./components/Header";
import Message from "./components/Message";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Mixed Messages",
};

export default function Home() {
  return (
    <div className="bg-[#00de1205] text-color-11 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      {/* Header */}
      <Header />

      {/* Random message */}
      <Message />

      {/* footer */}
    </div>
  );
}
