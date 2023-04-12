import React, { useEffect } from "react";

function AdBanner() {
  useEffect(() => {
    window.googletag = window.googletag || { cmd: [] };
    window.googletag.cmd.push(function () {
      window.googletag
        .defineSlot(
          "/6355419/Travel/Europe/France/Paris",
          [300, 250],
          "googleAd"
        )
        .addService(window.googletag.pubads());
      window.googletag.enableServices();
      window.googletag.display("googleAd");
    });
  }, []);

  return (
    <div
      className="hidden sm:block"
      id="googleAd"
      style={{ width: "300px", height: "250px" }}
    ></div>
  );
}

export default AdBanner;
