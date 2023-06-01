import React from "react";
import "./LinkModal.css";
import API from "../../Axios/axios";
import { useLinkContext } from "../../Hooks/ContextHooks/useLinkContext";
import useModalContext from "../../Hooks/ContextHooks/useModalContext";

export default function LinkModal() {
  const {
    LinkModalState,
    setLinkModalState,
    ProcessModalState,
    setProcessModalState,
  } = useModalContext();
  const { setLinks } = useLinkContext();

  const handleModalClose = () => {
    setLinkModalState(false);
  };

  const preventBubbling = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = (e) => {
    setLinkModalState(false);
    setProcessModalState(true);
    e.preventDefault();
    const links = e.target.url.value.trim();
    let arr = links.split("\n").filter((item) => item !== "");
    console.log(arr);
    setProcessModalState(true);
    API.post("/links", { data: JSON.stringify(arr) })
      .then((res) => {
        console.log(res.data);
        setLinks((prev) => [...prev, ...res.data]);
        setProcessModalState(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="link-modal modal">
      <div className="backdrop" onClick={handleModalClose}>
        <div className="popup" onClick={preventBubbling}>
          <h1>Add Links</h1>
          <p>Add multiple links</p>
          <form onSubmit={handleSubmit} className="link_form">
            <textarea type="text" name="url" rows="8" cols="50" />
            <input type="submit" value="submit" className="link_form_submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
