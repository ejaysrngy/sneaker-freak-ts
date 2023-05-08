import React from "react";

const HomePage = React.lazy(() => import("../pages/Home"));
const ProductPage = React.lazy(() => import("../pages/ProductPage"));

export {
    HomePage,
    ProductPage
}