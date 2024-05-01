"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Back-End",
    id: "back-end",
    content: (
      <ul className="list-disc pl-2">
        <li>Problem Solving</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>Nest js</li>
        <li>Express</li>
        <li>Fastify</li>
        <li>Linux</li>
        <li>DNS Managment</li>
        <li>Server Managment</li>
        <li>Nginx Proxy</li>
        <li>Apache Server</li>
        <li>Hescia Cp</li>
        <li>Vesta Cp</li>
      </ul>
    ),
  },
  {
    title: "Front-End",
    id: "front-end",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>TypeScript</li>
        <li>Redux</li>
        <li>Tailwind Css</li>
        <li>Custom Hooks</li>
        <li>RTQ</li>
        <li>MUI</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Index Academy - Nest Js.</li>
        <li>Ahmed Boghdady (Udemy) - Express Js.</li>
        <li>Elzero Web Scholl - JS + TS.</li>
        <li>Nouvil.net Academy - JS ,HTML, CSS.</li>
        <li>Tarmeez Academy (Udemy) - React js.</li>
        <li>Muhammad Naga (Codeawy Udemy) - React ,Next js, Tailwind.</li>
        <li>Eman Alatawi Course (Udemy) - React js, Firebase.</li>
      </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("back-end");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="about-img" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with TypeScript, React, Redux, Node.js, Express,Mongo Db, Nest js,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <p className="font-bold text-2xl mt-8">My Skills</p>
          <div className="flex flex-row justify-start mt-2">
            <TabButton
              selectTab={() => handleTabChange("back-end")}
              active={tab === "back-end"}
            >
              {" "}
              BackEnd{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("front-end")}
              active={tab === "front-end"}
            >
              {" "}
              FrontEnd{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
