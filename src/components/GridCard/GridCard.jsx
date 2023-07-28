import React from "react";
import "./GridCard.css";
import useScreenContext from "../../Hooks/useScreenContext";
import { trimText } from "../../helper/trimText";

const notFoundThumb =
  "https://cdn.dribbble.com/userupload/2641499/file/original-93ede26968b1cc784686996ceaa7a48d.png?resize=400x300&vertical=center";
const faviconNotFound =
  "https://icon-library.com/images/multilingual-icon/multilingual-icon-6.jpg";

export default function GridCard({ each }) {
  const { isMobile } = useScreenContext();
  return (
    <a className="grid_card" href={each.url}>
      <div className="thumb_contain">
        <img
          src={each.thumb ? each.thumb : notFoundThumb}
          alt=""
          className="thumb"
        />
      </div>
      <div className="info_wrapper">
        <div className="favicon_contain">
          <img
            src={each.favicon ? each.favicon : faviconNotFound}
            alt=""
            className="favicon"
          />
        </div>
        <h2 className="title_contain">
          {trimText({ string: each.title, lines: 2, component: "GRID" })}
        </h2>
        <p className="link_contain">
          {trimText({ string: each.url, lines: 1, component: "GRID" })}
        </p>
      </div>
    </a>
  );
}
