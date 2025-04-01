import React, { useState } from "react";
import LXModal from "../../ui/Modal/Modal";
import AuthPage from "../../../pages/auth/AuthPage";
import { useAuthStore } from "../../../store/authStore";
import StreakTracker from "../../../pages/StreakTracker/components/StreakTracker";
import LXDropdown from "../../ui/Dropdown/Dropdown";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];
const Header: React.FC = () => {
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [isModalSigup, setIsModalSignup] = useState(false);
  const [isModalStreak, setIsModalStreak] = useState(false);
  const { isAuthenticated } = useAuthStore();

  const showModalLogin = () => {
    setIsModalLogin(true);
  };

  const showModalSignup = () => {
    setIsModalSignup(true);
  };
  const showModalStreak = () => {
    setIsModalStreak(true);
  };

  const handleCancel = () => {
    setIsModalLogin(false);
    setIsModalSignup(false);
    setIsModalStreak(false);
  };
  return (
    <header className="flex justify-between items-center p-2  bg-white border-b border-b-gray-300">
      <div className="flex items-center mx-2">
        <span className="ml-2  font-bold text-black">Welcome back</span>
      </div>
      {!isAuthenticated ? (
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

          <LXModal open={isModalStreak} onCancel={handleCancel}>
            <div className="mx-5">
              <StreakTracker></StreakTracker>
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
      ) : (
        <div className="flex items-center space-x-2 mx-2">
          <button
            className=" flex justify-center items-center text-black text-xs p-2"
            onClick={showModalStreak}
          >
            <span className="flex w-[24px] h-[24px] mr-1 text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                />
              </svg>
            </span>
            <span className="font-extrabold text-gray-200">0</span>
          </button>
          <button className="text-black text-xs p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </button>
          <LXDropdown items={items} trigger="hover" placement="bottomRight">
            <button className="text-black text-xs p-2">
              <span className="flex w-[24px] h-[24px]">
                <img
                  src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png"
                  alt="User Avatar"
                  className="h-full w-full rounded-full"
                ></img>
              </span>
            </button>
          </LXDropdown>
        </div>
      )}
    </header>
  );
};

export default Header;
