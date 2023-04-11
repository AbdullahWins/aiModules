import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header";
import SideNav from "../components/Shared/SideNav";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-whiteMid">
      <section className="grid grid-cols-9 gap-4">
        <div className="col-span-1">
          <SideNav></SideNav>
        </div>
        <div className="h-screen col-span-8 flex flex-col justify-center">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default Main;
