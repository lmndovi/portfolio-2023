import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Link href="/about">
        <button className="heroButton">About</button>
      </Link>
      <Link href="/projects">
        <button className="heroButton">Projects</button>
      </Link>
      <Link href="/experience">
        <button className="heroButton">Experience</button>
      </Link>
      <Link href="/contact">
        <button className="heroButton">Contact</button>
      </Link>
    </div>
  );
};

export default Navbar;
