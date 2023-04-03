import React, { useContext } from "react";
import { AiContext } from "../contexts/AiContext";
import moduleList from "../assets/json/moduleList.json";
import logo from "../assets/logo/logo.png";
import Card from "../components/Shared/Card";

const Home = () => {
  const { resetOutput } = useContext(AiContext);

  return (
    <section className="flex flex-col items-center gap-8 max-w-11/12 mx-auto my-0 p-4">
      {/* branding */}
      <section className="flex flex-col items-center justify-center">
        <img
          className="hover:animate-pulse w-1/3 pb-12"
          src={logo}
          alt="jarvis"
        />
        <div className="text-center">
          <p className="text-4xl text-mainColor font-black">
            &#128075; Hey Tony, what are we creating today?
          </p>
          <p className="opacity-60">
            Get started by selecting the content type from the options below
          </p>
        </div>
      </section>
      {/* cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-5">
        {moduleList?.map((module, i) => {
          return (
            <Card key={i} module={module} resetOutput={resetOutput}></Card>
          );
        })}
      </section>
    </section>
  );
};

export default Home;
