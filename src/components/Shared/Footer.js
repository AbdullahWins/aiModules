import React from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-4 bg-pureBlackColor text-whiteHigh">
      <Link to="https://artsky.io/">
        <img className="h-6" src={logo} alt="" />
      </Link>
      <span>Copyright © 2023</span>
      <span className="text-amber-900 font-black">ARTSKY LLC</span>
    </div>
  );
};

export default Footer;
