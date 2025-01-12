import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
    <div className = "resume">
        <header className = "header">
            <h1>Thomas Ha</h1>
            <p>3101 184th St SW Lynnwood WA 98037,USA | (657)-247-6885 | hathomas@cityuniversity.edu</p>
        </header>

        <section className = "section">
            <h2>Education</h2>
            <div className = "education">
                <h3>Bachelors of Science in Computer Science</h3>
                <p>University of Wisconsin-Madison, Madison WI | May 2024</p>
                <h3>Bachelors of Science in Information Science</h3>
                <p>University of Wisconsin-Madison, Madison WI | May 2024</p>
            </div> 
        </section>

        <section className="skills">
            <h2>Skills</h2>
            <ul>
                <li><strong>Programming Languages:</strong> Java, Python, JavaScript, C++</li>
                <li><strong>Frameworks & Libraries:</strong> React</li>
                <li><strong>Database Systems:</strong> MySQL, MongoDB</li>
                <li><strong>Operating Systems:</strong> Linux, Mac</li>
                <li><strong>Version Control:</strong> Git</li>
            </ul>
            </section>

        <section className = "section">
            <h2>Work Experience</h2>
            <div className = "work">
            <h3> Cashier </h3>
            <p>H mart Seattle | July 2024 - Present</p>
            <p> Improved efficiency, sales, and customer satisfaction through strategic management and collaboration with other members.
                Ensured customers experience a faster checkout by scanning items fast.</p>
            
            <h2>Law Firm Assistant</h2>
            <p>ULCHI Law firm July 2020 - Aug 2020</p>
            <p>
            Conducted in-depth analysis of legal controversies and disputes to inform software development
            Performed comprehensive data analysis of legal controversies and disputes to enhance software development and streamline attorney workflows using Matplotlib.
            </p>
            </div>
        </section>


        <section class="projects">
            <h2>Projects</h2>
            <div class="project">
                <h3>Personal website - [link to project](https://fightforhash.github.io/)</h3>
                <p>personal website built using HTML, CSS, and JavaScript. It serves as an online space to showcase my skills, experience, and interests.</p>
                <a href="https://fightforhash.github.io/" class="button">View Project</a>
            </div>
            </section>

    </div>
    );
}

export default Resume;