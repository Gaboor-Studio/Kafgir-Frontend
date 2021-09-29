import axios from "axios";

export const testInstance = axios.create({
    baseURL: "http://localhost:8000/api/"
})

export default axios.create({
    baseURL: "http://84.241.22.193:8000/api/"
})