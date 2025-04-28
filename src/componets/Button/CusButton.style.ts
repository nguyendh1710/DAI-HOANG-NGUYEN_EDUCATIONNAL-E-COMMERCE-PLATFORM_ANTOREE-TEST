import { Button } from "@mui/material";
import { styled } from "@mui/material/styles"; // 🔹 Nên import từ MUI styles để hỗ trợ theme

// ✅ Styled Button sử dụng theme
export const StyledButton = styled(Button)(({ theme, size }: { theme: any; size?: "small" | "medium" | "large" }) => ({
  width: 
  size === "small" ? "10vw" 
    : size === "medium" ? "15vw"
    : "20vw", // ✅ Width nếu là small hoặc medium còn lại là 20vw
  height: 
  size === "small" ? "9vh" 
  : size === "medium" ? "25vh"  
  : "28vh", // ✅ Height nếu là small hoặc medium còn lại là 28vw
  padding:
    size === "small"? theme.spacing(0.5, 1.5) // 🟢 Padding nhỏ hơn khi size=small
      : size === "large"
      ? theme.spacing(1.5, 3) // 🟢 Padding lớn hơn khi size=large
      : theme.spacing(1, 2), // 🟢 Mặc định là medium

  borderRadius: theme.shape.borderRadius, // Sử dụng bo góc từ theme
  textTransform: "none",
  fontWeight: theme.typography.fontWeightBold, // Font weight từ theme
  transition: "all 0.3s ease-in-out",
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    opacity: 0.9,
    backgroundColor: theme.palette.secondary.dark, // Màu hover theo theme
  },
}));
