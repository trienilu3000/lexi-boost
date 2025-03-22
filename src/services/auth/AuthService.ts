import authInterceptor from "./AuthInterceptor";



export const refreshAccessToken = async () => {
    try {
        const response = await authInterceptor.post("/auth/refresh", {}, { withCredentials: true });
        sessionStorage.setItem("accessToken", response.data.accessToken);
        return response.data.accessToken;
    } catch (error) {
        console.log("error ==> ", error);
        return null;
    }
};

