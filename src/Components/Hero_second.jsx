import React from "react";
import "./Hero_second.css";

export default function Hero_second(props) {
  return (
    <>
      <div className="hero2">
        <div className="header">
          <h1>{props.heading} </h1>
          <p>{props.text} </p>
        </div>
      </div>
    </>
  );
}
