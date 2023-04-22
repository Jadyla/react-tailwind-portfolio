import React, { useState } from "react";
import tonel from "../assets/images/tonel.jpg";
import usejsc from "../assets/images/usejsc.jpg";
import bogiatto from "../assets/images/bogiatto.jpg";
import wrx from "../assets/images/wrx.jpg";
import ippodashboard from "../assets/images/ippodashboard.jpg";


import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Tonel Brinquedos",
      description: "Site Institucional",
      img: tonel,
    },
    {
      id: 2,
      title: "USE JSC",
      description: "E-commerce",
      img: usejsc,
    },
    {
      id: 3,
      title: "Boggiatto Hamburgueria",
      description: "Aplicativo Mobile",
      img: bogiatto,
    },
    {
      id: 4,
      title: "WRX",
      description: "Site Institucional",
      img: wrx,
    },
    {
      id: 5,
      title: "IPPO Dashboard",
      description: "Sistema WEB",
      img: ippodashboard,
    }
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projetos</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          Temos projetos desenvolvidos em conjunto e individualmente, a seguir você pode ver mais sobre eles...
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }`}
          >
            Projetos
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }  `}
          >
            Áreas de conhecimento
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          >
            Falar sobre Linux, React, Node, JAVA, js, wordpress, wix, etc... talvez usar cards assim como os projetos
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
