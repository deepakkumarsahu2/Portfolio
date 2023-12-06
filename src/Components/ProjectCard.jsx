import React from "react";
import "./ProjectCard.css";
import ProjectComponent from "./ProjectComponent";
import ProjectApi from "./ProjectApi";

export default function ProjectCard() {
  return (
    <>
      <div className="project-card">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {ProjectApi.map((val, ind) => {
            return (
              <ProjectComponent
                key={ind}
                imgsrc={val.imgurl}
                title={val.title}
                content={val.content}
                view={val.view}
                source={val.source}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
