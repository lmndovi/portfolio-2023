"use client";

import { fetcher } from "@/utils/fetchSocials";
import React from "react";
import { SocialIcon } from "react-social-icons";
import useSWR from "swr";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  const { data: socials, error } = useSWR(`*[_type == "social"]`, fetcher);
  if (error) {
    console.error("Error fetching data:", error);
    // You can add additional error handling logic if needed
  }

  return (
    <header className="sticky top-0 p-5 flex-col items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <div className="flex justify-between">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          {" "}
          {socials?.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
            />
          ))}
        </motion.div>

        <Link href="/contact" legacyBehavior>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center text-gray-300 cursor-pointer"
          >
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Get In Touch
            </p>
          </motion.div>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Navbar />
      </div>
    </header>
  );
}
