import React from "react";
// WEB
import Home from "./Pages/Web/Home";
import About from "./Pages/Web/About";
import Products from "./Pages/Web/Products";
import Team from "./Pages/Web/Team";
import Contact from "./Pages/Web/Contact";
import Payment from "./Pages/Web/Payment";
import Order from "./Pages/Web/Order";

// Authentication
import Signup from "./Component/Auth/Signup";
import Signin from "./Component/Auth/Signin";
import ForgotPassword from "./Component/Auth/ForgotPassword";

// Admin
import Dashboard from "./Pages/Admin/Dashboard";
import AdminProducts from "./Pages/Admin/Products/AdminProducts";
import Adminorder from "./Pages/Admin/Order/Adminorder";
import Customer from "./Pages/Admin/Customer/Customer";
import Report from "./Pages/Admin/Report";
import Enquiry from "./Pages/Admin/Enquiry";
import Setting from "./Pages/Admin/Setting";
import Restock from "./Pages/Admin/Restock";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";

// Layout
import WebLayout from "./Component/Common/WebLayout";
import Layout from "./Component/Admin/Layout";
import SetPassword from "./Component/Auth/SetPassword";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* Website */}
            <Route element={<WebLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Payment />} />
              <Route path="/order" element={<Order />} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/set-password" element={<SetPassword />} />
            {/* Admin */}
            <Route element={<Layout />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/products" element={<AdminProducts />} />
              <Route path="/admin/order" element={<Adminorder />} />
              <Route path="/admin/customer" element={<Customer />} />
              <Route path="/admin/enquiry" element={<Enquiry />} />
              <Route path="/admin/report" element={<Report />} />
              <Route path="/admin/setting" element={<Setting />} />
              <Route path="/admin/restock" element={<Restock />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
