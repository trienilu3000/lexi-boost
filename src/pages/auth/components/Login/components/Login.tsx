import { useState } from "react";
import { login } from "../api/login";

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");



    interface ChangeEvent {
        target: {
            name: string;
            value: string;
        };
    }


    const handleChange = (e: ChangeEvent) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const data = await login(formData.email, formData.password);
            console.log("Đăng nhập thành công:", data);
        } catch (error) {
            if (error instanceof Error) {
                setError("Login Failed!");
            } else {
                setError("An unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="space-y-4 h-full" onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="relative flex flex-col bg-black/8 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                <label className="absolute top-1 left-2.5 text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-4 py-1.5 px-2.5 rounded-md  focus:outline-none"
                />
            </div>

            <div className="relative flex flex-col bg-black/8 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                <label className="absolute top-1 left-2.5 text-sm font-medium text-gray-700" htmlFor="email">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder=""
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full mt-4 py-1.5 px-2.5 rounded-md  focus:outline-none"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-black hover:bg-blue-500 hover:text-white  text-white mt-2 py-3 rounded-xl font-semibold transition"
                disabled={loading}
            >
                {loading ? "Đang xử lý..." : "Log in"}
            </button>
        </form>
    );
};

export default LoginForm;
