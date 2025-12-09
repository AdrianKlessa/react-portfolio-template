import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Work experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date="August - November 2025 (fixed-term contract)"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Data Scientist</h3>
            <h4 className="vertical-timeline-element-subtitle">Grodan</h4>
            <p>
              Amazon Sagemaker, Sagemaker Pipelines, Time Series Forecasting, Apache Iceberg, Autogluon, Pytorch, Pandas
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Master's Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">Adam Mickiewicz University</h4>
            <p>
              Python, NLP, Fine-tuning LLMs, MLOps, Reinforcement Learning, Behavioral Cloning, Sentiment Analysis, Time Series Forecasting
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Java Software Developer Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">Grodan</h4>
            <p>
              Java / Spring Boot, AWS, MySQL, TimescaleDB, React
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Engineering Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">Adam Mickiewicz University</h4>
            <p>
              Python, Java / Spring Boot, OpenGL, SQL, Recommender Systems, Javascript, Web scraping
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Technical School</h3>
            <h4 className="vertical-timeline-element-subtitle">ZSK</h4>
            <p>
              ANSI C, SQL, building PCs, Linux system administration, PHP
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;