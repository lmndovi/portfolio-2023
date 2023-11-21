import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Link href="/about">
        <button className="heroButtonSmall sm:heroButton">About</button>
      </Link>
      <Link href="/projects">
        <button className="heroButtonSmall sm:heroButton">Projects</button>
      </Link>
      <Link href="/experience">
        <button className="heroButtonSmall sm:heroButton">Experience</button>
      </Link>
      <Link href="/contact">
        <button className="heroButtonSmall sm:heroButton">Contact</button>
      </Link>
    </div>
  );
};

export default Navbar;
