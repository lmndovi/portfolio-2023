"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

import useSWR from "swr";
import { fetcher } from "@/utils/fetchExperience";

export default function WorkExperience() {
  const { data: experiences, error } = useSWR(
    `*[_type == "experience"] {
        ...,
        technologies[] -> 
}`,
    fetcher
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="h-[550px] w-full flex space-x-5 overflow-x-scroll pt-20 px-10 pb-10 snap-both snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1B7DE5]/60">
        {experiences?.reverse().map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
