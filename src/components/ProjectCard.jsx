import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-lg relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute overlay justify-center items-center top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-90 transition-all duration-500 group/link">
          <Link
            href={gitUrl}
            target="_blank"
            className="relative h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white mr-2"
          >
            <CodeBracketIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-[#ADB7BE] group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="relative h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white"
          >
            <EyeIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-[#ADB7BE] group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white mt-3 rounded-b-lg bg-[#181818] py-6 px-4    border-l-4 border-secondary-600">
        <h5 className="text-xl font-bold mb-2    text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
