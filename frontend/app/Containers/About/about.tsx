import { Roboto_Mono } from "next/font/google";
import Details from "./Details/details";
import Skills from "./Skills/skills";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

const About = () => {
  return (
    // <div className="h-screen flex flex-col lg:flex-row lg:justify-between tracking-widest">
    //   <div className="flex flex-col lg:justify-center my-10 lg:mt-0 gap-6  lg:pl-24 pl-6">
    //     <h1 className="lg:text-4xl text-2xl font-semibold uppercase">
    //       Imran Yafith
    //     </h1>
    //     <div className={`${roboto_mono.className}`}>
    //       <div className="lg:text-xl text-sm flex gap-3 mb-[0.15rem] items-center">
    //         <IconBriefcase />
    //         <h2>Research Assitant | Naryant (Inovex)</h2>
    //       </div>
    //       <div className="lg:text-xl text-sm flex gap-3 items-center">
    //         <IconSchool />
    //         <h2>Computer Science | Sheridan College</h2>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="h-full border-t-2 lg:border-t-0 lg:border-l-2 lg:w-1/2">
    //     <Skills />
    //   </div>
    // </div>
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
