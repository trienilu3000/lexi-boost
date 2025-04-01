import React, { useState } from "react";
import LXModal from "../../ui/Modal/Modal";
import AuthPage from "../../../pages/auth/AuthPage";
import { useAuthStore } from "../../../store/authStore";
import StreakTracker from "../../../pages/StreakTracker/components/StreakTracker";
import LXDropdown from "../../ui/Dropdown/Dropdown";
import AuthAPI from "../../../services/auth/authApi";

const Header: React.FC = () => {
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [isModalSigup, setIsModalSignup] = useState(false);
  const [isModalStreak, setIsModalStreak] = useState(false);
  const { resetAuth, setLoggingOut, isAuthenticated } = useAuthStore();
  const handleLogout = async () => {
    console.log("Logging out...");
    try {
      const response = await AuthAPI.logout();
      if (response.success) {
        resetAuth();
        console.log("Logout successful!");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoggingOut(false);
    }
  };
  const items = [
    {
      key: "1",
      label: (
        <div className="flex items-center space-x-2 py-1 w-[256px]">
          <span className="flex w-[32px] h-[32px] mr-2 rounded-full overflow-auto">
            <img
              src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png"
              alt="User Avatar for u/ProfessionalCorgi152"
              className="h-full w-full object-cover "
            />
          </span>
          <span>
            <div className="text-[#21272A]">View Profile</div>
            <div className="text-xs text-[#576F76] leading-[15px]">
              u/trient3nf
            </div>
          </span>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex items-center space-x-2 py-1">
          <span className="flex w-[32px] h-[32px] mr-2 rounded-full overflow-auto items-center justify-center">
            <svg
              fill="currentColor"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
            >
              <path d="m19.683 5.252-3.87-3.92a1.128 1.128 0 0 0-.8-.332h-1.55a1.093 1.093 0 0 0-1.1.91 1.9 1.9 0 0 1-3.744 0A1.094 1.094 0 0 0 7.533 1h-1.55c-.3 0-.588.12-.8.332L1.317 5.253a1.1 1.1 0 0 0 .014 1.557l1.87 1.829a1.121 1.121 0 0 0 1.48.076l.32-.24v1.936c.344-.31.786-.49 1.25-.511V5.977L3.993 7.668l-1.68-1.646L6.036 2.25H7.42a3.156 3.156 0 0 0 6.16 0h1.383l3.723 3.772-1.7 1.668-2.236-1.749v8.138c.501.337.927.774 1.25 1.284V8.509l.338.264a1.117 1.117 0 0 0 1.436-.109l1.894-1.853a1.101 1.101 0 0 0 .015-1.559ZM13.691 20H1.31A1.325 1.325 0 0 1 0 18.663v-4.916a1.03 1.03 0 0 1 .5-.884.988.988 0 0 1 .98-.014 3 3 0 0 0 3.3-.266c.334-.342.649-.702.944-1.078a.624.624 0 0 1 .775-.163l6.75 3.5A2.945 2.945 0 0 1 15 17.584v1.079A1.325 1.325 0 0 1 13.691 20Zm-12.44-5.873v4.536c0 .054.033.087.058.087h12.382c.025 0 .06-.033.06-.087v-1.079a1.72 1.72 0 0 0-1.035-1.609l-6.349-3.29a9.24 9.24 0 0 1-.76.831 4.235 4.235 0 0 1-4.357.611Zm4.022 4.042-.9-.862 3.138-3.3.9.862-3.138 3.3Zm3.04 0-.913-.857 2.09-2.219.91.857-2.088 2.219Z"></path>
            </svg>
          </span>
          <span>
            <span>Edit Avatar</span>
          </span>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex items-center space-x-2 py-1">
          <span className="flex w-[32px] h-[32px] mr-2 rounded-full overflow-auto items-center justify-center">
            <svg
              fill="currentColor"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
            >
              <path d="M15.757 10.211A4.615 4.615 0 0 0 20 5.625 1.627 1.627 0 0 0 18.375 4H16V2.135A1.126 1.126 0 0 0 14.886 1H5.114A1.126 1.126 0 0 0 4 2.135V4H1.625A1.627 1.627 0 0 0 0 5.625a4.615 4.615 0 0 0 4.243 4.586 6.219 6.219 0 0 0 5.132 4.753v2.786H6V19h8v-1.25h-3.375v-2.786a6.22 6.22 0 0 0 5.132-4.753Zm2.618-4.961a.375.375 0 0 1 .375.375 3.374 3.374 0 0 1-2.777 3.314c.016-.194.027-.389.027-.587V5.25h2.375ZM1.25 5.625a.375.375 0 0 1 .375-.375H4v3.1c0 .2.011.393.027.587A3.374 3.374 0 0 1 1.25 5.625Zm4 2.727V2.25h9.5v6.1c0 2.976-2.131 5.4-4.75 5.4s-4.75-2.422-4.75-5.398Z"></path>
            </svg>
          </span>
          <span>
            <div className="text-[#21272A]">Achievements</div>
            <div className="text-xs text-[#576F76] leading-[15px]">
              0 unlocked
            </div>
          </span>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div
          className="flex items-center space-x-2 py-1"
          onClick={handleLogout}
        >
          <span className="flex w-[32px] h-[32px] mr-2 rounded-full overflow-auto items-center justify-center">
            <svg
              fill="currentColor"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
            >
              <path d="M11.991 10.625H1v-1.25h10.991l-1.933-1.933.884-.884 3 3a.624.624 0 0 1 0 .884l-3 3-.884-.884 1.933-1.933ZM15.375 1h-9.75A2.629 2.629 0 0 0 3 3.625v.792h1.25v-.792A1.377 1.377 0 0 1 5.625 2.25h9.75a1.377 1.377 0 0 1 1.375 1.375v12.75a1.377 1.377 0 0 1-1.375 1.375h-9.75a1.377 1.377 0 0 1-1.375-1.375v-.792H3v.792A2.63 2.63 0 0 0 5.625 19h9.75A2.63 2.63 0 0 0 18 16.375V3.625A2.63 2.63 0 0 0 15.375 1Z"></path>
            </svg>
          </span>
          <span>
            <span>Logout</span>
          </span>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "6",
      label: (
        <div className="flex items-center space-x-2 py-2">
          <span className="flex w-[32px] h-[32px] mr-2 rounded-full overflow-auto items-center justify-center">
            <svg
              fill="currentColor"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
            >
              <path d="M10 20c-.401 0-.802-.027-1.2-.079a1.145 1.145 0 0 1-.992-1.137v-1.073a.97.97 0 0 0-.627-.878A.98.98 0 0 0 6.1 17l-.755.753a1.149 1.149 0 0 1-1.521.1 10.16 10.16 0 0 1-1.671-1.671 1.149 1.149 0 0 1 .1-1.523L3 13.906a.97.97 0 0 0 .176-1.069.98.98 0 0 0-.887-.649H1.216A1.145 1.145 0 0 1 .079 11.2a9.1 9.1 0 0 1 0-2.393 1.145 1.145 0 0 1 1.137-.992h1.073a.97.97 0 0 0 .878-.627A.979.979 0 0 0 3 6.1l-.754-.754a1.15 1.15 0 0 1-.1-1.522 10.16 10.16 0 0 1 1.673-1.676 1.155 1.155 0 0 1 1.522.1L6.1 3a.966.966 0 0 0 1.068.176.98.98 0 0 0 .649-.887V1.216A1.145 1.145 0 0 1 8.8.079a9.129 9.129 0 0 1 2.393 0 1.144 1.144 0 0 1 .991 1.137v1.073a.972.972 0 0 0 .628.878A.977.977 0 0 0 13.905 3l.754-.754a1.152 1.152 0 0 1 1.522-.1c.62.49 1.18 1.05 1.671 1.671a1.15 1.15 0 0 1-.1 1.522L17 6.1a.967.967 0 0 0-.176 1.068.98.98 0 0 0 .887.649h1.073a1.145 1.145 0 0 1 1.137.991 9.096 9.096 0 0 1 0 2.392 1.145 1.145 0 0 1-1.137.992h-1.073A1.041 1.041 0 0 0 17 13.905l.753.755a1.149 1.149 0 0 1 .1 1.521c-.49.62-1.05 1.18-1.671 1.671a1.149 1.149 0 0 1-1.522-.1L13.906 17a.97.97 0 0 0-1.069-.176.981.981 0 0 0-.65.887v1.073a1.144 1.144 0 0 1-.99 1.137A9.431 9.431 0 0 1 10 20Zm-.938-1.307a7.638 7.638 0 0 0 1.875 0v-.982a2.292 2.292 0 0 1 3.853-1.6l.693.694a8.796 8.796 0 0 0 1.326-1.326l-.694-.694a2.29 2.29 0 0 1 1.6-3.851h.982a7.746 7.746 0 0 0 0-1.876h-.982a2.213 2.213 0 0 1-2.034-1.4 2.223 2.223 0 0 1 .438-2.451l.694-.693a8.76 8.76 0 0 0-1.327-1.326l-.692.694a2.22 2.22 0 0 1-2.434.445 2.221 2.221 0 0 1-1.419-2.041v-.979a7.638 7.638 0 0 0-1.875 0v.982a2.213 2.213 0 0 1-1.4 2.034 2.23 2.23 0 0 1-2.456-.438l-.693-.694a8.757 8.757 0 0 0-1.326 1.327l.694.692a2.216 2.216 0 0 1 .445 2.434 2.22 2.22 0 0 1-2.041 1.418h-.982a7.746 7.746 0 0 0 0 1.876h.982a2.213 2.213 0 0 1 2.034 1.4 2.223 2.223 0 0 1-.438 2.451l-.694.693c.394.488.838.933 1.326 1.326l.694-.694a2.218 2.218 0 0 1 2.433-.445 2.22 2.22 0 0 1 1.418 2.041v.983ZM10 13.229a3.23 3.23 0 1 1 0-6.458 3.23 3.23 0 0 1 0 6.458Zm0-5.208a1.979 1.979 0 1 0 0 3.958 1.979 1.979 0 0 0 0-3.958Z"></path>
            </svg>
          </span>
          <span>
            <span>Settings</span>
          </span>
        </div>
      ),
      disabled: true,
    },
  ];

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
          <LXDropdown menu={items} trigger="click" placement="bottomRight">
            <button className="text-black text-xs w-[24px] h-[24px] rounded-full flex justify-center items-center overflow-hidden hover:outline-4 hover:outline-[#DBE4E9]">
              <span className="">
                <img
                  src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png"
                  alt="User Avatar"
                  className="h-full w-full object-cover"
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
