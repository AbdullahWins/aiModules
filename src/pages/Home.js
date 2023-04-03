import React, { useContext } from "react";
import { AiContext } from "../contexts/AiContext";
import moduleList from "../assets/json/moduleList.json";
// import logo from "../assets/logo/logo.png";
import Card from "../components/Shared/Card";

const Home = () => {
  const { resetOutput } = useContext(AiContext);

  return (
    <section className="flex flex-col items-center gap-4 max-w-11/12 mx-auto my-0 p-4">
      {/* branding */}
      {/* <div className="flex flex-col items-center justify-center">
        <img className="hover:animate-pulse w-1/3" src={logo} alt="jarvis" />
      </div> */}
      {/* cards */}
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
