"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

import useSWR from "swr";
import { fetcher } from "@/utils/fetchExperience";

export default function WorkExperience() {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const { data: experiences, error } = useSWR(
    `*[_type == "experience"] {
        ...,
        technologies[] -> 
}`,
    fetcher
  );

  useEffect(() => {
    // Update slidesPerView based on the screen width
    const handleResize = () => {
      if (window.innerWidth >= 980) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    // Initial call
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

      <div className="relative top-20 md:h-[520px] lg:h-screen w-full md:w-full flex space-x-5 pt-20 px-10 lg:px-0 md:overflow-hidden">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper rounded-2xl "
        >
          {" "}
          {experiences?.reverse().map((experience) => (
            <SwiperSlide key={experience._id}>
              <ExperienceCard key={experience._id} experience={experience} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
