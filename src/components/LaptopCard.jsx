import React from "react";
import "../styles/ProductCard.css";

//Conditional Rendering with &&
const LaptopCard = ({ serial, image, title, subtitle, price }) => {
  return (
    <div className="card">
      <span className="card-serial">{serial}.</span>
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-subtitle">{subtitle}</p>
      </div>
      <span className="card-price">{price}</span>
    </div>
  );
};

export default LaptopCard;
