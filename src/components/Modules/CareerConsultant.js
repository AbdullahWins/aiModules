import React, { useContext } from "react";
import { AiContext } from "../../contexts/AiContext";

const CareerConsultant = () => {
  const { output, processRequest, isLoading, setIsLoading } =
    useContext(AiContext);

  const handleClick = () => {
    const input = document.getElementById("input")?.value;
    const prompt =
      "You are an expert career consultant, provide a impactful and well thought out career consultancy for:";
    setIsLoading(true);
    processRequest(prompt, input);
  };
  return (
    <section>
      <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto my-0 rounded-lg">
        <section className="flex flex-col">
          <h1 className="text-3xl text-center font-bold text-blackHigh p-2">
            Career Consultant
          </h1>
          <div className="flex flex-col gap-2 p-2">
            <textarea
              className={`p-3 w-full rounded-sm border-solid border-2 border-whiteLow`}
              placeholder="let me assist you with the help of AI"
              name="blog-input"
              id="input"
              cols="5"
              rows="5"
            ></textarea>
            <i className="fa-solid fa-arrow-down text-center"></i>
            <button
              disabled={isLoading}
              className={`btn text-whiteHigh bg-mainColor border-none btn-md w-full rounded-md px-4 ${
                isLoading ? "bg-mainColor" : "text-whiteLow"
              }`}
              onClick={handleClick}
            >
              {isLoading ? (
                <p>
                  <span>
                    <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                  </span>
                  <span> Generating... </span>
                </p>
              ) : (
                <p>Start</p>
              )}
            </button>
          </div>
          <div>
            <div className="font-bold text-xl text-center py-2">
              {isLoading ? (
                <div>
                  <i className="fa-solid fa-arrow-down fa-beat-fade"></i>
                  <i className="fa-solid fa-arrow-down fa-beat-fade"></i>
                  <i className="fa-solid fa-arrow-down fa-beat-fade"></i>
                </div>
              ) : (
                <div>
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              )}
            </div>
          </div>
          <div className="p-4">
            <textarea
              className={`p-3 w-full rounded-sm border-solid border-2 border-whiteLow`}
              placeholder=""
              defaultValue={output}
              cols="10"
              rows="10"
            ></textarea>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CareerConsultant;
