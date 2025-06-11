import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Projects.module.css"
import projects from "../../data/projects.json"
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return(
    <section>Projects
      <h2>Projects</h2>
      <div>
        {projects.map((project, id) => (
             <ProjectCard key={id} project = {project}/>
          ))}
      </div>
    </section>
  ); 
}
