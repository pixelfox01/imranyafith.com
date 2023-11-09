import Details from "./Details/details";
import Skills from "./Skills/skills";

const About = () => {
  return (
    <div className="h-[44rem] lg:flex text-secondary-content ">
      <div className="bg-base-300 h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center p-12 lg:pl-20 gap-6">
        <Details />
      </div>
      <div className="bg-base-300 h-1/2 lg:h-full lg:w-1/2 py-12">
        <Skills />
      </div>
    </div>
  );
};

export default About;
