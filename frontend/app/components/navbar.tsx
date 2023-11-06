"use client";

import { NAV_LINKS } from "../constants";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <nav className="w-full flex justify-between h-20 items-center bg-slate-600">
      <h1 className="md:w-[25%] md:text-lg ml-16 font-semibold text-2xl">
        Imran Yafith
      </h1>
      <div className="md:hidden mr-12">
        <button onClick={handleClick}>
          <IconMenu2 size={30} />
        </button>
      </div>
      <ul className="hidden md:flex md:w-full justify-between mr-32">
        {NAV_LINKS.map((link) => (
          <li key={`link-${link}`}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
