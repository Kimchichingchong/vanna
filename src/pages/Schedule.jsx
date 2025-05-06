import React from "react";
import { motion } from "framer-motion";

const events = [
  { name: "Case Study", x: "10%", y: "30%" },
  { name: "Lift Off", x: "20%", y: "20%" },
  { name: "Eggstravaganza", x: "30%", y: "30%" },
  { name: "Hoverpod", x: "40%", y: "40%" },
  { name: "Pitch The Cosmos", x: "50%", y: "30%" },
  { name: "IUCAA Workshop", x: "60%", y: "20%" },
  { name: "Space Quiz Prelims", x: "65%", y: "35%" },
  { name: "Cosmonath", x: "60%", y: "55%" },
  { name: "Guest Lecture", x: "45%", y: "60%" },
  { name: "Talk Show", x: "30%", y: "55%" },
];

export default function ConstellationLayout() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden text-white font-sans">
      <div className="absolute w-full h-full">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="absolute text-white text-sm whitespace-nowrap"
            style={{ top: event.y, left: event.x }}
            whileHover={{ scale: 1.2 }}
          >
            <div className="w-3 h-3 bg-white rounded-full mb-1" />
            <div className="text-white text-shadow-lg">{event.name}</div>
          </motion.div>
        ))}
        {events.slice(1).map((_, i) => (
          <svg
            key={`line-${i}`}
            className="absolute w-full h-full top-0 left-0"
            style={{ pointerEvents: "none" }}
          >
            <line
              x1={parseFloat(events[i].x)}
              y1={parseFloat(events[i].y)}
              x2={parseFloat(events[i + 1].x)}
              y2={parseFloat(events[i + 1].y)}
              stroke="white"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}
