import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";

const Layout = () => {
  const state = useSelector((state) => state?.toggle);

  return (
    <>
      <Sidebar />
      <div id="content" className={`${state?.isTrue ? "expanded" : null}`}>
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
