"use client";

import { NAV_LINKS } from "../constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between h-nav bg-transparent backdrop-filter backdrop-blur-[8px] items-center lg:px-12 px-4">
      <h1 className="hidden uppercase lg:flex font-semibold tracking-widest h-1/2 pr-12 text-lg justify-center items-center border-r-2 border-slate-200">
        Imran Yafith
      </h1>
      <ul className="flex w-full lg:w-[60%] h-1/2 items-center text-lg lg:mr-5 justify-between">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              className="hover:underline underline-offset-4"
              href={link.path}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
