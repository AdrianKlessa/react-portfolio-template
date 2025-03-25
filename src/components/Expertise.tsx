import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython, faJava, faJenkins} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Spring Boot",
    "Python",
    "Flask",
    "JavaScript",
    "React",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Python",
    "Pandas",
    "Torch",
    "Keras",
    "Matplotlib",
    "Sklearn",
    "Hugging Face",
    "Stable Baselines3",
    "Gemini API"
];

const labelsThird = [
    "Docker",
    "Github Actions",
    "Jenkins",
    "Gitlab pipelines",
    "AWS",
    "Git"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Experience</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x" className="fontawesomeicon"/>
                    <FontAwesomeIcon icon={faPython} size="3x" className="fontawesomeicon"/>
                    <h3>Web app development</h3>
                    <p>I've worked on multiple web applications and have experience with microservice-based architecture. I've helped with integrating Python's potential for ML applications with Spring Boot-based stack. While focusing on backend, I've also dipped my toes in some frontend technologies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x" className="fontawesomeicon"/>
                    <h3>Machine Learning</h3>
                    <p>Ever since I've entered university, I've been extremely interested in modern AI techniques. Both my engineering and master's thesis focused on machine learning - recommender systems and time series forecasting, respectively. I've trained multiple supervised learning models, and experimented with training agents using reinforcement learning.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x" className="fontawesomeicon"/>
                    <FontAwesomeIcon icon={faJenkins} size="3x" className="fontawesomeicon"/>
                    <h3>Automation</h3>
                    <p>I have experience working with Dockerized applications, as well as setting up automated testing using Github Actions and Jenkins to make sure all changes are up-to-date and working.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;