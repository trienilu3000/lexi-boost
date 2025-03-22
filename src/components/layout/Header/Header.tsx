import React, { useState } from "react";
import LXModal from "../../ui/Modal/Modal";
import AuthPage from "../../../pages/auth/AuthPage";
import { useAuthStore } from "../../../store/authStore";

const Header: React.FC = () => {
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [isModalSigup, setIsModalSignup] = useState(false);
  const { isAuthenticated } = useAuthStore();
  console.log("isAuthenticated ==> ", isAuthenticated);
  const showModalLogin = () => {
    setIsModalLogin(true);
  };

  const showModalSignup = () => {
    setIsModalSignup(true);
  };

  const handleCancel = () => {
    setIsModalLogin(false);
    setIsModalSignup(false);
  };
  return (
    <header className="flex justify-between items-center p-2  bg-white border-b border-b-gray-300">
      <div className="flex items-center mx-2">
        <span className="ml-2  font-bold text-black">Welcome back</span>
      </div>
      {!isAuthenticated && (
        <div className="flex items-center space-x-2 mx-2">
          <button
            className=" text-black text-xs px-3 py-2 "
            onClick={showModalLogin}
          >
            Log in
          </button>
          <LXModal open={isModalLogin} onCancel={handleCancel}>
            <div className="mx-5">
              <AuthPage type="login"></AuthPage>
            </div>
          </LXModal>

          <button
            className="text-black text-xs px-3 py-1.5 border rounded-md  "
            onClick={showModalSignup}
          >
            Sign up
          </button>
          <LXModal open={isModalSigup} onCancel={handleCancel}>
            <div className="mx-5">
              <AuthPage type="signup"></AuthPage>
            </div>
          </LXModal>
        </div>
      )}
    </header>
  );
};

export default Header;
