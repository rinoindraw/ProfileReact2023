import React from 'react';
import gdsc from '../assets/img/organization/gdsc.png';
import { Container, Row, Col } from 'react-bootstrap';
import logoHima from '../assets/img/organization/LogoHima.png';

export const Organization = () => {
  const experiences = [
    {
      company: 'Himpunan Mahasiswa Sistem Komputer Universitas Gunadarma',
      position: 'Head of Public Relations',
      duration: 'December 2022 - Present',
      description: '• Create an aspiration platform for students in the computer systems department.\n' +
      '• Encouraging students to participate in community service activities and providing resources for engagement.\n' +
      '• Become the contact person for the association when running organizational projects.',
      logo: logoHima,
      title: 'HMSK Gunadarma'
    },
    {
      company: 'Himpunan Mahasiswa Sistem Komputer Universitas Gunadarma',
      position: 'Staff of Media & Creative',
      duration: 'December 2021 - December 2022',
      description: '• Responsible for design, documentation and publication in the Organization.\n' +
      '• Create a Poster Design for Organizational Events.\n' +
      '• Became a copywriter and video editor at the Organization.',
      logo: logoHima,
      title: 'HMSK Gunadarma'
    }, 
    {
      company: 'Google DSC Universitas Gunadarma',
      position: 'Member',
      duration: 'December 2022 - Present',
      description: '• Attended a seminar and talk show held by Google Developer Student Clubs, Gunadarma University.',
      logo: gdsc,
      title: 'GDSC Gundarma'
    },
  ];

  return (
    <section className="org-experience" id="organization">
    <Container>
      <Row>
        <Col xs={12}>
          <div className="experience-wrapper">
            <h2>Organization</h2>
            {experiences.map((experience, index) => (
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
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
};