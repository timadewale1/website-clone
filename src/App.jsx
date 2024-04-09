import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Faq, Growth, Tokenomics } from "../src/pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Growth" element={<Growth />} />
        <Route path="/Tokenomics" element={<Tokenomics />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
