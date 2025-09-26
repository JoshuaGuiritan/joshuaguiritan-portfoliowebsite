"use client";
import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Bootstrap from "@/components/bootstrap";
import Project from "@/components/project";
import Techstack from "@/components/techstack";
import Aboutme from "@/components/aboutme";
import Contact from "@/components/contact";

export default function Home() {
  const [theme, setTheme] = useState<string>("dark");

  const targetHero = useRef<any>(null);
  const targetProjects = useRef<any>(null);
  const targetTechstack = useRef<any>(null);
  const targetMe = useRef<any>(null);

  const toHero = () => {
    targetHero.current?.scrollIntoView({ behavior: "smooth" });
  };
  const toProjects = () => {
    targetProjects.current?.scrollIntoView({ behavior: "smooth" });
  };
  const toTechstack = () => {
    targetTechstack.current?.scrollIntoView({ behavior: "smooth" });
  };
  const toMe = () => {
    targetMe.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <body
      className={`${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"} transition overflow-x-hidden`}
    >
      <Bootstrap>
        <Navbar theme={theme} setTheme={setTheme} toHero={toHero} toProjects={toProjects} toTechstack={toTechstack} toMe={toMe}/>
        <Hero theme={theme} targetHero={targetHero}/>
        <Project targetProjects={targetProjects}/> 
        <Techstack targetTechstack={targetTechstack}/>
        <Aboutme targetMe={targetMe}/>
        <Contact theme={theme}/>
      </Bootstrap>
    </body>
  );
}
