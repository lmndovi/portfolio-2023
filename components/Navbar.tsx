"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  return (
    <div>
      <div
        id="navbar"
        className="md:flex md:justify-center md:items-center md:p-5 hidden"
      >
        <Link href="/about">
          <Button variant="heroButtonSmall">About</Button>
        </Link>
        <Link href="/projects">
          <Button variant="heroButtonSmall">Projects</Button>
        </Link>
        <Link href="/experience">
          <Button variant="heroButtonSmall">Experience</Button>
        </Link>
        <Link href="/contact">
          <Button variant="heroButtonSmall">Contact</Button>
        </Link>
      </div>
      <div className="md:hidden flex justify-center items-center p-5">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              className="text-lg font-semibold text-gray-300 dark:text-gray-300"
              variant="ghost"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <DropdownMenuGroup>
              <DropdownMenuItem
                asChild
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <Link href="/"> Home </Link>
              </DropdownMenuItem>

              <DropdownMenuItem
                asChild
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <Link href="/about">About </Link>
              </DropdownMenuItem>

              <DropdownMenuItem
                asChild
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <Link href="/experience">Experience </Link>
              </DropdownMenuItem>

              <DropdownMenuItem
                asChild
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <Link href="/projects">Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
