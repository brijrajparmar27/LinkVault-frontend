import React from "react";
import "./ListCard.css";
import { trimText } from "../../helper/trimText";

export default function ListCard({ each }) {
  const notFoundThumb =
    "https://cdn.dribbble.com/userupload/2641499/file/original-93ede26968b1cc784686996ceaa7a48d.png?resize=400x300&vertical=center";
  const faviconNotFound =
    "https://icon-library.com/images/multilingual-icon/multilingual-icon-6.jpg";
  return (
    <a className="list-card" href={each.url} >
      <div className="thumb_contain">
        <img
          src={each.thumb ? each.thumb : notFoundThumb}
          alt=""
          className="thumb"
        />
      </div>
      <div className="info_contain">
        <div className="title">
          <h2>
            {trimText({ string: each.title, lines: 2, component: "LIST" })}
          </h2>
        </div>
        <div className="url">
          <img
            src={each.favicon ? each.favicon : faviconNotFound}
            className="favicon"
          />
          <p className="link">
            {trimText({ string: each.url, lines: 1, component: "LIST" })}
          </p>
        </div>
      </div>
    </a>
  );
}
