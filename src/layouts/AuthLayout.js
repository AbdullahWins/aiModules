import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/Shared/TopNav";
import Footer from "../components/Shared/Footer";
import { AuthContext } from "../contexts/AuthContext";
import Pricing from "../pages/Pricing/Pricing";

const Main = () => {
  const { subscriptionStatus } = useContext(AuthContext);

  return (
    <section
      className={`min-h-screen flex flex-col justify-start md:justify-between bg-mainBg bg-no-repeat bg-top`}
    >
      <TopNav></TopNav>
      {subscriptionStatus ? <Outlet></Outlet> : <Pricing></Pricing>}
      <Footer></Footer>
    </section>
  );
};

export default Main;
