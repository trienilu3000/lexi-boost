import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-3xs p-[4px] overflow-hidden select-none ">
      <div className="relative bg-gray-100 h-full">
        <div className="flex items-center mx-2 p-2 cursor-pointer">
          <svg
            className="svg"
            width="20"
            height="20"
            viewBox="0 0 38 57"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 28.5c0-5.247 4.253-9.5 9.5-9.5 5.247 0 9.5 4.253 9.5 9.5 0 5.247-4.253 9.5-9.5 9.5-5.247 0-9.5-4.253-9.5-9.5z"
              fillRule="nonzero"
              fillOpacity="1"
              fill="#1abcfe"
              stroke="none"
            ></path>
            <path
              d="M0 47.5C0 42.253 4.253 38 9.5 38H19v9.5c0 5.247-4.253 9.5-9.5 9.5C4.253 57 0 52.747 0 47.5z"
              fillRule="nonzero"
              fillOpacity="1"
              fill="#0acf83"
              stroke="none"
            ></path>
            <path
              d="M19 0v19h9.5c5.247 0 9.5-4.253 9.5-9.5C38 4.253 33.747 0 28.5 0H19z"
              fillRule="nonzero"
              fillOpacity="1"
              fill="#ff7262"
              stroke="none"
            ></path>
            <path
              d="M0 9.5C0 14.747 4.253 19 9.5 19H19V0H9.5C4.253 0 0 4.253 0 9.5z"
              fillRule="nonzero"
              fillOpacity="1"
              fill="#f24e1e"
              stroke="none"
            ></path>
            <path
              d="M0 28.5C0 33.747 4.253 38 9.5 38H19V19H9.5C4.253 19 0 23.253 0 28.5z"
              fillRule="nonzero"
              fillOpacity="1"
              fill="#a259ff"
              stroke="none"
            ></path>
          </svg>
          <div className="ml-2  font-bold text-black">
            <div className="text-xs p-0">Lexi Boost</div>
            <div className="text-[11px] font-medium p-0">lexiboost.vn</div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] mt-4 px-[5px] text-[13px] font-medium text-black cursor-pointer">
          <div className="flex items-center gap-[10px] bg-gray-200 px-[10px] py-[7px] rounded-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>

            <span>Learn</span>
          </div>
          <div className="flex items-center gap-[10px] px-[10px] py-[7px] rounded-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
            <span>Pronounce</span>
          </div>
          <div>
            <div className="flex items-center gap-[10px]  px-[10px] py-[7px] rounded-[5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>

              <span>Practice</span>
            </div>

            <div className="flex flex-col gap-[5px] ml-[30px] text-[12px] font-medium text-black">
              <div className="flex items-center justify-between px-[10px] py-[5px]">
                <span>Vocabulary</span>
                <span className="border border-gray-400 bg-gray-200 rounded-[5px] px-[4px] text-[10px]">
                  18
                </span>
              </div>
              <div className="flex items-center justify-between px-[10px] py-[5px]">
                <span>Reading</span>
                <span className="border border-gray-400 bg-gray-200 rounded-[5px] px-[4px] text-[10px]">
                  18
                </span>
              </div>
              <div className="flex items-center justify-between px-[10px] py-[5px]">
                <span>Listening</span>
                <span className="border border-gray-400 bg-gray-200 rounded-[5px] px-[4px] text-[10px]">
                  18
                </span>
              </div>
              <div className="flex items-center justify-between px-[10px] py-[5px]">
                <span>Speaking</span>
                <span className="border border-gray-400 bg-gray-200 rounded-[5px] px-[4px] text-[10px]">
                  18
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[10px] bg-gray-200 px-[10px] py-[7px] rounded-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
              />
            </svg>

            <span>Ranking</span>
          </div>
        </div>

        <div className="absolute flex flex-col w-full bottom-0 text-[13px] font-medium text-black">
          <div className="flex items-center gap-2 px-[10px] py-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            <span>Support</span>
          </div>
          <div className="flex items-center gap-2 px-[10px] py-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <span>Setting</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
