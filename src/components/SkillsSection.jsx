'use client'
import React, { useRef } from "react";
import {
  FaCss3,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { animate, motion, useInView } from "framer-motion";

const techskill = [
  {
    id: 1,
    skill: <FaReact className="w-16 h-16 text-blue-400" />,
    title: "React",
  },
  {
    id: 2,
    skill: <FaNode className="w-16 h-16 text-green-500" />,
    title: "NodeJs",
  },
  {
    id: 3,
    skill: <FaJava className="w-16 h-16 text-red-500" />,
    title: "Java",
  },
  {
    id: 4,
    skill: <BiLogoJavascript className="w-16 h-16 text-yellow-300" />,
    title: "JavaScript",
  },
  {
    id: 5,
    skill: <FaHtml5 className="w-16 h-16 text-orange-600" />,
    title: "Html",
  },
  {
    id: 6,
    skill: <FaCss3 className="w-16 h-16 text-blue-600" />,
    title: "CSS",
  },
  {
    id: 7,
    skill: <FaDatabase className="w-16 h-16 text-orange-400" />,
    title: "SQL",
  },
  {
    id: 8,
    skill: <TbBrandNextjs className="w-16 h-16 text-white" />,
    title: "NextJs",
  },
  {
    id: 9,
    skill: <FaGithub className="w-16 h-16 text-white" />,
    title: "GitHub",
  },
  {
    id: 10,
    skill: <FaGitAlt className="w-16 h-16 text-orange-500" />,
    title: "Git",
  },
  {
    id: 11,
    skill: <TbBrandVscode className="w-16 h-16 text-blue-600 " />,
    title: "VS-Code",
  },
];



const SkillsSection = () => {

    //Animations
// const ref = useRef(null);
// const isInView = useInView(ref, { once: true });

// const cardVariants = {
//   initial: { x: 100, opacity: 0, scale:2.5 },
//   animate: { x: 0, opacity: 1, scale:1 },
// };

  return (
    <div id="skills" className="md:p-10 overflow-hidden">
      <h2 className="text-center text-white text-4xl font-bold mt-4">
        Tools & Tecnologies
      </h2>
      <div  className="grid grid-cols-2 md:grid-cols-4 gap-8 my-10 bg-gray-500 bg-opacity-10 p-5 rounded-md ">
        {techskill.map((skill, index) => (
            <motion.div
            key={index}
            // variants={cardVariants}
            // initial="initial"
            // animate={isInView ? "animate" : "initial"}
            // transition={{duration:0.3, delay: index * 0.4}}

            initial = {{rotateZ:360, x:100, opacity:0, scale:2.5}}
            whileInView={{rotateZ:0, x:0, opacity:1, scale:1}}
            transition={{duration:0.3, delay:index * 0.2}}
            viewport={{once: true}}

            className="flex flex-col justify-center items-center gap-2 p-4 "
          >
            <div key={skill.id}>{skill.skill}</div>
            <h2 >{skill.title}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default SkillsSection;
