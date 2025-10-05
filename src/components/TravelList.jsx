import React, { useState } from "react";
import "../styles/TravelList.css";

function TravelList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [error, setError] = useState("");
  const [extraItem, setExtraItem] = useState(null);

  const handleAdd = () => {
    if (newItem.trim() === "") return;

    if (items.length >= 5) {
      setError("❌ You already have 5 items in your list.");
      setExtraItem({ name: newItem, id: items.length + 1 });
      setNewItem("");
      return;
    }

    setItems([...items, newItem]);
    setNewItem("");
    setError("");
    setExtraItem(null);
  };

  const handleRemoveExtra = () => {
    setExtraItem(null);
    setError("");
  };

  return (
    <div className="travel-container">
      <h2>🧳 Travel Checklist</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter item (e.g. Phone)"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>
            {index + 1}. {item}
          </li>
        ))}

        {/* Show struck 6th item */}
        {extraItem && (
          <li className="strike-black">
            {extraItem.id}. {extraItem.name}{" "}
            <span className="cross-icon" onClick={handleRemoveExtra}>
              ❌
            </span>
          </li>
        )}
      </ul>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default TravelList;
