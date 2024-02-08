"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next, React</li>
        <li>Typescript, Javascript </li>
        <li>Tailwind CSS, CSS, Sass</li>
        <li>Solidity, Ethers, Ganache, Truffle, Hardhat</li>
        <li>Node.js, PostgreSQL</li>
        <li>Github, SourceTree</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><b>Bachelor of Science (Psychology)</b> - University of Melbourne</li>
        <li><b>Full-Stack Web Development</b> - Le Wagon</li>
        <li><b>Certified Blockchain Solution Architect</b> - BTA (Blockchain Training Alliance)</li>
        <li><b>Certified Blockchain Developer (Ethereum)</b> - BTA (Blockchain Training Alliance)</li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li><b>Junior Software Engineer - Block Majority</b> (Aug 2023 ~ present)</li>
        <li><b>Web Developer - Freelance</b> (Oct 2022 ~ present) </li>
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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.webp" className="rounded-full" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-md ">
            Highly motivated junior developer with a love for front end design.
            Transitioned into coding after dabbling in the web 3.0 space and
            audio production, sparking my interest when I tried to build a
            marketplace (website) to upload my instrumentals/beats.
          </p>
          <div className="flex flex-row mt-8 md:text-2xl">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> Education </TabButton>
            <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}> Experience </TabButton>
          </div>
          <div className="mt-6 text-sm md:text-md">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
