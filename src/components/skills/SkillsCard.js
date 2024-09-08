import React from "react";
import PropTypes from 'prop-types';
import "./Skills.css";

const SkillsCard = ({ image, title, description }) => {
  return (
    <div className="item">
      <div className="skill-item">
        <div className="skill-inner">
          <img src={image} alt={title} className="skill-img" />
          <div className="overlay">
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

SkillsCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

export default SkillsCard;
