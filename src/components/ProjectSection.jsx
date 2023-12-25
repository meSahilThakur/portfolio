'use client'
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Color Search",
    description: "Project 1 description",
    img: "/images/live_project-imgs/color_search_tool.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "My Todos",
    description: "Project 2 description",
    img: "/images/live_project-imgs/todoApp.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "Match the Bubble",
    description: "Project 3 description",
    img: "/images/live_project-imgs/match_bubble.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 4,
    title: "Netflix Home",
    description: "Project 4 description",
    img: "/images/live_project-imgs/netflix_home.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
];

const ProjectSection = () => {

    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

  return (
    <div>
      <h2 className="text-center text-white text-4xl font-bold mt-4">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name={"All"} isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name={"Web"} isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name={"Mobile"} isSelected={tag === "Mobile"} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.img}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
