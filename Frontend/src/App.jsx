import React from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
// WEB
import Home from "./Web/Home";
import About from "./Web/About";
import Products from "./Web/Products";
import Payment from "./Web/Payment";
// ...existing code...
import Contact from "./Web/contact";
// ...existing code...
import Team from "./Web/Team";

// Admin
import Dashboard from "./Admin/Dashboard";
import AdminProducts from "./Admin/Products/AdminProducts";
import Order from "./Admin/Order/Order";
import Customer from "./Admin/Customer/Customer";
import Supplier from "./Admin/Supplier/Supplier";
import Report from "./Admin/Report";
import Signup from "./Component/Admin/Signup";
import Signin from "./Component/Admin/Signin";
import ForgotPassword from "./Component/Admin/ForgotPassword";
import Layout from "./Component/Admin/Layout";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Payment />} />
          <Route element={<Layout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/order" element={<Order />} />
            <Route path="/admin/customer" element={<Customer />} />
            <Route path="/admin/supplier" element={<Supplier />} />
            <Route path="/admin/report" element={<Report />} />
          </Route>
          <Route path="/admin/signup" element={<Signup />} />
          <Route path="/admin/signin" element={<Signin />} />
          <Route path="/admin/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
