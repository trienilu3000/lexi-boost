import { ChangeEvent, useState } from "react";
import { signup } from "../api/signup";

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            if (formData.password !== formData.confirmPassword) {
                throw new Error("Mật khẩu xác nhận không khớp");
            }
            const data = await signup(formData.username, formData.email, formData.password);
            console.log("Đăng ký thành công:", data);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <input
                type="text"
                name="username"
                placeholder="Tên người dùng"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="password"
                name="password"
                placeholder="Mật khẩu"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="password"
                name="confirmPassword"
                placeholder="Xác nhận mật khẩu"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition"
                disabled={loading}
            >
                {loading ? "Đang xử lý..." : "Đăng Ký"}
            </button>
        </form>
    );
};

export default SignupForm;
