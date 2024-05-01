import React from "react";
import About from "@/app/components/About/about";
import Projects from "./components/Projects/projects";
import Experience from "./components/Experience/experience";

const Home = () => {
  return (
    <div>
      <About />
      <Projects />
      <Experience />
    </div>
  );
};

export default Home;
