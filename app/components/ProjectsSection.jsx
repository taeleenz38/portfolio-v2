"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Web3 Scan",
    description: "Crypto Market Data Aggregator",
    image: "/images/projects/WEB3SCAN.png",
    previewUrl: "https://web3-scan.vercel.app/",
    gitUrl: "https://github.com/taeleenz38/crypto-tracker-app.git",
    tag: ["All", "Web", "Mobile"],
  },
  // {
  //   id: 2,
  //   title: "Puri Marketplace",
  //   description: "Web3 NFT Marketplace",
  //   image: "/images/projects/azuki-mint.jpg",
  //   previewUrl: "",
  //   gitUrl: "https://github.com/taeleenz38/azuki-mint.git",
  //   tag: ["All", "Web", "Mobile"],
  // },
  {
    id: 3,
    title: "Bored Token",
    description: "ERC20 Token Website for Flur Labs",
    image: "/images/projects/boredtoken.png",
    previewUrl: "https://boredtoken-steel.vercel.app/",
    gitUrl: "https://github.com/taeleenz38/boredtoken.git",
    tag: ["All", "Web", "Mobile"],
  },
  {
    id: 4,
    title: "FTX Classic",
    description: "ERC20 Token Website for Flur Labs",
    image: "/images/projects/FTTC.png",
    previewUrl: "https://ftx-classic-amber.vercel.app/",
    gitUrl: "https://github.com/taeleenz38/FTX-CLASSIC.git",
    tag: ["All", "Web", "Mobile"],
  },
  {
    id: 5,
    title: "Delicious Labs",
    description: "Website for Delicious Labs DAO",
    image: "/images/projects/labs.png",
    previewUrl: "https://delicious-labs-sandy.vercel.app/",
    gitUrl: "https://github.com/taeleenz38/delicious-labs.git",
    tag: ["All", "Web", "Mobile"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-10 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag == "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
