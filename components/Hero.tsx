"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Navbar from "./Navbar";
import { client } from "@/sanity/lib/client";
import { PageInfo } from "@/typings";

export default function Hero() {
  // const pageInfo = await client.fetch<PageInfo[]>(`*[_type == "pageInfo"]`);
  // console.log(pageInfo);

  const [text] = useTypewriter({
    words: [
      `Hey, I'm Lu Ndovi.`,
      "SalsaDancer-Athlete-PlantDad.tsx",
      "<ButMainlyJustACoder/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-7 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative mx-auto h-44 w-44 md:h-48 md:w-48 lg:h-60 lg:w-60 rounded-full flex items-center justify-center">
        <Image src="/smile.jpg" alt="Lu Ndovi" className="rounded-full " fill />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
          Job Role
        </h2>
        <h1 className="mx-auto text-4xl lg:text-6xl font-semibold px-12">
          <span className="mx-2">{text}</span>
          <Cursor cursorColor="blue" />
        </h1>
        <div className="pt-6">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
