"use client";
import React, { useState, useEffect } from "react";

const RandomRotateText = ({ text }) => {
  const [rotation, setRotation] = useState([]);

  // Update rotation array whenever 'text' prop changes
  useEffect(() => {
    setRotation(text.split("").map(() => Math.random() * 10 - 5));
  }, [text]);

  // Update rotation array every 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) =>
        prevRotation.map(() => Math.random() * 10 - 5)
      );
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const letters = text.split("").map((char, index) => {
    if (char === " ") {
      return (
        <span
          key={index}
          style={{ display: "inline-block" }}
          dangerouslySetInnerHTML={{ __html: "&nbsp;" }}
        />
      );
    } else {
      return (
        <span
          key={index}
          style={{
            display: "inline-block",
            transform: `rotate(${rotation[index]}deg)`,
          }}
        >
          {char}
        </span>
      );
    }
  });

  return (
    <div className="diagonal-slant" style={{ display: "inline-block" }}>
      {letters}
    </div>
  );
};

export default RandomRotateText;
