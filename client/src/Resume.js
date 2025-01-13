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
                <p2>Cumulative GPA: 3.5/4.0</p2>
            </div> 
        </section>

        <section className="skills">
            <h2>Skills</h2>
            <ul>
                <li>Programming Languages: Java, Python, JavaScript, C++</li>
                <li>Frameworks & Libraries: React</li>
                <li>Database Systems: MySQL, MongoDB</li>
                <li>Operating Systems: Linux, Mac</li>
                <li>Version Control: Git</li>
            </ul>
            </section>

        <section className="section">
            <h2>Work Experience</h2>
            <div className="work">
                <h3>Cashier</h3>
                <p>H mart Seattle | July 2024 - Present</p>
                <p>Improved efficiency, sales, and customer satisfaction through strategic management and collaboration with other members.</p>
                <p>Ensured customers experience a faster checkout by scanning items fast. </p>
            

                <h3>Law Firm Assistant</h3>
                <p>ULCHI Law Firm | July 2020 - Aug 2020</p>
                
                <p>Conducted in-depth analysis of legal controversies and disputes to inform software development.</p>
                <p>Performed comprehensive data analysis of legal controversies and disputes to enhance software development and streamline attorney workflows using Matplotlib.</p>
                
            </div>
        </section>


        <section class="projects">
            <h2>Projects</h2>
            <div class="project">
                <h3>Personal Website</h3>
                <p>Personal website built using HTML, CSS, and JavaScript.</p>
                <p>It serves as an online space to showcase my skills, experience, and interests.</p> 
                <p>Source code: <a href="https://fightforhash.github.io/" class="blue-link">https://fightforhash.github.io/</a></p>
                </div>
            </section>

    </div>
    );
}

export default Resume;