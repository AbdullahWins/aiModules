import React, { useContext, useState } from "react";
import { AiContext } from "../../contexts/AiContext";

const ITSupport = () => {
  const { output, processRequest, isLoading, setIsLoading } =
    useContext(AiContext);
  const [textCount, setTextCount] = useState(0);

  const handleClick = () => {
    const input = document.getElementById("input")?.value;
    const prompt =
      "I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My first problem is: ";
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
    <section>
      <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto my-0">
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 p-4 bg-whiteHigh shadow-lg shadow-blackLow rounded-xl">
            <h1 className="text-xl font-bold text-blackHigh pt-2">
              IT Support
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
                  <span className="text-btnDisabledTextColor">
                    Generating...
                  </span>
                </p>
              ) : (
                <p>Start</p>
              )}
            </button>
          </div>
          <div className="p-4 bg-whiteHigh shadow-lg shadow-blackLow rounded-xl">
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
                <i class="fa-regular fa-copy"></i>Copy
              </p>
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ITSupport;
