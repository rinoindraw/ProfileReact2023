import React from "react";
import companyLogoA from "../assets/img/expereience/pkm.png";
import companyLogoB from "../assets/img/expereience/wrgLogo.png";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

export const Achievements = () => {
  const experiences = [
    {
      company: "Third Runners Up And Performance Award",
      position: "World Robot Games 2022 Committee",
      duration: "December 2022",
      description:
        "Managed To Get Third Runners Up And Performance Award Medal As A Team In World Robot Games 2022 Thailand Championship Representing Universitas Gunadarma And Indonesia.",
      logo: companyLogoB,
      title: "World Robot Games 2022",
    },
    {
      company:
        "Funding Recipients of Student Creativity Program (PKM) Karsa Cipta Scheme",
      position:
        "Ministry of Education, Culture, Research and Technology of the Republic of Indonesia",
      duration: "June 2023",
      description:
        'The Student Creativity Program (PKM) competition for the PKM-KC scheme. Project Title "Tempat Sampah Pemilah Otomatis Dengan Notifikasi Berbasis Internet Of Things Dengan Menggunakan Sumber Energi Matahari". Organized by Kementrian Pendidikan dan Kebudayaan.',
      logo: companyLogoA,
      title: "Program Kreativitas Mahasiswa",
    },
  ];

  return (
    <section className="work-experience" id="achievements">
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
                    <h2>Achievements</h2>
                  </div>
                )}
              </TrackVisibility>{" "}
              {experiences.map((experience, index) => (
                <div key={index} className="experience-item">
                  <div className="company-logo">
                    <img src={experience.logo} alt={experience.company} />
                    <div className="logo-hover">
                      <h4>{experience.title}</h4>
                    </div>
                  </div>
                  <div className="company-details">
                    <h3>{experience.company}</h3>
                    <p className="boldCompany">{experience.position}</p>
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
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
