import React, { useState } from "react";
import "./Home.css";
import { BsViewList, BsPlusLg, BsGridFill } from "react-icons/bs";
import Modal from "../../components/Modal/Modal";
import { useLinkContext } from "../../Hooks/ContextHooks/useLinkContext";

export default function Home() {
  const { links, setLinks } = useLinkContext();
  const [modal, setModal] = useState(false);

  const handleClick = (url) => {
    const newTab = window.open();
    newTab.opener = null;
    newTab.location = url;
  };
  return (
    <div className="home">
      {modal && <Modal setModal={setModal} />}
      <div className="home_header">
        <h1>LinkVault</h1>
        <div className="menus">
          <BsGridFill className="view_switcher" />
          <button
            className="addLink_btn"
            onClick={() => {
              setModal(true);
            }}
          >
            <BsPlusLg />
            Add Link
          </button>
        </div>
      </div>
      <div className="home_content">
        <div className="card_contain">
          {links &&
            links.map((each) => {
              return (
                <div
                  className="card"
                  onClick={() => {
                    handleClick(each.url);
                  }}
                >
                  <div className="thumb">
                    <img src={each.thumb} alt="" className="thumb" />
                  </div>
                  <div className="title">
                    <h2>
                      {each.title.substr(0, 75)}
                      {each.title.length > 75 ? "..." : ""}
                    </h2>
                  </div>
                  <div className="url">
                    <p className="link">
                      {each.url.substr(0, 45)}
                      {each.url.length > 45 ? "..." : ""}
                    </p>
                    <img src={each.favicon} alt="" className="favicon" />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
