"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 md:px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}       //It animate only once
          // whileInView={{ opacity: 1, scale: 1 }}      //It animate while scrolling
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
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
            Specializing in building (and occasionally designing) exceptional
            digital experiences. Currently, I'm focused on building responsive
            front-end web applications using React, TailwindCSS and Nextjs while
            learning back-end technologies.
          </p>
          <div>
            <Link href={"#contact"}>
              <button className="px-6 py-3 rounded-full w-full sm:w-fit bg-gradient-to-br from-primary-500 to-secondary-700 hover:bg-slate-300 text-white mr-4">
                Hire Me
              </button>
            </Link>
            <Link href={"/cv/SahilThakur@Resume.pdf"}>
              <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-transparent bg-gradient-to-br from-primary-500 to-secondary-700 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          // whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="border border-r-4 border-secondary-400 rounded-full bg-[#333] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src={"/images/mypic1.png"}
              alt="hero img"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
