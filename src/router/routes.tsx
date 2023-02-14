import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = React.lazy(() => import("../pages/Home"));

const LoadComponent = ({
  component: Component,
}: {
  component: React.LazyExoticComponent<() => JSX.Element>;
}) => {
  return (
    <Suspense fallback={<span> Loading... </span>}>
      <Component />
    </Suspense>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadComponent component={HomePage} />, //home
  },
  {
    path: "/shop",
    element: <div> Test </div>, //shop
  },
]);
