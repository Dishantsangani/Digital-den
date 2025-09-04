import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";

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
import SetPassword from "./Component/Auth/SetPassword";

// Admin
import Dashboard from "./Pages/Admin/Dashboard";
import AdminProducts from "./Pages/Admin/Products/AdminProducts";
import Adminorder from "./Pages/Admin/Order/Adminorder";
import Customer from "./Pages/Admin/Customer/Customer";
import Enquiry from "./Pages/Admin/Enquiry";
import Setting from "./Pages/Admin/Setting";
import Restock from "./Pages/Admin/Restock";

// Layout
import WebLayout from "./Component/Common/WebLayout";
import Layout from "./Component/Admin/Layout";
import AdminSignin from "./Component/Admin/Auth/AdminSignin";

// Protect Routes
import ProtectedRoute from "./Component/RouteProtected/ProtectedRoute";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* Auth */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/set-password" element={<SetPassword />} />
            <Route path="/admin/signin" element={<AdminSignin />} />

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

            {/* Admin */}
            <Route element={<Layout />}>
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/admin/products" element={<AdminProducts />} />
              <Route
                path="/admin/order"
                element={
                  <ProtectedRoute>
                    <Adminorder />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/customer"
                element={
                  <ProtectedRoute>
                    <Customer />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/enquiry"
                element={
                  <ProtectedRoute>
                    <Enquiry />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/restock"
                element={
                  <ProtectedRoute>
                    <Restock />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/setting"
                element={
                  <ProtectedRoute>
                    <Setting />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
