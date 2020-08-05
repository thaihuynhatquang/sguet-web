import React from "react";
const Home = React.lazy(() => import("containers/PublicLayout/Home"));

export const router = {
  Home: {
    path: "/home",
    exact: true,
    name: "Trang chủ",
    render: Home,
  },
};

export default Object.values(router);