import React, { useState } from "react";
import "./Home.css";
import { BsViewList, BsPlusLg, BsGridFill } from "react-icons/bs";
import Modal from "../../components/LinkModal/LinkModal";
import { useLinkContext } from "../../Hooks/ContextHooks/useLinkContext";

import io from "socket.io-client";

import { useEffect } from "react";
import useModalContext from "../../Hooks/ContextHooks/useModalContext";
import ProcessModal from "../../components/ProcessModal/ProcessModal";
import ListCard from "../../components/ListCard/ListCard";
import GridCard from "../../components/GridCard/GridCard";
import Lottie from "lottie-react";
import Empty from "../../assets/Lottie/empty.json";
import useGetLinks from "../../Hooks/useGetLinks";
import useAuthContext from "../../Hooks/ContextHooks/useAuthContext";

export default function Home() {
  const { links, setLinks } = useLinkContext();
  const [modalMSG, setModalMSG] = useState("Initializing...");
  const [isList, setIsList] = useState(true);
  const { getLinks, error, loading } = useGetLinks();
  const { LinkModalState, setLinkModalState, ProcessModalState } =
    useModalContext();

  const SOCKET_PATH =
    import.meta.env.VITE_CONFIG_TYPE == "LOCAL"
      ? import.meta.env.VITE_SOCKETS_LOCAL
      : import.meta.env.VITE_SOCKETS_REMOTE;

  const { logout } = useAuthContext();

  const populateData = async () => {
    const data = await getLinks();
    setLinks(data);
  };

  useEffect(() => {
    console.log(SOCKET_PATH);
    const socket = io(SOCKET_PATH);
    // Event listener for 'myEvent' emitted from the server
    socket.on("linkProcessEvent", (data) => {
      console.log("Received data:", data);
      setModalMSG(data);
      // Do something with the received data
    });
    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    populateData();
  }, []);

  return (
    <div className="home">
      {LinkModalState && <Modal />}

      {ProcessModalState && <ProcessModal modalMSG={modalMSG} />}

      <div className="home_header">
        <h1 onClick={logout}>LinkVault</h1>
        <div className="menus">
          <div
            className="switcher_contain"
            onClick={() => {
              setIsList((prev) => !prev);
            }}
          >
            {isList ? (
              <BsViewList className="view_switcher" />
            ) : (
              <BsGridFill className="view_switcher" />
            )}
          </div>
          <button
            className="addLink_btn"
            onClick={() => {
              setLinkModalState(true);
            }}
          >
            <BsPlusLg />
            Add Link
          </button>
        </div>
      </div>
      <div className="home_content" id="custom-scroll">
        {links && links.length > 0 && (
          <div className="card_contain">
            {links.map((each) => {
              // return
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
