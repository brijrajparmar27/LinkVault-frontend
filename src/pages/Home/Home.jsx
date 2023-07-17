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
export default function Home() {
  const { links, setLinks } = useLinkContext();
  const [modalMSG, setModalMSG] = useState("Initializing...");
  const [isList, setIsList] = useState(true);
  const { getLinks, error, loading } = useGetLinks();
  const {
    LinkModalState,
    setLinkModalState,
    ProcessModalState,
    setProcessModalState,
  } = useModalContext();

  useEffect(() => {
    const socket = io("http://localhost:3000/");
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

  useEffect(async () => {
    const data = await getLinks();
    setLinks(data);
    data.map((each) => {
      console.log(each.url);
    });
    console.log("data set");
  }, []);

  useEffect(() => {
    console.log(links ? true : false);
  }, [links]);

  return (
    <div className="home">
      {LinkModalState && <Modal />}

      {ProcessModalState && <ProcessModal modalMSG={modalMSG} />}

      <div className="home_header">
        <h1
          onClick={() => {
            refetch();
          }}
        >
          LinkVault
        </h1>
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
