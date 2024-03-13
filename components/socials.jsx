"use client";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.youtube.com",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/jerald-joyson-4a3173276",
    name: <RiLinkedinFill />,
  },
  { path: "https://github.com/Jerald-Joyson", name: <RiGithubFill /> },
  {
    path: "https://www.facebook.com/jerald.joyson.1.0",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/jerald_joyson_/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} target="_blank" key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
