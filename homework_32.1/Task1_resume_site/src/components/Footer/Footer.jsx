import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export function Footer() {
  const primary = blue[100];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: 1,
        bgcolor: primary,
        minHeight: "50px",
      }}
    >
      <Typography variant="p">andrii.kovalenko241@gmail.com</Typography>
      <Typography variant="p">© Titan241</Typography>
      <Typography variant="p">+380956628799</Typography>
    </Box>
  );
}
