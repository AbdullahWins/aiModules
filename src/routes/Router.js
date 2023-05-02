import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AuthLayout from "../layouts/AuthLayout";
import ITSupport from "../components/Modules/ITSupport";
import BlogPost from "../components/Modules/BlogPost";
import ColdEmail from "../components/Modules/ColdEmail";
import ProductDescription from "../components/Modules/ProductDescription";
import SocialMediaAdvert from "../components/Modules/SocialMediaAdvert";
import JobDescription from "../components/Modules/JobDescription";
import PersonalAssistant from "../components/Modules/PersonalAssistant";
import AiFinancial from "../components/Modules/AiFinancial";
import Home from "../pages/Home";
import UniqueValue from "../components/Modules/UniqueValue";
import CareerConsultant from "../components/Modules/CareerConsultant";
import ProblemAgitateSolution from "../components/Modules/ProblemAgitateSolution";
import AIDA from "../components/Modules/AIDA";
import About from "../pages/About";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import Pricing from "../pages/Pricing/Pricing";

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
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <AuthLayout></AuthLayout>
      </PrivateRoute>
    ),
    children: [
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
        path: "/itsupport",
        element: <ITSupport></ITSupport>,
      },
      {
        path: "/assistant",
        element: <PersonalAssistant></PersonalAssistant>,
      },
      {
        path: "/financial",
        element: <AiFinancial></AiFinancial>,
      },
      {
        path: "/unique",
        element: <UniqueValue></UniqueValue>,
      },
      {
        path: "/career",
        element: <CareerConsultant></CareerConsultant>,
      },
      {
        path: "/pas",
        element: <ProblemAgitateSolution></ProblemAgitateSolution>,
      },
      {
        path: "/aida",
        element: <AIDA></AIDA>,
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
