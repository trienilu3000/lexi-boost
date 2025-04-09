import { useEffect, useRef, useState } from "react";

export interface ProgressProps {
  strokeColor?: string;
  success?: { percent?: number; strokeColor?: string };
  size?:
    | number
    | [number | string, number]
    | { width: number; height: number }
    | "small"
    | "default";
  trailColor?: string;
  status?: string;
  showInfo?: boolean;
  percent?: number;
  format?: (percent: number, successPercent?: number) => string;
  type?: string;
  auto?: boolean;
}
const LXProgress: React.FC<ProgressProps> = ({
  strokeColor = "",
  success = {},
  size = "default",
  trailColor = "",
  status = "",
  showInfo = true,
  percent = 0,
  format = (percent) => percent + "%",
  type = "line",
  auto = false,
}) => {
  const [internalPercent, setInternalPercent] = useState(percent);
  const intervalRef = useRef<number | null>(null);
  const heightClass = size === "small" ? "h-1" : "h-2";
  useEffect(() => {
    if (auto) {
      setInternalPercent(0);
      intervalRef.current = window.setInterval(() => {
        setInternalPercent((prev) => {
          console.log("prev ==> ", prev);
          const next = prev + Math.random() * 10;
          console.log("next ==> ", next);
          if (next >= 100) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            return 100;
          }
          return next;
        });
      }, 200);
    } else {
      setInternalPercent(percent);
    }
  }, [auto, percent]);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div
        className={`${heightClass} w-full rounded-none`}
        style={{ backgroundColor: trailColor }}
      >
        <div
          className={`${heightClass} transition-all duration-300 ease-in-out rounded-none`}
          style={{
            width: `${internalPercent}%`,
            backgroundColor: success.strokeColor || strokeColor,
          }}
        ></div>
      </div>
    </div>
  );
};

export default LXProgress;
