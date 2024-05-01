import { IconBrandGithub, IconFileDescription } from "@tabler/icons-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Skills from "@/app/components/About/Skills/skills";
import Details from "./Details/details";

const About = () => {
  return (
    <div className="lg:flex lg:items-center lg:py-16">
      <div className="bg-base-300 lg:h-full lg:w-1/2 flex flex-col justify-center p-12 pb-4 lg:pl-20 gap-6">
        <Details />
        <div className="flex md:flex-row flex-col gap-3 md:gap-10 mb-24 md:mb-0">
          <Button asChild className="rounded">
            <Link
              className="md:w-[45%]"
              href="https://github.com/pixelfox01"
              target="_blank"
            >
              <IconBrandGithub />
              GitHub
            </Link>
          </Button>
          <Button asChild className="rounded">
            <Link
              className="md:w-[45%] md:mr-12"
              href="https://pixelfox01.github.io/resume/resume.pdf"
              target="_blank"
            >
              <IconFileDescription />
              Resume
            </Link>
          </Button>
        </div>
      </div>
      <div className="bg-base-300 lg:h-full lg:w-1/2 py-4">
        <Skills />
      </div>
    </div>
  );
};

export default About;
