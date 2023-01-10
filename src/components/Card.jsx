import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card-container">
      <div className="card-header">
        <span className="header-label">{props.title}</span>
        <span className="collapse-icon" onClick={handleClick}>
          {isOpen ? "-" : "+"}
        </span>
      </div>
      {isOpen && <div className="card-content">{props.children}</div>}
    </div>
  );
};

export default Card;
