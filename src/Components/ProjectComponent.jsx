import React from "react";
import { NavLink } from "react-router-dom";

export default function ProjectComponent(props) {
  return (
    <>
      <div className="project-card">
        <img src={props.imgsrc} alt="weather photo" />
        <h2 className="title">{props.title}</h2>
        <div className="detail">
          <p>{props.content}</p>
        </div>
        <div className="Card-btn">
          <NavLink className="btn" to={props.view} target="_blank">
            View
          </NavLink>
          <NavLink className="btn" to={props.source} target="_blank">
            Source
          </NavLink>
        </div>
      </div>
    </>
  );
}
