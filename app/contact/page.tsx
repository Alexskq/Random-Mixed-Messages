"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:alexzoonekynd@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#FFFCF4B0] text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 text-[#FFFFFDED]">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">
            Let&apos;s talk
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">0628590462</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">Valenciennes</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">alexzoonekynd@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              type="text"
              className="contactInput"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#FFFAE965] py-5 px-10 rounded-md text-[#FFFCF4B0] font-bold text-lg"
          >
            Submit
          </button>
        </form>

        <Link href="/">
          <div className="flex flex-row items-center justify-center text-gray-300 cursor-pointer">
            <IoMdArrowRoundBack /> <span className="pl-2"> Back</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ContactMe;
