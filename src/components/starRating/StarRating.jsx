import React, { useState } from "react";
import "../../styles/StarRating.css";

/* ---------- STAR COMPONENT ---------- */
const Star = ({ filled, color, onMouseEnter, onMouseLeave, onClick }) => (
  <span
    className="star"
    style={{
      WebkitTextStroke: `2px ${color}`,
      color: filled ? color : "transparent"
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
  >
    ★
  </span>
);

/* ---------- MAIN COMPONENT ---------- */
export default function StarRatingDemo() {
  return (
    <div className="container">
      <h2>⭐ Five Star Rating</h2>
      <FiveStarRating />

      <h2>⭐ Seven Star Rating</h2>
      <SevenStarRating />

      <h2>⭐ Ten Star Rating</h2>
      <TenStarRating />
    </div>
  );
}

/* ---------- 5 STAR RATING ---------- */
function FiveStarRating() {
  const [hover, setHover] = useState(0);

  const labels = ["Poor", "Average", "Good", "Very Good", "Excellent"];

  return (
    <div>
      <div className="star-row">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            color="goldenrod"
            filled={hover >= star}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          />
        ))}
      </div>

      {hover > 0 && <p className="message">{labels[hover - 1]}</p>}
    </div>
  );
}

/* ---------- 7 STAR RATING ---------- */
function SevenStarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const displayValue = hover || rating;

  return (
    <div>
      <div className="star-row">
        {[...Array(7)].map((_, index) => {
          const star = index + 1;
          return (
            <Star
              key={star}
              color="red"
              filled={displayValue >= star}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(star)}
            />
          );
        })}
      </div>

      {displayValue > 0 && (
        <p className="message">Selected Rating: {displayValue}</p>
      )}
    </div>
  );
}

/* ---------- 10 STAR RATING ---------- */
function TenStarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const displayValue = hover || rating;

  return (
    <div>
      <div className="star-row">
        {[...Array(10)].map((_, index) => {
          const star = index + 1;
          return (
            <Star
              key={star}
              color="blue"
              filled={displayValue >= star}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(star)}
            />
          );
        })}
      </div>

      {displayValue > 0 && (
        <p className="message">
          The movie is rated as {displayValue} star
        </p>
      )}
    </div>
  );
}
