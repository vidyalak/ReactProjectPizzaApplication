import React, { useState } from "react";
import "../../styles/DynamicTabs.css";

/* Dynamic Tab Configuration */
const TabConfigs = [
  {
    id: 1,
    label: "Tab1",
    title: "Student Overview",
    description:
      "This section provides a summary of student performance, academic status, and engagement."
  },
  {
    id: 2,
    label: "Tab2",
    title: "Course Details",
    description:
      "This section contains course enrollment information, progress tracking, and results."
  },
  {
    id: 3,
    label: "Tab3",
    title: "Attendance Report",
    description:
      "This section displays attendance metrics, trends, and monthly breakdowns."
  },
  {
    id: 4,
    label: "Tab4",
    title: "Achievements",
    description:
      "This section highlights certifications, awards, and extracurricular accomplishments."
  }
];

function DynamicTabs() {
  const [activeTabId, setActiveTabId] = useState(1);

  const [tabState, setTabState] = useState(
    TabConfigs.reduce((acc, tab) => {
      acc[tab.id] = {
        showDetails: true,
        liked: false,
        likeCount: 0
      };
      return acc;
    }, {})
  );

  const activeTab = TabConfigs.find(tab => tab.id === activeTabId);

  const toggleDetails = (id) => {
    setTabState(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        showDetails: !prev[id].showDetails
      }
    }));
  };

  const toggleLike = (id) => {
    setTabState(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        liked: !prev[id].liked,
        likeCount: prev[id].liked
          ? prev[id].likeCount - 1
          : prev[id].likeCount + 1
      }
    }));
  };

  return (
    <div className="dynamic-tabs-page">
      <h1 className="page-title">Dynamic Paragraph Content</h1>

      <div className="tabs-wrapper">
        {/* Tabs */}
        <div className="tabs">
          {TabConfigs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTabId === tab.id ? "active" : ""}`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="card">
          <div className="card-header">
            <h3>{activeTab.title}</h3>

            <div className="actions">
              <button
                className={`like-btn ${tabState[activeTab.id].liked ? "liked" : ""}`}
                onClick={() => toggleLike(activeTab.id)}
              >
                ❤️ {tabState[activeTab.id].likeCount}
              </button>

              <button
                className="toggle-btn"
                onClick={() => toggleDetails(activeTab.id)}
              >
                {tabState[activeTab.id].showDetails
                  ? "Hide Details −"
                  : "Show Details +"}
              </button>
            </div>
          </div>

          {tabState[activeTab.id].showDetails && (
            <p className="card-content">{activeTab.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DynamicTabs;
