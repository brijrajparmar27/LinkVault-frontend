import React, { useEffect } from "react";
import "./LinkModal.css";
import API from "../../Axios/axios";
import { useLinkContext } from "../../Hooks/ContextHooks/useLinkContext";
import useModalContext from "../../Hooks/ContextHooks/useModalContext";
import { useMutation, useQuery } from "react-query";
import useLinks from "../../Hooks/useLinks";


export default function LinkModal() {
  const {
    LinkModalState,
    setLinkModalState,
    ProcessModalState,
    setProcessModalState,
  } = useModalContext();
  const { setLinks } = useLinkContext();
  const {saveLinks} = useLinks();
  // const { isError, data, error,refetch, isFetching } = useQuery("saveLink",saveLinks);
  const saveLinksMutation = useMutation(saveLinks);

  const handleModalClose = () => {
    setLinkModalState(false);
  };

  const preventBubbling = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = async (e) => {
    setLinkModalState(false);
    setProcessModalState(true);
    e.preventDefault();
    const links = e.target.url.value.trim();
    let arr = links.split("\n").filter((item) => item !== "");
    console.log(arr);
    setProcessModalState(true);
    const data = await saveLinksMutation.mutateAsync(arr);
    // console.log(temp);
    // API.post("/links", { data: JSON.stringify(arr) })
    //   .then((res) => {
    //     console.log(res.data);
    //     setLinks((prev) => [...prev, ...res.data]);
    //     setProcessModalState(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setLinks(prev=>[...prev,...data])
    setProcessModalState(false);

  };

  return (
    <div className="link-modal modal">
      <div className="backdrop" onClick={handleModalClose}>
        <div className="popup" onClick={preventBubbling} id="custom-scroll">
          <h1>Add Links</h1>
          <p>Add multiple links</p>
          <form onSubmit={handleSubmit} className="link_form">
            <textarea type="text" name="url" className="link_area"/>
            <input type="submit" value="submit" className="link_form_submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
