import authInterceptor from "../../../api/AuthInterceptor";
export const login = async (email: string, password: string) => {
    try {
        const response = await authInterceptor.post("/auth/login",
            { email, password },
            { withCredentials: true }
        );
        sessionStorage.setItem("accessToken", response.data.accessToken);
        return await response;
    } catch (error) {
        console.error("Lỗi đăng nhập:", error);
        throw error;
    }
};

