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
    image: "/images/projects/WEB3SCAN.jpg",
    domain: "",
    github: "",
    tag: ["All", "Web", "Mobile"],
  },
  {
    id: 2,
    title: "0xTech Shop",
    description: "Ecommerce Platform",
    image: "/images/projects/0XTECH.jpg",
    domain: "",
    github: "",
    tag: ["All", "Web", "Mobile"],
  },
  {
    id: 3,
    title: "Puri Marketplace",
    description: "Web3 NFT Marketplace",
    image: "/images/projects/azuki-mint.jpg",
    domain: "",
    github: "",
    tag: ["All", "Web", "Mobile"],
  },
  {
    id: 4,
    title: "Bored Token",
    description: "ERC20 Token Website for Flur Labs",
    image: "/images/projects/boredtoken.jpg",
    domain: "",
    github: "",
    tag: ["All", "Web", "Mobile"],
  },
  {
    id: 5,
    title: "FTX Classic",
    description: "ERC20 Token Website for Flur Labs",
    image: "/images/projects/FTTC.jpg",
    domain: "",
    github: "",
    tag: ["All", "Web", "Mobile"],
  },
  {
    id: 6,
    title: "Delicious Labs",
    description: "Website for Delicious Labs DAO",
    image: "/images/projects/labs.png",
    previewUrl: "https://taelee.dev/",
    gitUrl: "https://github.com/taeleenz38",
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
    <section>
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
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
