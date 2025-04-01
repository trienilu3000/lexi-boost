import axios from "axios";
import { ErrorCode } from "../../types/enums/ErrorCode";
import { useAuthStore } from "../../store/authStore";

const authInterceptor = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

authInterceptor.interceptors.request.use(
  (config) => {
    console.log("config ==> ", config);
    const token = useAuthStore.getState().accessToken;
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
    if (
      error.response?.status === 401 &&
      error.response?.data.errorCode === ErrorCode.TOKEN_EXPIRED
    ) {
      await useAuthStore.getState().refreshAccessToken();
      return authInterceptor.request(error.config);
    }
    return Promise.reject(error);
  }
);

export default authInterceptor;
