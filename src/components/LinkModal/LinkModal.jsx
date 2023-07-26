import React, { useEffect } from "react";
import "./LinkModal.css";
import { useLinkContext } from "../../Hooks/ContextHooks/useLinkContext";
import useModalContext from "../../Hooks/ContextHooks/useModalContext";
import usePostLinks from "../../Hooks/usePostLinks";

export default function LinkModal() {
  const { LinkModalState, setLinkModalState } = useModalContext();
  const { setLinks } = useLinkContext();
  const { loading, error, saveLinks } = usePostLinks();

  const handleModalClose = () => {
    setLinkModalState(false);
  };

  const preventBubbling = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLinkModalState(false);
    const links = e.target.url.value.trim();
    let arr = links.split("\n").filter((item) => item !== "");
    console.log(arr);
    const data = await saveLinks(arr);
    setLinks((prev) => [...prev, ...data]);
  };

  return (
    <div className="link-modal modal">
      <div className="backdrop" onClick={handleModalClose}>
        <div className="popup" onClick={preventBubbling} id="custom-scroll">
          <h1>Add Links</h1>
          <p>Add multiple links</p>
          <form onSubmit={handleSubmit} className="link_form">
            <textarea type="text" name="url" className="link_area" />
            <input type="submit" value="submit" className="link_form_submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
