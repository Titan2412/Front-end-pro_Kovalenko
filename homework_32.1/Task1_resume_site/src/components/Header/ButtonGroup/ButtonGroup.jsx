import { Button, ButtonGroup as ButtonGroupHeader } from "@mui/material";
import { NavLink } from "../../UI";

export function ButtonGroup() {
  return (
    <ButtonGroupHeader
      sx={{
        display: "flex",
        gap: "15px",
      }}
    >
      <NavLink to="/home" variant="contained" color="warning">
        Home
      </NavLink>
      <NavLink to="/todo" variant="contained" color="warning">
        TODO
      </NavLink>
      <NavLink to="/swapi" variant="contained" color="warning">
        Swapi
      </NavLink>
    </ButtonGroupHeader>
  );
}
