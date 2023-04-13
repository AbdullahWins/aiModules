import React from "react";
import { Link } from "react-router-dom";

const Card = ({ module }) => {
  const { moduleName, moduleDescription, moduleRoute, img, resetOutput } =
    module;
  return (
    <Link className="flex items-center justify-center" to={moduleRoute}>
      <button
        className="scale-100 rounded-md  hover:scale-105"
        onClick={resetOutput}
      >
        <section>
          <div className="grid grid-cols-12 items-center justify-between gap-4 h-24 w-64 bg-whiteHigh border-2 rounded-lg border-whiteHigh hover:border-cardGradientStart shadow-md">
            <div className="col-span-3 w-10 m-6 pb-2 flex items-center justify-center">
              <img
                className="w-10 bg-whiteHigh rounded-lg"
                src={img}
                alt={moduleName}
              />
            </div>
            <div className="col-span-9 p-3 text-start">
              <div className="flex flex-col justify-center gap-1">
                <p className="text-titleColor font-semibold text-lg text-start">
                  {moduleName}
                </p>
                <p className="text-subTitleColor text-start text-xs leading-tight">
                  {moduleDescription}
                </p>
              </div>
            </div>
          </div>
        </section>
      </button>
    </Link>
  );
};

export default Card;
