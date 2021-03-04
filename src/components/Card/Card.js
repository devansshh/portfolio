import React from "react";
import "./Card.css";

const Card = (props) => {
  const style = {
    backgroundColor: props.bgCol,
  };
  return (
    <a href={props.link} className="link">
      <div className="card" style={style}>
        <div className="f1">
          <img src={props.img}></img>
        </div>
        <div className="f2">
          <div className="cardTitle">{props.cardTitle}</div>
          <div className="cardContent">{props.cardContent}</div>
        </div>
      </div>
    </a>
  );
};

export default Card;
