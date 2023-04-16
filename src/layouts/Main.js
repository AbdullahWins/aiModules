import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/Shared/TopNav";
import Footer from "../components/Shared/Footer";
import "./Main.css";

const Main = () => {

  return (
    <section
      className={`min-h-screen flex flex-col justify-start md:justify-between bg-mainBg bg-no-repeat bg-top`}
    >
      <TopNav></TopNav>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
};

export default Main;
