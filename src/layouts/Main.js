import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-whiteMid">
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
