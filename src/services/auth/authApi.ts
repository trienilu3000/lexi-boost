import { AuthInfo } from "../../store/authStore";
import { login } from "../../pages/auth/components/Login/api/login";
import { registerUser } from "../../pages/auth/components/Signup/api/signup";

import Cookies from "js-cookie";
import authInterceptor from "./AuthInterceptor";

const logout = async () => {
  try {
    const response = await authInterceptor.post(
      "/auth/logout",
      {},
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Logout Failed!:", error);
  } finally {
    sessionStorage.removeItem("accessToken");
    Cookies.remove("refreshToken");
    // window.location.href = "/login";
  }
};

const getUser = async (): Promise<AuthInfo> => {
  try {
    const response = await authInterceptor.post(
      "/auth/my-info",
      {},
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    console.error("Failed to get user info:", error);
    return undefined as unknown as AuthInfo;
  }
};

const AuthAPI = { login, registerUser, logout, getUser };

export default AuthAPI;
