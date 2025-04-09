import React, { useEffect } from "react";
import { useTabStore } from "../../../store/tabStore";

export interface TabItem {
  closeIcon?: React.ReactNode;
  disabled?: boolean;
  key?: string;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  closeable?: boolean;
}
export interface TabsProps {
  defaultActiveKey?: string;
  tabPosition?: "top" | "bottom" | "left" | "right";
  style?: React.CSSProperties;
  className?: string;
  items?: TabItem[];
  children?: React.ReactNode;
}
const LXTabs: React.FC<TabsProps> = ({
  defaultActiveKey = "1",
  tabPosition = "top",
  style = {},
  className = "",
  items = [],
}) => {
  const { activeTab, setActiveTab } = useTabStore();

  useEffect(() => {
    setActiveTab([defaultActiveKey || ""]);
  }, []);
  console.log("activeTab ==> ", items[0].key);
  return (
    <section className="w-full bg-white  px-4 pb-12.5">
      <div className="box-border m-0 p-0 text-[14px] leading-[1.57] flex flex-col list-none">
        <div
          className={`relative flex flex-none items-center mb-4 before:content-[' '] before:absolute before:right-0 before:left-0 before:bottom-0 before:border-b before:border-b-[#f0f0f0] ${className}`}
          style={style}
        >
          <div className="relative flex flex-auto self-stretch overflow-hidden white-space-nowrap transform-[translate(0)] before:content-[' '] before:z-1 before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none">
            <div className="transform-[translate(0px,0px) translateZ(0)] relative flex transition-opacity duration-300 box-border">
              {items.map((item, index) => (
                <div
                  key={item.key || index}
                  className={`relative inline-flex items-center pt-3 pb-5 px-0 mr-2 text-[14px] outline-none cursor-pointer leading-[1.34] `}
                  onClick={() => {
                    if (item.disabled) return;
                    setActiveTab([item.key || ""]);
                  }}
                >
                  <div
                    className={`p-2 text-[12px] font-semibold text-[#181C1F] hover:bg-[#C9D7DE] rounded-[8px] ${
                      activeTab?.includes(item.key || "")
                        ? "border-0 bg-[#C9D7DE]  "
                        : "border border-[#DBE4E9] rounded-[8px] "
                    }`}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    <div className="text-shadow-[0_0_0.25px_#1677ff]">
                      {item.label}
                    </div>
                    {item.closeable && (
                      <span className="ml-2">{item.closeIcon}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          {activeTab &&
            items.find((item) => item.key === activeTab[0])?.children}
        </div>
      </div>
    </section>
  );
};

export default LXTabs;
