import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TrackVisibility from 'react-on-screen';
import SkillCard from './SkillsCard'; // Import the new SkillCard component
import android from "../../assets/img/skills/android.png";
import react from "../../assets/img/skills/react.png";
import web from "../../assets/img/skills/web.png";
import iot from "../../assets/img/skills/iot.png";
import python from "../../assets/img/skills/python.png";
import design from "../../assets/img/skills/design.png";
import figma from "../../assets/img/skills/figma.png";
import colorBackground from "../../assets/img/star.png";
import "./Skills.css";
import "animate.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const skillData = [
    {
      image: android,
      title: 'Android Developer',
      description: 'Experienced Android developer skilled in Kotlin and fundamentals in Flutter, with a solid foundation in building durable and user-friendly apps. I create efficient and fluid apps that enhance the Android user experience.'
    },
    {
      image: react,
      title: 'React JS',
      description: 'Proficient in React.js, I specialize in building dynamic and responsive web applications. With a focus on performance and user experience, I develop clean, maintainable code that brings modern interfaces to life.'
    },
    {
      image: web,
      title: 'Web Developer',
      description: 'Web Developer skilled in Vanilla JavaScript with a solid foundation in PHP. I create clean, responsive websites and applications, focusing on efficient code and seamless user experiences.'
    },
    {
      image: iot,
      title: 'IoT',
      description: 'IoT Developer with expertise in Arduino programming and a deep understanding of IoT logic. I design and implement connected systems that are both efficient and reliable, bringing innovative IoT solutions to life.'
    },
    {
      image: python,
      title: 'Python (Programming Language)',
      description: 'With a solid grasp of Python fundamentals, I write clean and efficient code, laying the groundwork for durable and scalable applications.'
    },
    {
      image: design,
      title: 'Graphic Design',
      description: 'Design enthusiast with strong skills in Adobe Illustrator and experience across multiple platforms. I create visually compelling and detailed designs that effectively communicate ideas and enhance user engagement.'
    },
    {
      image: figma,
      title: 'UI/UX Design',
      description: 'UI/UX Designer skilled in Figma, focused on crafting intuitive and visually appealing interfaces. I design user-centric experiences that are both functional and aesthetically pleasing.'
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__flipInY" : ""}>
                    <h2>Skills</h2>
                  </div>
                )}
              </TrackVisibility>
              <Carousel
                responsive={responsive}
                infinite={true}
                showDots={true}
                draggable={false}
                dotListClass="custom-dot-list-style"
                className="owl-carousel owl-theme skill-slider"
              >
                {skillData.map((skill, index) => (
                  <SkillCard
                    key={index}
                    image={skill.image}
                    title={skill.title}
                    description={skill.description}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorBackground} alt="color" />
    </section>
  );
};
