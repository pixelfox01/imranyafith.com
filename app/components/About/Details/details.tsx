"use client";

import React from "react";
import { IconBriefcase, IconSchool } from "@tabler/icons-react";
import { Fira_Mono } from "next/font/google";

const fira_mono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Details = () => {
  return (
    <section className="flex flex-col gap-4 lg:border-l-4 pl-4 border-primary">
      <div className="border-l-2 border-primary pl-4 lg:border-none lg:p-0">
        <h1 className="lg:text-4xl text-2xl font-semibold uppercase tracking-widest">
          Imran Yafith
        </h1>
      </div>
      <div className={`${fira_mono.className}`}>
        <div className="lg:text-xl text-lg flex gap-3 items-center">
          <IconBriefcase />
          <h2>Research Assistant | Naryant (Inovex)</h2>
        </div>
        <div className="lg:text-xl text-lg flex gap-3 items-center">
          <IconSchool />
          <h2>Computer Science | Sheridan College</h2>
        </div>
      </div>
    </section>
  );
};

export default Details;
