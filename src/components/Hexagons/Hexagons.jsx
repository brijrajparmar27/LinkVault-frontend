import React from "react";
import { MdHexagon } from "react-icons/md";
import "./Hexagons.css";

export default function Hexagons() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const hexagons = new Array(randomNumber).fill(0);

  const pickColor = () => {
    const colors = [
      "#FFFFFF", // White
      "#FFA07A", // Light Salmon
      "#FFC0CB", // Pink
      "#FFD700", // Gold
      "#FF8C00", // Dark Orange
      "#FF4500", // Orange Red
      "#FF69B4", // Hot Pink
      "#00FFFF", // Cyan
      "#00CED1", // Dark Turquoise
      "#008080", // Teal
      "#ADFF2F", // Green Yellow
      "#32CD32", // Lime Green
      "#228B22", // Forest Green
      "#7FFFD4", // Aquamarine
      "#40E0D0", // Turquoise
      "#00BFFF", // Deep Sky Blue
      "#1E90FF", // Dodger Blue
      "#6A5ACD", // Slate Blue
      "#8A2BE2", // Blue Violet
      "#9400D3", // Dark Violet
    ];
    return colors[Math.floor(Math.random() * 21)];
  };
  const generateSize = () => {
    return `${Math.floor(Math.random() * 21) + 15}px`;
  };
  const generateCoordinates = () => {
    return `${Math.floor(Math.random() * 100) + 1}%`;
  };
  return (
    <div className="hexpattern">
      {hexagons.map(() => {
        return (
          <MdHexagon
            style={{
              color: pickColor(),
              fontSize: generateSize(),
              left: generateCoordinates(),
              top: generateCoordinates(),
              animationDelay: Math.random()*10 + 's'
            }}
            className="hexagon"
          />
        );
      })}
    </div>
  );
}
