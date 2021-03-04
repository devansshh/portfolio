import React from "react";
import Card from "../Card/Card";
import "./Project.css";

const Project = () => {
  return (
    <div className="container">
      <Card
        cardTitle="Snake Game"
        cardContent="The traditional Snake game coded on JS."
        bgCol="#ffcb91"
        link="#"
      />

      <Card
        cardTitle="Bootstrap"
        cardContent="A hypothetical restaurant website made using Bootstrap 4."
        bgCol="#94ebcd"
        link="#"
      />
      <Card
        cardTitle="Hypothetical"
        cardContent="Placeholder."
        bgCol="#beca5c"
        link="#"
      />
    </div>
  );
};

export default Project;
