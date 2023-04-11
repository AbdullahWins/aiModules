import React from "react";
import chatbot from "../../assets/logo/chatbot.png";

const TopNav = () => {
  return (
    <section className="hidden md:flex md:items-center md:justify-between px-4 bg-base-300">
      <div>
        <img className="h-12 w-12" src={chatbot} alt="" />
      </div>
      <div className="flex gap-4 py-2">
        <button className="">Home</button>
        <button className="">About</button>
      </div>
    </section>
  );
};

export default TopNav;
