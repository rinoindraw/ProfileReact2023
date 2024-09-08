import React from "react";
import companyLogoA from "../assets/img/expereience/sariLogo.png";
import companyLogoB from "../assets/img/expereience/wrgLogo.png";
import { Container, Row, Col } from "react-bootstrap";
import bangkitLogo from "../assets/img/expereience/bangkitLogo.png";
import TrackVisibility from "react-on-screen";

export const Experience = () => {
  const experiences = [
    {
      company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      position: "Mobile Development Mentor",
      duration: "February 2024 - July 2024",
      description:
        "• Provided guidance and mentoring in Mobile Application Development.\n" +
        "• Evaluate projects and provide constructive feedback to improve the quality of student work.\n" +
        "• Supervise participants in developing their final project, offering direction and technical support to meet graduation standards.",
      logo: bangkitLogo,
      title: "Bangkit Academy",
    },
    {
      company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      position: "Mobile Development Student",
      duration: "February 2023 - July 2023",
      description:
        "• Learning solid Programming Language.\n" +
        "• Mastering to develop Mobile App from Beginner to Expert.\n" +
        "• Create UI/UX Design with Figma and Adobe Illustrator.",
      logo: bangkitLogo,
      title: "Bangkit Academy",
    },
    {
      company: "SARI Teknologi",
      position: "Robotics Engineer Intern",
      duration: "September 2022 - December 2022",
      description:
        "• Mastering Programming Language for Robotics and Website, exp Arduino and PHP.\n" +
        "• Learn to Operate Robots for Education and Industry.\n" +
        "• Learn to collaborate with a team.",
      logo: companyLogoA,
      title: "SARI Teknologi",
    },
    {
      company: "World Robot Games 2022 Thailand Championship",
      position: "Competition Participants",
      duration: "December 2022",
      description:
        "• Competed in The SumoOpen Category Representing Universitas Gunadarma and Indonesia.\n" +
        "• Managed to get Third Runners Up and Performance Award Medal as a team.",
      logo: companyLogoB,
      title: "World Robot Games 2022",
    },
  ];

  return (
    <section className="work-experience" id="experience">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="experience-wrapper">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__flipInX" : ""
                    }
                  >
                    <h2>Experience</h2>
                  </div>
                )}
              </TrackVisibility>{" "}
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
                        {experience.description
                          .split("\n")
                          .map((point, pointIndex) => (
                            <p key={pointIndex} className="description">
                              {point}
                            </p>
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
