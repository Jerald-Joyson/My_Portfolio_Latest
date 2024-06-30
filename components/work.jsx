// components/Work.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import projectData from "../lib/projectCardDetails";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "./projectCard";
import Modal from "./model";

const Work = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section className="relative xl:mb-12 mb-32">
      <div className="container mx-auto">
        <div className="w-full mx-auto xl:mx-0 text-center justify-center items-center xl:text-left mb-12 flex flex-col sm:flex-row  sm:justify-between md:justify-between lg:justify-between xl:justify-between">
          <h2 className="section-title mb-4">Projects</h2>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        <div className="w-full">
          <Swiper
            className="h-[550px]"
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              720: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 6).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard
                    project={project}
                    onClick={() => handleCardClick(project)}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {selectedProject && (
        <Modal
          show={showModal}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Work;
