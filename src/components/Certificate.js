import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import certifBangkit from "../assets/img/certificate/certificateBangkit.jpg";
import certifWrg from "../assets/img/certificate/certificateWrg.jpg";
import certifJet from "../assets/img/certificate/certificateJetpack.jpg";
import certifInter from "../assets/img/certificate/certificateInter.jpg";
import certifSolid from "../assets/img/certificate/certificateSolid.jpg";
import certifFundamental from "../assets/img/certificate/certifFundamental.jpg";
import certifUx from "../assets/img/certificate/certificateUx.jpg";
import certifAndBas from "../assets/img/certificate/certificateAndBas.jpg";
import certifSoftware from "../assets/img/certificate/certificateSoftware.jpg";
import certifKotlin from "../assets/img/certificate/certifKotlin.jpg";
import certifJvs from "../assets/img/certificate/certifJvs.jpg";
import certifGit from "../assets/img/certificate/certifGit.jpg";
import certifLogic from "../assets/img/certificate/certifLogic.jpg";
import certifBasWeb from "../assets/img/certificate/certifBasWeb.jpg";
import certifFront from "../assets/img/certificate/certifFront.jpg";
import certifProyek from "../assets/img/certificate/certifProyek.jpg";
import certifData from "../assets/img/certificate/certifData.jpg";
import certifJavaFund from "../assets/img/certificate/certifJavaFund.jpg";
import certifSql from "../assets/img/certificate/certifSql.jpg";
import certifMentor from "../assets/img/certificate/CertMentor.jpg";
import certifPkmkemendikbud from "../assets/img/certificate/PkmKemendikbud.jpg";
import certifPkmGunadarma from "../assets/img/certificate/PkmGunadarma.jpg";
import certifUdemyReact from "../assets/img/certificate/UdemyReact.jpg";
import TrackVisibility from "react-on-screen";

export const Certificate = () => {
  const certificate = [
    {
      image: certifMentor,
      desc: "Certificate of Completion",
      hover: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    },
    {
      image: certifPkmkemendikbud,
      desc: "Peraih Pendanaan Bidang PKMKC",
      hover:
        "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia",
    },
    {
      image: certifPkmGunadarma,
      desc: "Peraih Pendanaan Bidang PKMKC",
      hover: "Universitas Gunadarma",
    },
    {
      image: certifUdemyReact,
      desc: "React - The Complete Guide 2023 (incl. React Router & Redux)",
      hover: "Udemy",
    },
    {
      image: certifBangkit,
      desc: "Certificate of Completion",
      hover: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    },
    {
      image: certifWrg,
      desc: "Certificate of Participation",
      hover: "World Robot Games 2022 Thailand Championship",
    },
    {
      image: certifJet,
      desc: "Belajar Membuat Aplikasi Android dengan Jetpack Compose",
      hover: "Dicoding Indonesia",
    },
    {
      image: certifInter,
      desc: "Belajar Pengembangan Aplikasi Android Intermediate",
      hover: "Dicoding Indonesia",
    },
    {
      image: certifSolid,
      desc: "Belajar Prinsip Pemrograman SOLID",
      hover: "Dicoding Indonesia",
    },
    {
      image: certifFundamental,
      desc: "Belajar Fundamental Aplikasi Android",
      hover: "Dicoding Indonesia",
    },
    {
      image: certifUx,
      desc: "Belajar Dasar UX Design",
      hover: "Dicoding Indonesia",
    },
    {
      image: certifAndBas,
      desc: "Belajar Membuat Aplikasi Android untuk Pemula",
      hover: "Dicoding Indonesia",
    },
    {
      image: certifSoftware,
      desc: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      hover: "Dicoding Indonesia",
    },
    {
      image: certifKotlin,
      desc: "Memulai Pemrograman Dengan Kotlin",
      hover: "Dicoding Indonesia",
    },
    {
      image: certifJvs,
      desc: "Belajar Dasar Pemrograman JavaScript",
      hover: "Dicoding Indonesia",
    },
    {
      image: certifGit,
      desc: "Belajar Dasar Git dengan GitHub",
      hover: "Dicoding Indonesia",
    },
    {
      image: certifLogic,
      desc: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      hover: "Dicoding Indonesia",
    },
    {
      image: certifBasWeb,
      desc: "Belajar Dasar Pemrograman Web",
      hover: "Dicoding Indonesia",
    },
    {
      image: certifFront,
      desc: "Belajar Membuat Front-End Web untuk Pemula",
      hover: "Dicoding Indonesia",
    },
    {
      image: certifSql,
      desc: "Belajar Dasar Structured Query Language (SQL)",
      hover: "Dicoding Indonesia",
    },
    {
      image: certifProyek,
      desc: "Belajar Dasar Manajemen Proyek",
      hover: "Dicoding Indonesia",
    },
    {
      image: certifData,
      desc: "Data Science",
      hover: "BEM FIKTI Universitas Gunadarma",
    },
    {
      image: certifJavaFund,
      desc: "JavaScript Programming Language Fundamental",
      hover:
        "Lembaga Pengembangan Komputerisasi Universitas GunadarmaLembaga Pengembangan Komputerisasi Universitas Gunadarma",
    },
  ];

  const [lightboxImageUx, setLightboxImageUx] = useState(null);

  const openLightboxUx = (image) => {
    setLightboxImageUx(image);
  };

  const closeLightboxUx = () => {
    setLightboxImageUx(null);
  };

  return (
    <section className="org-experience" id="certificate">
      <Container>
        <div className="experience-wrapper">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__flipInY" : ""
                }
              >
                <h2>Certificate</h2>
              </div>
            )}
          </TrackVisibility>{" "}
          <Row>
            {certificate.map((cert, index) => (
              <Col key={index} xs={11} md={12} className="mx-auto">
                <div
                  className="certificate-item"
                  onClick={() => openLightboxUx(cert.image)}
                >
                  <div className="certif-img">
                    <img src={cert.image} alt={cert.desc} />
                    <div className="certif-desc">
                      <h4>{cert.desc}</h4>
                      <span>{cert.hover}</span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        {lightboxImageUx && (
          <div className="overlay-container" onClick={closeLightboxUx}>
            <div className="overlay-content">
              <img
                src={lightboxImageUx}
                alt="Selected Project"
                className="overlay-image-ux"
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
