import axios from "axios";

const authInterceptor = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: { "Content-Type": "application/json" },
});

authInterceptor.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

authInterceptor.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) window.location.href = "/login";
        return Promise.reject(error);
    }
);

export default authInterceptor;
