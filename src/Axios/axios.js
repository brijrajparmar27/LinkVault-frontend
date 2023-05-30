import Axios from "axios";

const API = Axios.create({
    baseURL:"http://localhost:3000/api/"
})

export default API