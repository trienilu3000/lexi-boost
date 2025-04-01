import { useState } from "react";
import { login } from "../api/login";
import { useAuthStore } from "../../../../../store/authStore";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const setUserInfo = useAuthStore((state) => state.setUserInfo);

  interface ChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await login(formData.email, formData.password);
      console.log("response ==> ", response);
      if (response.success) {
        setUserInfo(response.data.user, response.data.accessToken);
      } else {
        setError("Login Failed!");
      }
    } catch (error) {
      setError("Login Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4 h-full" onSubmit={handleSubmit}>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="relative flex flex-col  rounded-md ">
        <label
          className="absolute top-1 left-2.5 text-sm font-medium text-gray-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full pb-1.5 pt-5 px-2.5 rounded-md  focus:outline-none bg-black/8 focus-within:ring-2 focus-within:ring-blue-500"
        />
      </div>

      <div className="relative flex flex-col rounded-md">
        <label
          className="absolute top-1 left-2.5 text-sm font-medium text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder=""
          value={formData.password}
          onChange={handleChange}
          className="w-full pb-1.5 pt-5 px-2.5 rounded-md  focus:outline-none bg-black/8 focus-within:ring-2 focus-within:ring-blue-500"
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
