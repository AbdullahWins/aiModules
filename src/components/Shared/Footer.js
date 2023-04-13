import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <hr className="opacity-5" />
      <section className="hidden max-w-6xl w-full mx-auto my-0 md:block footer footer-center p-4 text-base-content">
        <div className="flex items-center justify-between">
          <p className="text-base">
            Copyright © 2023 <span className="text-infoColor">Assistro</span> -
            All right are reserved
          </p>
          <div className="flex items-center gap-1">
            <Link to="https://web.facebook.com/netrocreative">
              <i class="fa-brands fa-square-facebook text-3xl"></i>
            </Link>
            <Link to="https://twitter.com/netrocreative">
              <i class="fa-brands fa-square-twitter text-3xl"></i>
            </Link>
            <Link to="https://www.linkedin.com/company/netrocreative/">
              <i class="fa-brands fa-linkedin text-3xl"></i>
            </Link>
            <Link to="https://www.whatsapp.com">
              <i class="fa-brands fa-square-whatsapp text-3xl"></i>
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
