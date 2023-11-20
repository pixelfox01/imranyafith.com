import { PROJECTS } from "@/app/constants";
import Project from "./Project/project";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" py-16 bg-base-300 flex flex-col lg:gap-y-6 justify-center items-center"
    >
      <div className="w-full px-12 lg:px-48 mb-6">
        <h1 className="uppercase tracking-wider text-xl lg:text-4xl font-semibold underline underline-offset-8 decoration-4 decoration-primary-focus">
          Projects
        </h1>
      </div>
      <div className="w-3/4 flex flex-col gap-6 lg:grid lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <div className="first:col-span-2">
            <Project
              key={project.key}
              title={project.title}
              date={project.date}
              description={project.description}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
