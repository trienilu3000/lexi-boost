import { useState } from "react";

const StreakTracker = () => {
  const [streak, setStreak] = useState(0);
  const [completed, setCompleted] = useState({
    vocabulary: false,
    listening: false,
    reading: false,
  });

  const completeTask = (task: "vocabulary" | "listening" | "reading") => {
    setCompleted((prev) => {
      const updated = { ...prev, [task]: true };
      if (updated.vocabulary && updated.listening && updated.reading) {
        setStreak(streak + 1);
        return { vocabulary: false, listening: false, reading: false };
      }
      return updated;
    });
  };

  return (
    <div className="flex gap-2 items-center justify-center">
      <section className="relative bg-stone-50">
        <div className="bg-sky-400 w-full sm:w-40 h-40 rounded-full absolute top-1 opacity-20 max-sm:right-0 sm:left-56 z-0"></div>
        <div className="bg-emerald-500 w-full sm:w-40 h-24 absolute top-0 -left-0 opacity-20 z-0"></div>
        <div className="bg-purple-600 w-full sm:w-40 h-24 absolute top-40 -left-0 opacity-20 z-0"></div>
        <div className="w-full relative z-10 backdrop-blur-3xl">
          <div className="w-full max-w-7xl mx-auto px-2 lg:px-8">
            <div className="grid grid-cols-12 gap-8 max-w-4xl mx-auto xl:max-w-full">
              <div className="col-span-12 xl:col-span-7 px-2.5 py-5 sm:p-8 bg-gradient-to-b from-white/25 to-white xl:bg-white rounded-2xl max-xl:row-start-1">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <h5 className="text-xl leading-8 font-semibold text-gray-900">
                      January 2024
                    </h5>
                    <div className="flex items-center">
                      <button className="text-indigo-600 p-1 rounded transition-all duration-300 hover:text-white hover:bg-indigo-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
                            stroke="currentcolor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <button className="text-indigo-600 p-1 rounded transition-all duration-300 hover:text-white hover:bg-indigo-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M6.00236 3.99707L10.0025 7.99723L6 11.9998"
                            stroke="currentcolor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center rounded-md p-1 bg-indigo-50 gap-px">
                    <button className="py-2.5 px-5 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-medium transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                      Day
                    </button>
                    <button className="py-2.5 px-5 rounded-lg bg-indigo-600 text-white text-sm font-medium transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                      Week
                    </button>
                    <button className="py-2.5 px-5 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-medium transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                      Month
                    </button>
                  </div>
                </div>
                <div className="border border-indigo-200 rounded-xl">
                  <div className="grid grid-cols-7 rounded-t-3xl border-b border-indigo-200">
                    <div className="py-3.5 border-r rounded-tl-xl border-indigo-200 bg-indigo-50 flex items-center justify-center text-sm font-medium text-indigo-600">
                      Sun
                    </div>
                    <div className="py-3.5 border-r border-indigo-200 bg-indigo-50 flex items-center justify-center text-sm font-medium text-indigo-600">
                      Mon
                    </div>
                    <div className="py-3.5 border-r border-indigo-200 bg-indigo-50 flex items-center justify-center text-sm font-medium text-indigo-600">
                      Tue
                    </div>
                    <div className="py-3.5 border-r border-indigo-200 bg-indigo-50 flex items-center justify-center text-sm font-medium text-indigo-600">
                      Wed
                    </div>
                    <div className="py-3.5 border-r border-indigo-200 bg-indigo-50 flex items-center justify-center text-sm font-medium text-indigo-600">
                      Thu
                    </div>
                    <div className="py-3.5 border-r border-indigo-200 bg-indigo-50 flex items-center justify-center text-sm font-medium text-indigo-600">
                      Fri
                    </div>
                    <div className="py-3.5 rounded-tr-xl bg-indigo-50 flex items-center justify-center text-sm font-medium text-indigo-600">
                      Sat
                    </div>
                  </div>
                  <div className="grid grid-cols-7 rounded-b-xl">
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50">
                      <span className="text-xs font-semibold text-gray-400">
                        27
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-400">
                        28
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-400">
                        29
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-400">
                        30
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-400">
                        31
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        1
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        2
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 relative bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        3
                      </span>
                      <div className="absolute top-9 bottom-1 left-3.5 p-1.5 xl:px-2.5 h-max rounded bg-purple-50 ">
                        <p className="hidden xl:block text-xs font-medium text-purple-600 mb-px">
                          Meeting
                        </p>
                        <span className="hidden xl:block text-xs font-normal text-purple-600 whitespace-nowrap">
                          10:00 - 11:00
                        </span>
                        <p className="xl:hidden w-2 h-2 rounded-full bg-purple-600"></p>
                      </div>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        4
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        5
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        6
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white relative border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        7
                      </span>
                      <div className="absolute top-9 bottom-1 left-3.5 p-1.5 xl:px-2.5 h-max rounded bg-emerald-50 ">
                        <p className="hidden xl:block text-xs font-medium text-emerald-600 mb-px whitespace-nowrap">
                          Developer Meetup
                        </p>
                        <span className="hidden xl:block text-xs font-normal text-emerald-600 whitespace-nowrap">
                          10:00 - 11:00
                        </span>
                        <p className="xl:hidden w-2 h-2 rounded-full bg-emerald-600"></p>
                      </div>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        8
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-indigo-600 sm:text-white sm:w-6 sm:h-6 rounded-full sm:flex items-center justify-center sm:bg-indigo-600">
                        9
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        10
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        11
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        12
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        13
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        14
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        15
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        16
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        17
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        18
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 relative bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        19
                      </span>
                      <div className="absolute top-9 bottom-1 left-3.5 p-1.5 xl:px-2.5 h-max rounded bg-sky-50 ">
                        <p className="hidden xl:block text-xs font-medium text-sky-600 mb-px whitespace-nowrap">
                          Developer Meetup
                        </p>
                        <span className="hidden xl:block text-xs font-normal text-sky-600 whitespace-nowrap">
                          10:00 - 11:00
                        </span>
                        <p className="xl:hidden w-2 h-2 rounded-full bg-sky-600"></p>
                      </div>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        20
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        21
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        22
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        23
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        24
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        25
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        26
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        27
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        28
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        29
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        30
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-indigo-200 rounded-bl-xl transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-900">
                        31
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-400">
                        1
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-400">
                        2
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-400">
                        3
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 relative bg-gray-50 border-r border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-400">
                        4
                      </span>
                      <div className="absolute top-9 bottom-1 left-3.5 p-1.5 xl:px-2.5 h-max rounded bg-purple-50 ">
                        <p className="hidden xl:block text-xs font-medium text-purple-600 mb-px whitespace-nowrap">
                          Friends Meet
                        </p>
                        <span className="hidden xl:block text-xs font-normal text-purple-600 whitespace-nowrap">
                          09:00 - 13:42
                        </span>
                        <p className="xl:hidden w-2 h-2 rounded-full bg-purple-600"></p>
                      </div>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-400">
                        5
                      </span>
                    </div>
                    <div className="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-indigo-200 rounded-br-xl transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span className="text-xs font-semibold text-gray-400">
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StreakTracker;
