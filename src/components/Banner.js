import { Container, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import pasFoto from "../assets/img/pasfoto/pasfoto23.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { EnvelopeFill } from "react-bootstrap-icons";
import { Link } from "react-scroll";
import Resume from "../assets/resume/CvRino.pdf";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Android Developer", "Web Developer", "IoT Engineer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const onResumeClick = () => {
    window.open(Resume);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div className="flex-banner">
                    <a
                      href="https://www.linkedin.com/in/rino-indra-wicaksono-43582b235/"
                      target="_blank"
                      className="icons left-anim"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a
                      href="https://github.com/rinoindraw?tab=repositories"
                      target="_blank"
                      className="icons center-anim"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a
                      href="mailto:rinoindra75@gmail.com"
                      target="_blank"
                      className="icons"
                      rel="noreferrer"
                    >
                      <EnvelopeFill />
                    </a>
                  </div>
                  <h1>
                    {`Hello, I'm Rino Indra Wicaksono, `}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Android Developer", "Web Developer", "IoT Engineer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    An Undergraduate Computer System student who wants to gain
                    experience and really interested in Programming. I am a
                    person who works well under pressure, can handle and finish
                    task on scheduled deadline, and have good verbal
                    communication skills.
                  </p>
                  <button onClick={onResumeClick}>
                    Resume <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={pasFoto} alt="PasFoto" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
