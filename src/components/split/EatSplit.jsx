import React, { useState } from "react";
import "../../styles/EatSplit.css";

function EatSplit() {
  const [friends, setFriends] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState("");

  const [selectedFriend, setSelectedFriend] = useState(null); // friend to split bill
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [payer, setPayer] = useState("you");

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setFriendName("");
    setFriendImage("");
  };

  const addFriend = () => {
    if (!friendName.trim()) return alert("Please enter friend name!");
    const newFriend = {
      id: Date.now(),
      name: friendName,
      image: friendImage || "https://via.placeholder.com/50",
      balance: 0,
    };
    setFriends([...friends, newFriend]);
    closeModal();
  };

  const openSplitBill = (friend) => {
    setSelectedFriend(friend);
    setBillValue("");
    setYourExpense("");
    setPayer("you");
  };

  const submitBill = () => {
    const friendExpense = billValue - yourExpense;

    let updatedBalance = 0;

    if (payer === "you") {
      // you paid — friend owes you
      updatedBalance = friendExpense;
    } else {
      // friend paid — you owe friend
      updatedBalance = -yourExpense;
    }

    setFriends((prev) =>
      prev.map((f) =>
        f.id === selectedFriend.id
          ? { ...f, balance: (f.balance || 0) + updatedBalance }
          : f
      )
    );

    alert("Bill Split Successfully!");
    setSelectedFriend(null);
  };

  return (
    <div className="eat-container">
      <h2 className="title">Eat & Split 💸</h2>

      <button className="add-btn" onClick={openModal}>
        ➕ Add Friend
      </button>

      {/* Friend List */}
      <div className="friend-list">
        {friends.length === 0 && <p>No friends added yet.</p>}

        {friends.map((f) => (
          <div key={f.id} className="friend-card">
            <img src={f.image} alt="friend" className="friend-img" />
            <div className="friend-info">
              <span>{f.name}</span>
              <span className="balance">
                {f.balance > 0
                  ? `${f.name} owes you ₹${f.balance}`
                  : f.balance < 0
                  ? `You owe ${f.name} ₹${Math.abs(f.balance)}`
                  : `You're even`}
              </span>
            </div>
            <button className="split-btn" onClick={() => openSplitBill(f)}>
              Split a Bill
            </button>
          </div>
        ))}
      </div>

      {/* ---------- Modal to Add Friend ---------- */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Add New Friend</h3>

            <div className="input-group">
              <label>Friend Name</label>
              <input
                type="text"
                value={friendName}
                onChange={(e) => setFriendName(e.target.value)}
                placeholder="Enter friend name"
              />
            </div>

            <div className="input-group">
              <label>Friend Image URL</label>
              <input
                type="text"
                value={friendImage}
                onChange={(e) => setFriendImage(e.target.value)}
                placeholder="Paste image URL"
              />
            </div>

            <div className="modal-buttons">
              <button className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
              <button className="save-btn" onClick={addFriend}>
                Add Friend
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------- Split Bill Form ---------- */}
      {selectedFriend && (
        <div className="bill-box">
          <h3>Split Bill with {selectedFriend.name}</h3>

          <div className="input-group">
            <label>Total Bill Value</label>
            <input
              type="number"
              value={billValue}
              onChange={(e) => setBillValue(Number(e.target.value))}
              placeholder="Enter bill amount"
            />
          </div>

          <div className="input-group">
            <label>Your Expense</label>
            <input
              type="number"
              value={yourExpense}
              onChange={(e) =>
                setYourExpense(
                  Number(e.target.value) <= billValue
                    ? Number(e.target.value)
                    : yourExpense
                )
              }
              placeholder="Enter amount paid by you"
            />
          </div>

          <div className="input-group">
            <label>{selectedFriend.name}'s Expense</label>
            <input
              type="number"
              disabled
              value={billValue ? billValue - yourExpense : ""}
            />
          </div>

          <div className="input-group">
            <label>Who paid the bill?</label>
            <select value={payer} onChange={(e) => setPayer(e.target.value)}>
              <option value="you">You</option>
              <option value="friend">{selectedFriend.name}</option>
            </select>
          </div>

          <div className="modal-buttons">
            <button className="cancel-btn" onClick={() => setSelectedFriend(null)}>
              Cancel
            </button>
            <button className="save-btn" onClick={submitBill}>
              Split Bill
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EatSplit;
