import Axios from "axios";

const API = Axios.create({
    baseURL:import.meta.env.VITE_API
})

export default API