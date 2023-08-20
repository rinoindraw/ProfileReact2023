import React from 'react';
import companyLogoA from '../assets/img/expereience/sariLogo.png';
import companyLogoB from '../assets/img/expereience/wrgLogo.png';
import { Container, Row, Col } from 'react-bootstrap';
import bangkitLogo from '../assets/img/expereience/bangkitLogo.png';

export const Experience = () => {
  const experiences = [
    {
      company: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
      position: 'Mobile Development Student',
      duration: 'February 2023 - July 2023',
      description: 'I have completed the mobile development learning path at an exclusive academy led by Google, Tokopedia, Gojek, and Traveloka. I enrolled in the Mobile Development track at Bangkit 2023, which offered places to only 5,010 students from over 67,000 interested applicants.',
      logo: bangkitLogo,
      title: 'Bangkit Academy'
    },
    {
      company: 'PT SARI Teknologi',
      position: 'Robotics Developer',
      duration: 'September 2022 - December 2022',
      description: '• Mastering Programming Language for Robotics and Website, exp Arduino and PHP.\n' +
      '• Learn to Operate Robots for Education and Industry.\n' +
      '• Learn to collaborate with a team.',
      logo: companyLogoA,
      title: 'PT SARI Teknologi'
    }, 
    {
      company: 'World Robot Games 2022 Thailand Championship',
      position: 'Competition Participants',
      duration: 'December 2022',
      description: '• Competed in The SumoOpen Category Representing Universitas Gunadarma and Indonesia.\n' +
      '• Managed to get Third Runners Up and Performance Award Medal as a team.',
      logo: companyLogoB,
      title: 'World Robot Games 2022'
    },
  ];

  return (
    <section className="work-experience" id="experience">
    <Container>
      <Row>
        <Col xs={12}>
          <div className="experience-wrapper">
            <h2>Experience</h2>
            <Row>
            {experiences.map((experience, index) => (
              <Col key={index} xs={12} md={12} className="mx-auto">
                <div key={index} className="experience-item">
                  <div className="company-logo">
                    <img src={experience.logo} alt={experience.company} />
                    <div className="logo-hover">
                      <h4>{experience.title}</h4>
                    </div>
                  </div>
                    <div className="company-details">
                      <h3>{experience.position}</h3>
                      <p className="boldCompany">{experience.company}</p>
                      <p>{experience.duration}</p>
                      {experience.description.split('\n').map((point, pointIndex) => (
                        <p key={pointIndex} className="description">{point}</p>
                      ))}
                    </div>
                </div>
              </Col>
            ))}
            </Row>
            
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
};