// My Projects section
import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "./ProjectCard/Projects";


function Portfolio() {
    return(
        <section id = "portfolio-section" className = "portfolio-section">
            <div className = "portfolio-text">
                <h1 className="portfolio-header">My Portfolio</h1>
                <hr className = "portfolio-line"/>

                <p>Hi, I'm Somang Lee! I create unique functional user-centered digital experiences.
                    I am a senior Computer Science student at Arizona State Univeristy.
                    Through my code, I create throughtful ideas to life.</p>


                <div className="project-grid">
                {projects.map((project) => (
                    <ProjectCard
                    key={project.id}
                    title={project.title}
                    category={project.category}
                    image={project.image}
                    description={project.description}
                    technologies={project.technologies}
                    visit={project.visit}
                    code={project.code}
                    details={project.details}
                    />
                ))}
                </div>

            </div>
            
        </section>
    );
}

export default Portfolio;