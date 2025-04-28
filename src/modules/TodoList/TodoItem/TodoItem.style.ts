import { styled } from "@mui/material/styles";
import { Box,Checkbox } from "@mui/material";



export const ContainerBox = styled(Box)(({ theme }) => ({

  display: "flex",
  flexDirection: "row",
 justifyContent:"space-between",
}));
export const ContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  gap: "2rem",
}));

export const CusCheckbox = styled(Checkbox)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,

}));

