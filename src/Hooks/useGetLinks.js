import { useState } from "react";
import API from "../Axios/axios";
import useAuthContext from "./ContextHooks/useAuthContext";

const useGetLinks = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {user} = useAuthContext();
  const getLinks = async () => {
    setLoading(true);
    console.log("fetching data");
    const { data } = await API.get(`/links/${user._id}`);
    setLoading(false);
    setError(null);
    return data;
  };
  return { getLinks, error, loading };
};

export default useGetLinks;
