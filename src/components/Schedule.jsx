// src/components/Schedule.js
import  { useState } from "react";
import { scheduleData } from "../data/scheduleData";
import "./Schedule.css";

function Schedule () {
  const [activeDay, setActiveDay] = useState("Day 0");

  return (
    <div className="schedule-container">
      <div className="day-selector">
        {Object.keys(scheduleData).map((day) => (
          <button
            key={day}
            className={`day-button ${activeDay === day ? "active" : ""}`}
            onClick={() => setActiveDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      <h2 className="schedule-title">Schedule {activeDay}</h2>
      <div className="timeline">
        {scheduleData[activeDay].map((item, index) => (
          <div className="timeline-item" key={index}>
            <div
              className={`timeline-card ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <div className="time-label">{item.time}</div>
              <div className="card-content">
                <p className="event-title">{item.event}</p>
                <p className="location">
                  <span className="pin">📍</span> <span>{item.location}</span>
                </p>
              </div>
            </div>
            <div className="circle" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
