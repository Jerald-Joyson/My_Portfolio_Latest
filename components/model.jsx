// components/Modal.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Modal = ({ show, onClose, project }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="fixed z-10 inset-0 top-16 bg-black bg-opacity-85 flex items-center justify-center"
    >
      <div className="bg-[#faf8e5] relative h-[550px] dark:bg-[#4d5160] rounded-lg shadow-lg max-w-2xl w-[300px] xl:w-full md:w-[400px]">
        <div
          onClick={onClose}
          className="text-right w-8 h-8 absolute top-3 left-3 bg-[#dba251] text-white rounded-full flex justify-center items-center cursor-pointer hover:border-[#dba251] hover:bg-transparent hover:border-2 hover:text-[#dba251] transition-all"
        >
          X
        </div>
        <div className="overflow-y-scroll h-full">
          <div className="flex flex-col items-center pt-4 xl:pt-9 md:pt-9 pr-4 pl-4 ">
            <Image
              src={project.image}
              width={300}
              height={300}
              alt={project.name}
              className="mb-4"
            />
          </div>
          <div className="bg-white dark:bg-[#4d5160] flex flex-col items-center p-4 rounded-lg">
            <h4 className="text-xl font-bold mb-2">{project.name}</h4>
            <p className="text-base text-muted-foreground mb-4">
              {project.description}
            </p>
            <div className="flex gap-4">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-sm px-3 py-2 bg-[#dba251] text-white rounded-full hover:bg-transparent hover:border-2 hover:border-[#dba251] hover:text-[#dba251] transition-all"
                >
                  View Project
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-sm px-3 py-2 bg-transparent border-2 border-[#dba251] text-[#dba251] rounded-full transition-all"
                >
                  View Code
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
