import React from "react";
import SectionAbout from "./SectionAbout";
import SectionMusic from "./SectionMusic";

function Sections() {
  return(
  
    <div className="section-container">
    <SectionAbout></SectionAbout>
   
    <div className="teste">
    <SectionMusic></SectionMusic>
    </div>
    
    </div>
   
);
  
}

export default Sections;
