import { Roboto_Mono } from "next/font/google";
import Details from "./Details/details";
import Skills from "./Skills/skills";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

const About = () => {
  return (
    <div className="h-screen lg:flex">
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center pl-12 lg:pl-20 gap-6">
        <Details />
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2">
        <Skills />
      </div>
    </div>
  );
};

export default About;
