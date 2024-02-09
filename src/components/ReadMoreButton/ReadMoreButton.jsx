import React from "react";
import "./readMoreButton.css";
function ReadMoreButton({ color, colortext }) {
  return (
    <div>
      <button
        style={{ backgroundColor: ` ${color}`, color: ` ${colortext}` }}
        className="button"
      >
        Read More
      </button>
    </div>
  );
}

export default ReadMoreButton;
