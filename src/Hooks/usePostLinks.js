import { useState } from "react";
import API from "../Axios/axios";

const usePostLinks = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const saveLinks = async (newLinks) => {
    setLoading(true);
    const { data } = await API.post("/links", {
      data: JSON.stringify(newLinks),
    });
    setError(false);
    setLoading(false);
    return data;
  };
  return { loading, error, saveLinks };
};

export default usePostLinks;
