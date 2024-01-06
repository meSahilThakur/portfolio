"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Color Search",
    description: "Your ultimate companion for effortlessly finding and matching colors!",
    img: "/images/live_project-imgs/color_search_tool.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/meSahilThakur/ColorSearchTool",
    previewUrl: "https://colorsearchtool.netlify.app",
  },
  {
    id: 2,
    title: "My Todos",
    description: "A powerful and intuitive task management tool designed to streamline your daily productivity!",
    img: "/images/live_project-imgs/todoApp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/meSahilThakur/todoApp",
    previewUrl: "https://mytodoscontext.netlify.app",
  },
  {
    id: 3,
    title: "Match the Bubble",
    description: "A delightful and engaging game that combines entertainment with cognitive challenge!",
    img: "/images/live_project-imgs/match_bubble.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/meSahilThakur/BubbleGame",
    previewUrl: "https://matchthebubble.netlify.app",
  },
  {
    id: 4,
    title: "Netflix Home",
    description: " Elevate your entertainment journey with a sleek and responsive design that puts the spotlight on your favorite shows and movies.",
    img: "/images/live_project-imgs/netflix_home.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/meSahilThakur/react-netflix",
    previewUrl: "https://netflix-homeclone.netlify.app",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  //Animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div id="projects">
      <h2 className="text-center text-white text-4xl font-bold mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name={"All"}
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={"Web"}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={"Mobile"}
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration:0.3, delay: index * 0.4}}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.img}
              tags={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSection;
