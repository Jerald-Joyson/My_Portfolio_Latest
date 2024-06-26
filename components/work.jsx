"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import projectData from "../lib/projectCardDetails";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

//components
import ProjectCard from "./projectCard";

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="w-full mx-auto xl:mx-0 text-center justify-center items-center xl:text-left mb-12 flex flex-col sm:flex-row  sm:justify-between md:justify-between lg:justify-between xl:justify-between">
          <h2 className="section-title mb-4">My Projects</h2>

          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="w-full">
          <Swiper
            className="h-[500px]"
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
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Work;
