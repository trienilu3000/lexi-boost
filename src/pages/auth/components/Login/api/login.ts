import authInterceptor from "../../../api/authInterceptor";

export const login = async (email: string, password: string) => {
    try {
        const response = await authInterceptor.post("/auth/login", { email, password });
        localStorage.setItem("accessToken", response.data.accessToken);
        console.log("response ==> ", response);
        return await response;
    } catch (error) {
        console.error("Lỗi đăng nhập:", error);
        throw error;
    }
};

