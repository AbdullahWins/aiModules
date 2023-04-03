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
        <section className="w-72 h-20">
          <div className="flex items-center justify-between bg-whiteHigh border-2 rounded-lg border-whiteHigh shadow-md">
            <img className="w-20 h-20 p-2 bg-whiteHigh" src={img} alt="Movie" />
            <div className="flex flex-col gap-2">
              <p className="text-blackHigh font-semibold w-full text-md text-start px-2">
                {moduleName}
              </p>
              <p className="text-blackLow w-full text-start text-sm leading-tight px-2">
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
