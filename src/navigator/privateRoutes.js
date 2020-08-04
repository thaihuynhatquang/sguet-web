import React from "react";
const Home = React.lazy(() => import("containers/PrivateLayout/Home"));

export const router = {
  Home: {
    path: "/admin",
    exact: true,
    name: "Trang chủ",
    render: Home,
  },
};

export default Object.values(router);