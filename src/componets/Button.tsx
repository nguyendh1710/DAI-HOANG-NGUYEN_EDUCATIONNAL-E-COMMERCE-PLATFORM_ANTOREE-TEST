import { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
};

export default function Button({
  children,
  onClick,
  size = "medium",
  startIcon,
  endIcon,
  fullWidth = false,
  loading = false,
  className = "",
}: ButtonProps) {
  const baseStyle =
    "flex items-center justify-center font-semibold text-white transition-all duration-300 ease-in-out rounded-xl bg-green-600 hover:bg-green-800 disabled:opacity-70 py-2 px-6";

  const sizeStyle =
    size === "small"
      ? "w-[6vw] h-[3vh] px-3 py-1.5 text-sm"
      : size === "large"
      ? "w-min-[12vw] h-max-[9vh] px-6 py-3 text-lg"
      : "w-[7vw] h-[6vh] px-4 py-2 text-base";

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`${baseStyle} ${sizeStyle} ${widthStyle} ${className}`}
    >
      {loading ? (
        <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4 mr-2"></span>
      ) : (
        startIcon && <span className="mr-2">{startIcon}</span>
      )}

      {loading ? "Đang xử lý..." : children}

      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
}
