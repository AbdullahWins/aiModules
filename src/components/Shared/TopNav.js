import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const TopNav = () => {
  return (
    <section className="max-w-6xl w-full mx-auto my-0 px-4 md:py-9">
      <div className="hidden md:flex md:items-center md:justify-between">
        <div>
          <img className="h-8" src={logo} alt="" />
        </div>
        <div className="flex gap-8 py-2">
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
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://netrocreative.com/"
          >
            <button className="text-btnNavColor hover:text-btnHoverColor">
              Our Website
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
