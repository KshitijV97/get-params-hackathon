import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjOne, homeObjTwo, homeObjFour } from "./Data";
import AnimatedQuestions from "./samplequiz";
import FinancialNewsTabs from "../news/news";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <AnimatedQuestions />
      <FinancialNewsTabs />
    </>
  );
};

export default Home;
