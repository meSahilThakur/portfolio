'use client'
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>

            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Sahil",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
            //   style={{ }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-lg mb-6">
          Specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive front-end web applications using React, TailwindCSS and Nextjs while learning back-end technologies.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600 hover:bg-slate-300 text-white mr-4">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-800 border border-white text-white mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#333] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src={"/images/hero-image.png"}
              alt="hero img"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
