import { Box, Typography } from "@mui/material";
import { ButtonGroup } from "./ButtonGroup";
import { blue } from "@mui/material/colors";

export function Header() {
  const primary = blue[100];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px",
        padding: "8px",
        boxShadow: 1,
        paddingLeft: "50px",
        paddingRight: "50px",
        bgcolor: primary,
      }}
    >
      <Typography variant="h3">LOGO</Typography>
      <ButtonGroup />
    </Box>
  );
}
