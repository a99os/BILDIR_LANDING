import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        common:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
});

export default apiClient;

