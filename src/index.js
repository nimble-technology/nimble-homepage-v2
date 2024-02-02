import React, {useEffect} from "react";
import { createRoot } from "react-dom/client";
import registerServiceWorker from "./serviceWorker";
import { ThemeProvider } from "@mui/material/styles";
import { AppRoutes } from "./routes";
import { theme } from "./styles/custom-theme-style.js";
import { createTheme } from "@mui/material/styles";
import { MobileProvider } from "./mobileContext.js";
import "./index.css";
import "./util/prefetch";
import {prefetchBlogs} from "./util/prefetch";

const customTheme = createTheme(theme);
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#FFFFFF';
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <MobileProvider>
          <AppRoutes />
        </MobileProvider>
      </ThemeProvider>
    </div>
  );
};

setTimeout(() => {
    prefetchBlogs();
}, 50);

root.render(
  <App />
);

registerServiceWorker();
