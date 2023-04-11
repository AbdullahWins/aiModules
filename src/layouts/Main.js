import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/Shared/TopNav";
import Footer from "../components/Shared/Footer";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center md:justify-between bg-whiteMid">
      <TopNav></TopNav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
