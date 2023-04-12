import React from "react";

const TopNav = () => {
  return (
    <section className="max-w-6xl w-full mx-auto my-0 px-4">
      <div className="hidden md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-black text-blackHigh">ASSISTRO</h2>
        </div>
        <div className="flex gap-4 py-2">
          <button className="text-btnNavColor hover:text-btnHoverColor">
            Home
          </button>
          <button className="text-btnNavColor hover:text-btnHoverColor">
            About Myself
          </button>
          <button className="text-btnNavColor hover:text-btnHoverColor">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
