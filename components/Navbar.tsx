import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div>
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
  );
};

export default Navbar;
