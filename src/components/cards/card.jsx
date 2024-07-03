import { useState } from "react";
import "./card.css";

function Card(props) {
  return (
    // cardData?.length > 0 &&
    // cardData.map((v, i) => (
    //   <div
    //     className="card-container"
    //     dangerouslySetInnerHTML={{ __html: v }}
    //   ></div>
    // ))
    <div>{props.value}</div>
  );
}

export default Card;
