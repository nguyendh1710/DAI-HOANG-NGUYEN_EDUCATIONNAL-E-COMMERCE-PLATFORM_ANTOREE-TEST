import { ReactNode } from "react";
import { CircularProgress } from "@mui/material";
import {StyledButton} from "./CusButton.style";


// ✅ Định nghĩa `CustomButtonProps` với typescript
type CustomButtonProps = {
    children: ReactNode;
    onClick?: () => void; // 🟢 Hỗ trợ nhận `onClick`
    variant?: "contained" | "outlined" | "text";
    color?: "primary" | "secondary" | "error" | "warning" | "success";
    size?: "small" | "medium" | "large";
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    fullWidth?: boolean;
    loading?: boolean;
  };


export default function CusButton({
    children,
    onClick,
    variant ,
    color ,
    size,
    startIcon,
    endIcon,
    fullWidth = false,
    loading = false,
  }:CustomButtonProps) {
  return (
    <StyledButton
    variant={variant}
    color={color}
    size={size}
    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : startIcon}
    endIcon={endIcon}
    onClick={onClick} // 🟢 Nhận `onClick` từ props
    fullWidth={fullWidth}
    disabled={loading}
  >
    {loading ? "Đang xử lý..." : children}
  </StyledButton>
   
  )
}
