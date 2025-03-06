import axios from "axios";
import { refreshAccessToken } from "./AuthService";
import { ErrorCode } from "../../../types/enums/ErrorCode";




const authInterceptor = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: { "Content-Type": "application/json" },
});

authInterceptor.interceptors.request.use(
    (config) => {
        console.log("config ==> ", config);
        const token = sessionStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

authInterceptor.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response?.status === 401 && error.response?.data.errorCode === ErrorCode.TOKEN_EXPIRED) {
            const newAccessToken = await refreshAccessToken();
            if (newAccessToken) {
                error.config.headers.Authorization = `Bearer ${newAccessToken}`;
                return axios(error.config);
            }
        }
        return Promise.reject(error);
    }
);

export default authInterceptor;
