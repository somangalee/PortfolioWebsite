// Hero section
import TextType from "./TextType/TextType";
import { useEffect, useRef, useState, createElement, useMemo, useCallback } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { gsap } from "gsap";
import "./TextType/TextType.css";
import profilePic from "../assets/me.jpeg";

function Hero() {
    return (
        <section id = "hero-section" className = "hero">
            <div className = "hero-text">
                <h1 className = "hero-header">Hello, I'm Somang Lee</h1>

                <TextType text={[
                "Software Engineer",
                "Creator",
                "Computer Science Student",
                "Tech Enthusiast",
                ]}    
                />

                <p>Welcome to my page! Hi, I'm Somang Lee! I create unique functional user-centered digital experiences.
                I am a senior Computer Science student at Arizona State Univeristy.
                Through my code, I create throughtful ideas to life.</p>

                {/* Loction icon */}
                <div className="top-bar">
                    <button className = "resume-download">
                        <FaDownload />    Download Resume
                    </button>

                    <p className="location">
                    <FaLocationDot size={25} className = "location-icon" /> Tempe, Arizona </p>

                </div>

            {/* Basic Horizontal Line */}
            <hr className = "hero-line" />

            {/* Social icons */}
                <div className="social-icons"> Find me on:

                    <a href="https://github.com/somangalee">
                        <FaGithub size={32} />
                    </a>

                    <a href="https://www.linkedin.com/in/somangaiyannalee/">
                        <FaLinkedin size={32} />
                    </a>

                    <a href="mailto:salee25@asu.edu">
                        <MdEmail size={32} />
                    </a>
                </div>
             
                        
        </div>    


        <img className = "profile-picture" src={profilePic} alt="Somang Lee" />

        
               
        </section>
    );
}

export default Hero;