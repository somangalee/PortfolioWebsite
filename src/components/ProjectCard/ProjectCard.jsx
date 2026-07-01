import "./ProjectCard.css";

import { FaGithub } from "react-icons/fa";
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

            <h4 className = "project-category">{category}</h4>
            <h3 className = "card-title">{title}</h3>

            <div className="card-technologies">
                {technologies.map((tech) => (
                <span key={tech} className="tech-type">
                {tech}
                </span>
                ))}
            </div>
        
            <p className = "card-description">{description}</p>

        </div>

        <div className="card-footer">
            <div className="card-buttons">
                <a
                href={visit}
                className="visit-btn"
                > Visit
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