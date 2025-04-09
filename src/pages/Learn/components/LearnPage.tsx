import LXTabs from "../../../components/ui/Tabs/Tabs";

const LearnPage: React.FC = () => {
  const items = Array.from({ length: 3 }).map((_, i) => {
    const id = String(i + 1);
    return {
      label: `All ${id}`,
      key: id,
      children: `Content of Tab Pane ${id}`,
      style: i === 0 ? { height: 200 } : undefined,
    };
  });
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="px-4">
        <h1 className="text-[32px] font-bold py-5 leading-[2.25rem]">
          Learn with Lexi
        </h1>
      </div>
      <div>
        <LXTabs defaultActiveKey="1" items={items}>
          <div className="flex flex-col  h-full w-full py-1 ">
            <h2 className="text-[18px] font-bold mb-4">
              Part 1, Door 1: Introduction to origin
            </h2>
            <div className="">
              <div className="flex flex-wrap gap-[8px] mb-4">
                <div className="border border-[#00000019] rounded-[12px] w-[calc(33.33%-8px)] py-2 px-3">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="block w-[40px] h-[40px]">
                        <img
                          src="https://styles.redditmedia.com/t5_34o9s/styles/communityIcon_mqvlzy3gc5471.png"
                          alt="r/starterpacks icon"
                          className="mb-0 rounded-full overflow-hidden w-full h-full"
                          width="40"
                          loading="lazy"
                        />
                      </span>
                      <div>
                        <h3 className="text-[16px] font-bold">
                          r/starterpacks
                        </h3>
                        <p className="text-[14px] text-[#00000099]">
                          Lesson 1/4
                        </p>
                      </div>
                    </div>
                    <div>
                      <button className="bg-[#0A449B] text-white px-3 py-2 rounded-[16px] text-[12px] font-bold leading-none h-[32px]">
                        Start +100 XP
                      </button>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#5C6C74] m-0 line-clamp-2">
                    Invite guests to drink water.
                  </p>
                </div>
                <div className="border border-[#00000019] rounded-[12px] w-[calc(33.33%-8px)] py-2 px-3">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="block w-[40px] h-[40px]">
                        <img
                          src="https://styles.redditmedia.com/t5_34o9s/styles/communityIcon_mqvlzy3gc5471.png"
                          alt="r/starterpacks icon"
                          className="mb-0 rounded-full overflow-hidden w-full h-full"
                          width="40"
                          loading="lazy"
                        />
                      </span>
                      <div>
                        <h3 className="text-[16px] font-bold">
                          r/starterpacks
                        </h3>
                        <p className="text-[14px] text-[#00000099]">
                          Lesson 1/4
                        </p>
                      </div>
                    </div>
                    <div>
                      <button className="bg-[#0A449B] text-white px-3 py-2 rounded-[16px] text-[12px] font-bold leading-none h-[32px]">
                        Start +100 XP
                      </button>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#5C6C74] m-0 line-clamp-2">
                    Invite guests to drink water.
                  </p>
                </div>
                <div className="border border-[#00000019] rounded-[12px] w-[calc(33.33%-8px)] py-2 px-3">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="block w-[40px] h-[40px]">
                        <img
                          src="https://styles.redditmedia.com/t5_34o9s/styles/communityIcon_mqvlzy3gc5471.png"
                          alt="r/starterpacks icon"
                          className="mb-0 rounded-full overflow-hidden w-full h-full"
                          width="40"
                          loading="lazy"
                        />
                      </span>
                      <div>
                        <h3 className="text-[16px] font-bold">
                          r/starterpacks
                        </h3>
                        <p className="text-[14px] text-[#00000099]">
                          Lesson 1/4
                        </p>
                      </div>
                    </div>
                    <div>
                      <button className="bg-[#0A449B] text-white px-3 py-2 rounded-[16px] text-[12px] font-bold leading-none h-[32px]">
                        Start +100 XP
                      </button>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#5C6C74] m-0 line-clamp-2">
                    Invite guests to drink water.
                  </p>
                </div>
                <div className="border border-[#00000019] rounded-[12px] w-[calc(33.33%-8px)] py-2 px-3">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="block w-[40px] h-[40px]">
                        <img
                          src="https://styles.redditmedia.com/t5_34o9s/styles/communityIcon_mqvlzy3gc5471.png"
                          alt="r/starterpacks icon"
                          className="mb-0 rounded-full overflow-hidden w-full h-full"
                          width="40"
                          loading="lazy"
                        />
                      </span>
                      <div>
                        <h3 className="text-[16px] font-bold">
                          r/starterpacks
                        </h3>
                        <p className="text-[14px] text-[#00000099]">
                          Lesson 1/4
                        </p>
                      </div>
                    </div>
                    <div>
                      <button className="bg-[#0A449B] text-white px-3 py-2 rounded-[16px] text-[12px] font-bold leading-none h-[32px]">
                        Start +100 XP
                      </button>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#5C6C74] m-0 line-clamp-2">
                    Invite guests to drink water.
                  </p>
                </div>
                <div className="border border-[#00000019] rounded-[12px] w-[calc(33.33%-8px)] py-2 px-3">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="block w-[40px] h-[40px]">
                        <img
                          src="https://styles.redditmedia.com/t5_34o9s/styles/communityIcon_mqvlzy3gc5471.png"
                          alt="r/starterpacks icon"
                          className="mb-0 rounded-full overflow-hidden w-full h-full"
                          width="40"
                          loading="lazy"
                        />
                      </span>
                      <div>
                        <h3 className="text-[16px] font-bold">
                          r/starterpacks
                        </h3>
                        <p className="text-[14px] text-[#00000099]">
                          Lesson 1/4
                        </p>
                      </div>
                    </div>
                    <div>
                      <button className="bg-[#0A449B] text-white px-3 py-2 rounded-[16px] text-[12px] font-bold leading-none h-[32px]">
                        Start +100 XP
                      </button>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#5C6C74] m-0 line-clamp-2">
                    Invite guests to drink water.
                  </p>
                </div>
                <div className="border border-[#00000019] rounded-[12px] w-[calc(33.33%-8px)] py-2 px-3">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="block w-[40px] h-[40px]">
                        <img
                          src="https://styles.redditmedia.com/t5_34o9s/styles/communityIcon_mqvlzy3gc5471.png"
                          alt="r/starterpacks icon"
                          className="mb-0 rounded-full overflow-hidden w-full h-full"
                          width="40"
                          loading="lazy"
                        />
                      </span>
                      <div>
                        <h3 className="text-[16px] font-bold">
                          r/starterpacks
                        </h3>
                        <p className="text-[14px] text-[#00000099]">
                          Lesson 1/4
                        </p>
                      </div>
                    </div>
                    <div>
                      <button className="bg-[#0A449B] text-white px-3 py-2 rounded-[16px] text-[12px] font-bold leading-none h-[32px]">
                        Start +100 XP
                      </button>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#5C6C74] m-0 line-clamp-2">
                    Invite guests to drink water.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </LXTabs>
      </div>
    </div>
  );
};

export default LearnPage;
