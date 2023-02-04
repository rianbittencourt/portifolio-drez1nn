import React from "react";
import SectionAbout from "./SectionAbout";
import SectionMusic from "./SectionMusic";

function Sections() {
  return(
  
    <div className="section-container">
    <SectionAbout></SectionAbout>
    <SectionMusic></SectionMusic>
    </div>
);
  
}

export default Sections;
