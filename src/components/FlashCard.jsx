import React, { useState } from "react";
import "../styles/FlashCard.css";

function FlashCard() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    { id: 1, name: "Lion", type: "Animal" },
    { id: 2, name: "Elephant", type: "Animal" },
    { id: 3, name: "Parrot", type: "Bird" },
    { id: 4, name: "Eagle", type: "Bird" },
    { id: 5, name: "Dog", type: "Animal" },
  ];

  return (
    <div className="flashcard-wrapper">
      <div className="flashcard-container">
        <h2>🃏 FlashCard Example</h2>

        <div className="flashcard-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`flashcard ${hoveredCard === card.id ? card.type.toLowerCase() : ""}`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <p className="flashcard-title">{card.name}</p>
              {hoveredCard === card.id && (
                <span className="flashcard-text">
                  {card.type === "Animal" ? "Animal" : "Bird"}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
