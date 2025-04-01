import authInterceptor from "../../../../../services/auth/AuthInterceptor";
import { useAuthStore } from "../../../../../store/authStore";

export const login = async (email: string, password: string) => {
  try {
    const response = await authInterceptor.post(
      "/auth/login",
      { email, password },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi đăng nhập:", error);
    useAuthStore.getState().setAuthenticated(false);
    throw error;
  }
};
