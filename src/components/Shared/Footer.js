import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <hr className="opacity-5" />
      <section className="hidden max-w-6xl w-full mx-auto my-0 md:block footer footer-center p-4 text-base-content">
        <div className="flex items-center justify-between">
          <p>
            Copyright © 2023 <span className="text-infoColor">Assistro</span> -
            All right are reserved
          </p>
          <div className="flex items-center gap-1">
            <Link to="https://www.facebook.com">
              <img
                className="h-8 w-8"
                src="https://daisyui.com/tailwind-css-component-profile-1@94w.jpg"
                alt=""
              />
            </Link>
            <Link to="https://www.twitter.com">
              <img
                className="h-8 w-8"
                src="https://daisyui.com/tailwind-css-component-profile-1@94w.jpg"
                alt=""
              />
            </Link>
            <Link to="https://www.linkedin.com">
              <img
                className="h-8 w-8"
                src="https://daisyui.com/tailwind-css-component-profile-1@94w.jpg"
                alt=""
              />
            </Link>
            <Link to="https://www.whatsapp.com">
              <img
                className="h-8 w-8"
                src="https://daisyui.com/tailwind-css-component-profile-1@94w.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
