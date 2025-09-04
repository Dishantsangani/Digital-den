import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Toastifyerror,
  Toastitysuccess,
} from "../../Notification/Toastitynotificaition";
import { adminsigninAPI } from "../../../API/Admin/AdminAuthApi";
import { ToastContainer } from "react-toastify";

function AdminSignin() {
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const [error, seterror] = useState({});

  const Validation = () => {
    const newerror = {};

    // Email
    if (!formdata.email.trim()) {
      newerror.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formdata.email)) {
      newerror.email = "Invalid email format";
    }

    // Password
    if (!formdata.password.trim()) {
      newerror.password = "Password is required";
    } else if (formdata.password.length < 8) {
      newerror.password = "Password must be at least 8 characters";
    }

    seterror(newerror);
    return Object.keys(newerror).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Validation()) return;
    try {
      const res = await adminsigninAPI(formdata);
      console.log("res: ", res);
      Toastitysuccess("Signin Successfully !");
      setTimeout(() => navigate("/admin/dashboard"), 1500);
    } catch (error) {
      Toastifyerror(error);
    }
  };

  return (
    <section className="relative flex justify-center items-center min-h-screen">
      {/* Background Image */}
      <ToastContainer />
      <img
        src="https://pagedone.io/asset/uploads/1702362010.png"
        alt="gradient background"
        className="w-full h-full object-cover fixed inset-0 -z-10"
      />

      {/* Form Container */}
      <div className="mx-auto max-w-lg w-full px-6 lg:px-8">
        {/* Brand */}
        <h1 className="text-gray-900 text-center font-bold text-4xl lg:text-5xl mb-10">
          DigitalDen
        </h1>

        {/* Card */}
        <div className="rounded-2xl bg-white shadow-xl p-7 lg:p-11">
          <h2 className="text-gray-900 text-center font-manrope text-2xl lg:text-3xl font-bold mb-8">
            Welcome Admin
          </h2>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                className={`w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg rounded-full border ${
                  error.email ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 px-4`}
                placeholder="Enter your email"
                value={formdata.email}
                onChange={(e) =>
                  setformdata({ ...formdata, email: e.target.value })
                }
              />
              {error.email && (
                <p className="text-red-500 text-sm mt-1">{error.email}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                className={`w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg rounded-full border ${
                  error.password ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 px-4`}
                placeholder="Enter your password"
                value={formdata.password}
                onChange={(e) =>
                  setformdata({ ...formdata, password: e.target.value })
                }
              />
              {error.password && (
                <p className="text-red-500 text-sm mt-1">{error.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-12 text-white text-base font-semibold rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 shadow-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminSignin;
