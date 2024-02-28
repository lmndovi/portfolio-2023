"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { Project } from "@/typings";

import { fetcher } from "@/utils/fetchProjects";
import useSWR from "swr";
import { Button } from "./ui/button";

type Props = {
  projects: Project[];
};

export default function Projects() {
  const { data: projects, error } = useSWR(
    `*[_type == "project"] {
  title,
  linkToBuild,
  linkToRepo,
  summary,
  image,
  technologies[]-> {
    title,
    image
  }
}`,
    fetcher
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative top-20 md:top-10 w-full flex md:flex-col overflow-x-scroll overflow-y-auto snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/10 scrollbar-thumb-[#1B7DE5]/60 md:pt-36 md:-space-y-56">
        {projects?.map((project, index) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center md:grid md:grid-cols-2 space-y-6 items-center p-20 justify-center  h-screen lg:h-fit mt-10 lg:relative lg:-top-72"
          >
            <div id="div1" className="flex justify-center items-center">
              <div className="relative h-48 w-72 md:top-20 mb-5  md:h-60 md:w-96 xl:h-[400px] xl:w-[600px]">
                <Image
                  src={urlForImage(project?.image).url()}
                  alt={project?.title}
                  className="rounded-md object-cover"
                  fill
                />
              </div>
            </div>

            <div
              id="div2"
              className="md:pt-16 space-y-5 px-0 md:px-10 max-w-6xl pb-20 relative md:top-40"
            >
              <h4 className="text-lg md:text-2xl font-semibold text-center text-gray-300">
                <span className="underline decoration-[#1B7DE5]/80">
                  Case Study {index + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex justify-center items-center space-x-3">
                <Link href={project?.linkToBuild}>
                  <Button variant="heroButtonSmall">
                    <h3>Deployed site</h3>
                  </Button>
                </Link>
                <Link href={project?.linkToRepo}>
                  <Button variant="heroButtonSmall">
                    <h3>Link to repo</h3>
                  </Button>
                </Link>
              </div>

              {/* Tech Used */}
              <div className="flex flex-col space-y-3 items-center justify-center md:py-5">
                <div className="flex">
                  {project?.technologies
                    .slice(0, project?.technologies.length / 2)
                    .map((technology) => (
                      <div
                        key={technology._id}
                        className="relative mx-1 h-5 w-5 md:h-8 md:w-8 opacity-80"
                      >
                        <div>
                          <Image
                            key={technology._id}
                            className="rounded-full"
                            src={urlForImage(technology?.image).url()}
                            alt={technology.title}
                            fill
                          />
                          <p className="opacity-0 hover:opacity-100 transition duration-700 ease-in-out uppercase tracking-wider text-[#ff5800] text-xs pt-24">
                            {technology.title}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="flex">
                  {project?.technologies
                    .slice(
                      project?.technologies.length / 2,
                      project?.technologies.length
                    )
                    .map((technology) => (
                      <div
                        key={technology._id}
                        className="relative mx-1 h-5 w-5 md:h-8 md:w-8 opacity-80"
                      >
                        <div>
                          <Image
                            key={technology._id}
                            className="rounded-full"
                            src={urlForImage(technology?.image).url()}
                            alt={technology.title}
                            fill
                          />
                          <p className="opacity-0 hover:opacity-100 py-10 transition duration-700 ease-in-out uppercase tracking-wider text-[#ff5800] text-xs">
                            {technology.title}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <ul className="list-disc space-y-3 ml-5 text-md p-5 md:pb-48 text-gray-300 ">
                {project?.summary.map((summary, i) => (
                  <li key={i}>{summary}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#1B7DE5]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
