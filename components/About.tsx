"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { client } from "@/sanity/lib/client";
import useSWR from "swr";
import { fetcher } from "@/utils/fetchPageInfo";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  pageInfo: PageInfo[];
};

export default function About() {
  const { data: pageInfo, error } = useSWR(`*[_type == "pageInfo"]`, fetcher);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto mb-48"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{ x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className="relative w-32 h-32 md:w-80 md:h-[450px] xl:w-[500px] xl:h-[520px] mt-40 sm:mt-32 md:mb-0 flex-shrink-0 xl:mt-40 my-10 md:my-0 top-4 sm:top-8 md:top-0"
      >
        {pageInfo?.map((info) => (
          <Image
            key={info._id}
            src={urlForImage(info?.profilePic).url()}
            alt="Mum and I"
            fill
            className="object-cover rounded-full md:rounded-lg"
          />
        ))}
      </motion.div>
      <div className="space-y-6 px-0 md:px-10 md:mt-28 max-h-[450px]">
        <h4 className="text-3xl font-semibold">
          A <span className="underline decoration-[#1B7DE5]/70">little</span>{" "}
          more about me
        </h4>
        {pageInfo?.map((info, index) => (
          <div
            key={info._id}
            className="text-sm sm:text-base text-left md:text-center lg:text-left"
          >
            {info.backgroundInformation.split("/n").map((paragraph, i) => (
              <div key={i}>
                <p>{paragraph}</p>
                <hr className="my-2 opacity-0" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
