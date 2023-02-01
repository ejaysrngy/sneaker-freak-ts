import React from "react";

import { router } from "./routes";
import { RouterProvider } from "react-router-dom";

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
