import { useState } from "react";
import { registerUser } from "../api/signup";
import { useForm, useWatch } from "react-hook-form";
import { SignUpCredentials } from "../../../../../types/interfaces/Auth";
import { AxiosError } from "axios";

const SignupForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<SignUpCredentials>();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const passwordValue = useWatch({ name: "password", control });
    console.log("passwordValue ==> ", passwordValue);

    const onSubmit = async (data: SignUpCredentials) => {
        setLoading(true);
        try {
            const response = await registerUser(data.fullName, data.email, data.password);
            if (response) {
                window.location.href = '/login'
            }
            console.log("Đăng ký thành công:", response);
        } catch (error) {
            console.log("error ==> ", error);
            if (error instanceof AxiosError) {
                setError(error.response ? error.response.data.error.message : "An unknown error occurred")
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="relative flex flex-col  rounded-md ">
                <label className="absolute top-1 left-2.5 text-sm font-medium text-gray-700" htmlFor="email">Fullname</label>
                <input
                    type="text"
                    {...register("fullName", {
                        required: "Name is required",
                        minLength: { value: 6, message: "Name must be at least 6 characters" },
                    })}
                    className="w-full pb-1.5 pt-5 px-2.5 rounded-md bg-black/8  focus:outline-none focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden"
                />
                {errors.fullName && <p className="mt-2  bg-white text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>
            <div className="relative flex flex-col rounded-md ">
                <label className="absolute top-1 left-2.5 text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" },
                    })}
                    className="w-full pb-1.5 pt-5 px-2.5 rounded-md  focus:outline-none bg-black/8  focus-within:ring-2 focus-within:ring-blue-500"
                />
                {errors.email && <p className="mt-2  bg-white text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="relative flex flex-col rounded-md ">
                <label className="absolute top-1 left-2.5 text-sm font-medium text-gray-700" htmlFor="email">Password</label>
                <input
                    type="text"
                    {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be at least 6 characters" },
                        validate: (value) =>
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) ||
                            "Password must be at least 8 characters, include uppercase, lowercase, number, and special character",

                    })}
                    className="w-full pb-1.5 pt-5 px-2.5 rounded-md  focus:outline-none bg-black/8  focus-within:ring-2 focus-within:ring-blue-500"
                />
                {errors.password && <p className="mt-2  bg-white text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <div className="relative flex flex-col rounded-md">
                <label className="absolute top-1 left-2.5 text-sm font-medium text-gray-700" htmlFor="email">Confirm Password</label>
                <input
                    type="text"
                    {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: (value) => value === passwordValue || "Passwords do not match",
                    })}
                    className="w-full pb-1.5 pt-5 px-2.5 rounded-md  focus:outline-none bg-black/8  focus-within:ring-2 focus-within:ring-blue-500"
                />
                {errors.confirmPassword && <p className="mt-2  bg-white text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>



            <button
                type="submit"
                className="w-full bg-black hover:bg-blue-500 hover:text-white  text-white mt-2 py-3 rounded-xl font-semibold transition"
                disabled={loading}
            >
                {loading ? "Đang xử lý..." : "Đăng Ký"}
            </button>
        </form>
    );
};

export default SignupForm;
