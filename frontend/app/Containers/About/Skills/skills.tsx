"use client";

import {
  IconBrandNextjs,
  IconBrandPython,
  IconBrandCSharp,
  IconBrandCpp,
  IconBrandTypescript,
  IconSql,
  IconBrandReact,
  IconBrandGit,
  IconBrandAws,
} from "@tabler/icons-react";

const Skills = () => {
  return (
    <section className="flex justify-center items-center w-full lg:mt-0 h-full">
      <ul className="text-[#d8d4fe] grid grid-cols-3 gap-6 w-2/3 shadow-2xl lg:shadow-2xl lg:shadow-primary shadow-primary rounded-3xl p-8">
        <li className=" flex justify-center items-center">
          <IconBrandPython size={64} />
        </li>
        <li className=" flex justify-center items-center">
          <IconBrandCSharp size={64} />
        </li>
        <li className="flex justify-center items-center">
          <IconBrandCpp size={64} />
        </li>
        <li className="flex justify-center items-center">
          <IconBrandReact size={64} />
        </li>
        <li className="flex justify-center items-center">
          <IconBrandNextjs size={64} />
        </li>
        <li className="flex justify-center items-center">
          <IconBrandTypescript size={64} />
        </li>
        <li className="flex justify-center items-center">
          <IconBrandAws size={64} />
        </li>
        <li className="flex justify-center items-center">
          <IconSql size={64} />
        </li>
        <li className="flex justify-center items-center">
          <IconBrandGit size={64} />
        </li>
      </ul>
    </section>
  );
};

export default Skills;
