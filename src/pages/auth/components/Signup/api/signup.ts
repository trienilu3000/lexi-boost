import authInterceptor from "../../../../../services/auth/AuthInterceptor";

export const registerUser = async (
  fullName: string,
  email: string,
  password: string
) => {
  try {
    const response = await authInterceptor.post(
      "/auth/register",
      { fullName, email, password },
      { withCredentials: true }
    );
    return await response;
  } catch (error) {
    console.error("Lỗi đăng ký:", error);
    throw error;
  }
};
