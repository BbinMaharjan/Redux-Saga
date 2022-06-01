import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/organisms/header/Header";
import Home from "../components/pages/home/Home";
import ProductDetails from "../components/pages/details/ProductDetails";
const ProtectedRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container m-2">
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />

          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default ProtectedRoutes;
