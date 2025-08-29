import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Toastitysuccess } from "../Notification/Toastitynotificaition";
import { signinApi } from "../../API/Auth/authApi";

function Signin() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    const newErrors = {};

    // Email
    if (!formdata.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      newErrors.email = "Email is not valid";
    }

    // Password
    if (!formdata.password.trim()) {
      newErrors.password = "Password Is Required";
    } else if (formdata.password.length < 8) {
      newErrors.password = "Password Must Be 8 Digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    signinApi(formdata)
      .then(() => {
        Toastitysuccess("Sign in Successfully !");
        setLoading(false);
        setErrors(false);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        setErrors(true);
        const errorMessage =
          error.response?.data?.message || "Something went wrong";

        toast.error(errorMessage);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-white ">
      <div className="flex justify-center h-screen">
        <ToastContainer />
        <div
          className="hidden bg-cover lg:block lg:w-2/4"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Digital Den
              </h2>
              <p className="max-w-xl mt-3 text-gray-300">
                Welcome to Digital Den — your one-stop destination for gadgets,
                electronics, and smart accessories. Discover the latest tech at
                unbeatable prices, all in one place
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full max-w-md px-6  mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <p className="mt-3 text-gray-500 ">
                Sign in to access your account
              </p>
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 "
                  >
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formdata.email}
                    onChange={handleChange}
                    id="email"
                    placeholder="example@example.com"
                    className="block w-full px-4 py-2 mt-2 text-gray-700  bg-white border border-gray-200 rounded-lg  focus:border-indigo-400  focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors && (
                    <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                  )}
                </div>
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 "
                    >
                      Password
                    </label>
                    <Link
                      to={"/forgot-password"}
                      className="text-sm text-gray-400 focus:text-indigo-500 hover:text-indigo-500 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={formdata.password}
                    onChange={handleChange}
                    id="password"
                    placeholder="Your Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700  bg-white border border-gray-200 rounded-lg  focus:border-indigo-400  focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors && <p className="text-red-400">{errors.password}</p>}
                </div>
                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-indigo-600 rounded-lg hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                    {loading ? "sign in... " : "sign in"}
                  </button>
                </div>
              </form>
              <p className="mt-6 text-sm text-center text-gray-400">
                Don't have an account yet?{" "}
                <Link
                  to={"/signup"}
                  className="text-indigo-600 focus:outline-none focus:underline hover:underline"
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
