import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="relative w-48 h-48 sm:h-48 sm:w-48 md:w-80 md:h-[450px] xl:w-[500px] xl:h-[520px] mt-32 md:mb-0 flex-shrink-0 xl:mt-32">
        <Image
          src="/mum.jpg"
          alt="Mum and I"
          fill
          className="object-cover rounded-full md:rounded-lg"
        />
      </div>
      <div className="space-y-6 px-0 md:px-10 md:mt-28 ">
        <h4 className="text-3xl font-semibold">
          A <span className="underline decoration-[#1B7DE5]/70">little</span>{" "}
          more about me
        </h4>
        <p className="text-sm sm:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          tempore repudiandae, delectus dignissimos maiores expedita. Autem,
          minima qui. Numquam nostrum distinctio harum maiores incidunt! Quaerat
          ex eos rem perferendis veniam.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
