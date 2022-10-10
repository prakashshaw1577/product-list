import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import CartProduct from "./components/CartProduct";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

const RouterFiles = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Header />
              <AddProduct />
              <ProductList />
            </div>
          }
        />
        <Route exact path="/cartproduct" element={<CartProduct />} />
      </Routes>
    </Router>
  );
};

export default RouterFiles;
