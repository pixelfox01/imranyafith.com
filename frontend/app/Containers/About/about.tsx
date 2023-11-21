import Link from "next/link";
import Details from "./Details/details";
import Skills from "./Skills/skills";
import { IconBrandGithub, IconFileDescription } from "@tabler/icons-react";

const About = () => {
  return (
    <div className="h-[44rem] lg:flex text-secondary-content">
      <div className="bg-base-300 h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center p-12 lg:pt-12 pt-28 lg:pl-20 gap-6">
        <Details />
        <div className="flex md:flex-row flex-col md:justify-between gap-3 md:gap-1 mb-24 md:mb-0">
          <Link
            className="btn btn-primary md:w-[45%]"
            href="https://github.com/pixelfox01"
          >
            <IconBrandGithub />
            GitHub
          </Link>
          <a
            className="btn btn-primary md:w-[45%] md:mr-12"
            href="/imran-yafith-resume.pdf"
            target="_blank"
          >
            <IconFileDescription />
            Resume
          </a>
        </div>
      </div>
      <div className="bg-base-300 h-1/2 lg:h-full lg:w-1/2 py-12">
        <Skills />
      </div>
    </div>
  );
};

export default About;
