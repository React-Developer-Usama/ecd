import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../container/login/Login";
import Product from "../container/product/product";
import Home from "../container/supplier";
import Order from "../container/order";

const Router = () => {
  const [isAuthUser, setIsAuthUser] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    userToken ? setIsAuthUser(true) : setIsAuthUser(false);
  }, []);

  return (
    <>
      <BrowserRouter>
        {isAuthUser ? (
          <>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route exact path="/product" element={<Product />} />
            </Routes>
            <Routes>
              <Route exact path="/order" element={<Order />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </>
  );
};

export default Router;
