import React, { useContext } from "react";
import { AiContext } from "../../contexts/AiContext";
import Card from "../../components/Shared/Card";

const Home = () => {
  const { resetOutput, moduleList } = useContext(AiContext);
  return (
    <section className="max-w-11/12 mx-auto my-0 p-4">
      {/* cards */}
      <div className="rounded-xl">
        <div className="text-center py-4 mb-8">
          <p className="text-4xl font-black">
            &#128075; Hey, what are we creating today?
          </p>
          <p className="opacity-70 pt-3">
            Get started by selecting the content type from the options below
          </p>
        </div>
        <p className="font-black text-center lg:text-left opacity-70 py-2">
          All Modules
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-5">
          {moduleList?.map((module, i) => {
            return (
              <Card key={i} module={module} resetOutput={resetOutput}></Card>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Home;
