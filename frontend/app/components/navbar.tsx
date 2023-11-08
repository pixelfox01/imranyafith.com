"use client";

import { NAV_LINKS } from "../constants";
import Link from "next/link";

const Navbar = () => {
  return (
    // <nav className="sticky top-0 flex justify-between h-nav bg-transparent backdrop-filter backdrop-blur-[8px] items-center lg:px-12 px-4">
    //   <h1 className="hidden uppercase lg:flex font-semibold tracking-widest h-1/2 pr-12 text-lg justify-center items-center border-r-2 border-slate-200">
    //     Imran Yafith
    //   </h1>
    //   <ul className="flex w-full lg:w-[60%] h-1/2 items-center text-lg lg:mr-5 justify-between">
    //     {NAV_LINKS.map((link) => (
    //       <li key={link.key}>
    //         <Link
    //           className="hover:underline underline-offset-4 tracking-widest"
    //           href={link.path}
    //         >
    //           {link.label}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
    <div className="drawer sticky top-0">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 uppercase">Imran Yafith</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    className="hover:underline underline-offset-4 tracking-widest"
                    href={link.path}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                className="hover:underline underline-offset-4 tracking-widest"
                href={link.path}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
