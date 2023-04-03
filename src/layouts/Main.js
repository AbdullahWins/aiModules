import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Shared/Menu";
import Footer from "../components/Shared/Footer";

const Main = () => {
  return (
    <div className="flex h-screen flex-col justify-between bg-whiteMid">
      <Menu></Menu>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
