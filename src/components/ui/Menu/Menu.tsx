import React, { useEffect, useRef } from "react";
import { useSidebarStore } from "../../../store/menuStore";
// import { motion } from "framer-motion";

export interface MenuItem {
  key?: string;
  label?: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: string;
  extra?: React.ReactNode;
}

export interface MenuProps {
  onClick?: (key: string) => void;
  items: MenuItem[];
  style: React.CSSProperties;
  defaultSelectedKeys?: string[];
  defaultOpenKeys?: string[];
  mode?: "vertical" | "horizontal" | "inline";
  className?: string;
}

const LXMenu: React.FC<MenuProps> = ({
  onClick,
  items,
  style,
  defaultSelectedKeys = [],
  defaultOpenKeys = [],
  mode = "vertical",
  className = "",
}) => {
  const { activeMenu, expanded, setActiveMenu, setExpanded } =
    useSidebarStore();
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (defaultSelectedKeys.length > 0) {
      setActiveMenu([defaultSelectedKeys[0]]);
    }
    if (defaultOpenKeys.length > 0) {
      setExpanded(defaultOpenKeys);
    }
    console.log(expanded);
  }, [defaultOpenKeys]);

  return (
    <div
      style={style}
      className={`lx-menu ${mode} ${className} select-none min-h-full bg-white overflow-auto border-r border-r-gray-300`}
    >
      {items.map((item, index) => (
        <div className="" key={item.key || `${item.label}-${index}`}>
          {item.type === "divider" ? (
            <div className="h-[0.8px] bg-neutral-200 my-4"></div>
          ) : (
            <div className="flex flex-col text-[14px] gap-0.5 cursor-pointer">
              {item.children ? (
                <div className="">
                  <div
                    className={`flex items-center justify-between gap-[10px] px-4 py-2.5 rounded-[5px] hover:bg-[#f3f6f6bf]`}
                    onClick={() => setExpanded([item.key || ""])}
                  >
                    <div className="flex items-center text-[#576F76]">
                      <span>{item.icon}</span>
                      <span className="tracking-widest uppercase">
                        {item.label}
                      </span>
                    </div>

                    <div className="text-[#576F76] flex items-center">
                      <svg
                        fill="currentColor"
                        height="20"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`size-5 ${
                          expanded?.includes(item.key || "")
                            ? ""
                            : "rotate-[180deg]"
                        }`}
                      >
                        <path d="M10 13.02a.755.755 0 0 1-.53-.22L4.912 8.242A.771.771 0 0 1 4.93 7.2a.771.771 0 0 1 1.042-.018L10 11.209l4.028-4.027a.771.771 0 0 1 1.042.018.771.771 0 0 1 .018 1.042L10.53 12.8a.754.754 0 0 1-.53.22Z"></path>
                      </svg>
                    </div>
                  </div>
                  {expanded?.includes(item.key || "") && (
                    <div>
                      {item.children.map((child, index) => (
                        <div
                          key={child.key || `${child.label}-${index}`}
                          className="flex flex-col gap-[10px] "
                        >
                          {child.type === "diviner" ? (
                            <div className="h-[0.8px] bg-neutral-200 my-4"></div>
                          ) : (
                            <div
                              className={`flex items-center justify-between px-6 py-2 rounded-[5px] hover:bg-[#f3f6f6bf] ${
                                activeMenu?.includes(child.key || "")
                                  ? "bg-[#E5EBEE]"
                                  : ""
                              }`}
                              onClick={() => setActiveMenu([child.key || ""])}
                            >
                              <div className="flex items-center gap-[10px]">
                                {child.icon && (
                                  <span className="flex justify-center items-center w-[32px] h-[32px] rounded-full overflow-hidden">
                                    {child.icon}
                                  </span>
                                )}
                                <span>{child.label}</span>
                              </div>
                              <div>{child.extra}</div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className={`flex items-center gap-[10px] px-4 py-2.5 hover:bg-[#f3f6f6bf] rounded-[8px] ${
                    activeMenu?.includes(item.key || "") ? "bg-[#E5EBEE]" : ""
                  }`}
                  onClick={() => setActiveMenu([item.key || ""])}
                >
                  {item.icon && <span className="menu-icon">{item.icon}</span>}
                  <span>{item.label}</span>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LXMenu;
