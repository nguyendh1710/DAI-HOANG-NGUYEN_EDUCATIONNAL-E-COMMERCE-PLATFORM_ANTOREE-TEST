import { styled } from "@mui/system";
import {
  Paper,
  Typography,
  Box,
  Container,
  TextField,
  Grid,
  Button,
} from "@mui/material";

export const CusContainerFuild = styled(Container)(({ theme }) => ({}));
export const CusContainer = styled(Container)(({ theme }) => ({}));
export const CusGrid = styled(Grid)(({ theme }) => ({}));

export const TitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));
export const CusTextFiel = styled(TextField)(({ theme }) => ({}));

export const CusTypo = styled(Typography)(({ theme }) => ({}));
export const CusPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

