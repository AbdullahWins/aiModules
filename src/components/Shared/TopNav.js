import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const TopNav = () => {
  const { user, logout } = useContext(AuthContext);
  const [activePage, setActivePage] = useState(null);

  useEffect(() => {
    setActivePage(document.title);
  }, []);

  console.log(activePage);

  return (
    <section className="max-w-6xl w-full mx-auto my-0 px-4 md:py-9">
      <div className="hidden md:flex md:items-center md:justify-between">
        <div>
          <img className="h-8" src={logo} alt="" />
        </div>
        <div className="flex gap-8 py-2">
          <Link to="/">
            <button
              onClick={() => {
                setActivePage(
                  `${process.env.REACT_APP_ApplicationName} | Home`
                );
              }}
              className={`btn btn-ghost btn-sm rounded-full border-none hover:text-btnColor normal-case ${
                activePage === `${process.env.REACT_APP_ApplicationName} | Home`
                  ? "text-whiteMid bg-btnColor"
                  : "text-btnNavColor"
              }`}
            >
              Home
            </button>
          </Link>
          <Link to="/pricing">
            <button
              onClick={() => {
                setActivePage(
                  `${process.env.REACT_APP_ApplicationName} | Pricing`
                );
              }}
              className={`btn btn-ghost btn-sm rounded-full border-none hover:text-btnColor normal-case ${
                activePage ===
                `${process.env.REACT_APP_ApplicationName} | Pricing`
                  ? "text-whiteMid bg-btnColor"
                  : "text-btnNavColor"
              }`}
            >
              Pricing
            </button>
          </Link>
          <Link to="/about">
            <button
              onClick={() => {
                setActivePage(
                  `${process.env.REACT_APP_ApplicationName} | About`
                );
              }}
              className={`btn btn-ghost btn-sm rounded-full border-none hover:text-btnColor normal-case ${
                activePage ===
                `${process.env.REACT_APP_ApplicationName} | About`
                  ? "text-whiteMid bg-btnColor"
                  : "text-btnNavColor"
              }`}
            >
              About Myself
            </button>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://netrocreative.com/"
          >
            <button
              onClick={() => {
                setActivePage(
                  `${process.env.REACT_APP_ApplicationName} | Our Website`
                );
              }}
              className={`btn btn-ghost btn-sm rounded-full border-none hover:text-btnColor normal-case ${
                activePage ===
                `${process.env.REACT_APP_ApplicationName} | Our Website`
                  ? "text-whiteMid bg-btnColor"
                  : "text-btnNavColor"
              }`}
            >
              Our Website
            </button>
          </Link>
          {user ? (
            <button
              className={`btn btn-ghost btn-sm rounded-full border-none hover:text-errorColor hover:bg-whiteLow normal-case`}
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button
                onClick={() => {
                  setActivePage(
                    `${process.env.REACT_APP_ApplicationName} | Login`
                  );
                }}
                className={`btn btn-ghost btn-sm rounded-full border-none hover:text-btnColor normal-case ${
                  activePage ===
                  `${process.env.REACT_APP_ApplicationName} | Login`
                    ? "text-whiteMid bg-btnColor"
                    : "text-btnNavColor"
                }`}
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopNav;
