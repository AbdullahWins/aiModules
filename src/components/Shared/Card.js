import React from "react";
import { Link } from "react-router-dom";

const Card = ({ module }) => {
  const { moduleName, moduleDescription, moduleRoute, img, resetOutput } =
    module;
  return (
    <Link className="flex items-center justify-center" to={moduleRoute}>
      <button
        className="scale-100 rounded-md hover:scale-105"
        onClick={resetOutput}
      >
        <section className="h-20 m-1">
          <div className="flex items-center justify-between bg-whiteHigh border-2 rounded-lg border-whiteHigh hover:border-cardGradientStart shadow-md">
            <img className="h-20 p-2 bg-whiteHigh rounded-lg" src={img} alt={moduleName} />
            <div className="flex flex-col gap-1 w-60">
              <p className="text-blackHigh font-semibold text-md text-start pr-2">
                {moduleName}
              </p>
              <p className="text-blackLow text-start text-sm leading-tight pr-2">
                {moduleDescription}
              </p>
            </div>
          </div>
        </section>
      </button>
    </Link>
  );
};

export default Card;
