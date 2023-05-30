import { useContext } from "react";
import { LinkContext } from "../../contexts/LinkContext";

export const useLinkContext = () => {
  const { links, setLinks } = useContext(LinkContext);
  return { links, setLinks };
};
