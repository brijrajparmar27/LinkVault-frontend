import React from "react";
import "./ProcessModal.css";
import useModalContext from "../../Hooks/ContextHooks/useModalContext";
import Lottie from "lottie-react";
import orb from "../../../src/assets/Lottie/orb.json";

export default function ProcessModal({modalMSG}) {
  const {
    LinkModalState,
    setLinkModalState,
    ProcessModalState,
    setProcessModalState,
  } = useModalContext();

  const handleModalClose = () => {
    setProcessModalState(false);
  };

  const preventBubbling = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="process-modal modal">
      <div className="backdrop" onClick={handleModalClose}>
        <div className="popup" onClick={preventBubbling}>
          <Lottie animationData={orb} style={{height:"200px"}}/>
          <h1>{modalMSG}</h1>
        </div>
      </div>
    </div>
  );
}
