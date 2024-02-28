import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-fit snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40  transition-opacity duration-200 overflow-hidden h-screen pt-14">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative h-20 w-20"
      >
        <Image
          src={urlForImage(experience?.companyImage).url()}
          alt={experience.company}
          fill
          className="rounded-full object-cover xl:w-[120px] xl:h-[120px] object-center"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-lg mt-1">{experience.company}</p>
        <div className="flex space-x-2 md:space-x-5 my-2">
          {experience.technologies.map((technology) => (
            <div
              key={technology._id}
              className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
            >
              <Image
                key={technology._id}
                className="rounded-full"
                src={urlForImage(technology?.image).url()}
                alt={technology.title}
                fill
              />
            </div>
          ))}
        </div>

        <ul className="list-disc space-y-4 ml-5 text-sm md:w-full md:text-lg">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
