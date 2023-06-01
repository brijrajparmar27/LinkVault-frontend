import React from "react";
import "./ListCard.css";

export default function ListCard({ each }) {
  const handleClick = (url) => {
    const newTab = window.open();
    newTab.opener = null;
    newTab.location = url;
  };
  return (
    <div
      className="list-card"
      onClick={() => {
        handleClick(each.url);
      }}
    >
      <div className="thumb">
        <img src={each.thumb} alt="" className="thumb" />
      </div>
      <div className="title">
        <h2>
          {each.title.substr(0, 70).trim()}
          {each.title.length > 70 ? "..." : ""}
        </h2>
      </div>
      <div className="url">
        <p className="link">
          {each.url.substr(0, 35)}
          {each.url.length > 35 ? "..." : ""}
        </p>
        <img src={each.favicon} alt="" className="favicon" />
      </div>
    </div>
  );
}
