import React, { useState } from "react";
import tonel from "../assets/images/tonel.jpg";
import usejsc from "../assets/images/usejsc.jpg";
import bogiatto from "../assets/images/bogiatto.jpg";
import wrx from "../assets/images/wrx.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";

import css from "../assets/images/css.png"
import html from "../assets/images/html.png"
import java from "../assets/images/java.png"
import javascript from "../assets/images/javascript.png"
import linux from "../assets/images/linux.png"
import node from "../assets/images/node.png"
import react from "../assets/images/react.png"
import wordpress from "../assets/images/wordpress.png"

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
          Temos projetos desenvolvidos em conjunto e individualmente, a seguir você pode ver mais sobre eles
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] bg-[#171717] rounded-[6px] p-[4px] ${durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }`}
            style={{ padding: '5px 15px' }}
          >
            Projetos
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] bg-[#171717] rounded-[6px] p-[4px] ${durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }  `}
            style={{ padding: '5px 15px' }}
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
            className="tab-pane  text-center text-white max-w-4xl mx-auto lg:p-5 "
          >
            <Swiper
              slidesPerView={6}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper "
            >
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={java} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={react} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={linux} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={javascript} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={wordpress} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={node} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={css} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={html} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
