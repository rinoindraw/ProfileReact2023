import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, tabType, onClick }) => {
  return (
    <Col xs={12}>
      <div className={`proj-imgbx ${tabType}`} onClick={onClick}>
        <img src={imgUrl} alt="Project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
