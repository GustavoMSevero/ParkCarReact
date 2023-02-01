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
import Customer from "../pages/Customer";
import Contract from "../pages/Contract";
import Vaccancy from "../pages/Vaccancy";

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
      {
        path: "/customer",
        element: <Customer />,
      },
      {
        path: "/vaccancy",
        element: <Vaccancy />,
      },
      {
        path: "/contract",
        element: <Contract />,
      },
    ],
  },
]);

export default router;
