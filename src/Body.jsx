import React from "react";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";
import Personal from "./Personal";
import Project from "./project";
import Achievement from "./Achivement";
import Experience from "./Experience";

export default function Body() {
  return (
    <div className="body">
      <Summary />
      <Education />
      <Skills />
      <Project />
      <Achievement />
      <Personal />
      <Experience />
    </div>
  );
}