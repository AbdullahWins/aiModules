import React, { useContext } from "react";
import { AiContext } from "../contexts/AiContext";
import moduleList from "../assets/json/moduleList.json";
import Card from "../components/Shared/Card";
import AdBanner from "../components/Ads/AdBanner";

const Home = () => {
  const { resetOutput } = useContext(AiContext);

  return (
    <div className="flex items-center justify-center">
      <section className="flex flex-col items-center gap-4 max-w-6xl w-full">
        <div className="flex flex-col items-center justify-center backdrop-blur-sm">
          <p className="text-textHeaderColor text-3xl">Hello, Sir!</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-btnGradientStart to-btnGradientEnd text-5xl font-bold pb-2">
            What are we gonna create today?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-end w-full gap-4 p-4">
          {moduleList?.map((module, i) => {
            return (
              <Card key={i} module={module} resetOutput={resetOutput}></Card>
            );
          })}
        </div>
        <AdBanner></AdBanner>
      </section>
    </div>
  );
};

export default Home;
