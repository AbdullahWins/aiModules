import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AIDA from "../components/Modules/AIDA";
import ITSupport from "../components/Modules/ITSupport";
import Career from "../components/Modules/Career";
import BlogPost from "../components/Modules/BlogPost";
import ColdEmail from "../components/Modules/ColdEmail";
import HeadlinesAndDescriptions from "../components/Modules/HeadlinesAndDescriptions";
import ProductDescription from "../components/Modules/ProductDescription";
import SocialMediaAdvert from "../components/Modules/SocialMediaAdvert";
import UniqueValueProposition from "../components/Modules/UniqueValueProposition";
import JobDescription from "../components/Modules/JobDescription";
import AiDoctor from "../components/Modules/AiDoctor";
import AiLawyer from "../components/Modules/AiLawyer";
import Chef from "../components/Modules/Chef";
import Dreamer from "../components/Modules/Dreamer";
import PAS from "../components/Modules/PAS";
import Psychologist from "../components/Modules/Psychologist";
import PersonalAssistant from "../components/Modules/PersonalAssistant";
import AiFinancial from "../components/Modules/AiFinancial";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <BlogPost></BlogPost>,
      },
      {
        path: "/product",
        element: <ProductDescription></ProductDescription>,
      },
      {
        path: "/job",
        element: <JobDescription></JobDescription>,
      },
      {
        path: "/cold",
        element: <ColdEmail></ColdEmail>,
      },
      {
        path: "/social",
        element: <SocialMediaAdvert></SocialMediaAdvert>,
      },
      {
        path: "/unique",
        element: <UniqueValueProposition></UniqueValueProposition>,
      },
      {
        path: "/headlines",
        element: <HeadlinesAndDescriptions></HeadlinesAndDescriptions>,
      },
      {
        path: "/aida",
        element: <AIDA></AIDA>,
      },
      {
        path: "/itsupport",
        element: <ITSupport></ITSupport>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/doctor",
        element: <AiDoctor></AiDoctor>,
      },
      {
        path: "/lawyer",
        element: <AiLawyer></AiLawyer>,
      },
      {
        path: "/chef",
        element: <Chef></Chef>,
      },
      {
        path: "/dreamer",
        element: <Dreamer></Dreamer>,
      },
      {
        path: "/pas",
        element: <PAS></PAS>,
      },
      {
        path: "/psychologist",
        element: <Psychologist></Psychologist>,
      },
      {
        path: "/assistant",
        element: <PersonalAssistant></PersonalAssistant>,
      },
      {
        path: "/financial",
        element: <AiFinancial></AiFinancial>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <h2 className="font-black py-6 text-3xl text-red-600 text-center">
        Page Not Found!
      </h2>
    ),
  },
]);
