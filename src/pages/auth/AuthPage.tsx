import LoginForm from "./components/Login/components/Login";
import SignupForm from "./components/Signup/components/Signup";


type AuthPageProps = {
    type: "login" | "signup";
};

function AuthPage({ type }: AuthPageProps) {
    return (
        <div className="flex h-full items-center justify-center bg-white" >
            <div className={`w-full max-w-md bg-white px-8 ${type === "login" ? "py-12" : "pb-8"} `}>
                {(type === "signup") && <h2 className="px-5 py-3 text-2xl font-semibold text-center">Join Lexi Boost for free learning English, and more</h2>}
                <button className="flex items-center justify-center gap-3 w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="#4285f4" fillOpacity="1" fillRule="evenodd" stroke="none" d="M17.64 9.2q-.002-.956-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"></path><path fill="#34a853" fillOpacity="1" fillRule="evenodd" stroke="none" d="M9.003 18c2.43 0 4.467-.806 5.956-2.18l-2.909-2.26c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18"></path><path fill="#fbbc05" fillOpacity="1" fillRule="evenodd" stroke="none" d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042z"></path><path fill="#ea4335" fillOpacity="1" fillRule="evenodd" stroke="none" d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71"></path></svg>
                    <span className="text-lg font-semibold">Continue with Google</span>
                </button>
                <p className="text-center px-5 py-3">or</p>
                {type === "login" ? <LoginForm /> : <SignupForm />}
                {type === "login" &&
                    <div className="text-center mt-5" >
                        <div className="flex flex-col justify-center items-center gap-4">
                            <a className="text-blue-600 underline text-xs">
                                Use single sign-on
                            </a>
                            <a className="text-blue-600 underline text-xs">
                                Reset password
                            </a>
                            <div className="text-xs">
                                <span>No account?</span> <a className="text-blue-600 underline">Create one</a>
                            </div>
                        </div>
                    </div>
                }
            </div >
        </div >
    );
}

export default AuthPage;