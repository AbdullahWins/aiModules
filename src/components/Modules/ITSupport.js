import React, { useContext } from "react";
import { AiContext } from "../../contexts/AiContext";

const ITSupport = () => {
  const { output, processRequest, isLoading, setIsLoading } =
    useContext(AiContext);

  const handleClick = () => {
    const input = document.getElementById("input")?.value;
    const prompt =
      "I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My first problem is: ";
    setIsLoading(true);
    processRequest(prompt, input);
  };

  return (
    <section>
      <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto my-0 rounded-lg">
        <section className="flex flex-col">
          <h1 className="text-3xl text-center font-bold text-blackHigh p-2">
            Personal IT
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

export default ITSupport;
