"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Javascript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>MCA from Chandigarh University</li>
                <li>BSc Computer Science from Himachal Pradesh University</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Java Full Stack from JSpiders, Bangalore</li>
                <li>Java from Spoken Tutorials by IIT Bombay</li>
                <li>PHP from Spoken Tutorials by IIT Bombay</li>
            </ul>
        )
    }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className=" md:grid md:grid-cols-2 items-center gap-8 py-8 px-4 xl:gap-16 sm:py-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="about-img" className="border-l-8 border-b-4 border-secondary-600" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello, and welcome to my portfolio! I'm Sahil Thakur, an average web
            developer with a passion for creating functional and visually
            appealing applications.<span></span> While I may describe myself as
            average, I believe that dedication and a commitment to constant
            improvement are the keys to success. I have spent considerable time
            honing my skills in web development, learning various programming
            languages such as HTML, CSS, JavaScript, java, and frameworks like
            React, Nextjs & Spring Boot.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t)=> t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
