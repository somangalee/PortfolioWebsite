// This includes education, experience and skills
import pythonIcon from "../assets/icons/python.svg";
import githubIcon from "../assets/icons/github.svg";
import htmlIcon from "../assets/icons/html5.svg";
import cssIcon from "../assets/icons/css.svg";
import javaIcon from "../assets/icons/java.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import tailwindIcon from "../assets/icons/tailwindcss.svg";
import viteIcon from "../assets/icons/vite.svg";
import cIcon from "../assets/icons/c.svg";
import cppIcon from "../assets/icons/c++.svg";
import eclipseIcon from "../assets/icons/eclipse.svg";
import reactIcon from "../assets/icons/react.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import vscodeIcon from "../assets/icons/vscode.svg";

function Experience() {
    return (
        <section id = "resume-section" className = "resume-section">
            <div className = "resume-text">
                <h1 className="resume-header">Resume</h1>

                <hr className = "resume-line"/>

                <p>
                Hi, I'm Somang Lee! I create unique functional user-centered digital
                experiences. I am a senior Computer Science student at Arizona State
                University. Through my code, I bring thoughtful ideas to life. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad architecto nemo quos quidem officiis adipisci tempore tenetur doloribus 
                harum ipsam porro quas sit, quis ut delectus vel at quaerat a.
                </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, soluta unde eaque assumenda dolore suscipit totam laboriosam pariatur voluptatum nam distinctio at ratione et! Atque esse debitis officiis quo sapiente.</p>
            
                {/* Tools */}
                <div className = "skills">
                    <h2>Tech Stack</h2>

                    <div className="skill-card">

                        <div className = "skill-icons">

                            <div className="tool">
                                <img className="tool-icon" 
                                src={pythonIcon} 
                                alt="Python" />
                                <span className="tool-name">Python</span>
                            </div>

                            <div className="tool">
                                <img className="tool-icon"
                                src={htmlIcon}
                                alt="HTML Icon"/> 
                                <span className="tool-name">HTML</span>
                            </div>

                            <div className="tool">
                                <img className="tool-icon"
                                src={cssIcon}
                                alt="HTML Icon"/> 
                                <span className="tool-name">CSS</span>
                            </div>
                            
                            <div className="tool">
                                <img className="tool-icon"
                                src={javaIcon}
                                alt="Java Icon"/> 
                                <span className="tool-name">Java</span>
                            </div>

                            <div className="tool">
                                <img className="tool-icon"
                                src={reactIcon}
                                alt="React Icon"/> 
                                <span className="tool-name">React</span>
                            </div>

                            <div className="tool">
                                <img className="tool-icon"
                                src={cIcon}
                                alt="C Icon"/> 
                                <span className="tool-name">C</span>
                            </div>

                            <div className="tool">
                                <img className="tool-icon"
                                src={cppIcon}
                                alt="C++ Icon"/> 
                                <span className="tool-name">C++</span>
                            </div>

                            <div className="tool">
                                <img className="tool-icon"
                                src={eclipseIcon}
                                alt="Eclipse Icon"/> 
                                <span className="tool-name">Eclipse</span>
                            </div>

                            <div className="tool">
                                <img className="tool-icon"
                                src={githubIcon}
                                alt="Github Icon"/> 
                                <span className="tool-name">Github</span>
                            </div>

                            <div className="tool">
                                <img className="tool-icon"
                                src={javascriptIcon}
                                alt="JavaScript Icon"/> 
                                <span className="tool-name">JavaScript</span>
                            </div>

                            <div className="tool">
                                <img className="tool-icon"
                                src={tailwindIcon}
                                alt="Tailwind Icon"/> 
                                <span className="tool-name">Tailwind</span>
                            </div>

                            <div className="tool">
                                <img className="tool-icon"
                                src={typescriptIcon}
                                alt="TypeScript Icon"/> 
                                <span className="tool-name">TypeScript</span>
                            </div>

                            <div className="tool">
                                <img className="tool-icon"
                                src={viteIcon}
                                alt="Vite Icon"/> 
                                <span className="tool-name">Vite</span>
                            </div>

                            <div className="tool">
                                <img className="tool-icon"
                                src={vscodeIcon}
                                alt="VSCode Icon"/> 
                                <span className="tool-name">VSCode</span>
                            </div>

                        </div>

                    </div> {/* End of Tools Section */}


                </div>


            </div>
        </section>
    );
}

export default Experience;