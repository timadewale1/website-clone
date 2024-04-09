/* eslint-disable no-unused-vars */
import React from "react";
import "../growth/Growth";
import "../tokenomics/Tokenomics";
import "../faq/Faq";
import Tokenomics from "../tokenomics/Tokenomics";
import Faq from "../faq/Faq";
import Growth from "../growth/Growth";
import LandingPage from "../../Component/landingPage/LandingPage";

const Home = () => {
  return (
    <>
      <LandingPage />
      {/* <Growth />
      <Tokenomics />
      <Faq /> */}
    </>
  );
};

export default Home;
