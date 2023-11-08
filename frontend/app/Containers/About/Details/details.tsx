import React from "react";
import { IconBriefcase, IconSchool } from "@tabler/icons-react";
import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

const Details = () => {
  return (
    <section>
      <div>
        <h1 className="lg:text-4xl text-2xl font-semibold uppercase tracking-widest">
          Imran Yafith
        </h1>
      </div>
      <div className={`${roboto_mono.className}`}>
        <div className="lg:text-xl text-lg flex gap-3 items-center">
          <IconBriefcase />
          <h2>Research Assitant | Naryant (Inovex)</h2>
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
