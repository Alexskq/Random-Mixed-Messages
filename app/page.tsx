import Image from "next/image";
import Header from "./components/Header";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Mixed Messages",
};

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-color-11 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      {/* Header */}
      <Header />
      <h1>Mixed random messages</h1>
    </div>
  );
}
