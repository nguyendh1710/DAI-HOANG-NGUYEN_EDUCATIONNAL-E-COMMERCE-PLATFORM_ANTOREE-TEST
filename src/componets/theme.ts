import { createTheme, ThemeOptions } from "@mui/material/styles";

// 🔹 Mở rộng TypographyOptions để thêm `fontSizeContent`
declare module "@mui/material/styles" {
  interface Typography {
    fontSizeContent: number; // ✅ Thêm thuộc tính vào Typography
  }
  interface TypographyOptions {
    fontSizeContent?: number; // ✅ Thêm thuộc tính vào TypographyOptions
  }
}

// 🔹 Khởi tạo theme với typography mở rộng
const theme = createTheme({
  palette: {
    primary: {
      main: "#f50057",
    },
    secondary: {
      main: "#1976d2",
    },
  },
  spacing: 8, // 1 đơn vị spacing = 8px
  typography: {
    fontSize: 14, // Font size mặc định
    fontSizeContent: 16, // ✅ Không còn lỗi
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
} as ThemeOptions); // 🔹 Ép kiểu về ThemeOptions để tránh lỗi TypeScript

export default theme;
