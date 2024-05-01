import { IconBrandGithub, IconCalendar } from "@tabler/icons-react";
import { Fira_Mono } from "next/font/google";
import Link from "next/link";
import React from "react";

interface ProjectProps {
  title: string;
  date: string;
  description: string[];
  link: string;
}

const fira_mono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Project = (props: ProjectProps) => {
  return (
    <div className="bg-muted rounded-xl h-full shadow-lg p-8 flex flex-col gap-y-3 tracking-wider">
      <div className="border-l-[3px] border-primary pl-4">
        <h1 className="uppercase font-bold tracking-widest lg:text-xl">
          {props.title}
        </h1>
      </div>
      <div className={`text-sm lg:text-lg ${fira_mono.className}`}>
        <p className="flex items-center mb-1">
          <IconCalendar className="inline-block mr-2" size={16} />
          {props.date}
        </p>
        <p className="flex items-center">
          <IconBrandGithub className="inline-block mr-2" size={16} />
          <Link
            href={props.link}
            className="hover:underline underline-offset-4"
          >
            GitHub Link
          </Link>
        </p>
      </div>
      <div className="p-5 rounded bg-accent mt-5 shadow-md shadow-primary">
        <ul className="list-disc ml-5 flex flex-col gap-y-2 marker:text-primary-focus">
          {props.description.map((desc, index) => (
            <li className="text-sm lg:text-lg" key={`${index}-${props.title}`}>
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
