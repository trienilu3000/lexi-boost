export const signup = async (username: string, email: string, password: string) => {
    try {
        const response = await fetch("https://your-api.com/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (!response.ok) {
            throw new Error("Đăng ký thất bại");
        }

        return await response.json();
    } catch (error) {
        console.error("Lỗi đăng ký:", error);
        throw error;
    }
};
