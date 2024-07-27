import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import { CssBaseline } from "@mui/material";

export function App() {
  return (
    <CssBaseline>
      <RouterProvider
        router={router}
        fallbackElement={"loading"}
        future={{ v7_startTransition: true }}
      />
    </CssBaseline>
  );
}
