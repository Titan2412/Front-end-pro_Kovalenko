import { App } from "./App.jsx";
import { useState } from "react";
import { THEME_DARK, ThemeContextProvider } from "./context/index.js";
import { ErrorBoundary } from "./components";

export function AppWrapper() {
  const [theme, setTheme] = useState(THEME_DARK);
  return (
    <ThemeContextProvider value={{ theme, setTheme }}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeContextProvider>
  );
}
