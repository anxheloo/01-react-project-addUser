import React from "react";
import "./card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>; //props.children will give us the content inside Card when we use it, in our case : Form.js
};

export default Card;
