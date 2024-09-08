import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectsCard";
import React, { useState } from 'react';
import capstone from "../../assets/img/projects/capstone.png";
import automaticTrashBin from "../../assets/img/projects/pkm_logo.png";
import trashCare from "../../assets/img/projects/trashcare.png";
import camera from "../../assets/img/projects/story.png";
import logo from "../../assets/img/projects/logo.png";
import webChat from "../../assets/img/projects/web/webchat.png";
import automaticTrashBinWeb from "../../assets/img/projects/web/automatictrashbinweb.png";
import trashCareWeb from "../../assets/img/projects/web/trashcareweb.png";
import emgWeb from "../../assets/img/projects/web/emgweb.png";
import orangeWeb from "../../assets/img/projects/web/orangeweb.png";
import catFoodWeb from "../../assets/img/projects/web/catfoodweb.png";
import sariWeb from "../../assets/img/projects/web/sariweb.jpg";
import movieWeb from "../../assets/img/projects/web/movieweb.png";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const androidDeveloper = [
      {
        title: "Doctor Plant",
        description: "Capstone Project, Bangkit Academy",
        imgUrl: capstone,
        overview:
          "Developed 'Doctor Plant,' an innovative Android application as my capstone project for Bangkit Academy. This app helps users identify and care for various plant species and diseases, featuring a user-friendly interface, plant care tips, and a plant identification system, showcasing my skills in Android development and problem-solving.",
        github: "https://github.com/rinoindraw/DoctorPlantApp",
      },
      {
        title: "Automatic Trashbin App",
        description: "Program Kreativitas Mahasiswa",
        imgUrl: automaticTrashBin,
        overview:
          "Created the 'Automatic Trashbin' application, designed for monitoring and managing trash bin capacity. This Android app leverages sensor data to provide real-time updates on bin levels, optimize waste management, and enhance recycling efforts. The project demonstrates my ability to integrate IoT technologies with mobile applications for efficient environmental solutions.",
        github: "https://github.com/",
      },
      {
        title: "MovieQ App",
        description: "Individual Project",
        imgUrl: logo,
        overview:
          "Developed the 'MovieQ' app, an Android application providing comprehensive movie information and recommendations. With features including movie details, trailers, ratings, and personalized recommendations, the app offers users an engaging and informative experience. This project highlights my skills in Android development and my ability to create user-centric applications for entertainment.",
        github: "https://github.com/rinoindraw/MovieQApp",
      },
      {
        title: "Trashcare App",
        description: "Final Campus Project",
        imgUrl: trashCare,
        overview:
          "Designed and developed the 'Trash Care' app, which functions similarly to the 'Automatic Trashbin' by monitoring and managing trash bin capacity. This Android application offers real-time updates on bin levels, enhances waste management efficiency, and supports recycling initiatives. The project showcases my proficiency in integrating IoT technology with mobile solutions for effective environmental management.",
        github: "https://github.com/",
      },
      {
        title: "Story App",
        description: "Dicoding Course",
        imgUrl: camera,
        overview:
          "Built the 'Story App,' an Android application that allows users to view and upload stories along with their locations. Featuring an intuitive interface for sharing and discovering stories, the app integrates location-based services to enrich user content with geographical context. This project highlights my skills in developing interactive and location-aware mobile applications.",
        github: "https://github.com/rinoindraw/AndroidIntermediate_StoryApp_Submission2.1",
      },
    ];
    const webDeveloper = [
      {
        title: "WebChat",
        description: "React JS",
        imgUrl: webChat,
        overview:
          "Created the 'WebChat' website, a real-time messaging platform that facilitates seamless online communication. The site features instant messaging, user presence indicators, and a history of conversations, providing an intuitive and engaging user experience. This project highlights my expertise in developing interactive and responsive web applications.",
        github: "https://github.com/rinoindraw/WebChat",
      },
      {
        title: "Automatic Trashbin Web",
        description: "React JS",
        imgUrl: automaticTrashBinWeb,
        overview:
          "Created the 'Automatic Trash Bin Web' platform, designed to monitor and manage trash bin capacities through a web interface. This application provides real-time data on bin levels, streamlines waste management processes, and supports recycling efforts with an intuitive and user-friendly design. The project demonstrates my ability to integrate IoT data with web technologies for effective environmental solutions.",
        github: "https://github.com/rinoindraw/AutomaticTrashBinWeb",
      },
      {
        title: "Trashcare Web",
        description: "React JS",
        imgUrl: trashCareWeb,
        overview:
          "Developed the 'TrashCare Web' platform, a web-based application for monitoring and managing trash bin capacities. Similar to the mobile counterpart, this application provides real-time updates on bin levels, enhances waste management efficiency, and promotes recycling efforts through a streamlined, user-friendly interface. The project showcases my skills in creating web solutions that leverage IoT technology for effective environmental management.",
        github: "https://github.com/rinoindraw/RinoSkripsi",
      },
      {
        title: "Emg Sensor Web",
        description: "React JS",
        imgUrl: emgWeb,
        overview:
          "Built the 'EMG Sensor Web' application, designed to display and analyze electromyography (EMG) sensor data in real-time. This web platform provides intuitive visualizations of muscle activity, supports detailed data analysis, and facilitates effective monitoring and interpretation of EMG signals. The project highlights my ability to develop web applications that integrate and present complex sensor data for actionable insights.",
        github: "https://github.com/rinoindraw/EmgWeb",
      },
      {
        title: "Orange Web",
        description: "React JS",
        imgUrl: orangeWeb,
        overview:
          "Developed the 'Orange Web' platform, designed for monitoring and managing the sorting capacity of oranges. This web application provides real-time data on sorting operations, enhances efficiency in fruit handling, and supports accurate capacity management through a user-friendly interface. The project demonstrates my expertise in creating web solutions tailored for operational and logistical applications.",
        github: "https://github.com/rinoindraw/OrangeWeb",
      },
      {
        title: "CatFood Web",
        description: "React JS",
        imgUrl: catFoodWeb,
        overview:
          "Created the 'Cat Food Web' application, designed to track and manage the capacity of cat food containers. This web platform offers real-time updates on container levels, helps optimize inventory management, and ensures timely replenishment of supplies. The project highlights my skills in developing web applications for efficient resource management and user-friendly monitoring.",
        github: "https://github.com/rinoindraw/CatFoodWeb",
      },
      {
        title: "SARI Technology System Login Web",
        description: "PHP",
        imgUrl: sariWeb,
        overview:
          "Developed the 'Sari Teknologi' web platform, featuring a durable login system implemented with PHP. This application provides secure user authentication and session management, ensuring a reliable and safe user experience. The project demonstrates my ability to build secure web systems with PHP for effective user management and access control.",
        github: "https://github.com/rinoindraw/SartekSistemLogin",
      },
      {
        title: "Movie Web",
        description: "React JS",
        imgUrl: movieWeb,
        overview:
          "Created the 'Movie Web' platform, a comprehensive website for exploring and managing movie information. This application offers detailed movie listings, trailers, ratings, and search functionalities, providing an engaging and informative user experience. The project highlights my skills in developing feature-rich web applications for the entertainment industry.",
        github: "https://github.com/rinoindraw/MovieWeb",
      },
    ];
    const iotEngineer = [
      {
        title: "Automatic Trash Bin",
        description: "Program Kreativitas Mahasiswa",
        imgUrl: automaticTrashBin,
        overview:
          "Developed the 'Automatic Trashbin' project for a student innovation competition, incorporating IoT technologies, various sensors, and solar panels. This project features a smart trash bin system that uses sensors to monitor waste levels and optimize collection processes, while solar panels provide sustainable energy for operation. The project demonstrates my expertise in integrating IoT solutions with renewable energy sources for innovative environmental management.",
  
        github: "https://github.com/Jendma/Academic/tree/main/Web%20Mining",
      },
      {
        title: "Trashcare",
        description: "Final Project",
        imgUrl: trashCare,
        overview:
          "Developed the 'Trash Care' system, a specialized version of the 'Automatic Trashbin' project focused on sorting metal and non-metal waste. This IoT-enabled solution uses sensors to accurately identify and segregate different types of waste, enhancing recycling processes and waste management efficiency. The project showcases my skills in designing targeted waste sorting systems with advanced sensor technologies.",
  
        github: "https://github.com/Jendma/Academic/tree/main/Web%20Mining",
      },
      {
        title: "Automatic Tomato Fruit Sorter",
        description: "Campus Assignments",
        imgUrl: logo,
        overview:
          "Created the 'Automatic Tomato Fruit Sorter,' an system designed to automate the sorting of tomatoes. This project utilizes advanced sensors to classify tomatoes based on size, color, and quality, streamlining the sorting process and improving efficiency in fruit handling. The system demonstrates my expertise in integrating IoT technologies with automated sorting solutions for agricultural applications.",
  
        github: "https://github.com/Jendma/Academic/tree/main/Web%20Mining",
      },
    ];
   
    const [lightboxData, setLightboxData] = useState({
      image: null,
      overview: null,
      title: null,
      github: null,
    });
  
    const closeLightbox = () => {
      setLightboxData({ image: null, overview: null, title: null, github: null });
    };
  
    const openLightbox = (image, overview, title, github) => {
      // console.log("Opening lightbox:", image, overview);
      setLightboxData({ image, overview, title, github });
    };
  
    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__flipInY"
                        : ""
                    }
                  >
                    <h2>Projects</h2>
                    <div className="linkproject">
                      <a
                        href="https://github.com/rinoindraw?tab=repositories"
                        target="_blank"
                        className="icons"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                      </a>
                    </div>
                  </div>
                )}
              </TrackVisibility>
              <Tab.Container id="projects-tabs" defaultActiveKey="fourth">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item className="flex-fill">
                    <Nav.Link eventKey="fourth">Android Developer</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-fill">
                    <Nav.Link eventKey="first">
                      Web Developer
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-fill">
                    <Nav.Link eventKey="second">IoT Engineer</Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item className="flex-fill">
                    <Nav.Link eventKey="third">
                      Data Analytics & Visualization
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-fill">
                    <Nav.Link eventKey="fifth">SQL</Nav.Link>
                  </Nav.Item> */}
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row className="firsttab">
                      {webDeveloper.map((project, index) => (
                        <Col key={index} xs={11} md={6} className="mx-auto mb-5">
                          <ProjectCard
                            {...project}
                            onClick={() =>
                              openLightbox(
                                project.imgUrl,
                                project.overview,
                                project.title,
                                project.github
                              )
                            }
                          />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <Row className="thirdtab">
                      {androidDeveloper.map((project, index) => (
                        <Col key={index} xs={11} md={4} className="mx-auto mb-5">
                          <ProjectCard
                            {...project}
                            onClick={() =>
                              openLightbox(
                                project.imgUrl,
                                project.overview,
                                project.title,
                                project.github
                              )
                            }
                          />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row className="secondtab">
                      {iotEngineer.map((project, index) => (
                        <Col key={index} xs={11} md={4} className="mx-auto mb-5">
                          <ProjectCard
                            {...project}
                            onClick={() =>
                              openLightbox(
                                project.imgUrl,
                                project.overview,
                                project.title,
                                project.github
                              )
                            }
                          />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
          {lightboxData.image && (
            <div className="overlay-container" onClick={closeLightbox}>
              <div className="overlay-content">
                <div className="project-container-overlay">
                  <img
                    src={lightboxData.image}
                    alt="Selected Project"
                    className="overlay-image"
                  />
                  <div className="text-card-wrapper">
                    <h4>{lightboxData.title}</h4>
                    <ul>
                      {lightboxData.overview.split("\n").map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}{" "}
                    </ul>
                    <a
                      href={lightboxData.github}
                      target="_blank"
                      className="icons"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    );
  };