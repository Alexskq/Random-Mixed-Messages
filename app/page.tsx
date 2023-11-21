import Image from "next/image";
import Header from "./components/Header";
import Title from "./components/Title";
import Button from "./components/Button";
import Footer from "./components/Footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get inspired...",
};

export default function Home() {
  return (
    <div className="bg-[#00000000] text-color-11 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      {/* Header */}
      <Header />

      {/* Random message */}
      <Title />

      {/* Button */}
      <Button />

      {/* footer */}
    </div>
  );
}
