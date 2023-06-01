import React from "react";
import "./GridCard.css";

export default function GridCard({ each }) {
  const handleClick = (url) => {
    const newTab = window.open();
    newTab.opener = null;
    newTab.location = url;
  };
  return (
    <div
      className="grid-card"
      onClick={() => {
        handleClick(each.url);
      }}
    >
      <div className="thumb_contain">
        <img src={each.thumb} alt="" className="thumb" />
      </div>
      <div className="favicon-contain">
        <img src={each.favicon} alt="" />
      </div>
      <div className="title_contain">
        {each.title.substr(0, 70).trim()}
        {each.title.length > 70 ? "..." : ""}
      </div>
      <div className="link_contain">
        {each.url.substr(0, 35)}
        {each.url.length > 35 ? "..." : ""}
      </div>
    </div>
  );
}
