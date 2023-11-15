"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { Project } from "@/typings";

import { fetcher } from "@/utils/fetchProjects";
import useSWR from "swr";

type Props = {
  projects: Project[];
};

export default function Projects() {
  const { data: projects, error } = useSWR('*[_type == "project"]', fetcher);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1B7DE5]/60">
        {projects?.map((project, index) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center p-20 justify-center md:p-44 h-screen mt-2"
          >
            <Link href={project?.linkToBuild}>
              <motion.div
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-40 w-72 top-20 mb-5  md:h-60 md:w-96 xl:h-[400px] xl:w-[600px] mt-8"
              >
                {/* <Image
                  src={urlForImage(project?.image).url()}
                  alt={project?.title}
                  className="rounded-md"
                  fill
                /> */}
              </motion.div>
            </Link>

            <div className="pt-16 space-y-4 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#1B7DE5]/80">
                  Case Study {index + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              {/* Tech Used */}
              <div className="flex space-x-3 justify-center items-center">
                {project?.technologies.map((technology) => (
                  <div key={technology._id} className="relative h-8 w-8">
                    {/* <Image
                      key={technology._id}
                      className="rounded-full"
                      src={urlForImage(technology?.image).url()}
                      alt={technology.title}
                      fill
                    /> */}
                  </div>
                ))}
              </div>

              <p className="text-md text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#1B7DE5]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
