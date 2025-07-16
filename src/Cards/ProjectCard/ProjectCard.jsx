import React from "react";
import "../ProjectCard/ProjectCard.css";
import Language from "../Langauge/Language";

const ProjectCard = ({ img, name, language, language1, preview, code }) => {
    const handleClick = () => {
        window.open(`${code}`);
    };

    const handleClickPreview = () => {
        window.open(`${preview}`);
    };

    return (
        <div className="project-card">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <div className="language-group">
                <Language language={language} />
                <Language language={language1} />
            </div>
            <div className="btns">
                <button className="preview" onClick={handleClickPreview}>Live Preview</button>
                <button className="code" onClick={handleClick}>Source Code</button>
            </div>
    </div>
  );
};

export default ProjectCard;
