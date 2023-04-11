import React, { useContext } from "react";
import { AiContext } from "../contexts/AiContext";
import moduleList from "../assets/json/moduleList.json";
import Card from "../components/Shared/Card";

const Home = () => {
  const { resetOutput } = useContext(AiContext);

  return (
    <section className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center justify-center backdrop-blur-sm">
        <p className="text-blackHigh text-2xl">Hello, Sir!</p>
        <p className="text-blackMid text-3xl font-bold">
          What are we gonna create today?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-4">
        {moduleList?.map((module, i) => {
          return (
            <Card key={i} module={module} resetOutput={resetOutput}></Card>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
