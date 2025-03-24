import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={process.env.PUBLIC_URL+"/github_avatar.png"} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AdrianKlessa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/adrian-klessa-54a291208/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Adrian Klessa</h1>
          <p>Backend (Java / Python) | ML Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/AdrianKlessa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/adrian-klessa-54a291208/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;