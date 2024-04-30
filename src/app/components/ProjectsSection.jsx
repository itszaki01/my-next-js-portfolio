"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nest Js Ecommerce Store Service Providor With DNS Managment + Sub Domains",
    description: "A very large-scale project consisting of an e-commerce store service provider for delivery companies' clients, integrating more than 5 external services through APIs",
    image: "/images/projects/nestjs.png",
    tag: ["All", "Back-End"],
    gitUrl: "https://github.com/itszaki01/nest-js-ecommerce-stores-provider/tree/main",
    previewUrl: "https://www.postman.com/supply-observer-59545148/workspace/delivery-comaignes-store-providor-system",
  },
  {
    id: 2,
    title: "Nest Js Ecommerce Store (Refactored)",
    description: "An intermediate project for an online store that includes all professional requirements such as categories, products, coupons, etc.",
    image: "/images/projects/nestjs.png",
    tag: ["All", "Back-End"],
    gitUrl: "https://github.com/itszaki01/backend-ecommerce-nest-js",
    previewUrl: "https://postman.com/supply-observer-59545148/workspace/eccomerce-app-nest-js",
  },
  {
    id: 3,
    title: "ExpressJs Ecommerce Store",
    description: "An intermediate project for an online store that includes all professional requirements such as categories, products, coupons, etc.",
    image: "/images/projects/express.png",
    tag: ["All", "Back-End"],
    gitUrl: "https://github.com/itszaki01/backend-ecomerce",
    previewUrl: "https://postman.com/supply-observer-59545148/workspace/ecommerce-full-app/",
  },
  {
    id: 4,
    title: "MERN Stack Notes App",
    description: "Notes App With CRUD operations",
    image: "/images/projects/MernNotaty.png",
    tag: ["All", "Back-End"],
    gitUrl: "https://github.com/itszaki01/notaty-app-fullstack/tree/main",
    previewUrl: "https://notaty-app-fullstack.vercel.app/",
  },
  {
    id: 5,
    title: "MERN Stack COD E-commerce Store",
    description: "Admin Panel + CRUD operations",
    image: "/images/projects/afflita.png",
    tag: ["All", "Back-End"],
    gitUrl: "https://github.com/itszaki01/afflita-store-app/tree/main",
    previewUrl: "http://dz.afflita.com/",
  },
  {
    id: 6,
    title: "React Firebase Ecommerce Application",
    description: "An online store specializing in selling wristwatches that includes all the essential operations for a complete web application.",
    image: "/images/projects/brandtime.png",
    tag: ["All",],
    gitUrl: "https://github.com/itszaki01/eccomerce-app",
    previewUrl: "https://watches-eccomerce-app.vercel.app/",
  },
  {
    id: 7,
    title: "FrontEnd FakeGram App",
    description: "Authentication and CRUD operations",
    image: "/images/projects/fakegram.png",
    tag: ["All"],
    gitUrl: "https://github.com/itszaki01/fake-gram-app",
    previewUrl: "https://fake-gram-app.vercel.app/",
  },
  {
    id: 8,
    title: "React Meals Chef App",
    description: "LocalStorage CRUD operations & React Hook Form",
    image: "/images/projects/mealschef.png",
    tag: ["All"],
    gitUrl: "https://github.com/itszaki01/meals-chef-app",
    previewUrl: "https://meals-chef-app.vercel.app/",
  },
  {
    id: 9,
    title: "React Books Finder App",
    description: "Google Api & React Query",
    image: "/images/projects/booksfinder.png",
    tag: ["All",],
    gitUrl: "https://github.com/itszaki01/books-finder-app",
    previewUrl: "https://books-finder-app-two.vercel.app/",
  },
  {
    id: 10,
    title: "React Firebase Todos App",
    description: "CRUD operations",
    image: "/images/projects/todosfirebase.png",
    tag: ["All"],
    gitUrl: "https://github.com/itszaki01/todos-firebase-app",
    previewUrl: "https://todos-firebase-app.vercel.app/",
  },
  {
    id: 11,
    title: "React Images && Quotes",
    description: "API Intergration",
    image: "/images/projects/quotsimage.png",
    tag: ["All"],
    gitUrl: "https://github.com/itszaki01/images-and-quotes",
    previewUrl: "https://images-and-quotes.vercel.app/",
  },
  {
    id:12,
    title: "React Weather API",
    description: "Api Integration With WeatherApi",
    image: "/images/projects/weatherapp.png",
    tag: ["All"],
    gitUrl: "https://github.com/itszaki01/weather-api-app",
    previewUrl: "https://weather-api-app-liart.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Back-End"
          isSelected={tag === "Back-End"}
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
