import { useState } from "react";
import "./card.css";

function Card({ cardData }) {
  return (
    cardData?.length > 0 &&
    cardData.map((v, i) => (
      <div
        className="card-container"
        dangerouslySetInnerHTML={{ __html: v }}
      ></div>
    ))
  );
}

export default Card;
