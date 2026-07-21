// My Contact Section
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
        <section id = "contact-section" className = "contact-section">

        <div className = "contact-text">
                <h1 className="contact-header">Contact Me</h1>
                <hr className = "contact-line"/>

                <p>Let's build something together! Want to know more about me, tell me about your project or just to say hello? Drop me a line and I'll get back as soon as possible.</p>

                {/* Social icons */}
                <div className="connect-icons">
                
                    <a href="mailto:salee25@asu.edu">
                        <MdEmail size={70} />
                    </a>

                    <a href="https://www.linkedin.com/in/somangaiyannalee/">
                        <FaLinkedin size={70} />
                    </a>

                    <a href="https://github.com/somangalee">
                        <FaGithub size={70} />
                    </a>

                </div>

                <p>Emails: salee@asu.edu</p>
            </div>
        </section>
    );
}

export default Contact;