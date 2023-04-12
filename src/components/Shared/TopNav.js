import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <section className="max-w-6xl w-full mx-auto my-0 px-4">
      <div className="hidden md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-black text-blackHigh">ASSISTRO</h2>
        </div>
        <div className="flex gap-4 py-2">
          <Link to="/">
            <button className="text-btnNavColor hover:text-btnHoverColor">
              Home
            </button>
          </Link>
          <Link to="/about">
            <button className="text-btnNavColor hover:text-btnHoverColor">
              About Myself
            </button>
          </Link>
          <Link to="/contact">
            <button className="text-btnNavColor hover:text-btnHoverColor">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
