import React from "react";
// import github from "../../assets/logo/github.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-4 bg-pureBlackColor text-whiteHigh">
      {/* <img className="h-12" src={github} alt="" /> */}
      <Link to="https://github.com/AbdullahWins">
        <p className="text-mainColor text-xl font-semibold">
          Crafted with &#10084; by
          <span> AbdullahWins</span>
        </p>
      </Link>
    </div>
  );
};

export default Footer;
