import React, { useState, useRef } from "react";
import "./Home.css";
import Modal from "../../components/LinkModal/LinkModal";
import { useLinkContext } from "../../Hooks/ContextHooks/useLinkContext";
import { useEffect } from "react";
import useModalContext from "../../Hooks/ContextHooks/useModalContext";
import ListCard from "../../components/ListCard/ListCard";
import GridCard from "../../components/GridCard/GridCard";
import Lottie from "lottie-react";
import Empty from "../../assets/Lottie/empty.json";
import useGetLinks from "../../Hooks/useGetLinks";
import Header from "../../components/Header/Header";
import { useSocket } from "../../Hooks/useSocket";

export default function Home() {
  const { links, setLinks } = useLinkContext();
  const [isList, setIsList] = useState(true);
  const { getLinks, error, loading } = useGetLinks();
  const { LinkModalState, setLinkModalState } = useModalContext();
  const { ConnectSocket, DisconnectSocket, HandleEmmit, socket } = useSocket();

  const populateData = async () => {
    const data = await getLinks();
    setLinks(data);
  };

  useEffect(() => {
    if (socket) {
      ConnectSocket();
      socket.on("linkProcessEvent", ({ type, message }) => {
        HandleEmmit({ type, message });
      });
    }
    () => DisconnectSocket();
  }, [socket]);

  useEffect(() => {
    populateData();
  }, []);

  return (
    <div className="home">
      {LinkModalState && <Modal />}

      <Header
        setIsList={setIsList}
        isList={isList}
        setLinkModalState={setLinkModalState}
      />

      <div className="home_content" id="custom-scroll">
        {links && links.length > 0 && (
          <div className="card_contain">
            {links.map((each) => {
              return isList ? (
                <ListCard each={each} key={each._id} />
              ) : (
                <GridCard each={each} key={each._id} />
              );
            })}
          </div>
        )}
        {!loading && !error && links && links.length < 1 && (
          <div className="lottie_contain">
            <Lottie
              animationData={Empty}
              style={{ width: "10%" }}
              className="lottie"
            />
          </div>
        )}
      </div>
    </div>
  );
}
