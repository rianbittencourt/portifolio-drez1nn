import React from "react";
import SectionAbout from "./SectionAbout";
import SectionMusic from "./SectionMusic";
import SectionServices from "./SectionServices";

function Sections() {
  return(
  
    <div className="section-container">
    <SectionAbout></SectionAbout>
   
    <div className="teste">
    <SectionMusic></SectionMusic>
    </div>
    <SectionServices></SectionServices>
    
    </div>
   
);
  
}

export default Sections;
