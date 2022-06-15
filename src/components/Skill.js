import React from "react";
import { FaVuejs,FaReact,FaHtml5,FaCss3Alt} from "react-icons/fa";
import { DiNodejs,DiJavascript1,DiSass,DiPostgresql } from "react-icons/di";
import { SiSequelize,SiCsharp,SiBootstrap,SiJava} from "react-icons/si";
import { VscTerminalLinux } from "react-icons/vsc";

const Skill = () => {
  return (
        <div className='App-header' id="skill">
            <h2 style={{marginBottom: "3%"}}>SKILLS</h2>
            <div style={{fontSize: "3.5em",paddingLeft:"20%",paddingRight: "20%"}}>
              <FaVuejs />
              <FaReact />
              <DiNodejs />
              <SiSequelize />
              <DiPostgresql />
              <DiJavascript1 />
              <FaHtml5 />
              <FaCss3Alt />
              <DiSass />
              <SiBootstrap /> 
              <SiCsharp />
              <SiJava />
              <VscTerminalLinux />
            </div>
        </div>
  );
}

export default Skill