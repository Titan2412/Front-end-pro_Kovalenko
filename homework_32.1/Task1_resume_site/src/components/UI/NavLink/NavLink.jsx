import { Button } from "@mui/material";
import { forwardRef } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

export const NavLink = forwardRef(function MyNavLink(props, ref) {
  return <Button component={RouterNavLink} ref={ref} {...props} />;
});
