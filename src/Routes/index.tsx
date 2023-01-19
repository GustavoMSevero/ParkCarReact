import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AddParking from "../pages/AddParking";
import Dashboard from "../pages/Dashboard";

import Login from "../pages/Login";
import Register from "../pages/Register";
import UpdatePassword from "../pages/UpdatePassword";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/add-parking",
        element: <AddParking />,
      },
      {
        path: "/update-password",
        element: <UpdatePassword />,
      },
    ],
  },
]);

export default router;
