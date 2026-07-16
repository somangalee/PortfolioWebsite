import "./ProjectCard.css";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";


import React from 'react'

// This is our main card component
const ProjectCard = ({
    id,
    title,
    category,
    image,
    technologies,
    description,
    visit,
    code,
    details
}) => {
  return (
    <article className = "project-card">
        <img src = {image} className = "card-image"/>

        <div className = "card-content">

            <h3 className = "card-title">{title}</h3>
            
            <h4 className = "project-category">
                <FaCode />
                {category}
            </h4>
        
            <p className = "card-description">{description}</p>
           
            <div className="card-technologies">
                {technologies.map((tech) => (
                <span key={tech} className="tech-type">
                {tech}
                </span>
                ))}
            </div>

        </div>

        <div className="card-footer">
            <div className="card-buttons">
                <a
                href={visit}
                className="visit-btn"
                > 
                <FaExternalLinkAlt /> Visit
                </a>

                <a
                href={code}
                className="github-btn"
                > 
                <FaGithub /> Code
                </a>
            </div>

            <button className="details-btn">
                View Details →
            </button>

        </div>
    </article>

  );
};

export default ProjectCard;