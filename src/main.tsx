import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "@/utils/router";
import { RouterProvider } from "@tanstack/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
