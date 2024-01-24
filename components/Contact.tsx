"use client";

import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import React from "react";
import { motion } from "framer-motion";
import Form from "@/components/Form";
import useSWR from "swr";
import { fetcher } from "@/utils/fetchPageInfo";

export default function Contact() {
  const { data: pageInfo, error } = useSWR(`*[_type == "pageInfo"]`, fetcher);

  const emailAddress = "lmndovi@gmail.com";

  const handleClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center mb-20"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="relative top-28 flex flex-col items-center justify-center space-y-10 w-80 md:w-full">
        <h4 className="text-3xl md:text-5xl font-semibold text-center mx-auto w-full md:w-[600px]">
          Here to bring your ideas to life.{" "}
          <span className="underline decoration-[#1B7DE5]/50 underline-offset-4">
            Let&apos;s talk
          </span>
        </h4>

        {pageInfo?.map((info, index) => (
          <div className="space-y-5" key={info._id}>
            <div className="flex items-center space-x-4 justify-center">
              <button
                onClick={handleClick}
                className="flex items-center space-x-4"
              >
                <EnvelopeIcon className="text-[#1B7DE5]/40 h-7 w-7 animate-pulse " />
                <p className="text-2xl">{info.email}</p>
              </button>
            </div>

            <div className="flex items-center space-x-4 justify-center mx-auto w-96">
              <MapPinIcon className="text-[#1B7DE5]/40 h-7 w-7 animate-pulse " />
              <p className="text-2xl">{info.address}</p>
            </div>
          </div>
        ))}
        <div className="">
          <Form />
        </div>
      </div>
    </motion.div>
  );
}
