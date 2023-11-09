import Job from "./Job/job";
import { EXPERIENCE } from "@/app/constants";

const Experience = () => {
  return (
    <div
      id="experience"
      className="py-12 bg-base-300 flex flex-col lg:gap-y-6 justify-center items-center"
    >
      <div className="w-full px-12 lg:px-48 mb-6">
        <h1 className="uppercase tracking-wider text-xl lg:text-4xl font-semibold underline underline-offset-8 decoration-2 decoration-primary-focus">
          Experience
        </h1>
      </div>
      <div className="w-3/4 flex flex-col gap-6 lg:grid lg:grid-cols-2">
        {EXPERIENCE.map((job) => (
          <div className="first:col-span-2">
            <Job
              key={job.key}
              title={job.title}
              company={job.company}
              description={job.description}
              duration={job.duration}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
