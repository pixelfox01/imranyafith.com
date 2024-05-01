import { PROJECTS } from "@/app/constants";
import Project from "./Project/project";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-base-300 flex flex-col lg:gap-y-6 justify-center items-center"
    >
      <div className="w-full px-12 lg:px-48 mb-6">
        <h1 className="uppercase tracking-wider text-xl lg:text-4xl font-semibold underline underline-offset-8 decoration-4 decoration-primary">
          Projects
        </h1>
      </div>
      <div className="w-3/4 flex flex-col gap-6 md:grid lg:grid-cols-2">
        {PROJECTS.map((project) => (
          // eslint-disable-next-line react/jsx-key
          <div className="first:col-span-2">
            <Project
              title={project.title}
              date={project.date}
              description={project.description}
              link={project.link}
              key={project.key}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
