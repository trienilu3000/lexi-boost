import React, { useEffect, useRef, useState } from "react";

interface MenuProps {
  key?: string | number;
  label?: React.ReactNode; // customize to your liking ^^
  type?: string;
  disabled?: boolean;
}
interface DropdownProps {
  children?: React.ReactNode;
  trigger?: "hover" | "click" | "contextMenu";
  menu?: MenuProps[];
  placement?:
    | "bottomLeft"
    | "bottom"
    | "bottomRight"
    | "topLeft"
    | "top"
    | "topRight";
}

const LXDropdown: React.FC<DropdownProps> = ({
  trigger,
  placement,
  menu,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    if (trigger === "click") {
      setIsOpen((prev) => !prev);
    }
  };

  const calculatePosition = (placement: string) => {
    switch (placement) {
      case "bottomLeft":
        return "left-0 top-full";
      case "bottom":
        return "left-1/2 transform -translate-x-1/2 top-full";
      case "bottomRight":
        return "right-0 top-full";
      case "topLeft":
        return "left-0 bottom-full";
      case "top":
        return "left-1/2 transform -translate-x-1/2 bottom-full";
      case "topRight":
        return "right-0 bottom-full";
      default:
        return "left-1/2 transform -translate-x-1/2 top-full";
    }
  };

  return (
    <div className="relative max-w-full z-200 group" ref={dropdownRef}>
      <div className="p-2" onClick={handleClick}>
        {children}
      </div>
      <div
        className={`absolute block bg-white py-[5px] w-auto min-w-[150px] rounded-[8px] outline-none shadow-[0_6px_16px_0_rgba(0,0,0,0.08),_0_3px_6px_-4px_rgba(0,0,0,0.12),_0_9px_28px_8px_rgba(0,0,0,0.05)] z-2 transition-all duration-200 ease-linear  
             ${trigger === "hover" ? "group-hover:block" : ""}
      ${trigger === "click" && isOpen ? "block" : "hidden"}
      ${calculatePosition(placement || "bottom")}`}
      >
        {menu?.map((item) => (
          <div
            draggable={false}
            key={String(item.key || item.label || item.type)}
            className={`hover:cursor-pointer select-none`}
          >
            {item.label && (
              <div
                className={`relative px-4 py-2  ${
                  item.disabled
                    ? "cursor-not-allowed text-[rgba(0,0,0,0.25)]"
                    : "hover:bg-neutral-200"
                }`}
              >
                {item.label}
              </div>
            )}
            {item.type === "divider" && (
              <div className="h-[1px] bg-neutral-200 my-1"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default LXDropdown;
