import React, { useContext, useEffect, useState } from "react";
import { AiContext } from "../../contexts/AiContext";

const ProblemAgitateSolution = () => {
  const { output, processRequest, isLoading, setIsLoading } =
    useContext(AiContext);
  const [textCount, setTextCount] = useState(0);

  //scroll on top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    const input = document.getElementById("input")?.value;
    const prompt =
      "You are a Problem Agitate Solution expert. provide me a detailed Problem Agitate Solution for:";
    setIsLoading(true);
    processRequest(prompt, input);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const input = document.getElementById("input")?.value;
    setTextCount(input?.length);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <section className="max-w-6xl mx-auto my-0 w-full px-4 pb-24 md:pb-4">
      <div className="w-full py-4">
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 p-4 bg-whiteHigh shadow-sm shadow-blackLow rounded-xl">
            <h1 className="text-xl font-bold text-blackHigh pt-2">
              PAS Framework
            </h1>
            <textarea
              onChange={(e) => {
                handleChange(e);
              }}
              className={`p-2 w-full rounded-xl border-solid border-2 border-bgTextareaColor placeholder-blackLow placeholder-opacity-25 focus:outline-none`}
              placeholder="let me assist you with the help of AI"
              name="blogInput"
              id="input"
              cols="5"
              rows="5"
            ></textarea>
            {/* <p className="text-right">{textCount}/200</p> */}
            <button
              disabled={isLoading || textCount < 1}
              className={`btn text-whiteHigh bg-btnColor disabled:text-btnDisabledTextColor disabled:bg-btnColorDisabled hover:bg-btnColor border-none btn-md w-full rounded-full normal-case my-2 ${
                isLoading ? "bg-btnColor" : "text-whiteLow"
              }`}
              onClick={handleClick}
            >
              {isLoading ? (
                <p>
                  <span>
                    <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                  </span>
                  &nbsp;&nbsp;
                  <span className="text-btnDisabledTextColor">
                    Generating...
                  </span>
                </p>
              ) : (
                <p>Start</p>
              )}
            </button>
          </div>
          <div className="p-4 bg-whiteHigh shadow-sm shadow-blackLow rounded-xl">
            <h1 className="text-xl font-bold text-blackHigh py-2">Result</h1>
            <textarea
              className={`p-2 w-full rounded-xl border-none focus:outline-none bg-bgTextareaColor`}
              placeholder=""
              defaultValue={output}
              cols="10"
              rows="10"
            ></textarea>
            <button
              disabled={isLoading || output?.length < 1}
              className={`btn text-whiteHigh bg-btnColor border-transparent disabled:text-btnDisabledTextColor disabled:bg-btnColorDisabled hover:bg-btnColor border-2 focus:border-blackLow focus:bg-btnColorDisabled focus:text-blackLow btn-md w-full rounded-full normal-case my-3`}
              onClick={handleCopy}
            >
              <p className="flex items-center justify-center gap-1">
                <i className="fa-regular fa-copy"></i>Copy
              </p>
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProblemAgitateSolution;
