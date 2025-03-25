import React from "react";
import mock_syosetu_notifier from '../assets/images/syosetu_scaled.png';
import mock_mealqr from '../assets/images/mealqr_scaled.png';
import mock_steamscout from '../assets/images/steamscout_scaled.png';
import mock_cg from '../assets/images/cgproject_scaled.png';
import mock_flappy from '../assets/images/flappy_scaled.png'
import mock_rust from '../assets/images/rust_planets.png'
import mock_books from '../assets/images/books.png'
import mock_superpermutation from '../assets/images/superpermutation.png'
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/AdrianKlessa/SteamScout" target="_blank" rel="noreferrer"><img
                    src={mock_steamscout} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/AdrianKlessa/SteamScout" target="_blank" rel="noreferrer"><h2>Steam game
                    similarity search</h2></a>
                <p>Dockerized game similarity search engine with backend written in Python (Flask) and frontend in
                    React. Utilizes a vector database for storing text and tag embeddings. By analyzing the games'
                    descriptions, tags and user review scores the application helps users find similar great games to
                    those they enjoyed previously.</p>
            </div>
            <div className="project">
                <a href="https://github.com/AdrianKlessa/MealQR" target="_blank" rel="noreferrer"><img src={mock_mealqr}
                                                                                                       className="zoom"
                                                                                                       alt="thumbnail"
                                                                                                       width="100%"/></a>
                <a href="https://github.com/AdrianKlessa/MealQR" target="_blank" rel="noreferrer"><h2>MealQR</h2></a>
                <p>Restaurant / food recommendation system with functionality for speeding up orders using QR codes.
                    Backend utilizes Spring Boot & Flask. This was my group engineering project during university.</p>
            </div>
            <div className="project">
                <a href="https://github.com/AdrianKlessa/Syosetu-notifier" target="_blank" rel="noreferrer"><img
                    src={mock_syosetu_notifier} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/AdrianKlessa/Syosetu-notifier" target="_blank" rel="noreferrer"><h2>Syosetu
                    notifier</h2></a>
                <p>Desktop notification system for novel updates on Syosetu.com using its API to periodically check for new chapters and modifications</p>
            </div>
            <div className="project">
                <a href="https://github.com/AdrianKlessa/CGProject" target="_blank" rel="noreferrer"><img src={mock_cg}
                                                                                                          className="zoom"
                                                                                                          alt="thumbnail"
                                                                                                          width="100%"/></a>
                <a href="https://github.com/AdrianKlessa/CGProject" target="_blank" rel="noreferrer"><h2>Submarine game
                </h2></a>
                <p>A simple game written in C++ and OpenGL where you control a submarine and try to steer clear of
                    descending sea mines. Computer graphics project for university.</p>
            </div>
            <div className="project">
                <a href="https://github.com/AdrianKlessa/FlappyBirdBehavioralCloning" target="_blank"
                   rel="noreferrer"><img src={mock_flappy}
                                         className="zoom"
                                         alt="thumbnail"
                                         width="100%"/></a>
                <a href="https://github.com/AdrianKlessa/FlappyBirdBehavioralCloning" target="_blank" rel="noreferrer">
                    <h2>Behavioral cloning for Flappy Bird-like game</h2></a>
                <p>A neural network that independently plays a game similar to Flappy Bird through behavioral cloning
                    trained on data from human gameplay.</p>
            </div>
            <div className="project">
                <a href="https://github.com/AdrianKlessa/RustPlanets" target="_blank"
                   rel="noreferrer"><img src={mock_rust}
                                         className="zoom"
                                         alt="thumbnail"
                                         width="100%"/></a>
                <a href="https://github.com/AdrianKlessa/RustPlanets" target="_blank" rel="noreferrer">
                    <h2>Planetary simulation in Rust</h2></a>
                <p>Newtonian simulation of the Solar System written in Rust. Includes three different implementations of
                    numerical integration (symplectic and not) for calculating trajectories of planetary bodies.</p>
            </div>
            <div className="project">
                <a href="https://github.com/AdrianKlessa/superpermutations" target="_blank"
                   rel="noreferrer"><img src={mock_superpermutation}
                                         className="zoom"
                                         alt="thumbnail"
                                         width="100%"/></a>
                <a href="https://github.com/AdrianKlessa/superpermutations" target="_blank" rel="noreferrer">
                    <h2>Superpermutations</h2></a>
                <p>Experiments with training a reinforcement learning agent using Proximal Policy Optimization to find shortest superpermutations - a novel approach using modern machine learning to solve old problems in combinatorics.</p>
            </div>
            <div className="project">
                <a href="https://github.com/AdrianKlessa/SyosetuPopularityPrediction" target="_blank"
                   rel="noreferrer"><img src={mock_books}
                                         className="zoom"
                                         alt="thumbnail"
                                         width="100%"/></a>
                <a href="https://github.com/AdrianKlessa/SyosetuPopularityPrediction" target="_blank" rel="noreferrer">
                    <h2>Predicting novel popularity on Syosetu.com</h2></a>
                <p>A machine learning model for predicting how popular a novel published on Syosetu will be based on its metadata. Can be used by authors to decide what tags to use in order to maximize their works' visibility. Includes an exploratory data analysis of the Syosetu novel dataset.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;