import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validate = () => {
    const newErrors = {};

    // First name
    if (!formdata.firstname.trim()) {
      newErrors.firstname = "firstname Is Required";
    } else if (formdata.firstname.length < 4) {
      newErrors.firstname = "firstname Must be 4 Char";
    }

    // lastname
    if (!formdata.lastname.trim()) {
      newErrors.lastname = "lastname Is Required";
    } else if (formdata.lastname.length < 4) {
      newErrors.lastname = "lastname Must be 4 Char";
    }

    // Phone Number
    if (!formdata.phonenumber.trim()) {
      newErrors.phonenumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formdata.phonenumber)) {
      newErrors.phonenumber = "Phone number must be exactly 10 digits";
    }

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

    // Confirm Password
    if (!formdata.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password Is Required";
    } else if (formdata.confirmPassword !== formdata.password) {
      newErrors.confirmPassword = "Confirm Password Is Not Mached";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      axios
        .post("http://localhost:8080/base/auth/signup", formdata, {
          withCredentials: true,
        })
        .then((res) => {
          notify();
          setErrors(false);
          setLoading(false);
          console.log("Sign up successfully", res.data.data);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((err) => {
          setErrors(true);
          const errorMessage =
            err.response?.data?.message || "Something went wrong";
          console.log("Sign up error", errorMessage);

          toast.error(errorMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoading(false);
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  // Notification
  const notify = () =>
    toast.success("Sign Up Successfully !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <section className="bg-white ">
      <div className="flex justify-center min-h-screen">
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
              Get your free account now.
            </h1>
            <p className="mt-4 text-gray-500 ">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>
            <ToastContainer />
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
            >
              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  First Name
                </label>
                <input
                  name="firstname"
                  type="text"
                  value={formdata.firstname}
                  onChange={handleChange}
                  placeholder="John"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-indigo-400  focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors && <p className="text-red-400">{errors.firstname}</p>}
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formdata.lastname}
                  onChange={handleChange}
                  placeholder="Snow"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-indigo-400  focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors && <p className="text-red-400">{errors.lastname}</p>}
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Phone number
                </label>
                <input
                  type="text"
                  name="phonenumber"
                  value={formdata.phonenumber}
                  onChange={handleChange}
                  placeholder="XXX-XX-XXXX-XXX"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-indigo-400  focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors && <p className="text-red-400">{errors.phonenumber}</p>}
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formdata.email}
                  placeholder="johnsnow@example.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-indigo-400  focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors && <p className="text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={formdata.password}
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-indigo-400  focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors && <p className="text-red-400">{errors.password}</p>}
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formdata.confirmPassword}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-indigo-400  focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors && (
                  <p className="text-red-400">{errors.confirmPassword}</p>
                )}
              </div>
              <button
                type="submit"
                className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
              >
                {loading ? "Sign Up..." : "Sign Up "}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <p className="text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <Link to="/signin" className="text-indigo-500 hover:underline">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div
          className="hidden bg-cover lg:block lg:w-2/5"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80")',
          }}
        ></div>
      </div>
    </section>
  );
}

export default Signup;
