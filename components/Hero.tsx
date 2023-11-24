"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

import { PageInfo } from "@/typings";
import { fetcher } from "@/utils/fetchPageInfo";
import useSWR from "swr";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  pageInfo: PageInfo[];
};

export default function Hero() {
  const { data: pageInfo, error } = useSWR(`*[_type == "pageInfo"]`, fetcher);
  if (error) {
    console.error("Error fetching data:", error);
    // You can add additional error handling logic if needed
  }

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
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      {pageInfo?.map((info) => (
        <div key={info._id} className="flex-col space-y-5">
          <div className="relative mx-auto h-48 w-48 md:h-48 md:w-48 lg:h-60 lg:w-60 rounded-full flex items-center justify-center">
            <Image
              src={urlForImage(info?.heroImage).url()}
              alt="Lu Ndovi"
              className="rounded-full object-cover"
              fill
            />
          </div>
          <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
              {info.role}
            </h2>
            <h1 className="mx-auto text-4xl lg:text-6xl font-semibold px-12">
              <span className="mx-2">{text}</span>
              <Cursor cursorColor="blue" />
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}
