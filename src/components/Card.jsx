import React, { useState } from "react";
import "./Card.css";

const Card = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card-container">
      <div className="card-header" onClick={handleClick}>
        <span className="header-label">Surveys</span>
        <span className="collapse-icon">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="card-content">{children}</div>}
    </div>
  );
};

export default Card;
