import React from "react";

const GoalPost = () => {
  return (
    <svg
      width="120"
      height="90"
      viewBox="0 0 120 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        bottom: "10px",
        left: "10px",
        opacity: 0.8,
        zIndex: 20,
      }}
    >
      {/* Base plank (skewed to create perspective) */}
      <polygon
        points="15,85 105,85 115,80 25,80"
        fill="#555"
      />
      
      {/* Left post (vertical) */}
      <rect x="15" y="25" width="7" height="60" fill="#555" />
      
      {/* Right post (skewed to the right for perspective) */}
      <polygon
        points="105,25 115,20 115,80 105,85"
        fill="#555"
      />
      
      {/* Crossbar (skewed parallelogram) */}
      <polygon
        points="15,25 105,25 115,20 25,20"
        fill="#555"
      />
      
      {/* Net vertical lines (skewed) */}
      {[25, 45, 65, 85].map((x, i) => (
        <line
          key={i}
          x1={x}
          y1="25"
          x2={x + 10}
          y2="80"
          stroke="#ccc"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      ))}
      
      {/* Net horizontal lines */}
      {[35, 50, 65, 80].map((y, i) => (
        <line
          key={i}
          x1={15}
          y1={y}
          x2={115}
          y2={y - 5}  // shift upper to simulate perspective
          stroke="#ccc"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      ))}
    </svg>
  );
};

export default GoalPost;
