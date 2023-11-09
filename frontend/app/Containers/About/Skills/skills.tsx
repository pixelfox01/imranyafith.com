import {
  IconBrandNextjs,
  IconBrandPython,
  IconBrandCSharp,
  IconBrandCpp,
  IconBrandTypescript,
  IconBrandTailwind,
  IconSql,
  IconBrandReact,
  IconBrandGit,
} from "@tabler/icons-react";

const Skills = () => {
  return (
    <section className="flex justify-center items-center w-full lg:mt-0 h-full">
      <ul className="text-[#b0b7f1] grid grid-cols-3 gap-6 w-2/3 shadow-lg lg:shadow-2xl lg:shadow-primary shadow-primary rounded-3xl p-8 lg:pt-12">
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
          <IconBrandTailwind size={64} />
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
