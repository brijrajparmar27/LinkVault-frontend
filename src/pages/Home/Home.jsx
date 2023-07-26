import React, { useState, useRef } from "react";
import "./Home.css";
import Modal from "../../components/LinkModal/LinkModal";
import { useLinkContext } from "../../Hooks/ContextHooks/useLinkContext";

import io from "socket.io-client";

import { useEffect } from "react";
import useModalContext from "../../Hooks/ContextHooks/useModalContext";
import ListCard from "../../components/ListCard/ListCard";
import GridCard from "../../components/GridCard/GridCard";
import Lottie from "lottie-react";
import Empty from "../../assets/Lottie/empty.json";
import useGetLinks from "../../Hooks/useGetLinks";
import { toast } from "react-toastify";
import Header from "../../components/Header/Header";

export default function Home() {
  const { links, setLinks } = useLinkContext();
  const [isList, setIsList] = useState(true);
  const { getLinks, error, loading } = useGetLinks();
  const { LinkModalState, setLinkModalState } = useModalContext();
  const toastId = useRef(null);

  const SOCKET_PATH =
    import.meta.env.VITE_CONFIG_TYPE == "LOCAL"
      ? import.meta.env.VITE_SOCKETS_LOCAL
      : import.meta.env.VITE_SOCKETS_REMOTE;

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
      if (data.type === "SHOW") {
        notify(data.message);
      } else if (data.type === "MUTATE") {
        mutate(data.message);
      } else if (data.type === "ERROR") {
        err(data.message);
      } else if (data.type === "SUCCESS") {
        success(data.message);
      }
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

  const notify = (msg) => (toastId.current = toast(msg, { autoClose: false, type: "info", icon: true }));
  const mutate = (msg) =>
    toast.update(toastId.current, {
      render: msg,
      type: toast.TYPE.DEFAULT,
      autoClose: false,
    });
  const err = (msg) => {
    toast.update(toastId.current, {
      render: msg,
      type: toast.TYPE.ERROR,
      autoClose: true,
    });
  };
  const success = (msg) => {
    toast.update(toastId.current, {
      render: msg,
      type: toast.TYPE.SUCCESS,
      autoClose: true,
    });
  };

  return (
    <div className="home">
      {LinkModalState && <Modal />}

      <Header setIsList={setIsList} isList={isList} setLinkModalState={setLinkModalState} />

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
