import React from "react";

import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/404" element={<ErrorPage />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  </>
);

export default App;
