import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectsCard";
import React, { useState } from 'react';
import work1 from "../assets/img/work1.PNG";
import work2 from "../assets/img/work2.PNG";
import work5 from "../assets/img/work5.png";
import work6 from "../assets/img/work6.jpg";
import work7 from "../assets/img/work7.png";
import work8 from "../assets/img/Details.png";
import work9 from "../assets/img/work9.png";
import work10 from "../assets/img/work10.png";
import work11 from "../assets/img/cobacoba2-01.png";
import keranjang from "../assets/img/Keranjang.png";
import konfirmasi from "../assets/img/Konfirmasi.png";
import search from "../assets/img/Search.png";
import transaction from "../assets/img/Transaction.png";
import kustomisasi from "../assets/img/Kustomisasi.png";
import kustompes from "../assets/img/KustomisasiPesanan.png";
import popup from "../assets/img/PopUp.png";
import web1 from "../assets/img/web1.PNG";
import web2 from "../assets/img/web2.PNG";
import web3 from "../assets/img/web3.PNG";
import web4 from "../assets/img/web4.PNG";
import gd1 from "../assets/img/gd1.png";
import gd2 from "../assets/img/gd2.png";
import gd3 from "../assets/img/gd3.png";
import sartekWeb1 from "../assets/img/SartekWeb1.JPG";
import sartekWeb2 from "../assets/img/SartekWeb2.JPG";
import profileWeb from "../assets/img/ProfileReact.JPG";
import splash from "../assets/img/android/Splash.jpg";
import login from "../assets/img/android/Login.jpg";
import home from "../assets/img/android/Home.jpg";
import insert from "../assets/img/android/Insert.jpg";
import history from "../assets/img/android/History.jpg";
import profile from "../assets/img/android/Profile.jpg";
import result from "../assets/img/android/Result.jpg";
import detail from "../assets/img/android/DetailHistory.jpg";
import register from "../assets/img/android/Register.jpg";
import splash2 from "../assets/img/android/Splash2.jpeg";
import login2 from "../assets/img/android/Login2.jpeg";
import register2 from "../assets/img/android/Register2.jpeg";
import home2 from "../assets/img/android/Home2.jpeg";
import create from "../assets/img/android/Create.jpeg";
import location from "../assets/img/android/Location.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            title: "Doctor Plant App",
            description: "Android Developer",
            imgUrl: splash,
            tabType: "firsttab",
        },
        {
            title: "Doctor Plant App",
            description: "Android Developer",
            imgUrl: login,  
            tabType: "firsttab",

        },
        {
            title: "Doctor Plant App",
            description: "Android Developer",
            imgUrl: register, 
            tabType: "firsttab",
        },
        {
            title: "Doctor Plant App",
            description: "Android Developer",
            imgUrl: home, 
            tabType: "firsttab",
        },
        {
            title: "Doctor Plant App",
            description: "Android Developer",
            imgUrl: insert, 
            tabType: "firsttab",
        },
        {
            title: "Doctor Plant App",
            description: "Android Developer",
            imgUrl: history, 
            tabType: "firsttab",
        },
        {
            title: "Doctor Plant App",
            description: "Android Developer",
            imgUrl: profile, 
            tabType: "firsttab",
        },
        {
            title: "Doctor Plant App",
            description: "Android Developer",
            imgUrl: result, 
            tabType: "firsttab",
        },
        {
            title: "Doctor Plant App",
            description: "Android Developer",
            imgUrl: detail, 
            tabType: "firsttab",
        },
        {
            title: "My Story App",
            description: "Android Developer",
            imgUrl: splash2, 
            tabType: "firsttab",
        },
        {
            title: "My Story App",
            description: "Android Developer",
            imgUrl: login2, 
            tabType: "firsttab",
        },
        {
            title: "My Story App",
            description: "Android Developer",
            imgUrl: register2, 
            tabType: "firsttab",
        },
        {
            title: "My Story App",
            description: "Android Developer",
            imgUrl: home2, 
            tabType: "firsttab",
        },
        {
            title: "My Story App",
            description: "Android Developer",
            imgUrl: create, 
            tabType: "firsttab",
        },
        {
            title: "My Story App",
            description: "Android Developer",
            imgUrl: location, 
            tabType: "firsttab",
        },
    ];
      const secondtab = [
        {
            title: "Logo Designer",
            description: "Graphic Designer",
            imgUrl: work5,
            tabType: "secondtab",
        },
        {
            title: "Creative Poster",
            description: "Graphic Designer",
            imgUrl: work6,
            tabType: "secondtab",
        },
        {
            title: "Logo Designer",
            description: "Graphic Designer",
            imgUrl: work9,
            tabType: "secondtab",
        },
        {
            title: "Logo Designer",
            description: "Graphic Designer",
            imgUrl: work10,
            tabType: "secondtab",
        },
        {
            title: "Poster",
            description: "Graphic Designer",
            imgUrl: work11,
            tabType: "secondtab",
        },
        {
            title: "Logo Designer",
            description: "Graphic Designer",
            imgUrl: gd1,
            tabType: "secondtab",
        },
        {
            title: "Logo Designer",
            description: "Graphic Designer",
            imgUrl: gd2,
            tabType: "secondtab",
        },
        {
            title: "Logo Designer",
            description: "Graphic Designer",
            imgUrl: gd3,
            tabType: "secondtab",
        },
    ];
      const thirdtab = [
        {
            title: "Home",
            description: "UI/UX Designer",
            imgUrl: work7,
            tabType: "thirdtab",
        },
        {
            title: "Details",
            description: "UI/UX Designer",
            imgUrl: work8,
            tabType: "thirdtab",
        },
        {
            title: "Keranjang",
            description: "UI/UX Designer",
            imgUrl: keranjang,
            tabType: "thirdtab",
        },
        {
            title: "Konfirmasi",
            description: "UI/UX Designer",
            imgUrl: konfirmasi,
            tabType: "thirdtab",
        },
        {
            title: "Search",
            description: "UI/UX Designer",
            imgUrl: search,
            tabType: "thirdtab",
        },
        {
            title: "Transaction",
            description: "UI/UX Designer",
            imgUrl: transaction,
            tabType: "thirdtab",
        },
        {
            title: "Kustomisasi",
            description: "UI/UX Designer",
            imgUrl: kustomisasi,
            tabType: "thirdtab",
        },
        {
            title: "Kustomisasi Pesanan",
            description: "UI/UX Designer",
            imgUrl: kustompes,
            tabType: "thirdtab",
        },
        {
            title: "Pop Up",
            description: "UI/UX Designer",
            imgUrl: popup,
            tabType: "thirdtab",
        },
      ];  
      const webtab = [
        {
            title: "SARI Technology System Login Web",
            description: "Web Developer",
            imgUrl: sartekWeb1,
            tabType: "firsttab",
        },
        {
            title: "SARI Technology System Login Web",
            description: "Web Developer",
            imgUrl: sartekWeb2,  
            tabType: "firsttab",

        },
        {
            title: "Profile React Js",
            description: "Web Developer",
            imgUrl: profileWeb, 
            tabType: "firsttab",
        },
        {
            title: "Bookshelf App",
            description: "Web Developer",
            imgUrl: web3, 
            tabType: "firsttab",
        },
        {
            title: "Calculator Web",
            description: "Web Developer",
            imgUrl: web4, 
            tabType: "firsttab",
        },
        {
            title: "Profile Next Js",
            description: "Web Developer",
            imgUrl: web1, 
            tabType: "firsttab",
        },
        {
            title: "Profile Web",
            description: "Web Developer",
            imgUrl: web2, 
            tabType: "firsttab",
        },
        {
            title: "Profile Web",
            description: "Web Developer",
            imgUrl: work1, 
            tabType: "firsttab",
        },
        {
            title: "Vclass Gunadarma Web",
            description: "Web Developer",
            imgUrl: work2, 
            tabType: "firsttab",
        },
    ]   
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    const [lightboxImageUx, setLightboxImageUx] = useState(null);
      
    const openLightboxUx = (image) => {
        setLightboxImageUx(image);
    };

    const closeLightboxUx = () => {
        setLightboxImageUx(null);
    };
    
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <h2>Projects</h2>
                                <div className="linkproject">
                                    <p><a href="https://github.com/rinoindraw?tab=repositories" target="_blank" className="link">Github</a></p>
                                    <p><a href="https://www.figma.com/file/dqGISnKhXQsqCzVHaLRVPJ/UX-Designer?node-id=100%3A587" target="_blank" className="link">Figma</a></p>
                                </div>
                                <Tab.Container id="projects-tabs" defaultActiveKey="fourth">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item className="flex-fill">
                                        <Nav.Link eventKey="fourth">Android Developer</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="flex-fill">
                                        <Nav.Link eventKey="first">FrontEnd Developer</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="flex-fill">
                                        <Nav.Link eventKey="second">Graphic Designer</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="flex-fill">
                                        <Nav.Link eventKey="third">UI/UX Designer</Nav.Link>
                                    </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="first">
                                            <Row className="firsttab">
                                            {
                                                 webtab.map((project, index) => (
                                                    <Col key={index} xs={11} className="mx-auto">
                                                        <ProjectCard {...project} onClick={() => openLightboxUx(project.imgUrl)} />                 
                                                    </Col>
                                                ))
                                            }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                            <Row className="thirdtab">
                                                {projects.map((project, index) => (
                                                <Col key={index} xs={10} md={4} className="mx-auto">
                                                    <ProjectCard {...project} onClick={() => openLightboxUx(project.imgUrl)} />                 
                                                </Col>
                                                ))}
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <Row className="thirdtab">
                                                {thirdtab.map((project, index) => (
                                                <Col key={index} xs={10} md={4} className="mx-auto">
                                                    <ProjectCard {...project} onClick={() => openLightboxUx(project.imgUrl)} />
                                                </Col>
                                                ))}
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Row className="secondtab">
                                                {secondtab.map((project, index) => (
                                                    <Col key={index} xs={11} md={4} className="mx-auto">
                                                        <ProjectCard {...project} onClick={() => openLightbox(project.imgUrl)} />
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
                {lightboxImage && (
                <div className="overlay-container" onClick={closeLightbox} >
                    <div className="overlay-content">
                    <img src={lightboxImage} alt="Selected Project" className="overlay-image"/>
                    </div>
                </div>
                )}      
                {lightboxImageUx && (
                <div className="overlay-container" onClick={closeLightboxUx} >
                    <div className="overlay-content">
                    <img src={lightboxImageUx} alt="Selected Project" className="overlay-image-ux"/>
                    </div>
                </div>
                )}                          
            </Container>
        </section>
    )
}