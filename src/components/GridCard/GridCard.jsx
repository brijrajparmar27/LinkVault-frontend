import React from "react";
import "./GridCard.css";

export default function GridCard({ each }) {
  const notFoundThumb =
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";
  return (
    <div className="grid-card">
      <div
        className="thumb_contain"
        style={{
          backgroundImage: `url(${each.thumb ? each.thumb : notFoundThumb})`,
        }}
      >
        {/* <img src={each.thumb?each.thumb:notFoundThumb} alt="" className="thumb" /> */}
      </div>
      <div className="favicon-contain">
        <img src={each.favicon} alt="" />
      </div>
      <h2 className="title_contain">
        {each.title.substr(0, 70).trim()}
        {each.title.length > 70 ? "..." : ""}
      </h2>
      <p className="link_contain">
        {each.url.substr(0, 35)}
        {each.url.length > 35 ? "..." : ""}
      </p>
    </div>
  );
}
