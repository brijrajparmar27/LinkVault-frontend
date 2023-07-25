import Axios from "axios";

const API_PATH =
  import.meta.env.VITE_CONFIG_TYPE == "LOCAL"
    ? import.meta.env.VITE_API_LOCAL
    : import.meta.env.VITE_API_REMOTE;

const API = Axios.create({
  baseURL: API_PATH,
});

export default API;
