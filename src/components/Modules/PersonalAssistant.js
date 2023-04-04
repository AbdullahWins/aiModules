import React, { useContext } from "react";
import { AiContext } from "../../contexts/AiContext";

const PersonalAssistant = () => {
  const { output, processRequest, isLoading, setIsLoading } =
    useContext(AiContext);
  // const [textCount, setTextCount] = useState(0);

  const handleClick = () => {
    const input = document.getElementById("input")?.value;
    const prompt =
      "Act like a personal assistant, provide structured assistance and data driven decision on";
    setIsLoading(true);
    processRequest(prompt, input);
  };

  // const handleChange = (event) => {
  //   event.preventDefault();
  //   const input = document.getElementById("input")?.value;
  //   setTextCount(input?.length);
  // };

  return (
    <section>
      <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto my-0">
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 p-4 bg-whiteHigh shadow-lg shadow-blackLow rounded-xl">
            <h1 className="text-xl font-bold text-blackHigh py-2">
              Personal Assistant
            </h1>
            <textarea
              // onChange={(e) => {
              //   handleChange(e);
              // }}
              className={`p-3 w-full rounded-xl border-solid border-2 border-bgTextareaColor focus:outline-none`}
              placeholder="let me assist you with the help of AI"
              name="blogInput"
              id="input"
              cols="5"
              rows="5"
            ></textarea>
            {/* <p className="text-right">{textCount}/200</p> */}
            <button
              disabled={isLoading}
              className={`btn text-whiteHigh bg-btnColor border-none btn-md w-full rounded-full normal-case my-4 ${
                isLoading ? "bg-btnColor" : "text-whiteLow"
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
          <div className="p-4 bg-whiteHigh shadow-lg shadow-blackLow rounded-xl">
            <h1 className="text-xl font-bold text-blackHigh py-2">Result</h1>
            <textarea
              className={`p-3 w-full rounded-xl border-none focus:outline-none bg-bgTextareaColor`}
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

export default PersonalAssistant;
