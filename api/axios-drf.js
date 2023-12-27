import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://admin.bildir.uz/api/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
});

export default apiClient;

