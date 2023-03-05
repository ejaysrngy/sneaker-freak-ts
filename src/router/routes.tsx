import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "pages/index";

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
  {
    path: "/:productId",
    element: <div> Test 1 </div>
  }
]);
