import { AuthInfo } from "../../../stores/authStore";
import { login } from "../components/Login/api/login"
import { registerUser } from "../components/Signup/api/signup";
import authInterceptor from "./AuthInterceptor";
import Cookies from 'js-cookie';

const logout = async () => {
    try {
        await authInterceptor.post("/auth/logout",
            {},
            { withCredentials: true }
        );
    } catch (error) {
        console.error("Logout Failed!:", error);
    } finally {
        sessionStorage.removeItem("accessToken");
        Cookies.remove("refreshToken");
        window.location.href = "/login";
    }
}

const getUser = async (): Promise<AuthInfo> => {
    try {
        const response = await authInterceptor.post("/auth/my-info",
            {},
            { withCredentials: true }
        );

        return response.data;
    } catch (error) {
        console.error("Failed to get user info:", error);
        return undefined as unknown as AuthInfo;
    }
}


const AuthAPI = { login, registerUser, logout, getUser };


export default AuthAPI;
