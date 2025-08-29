import React, { useState } from "react";
import {
  Toastifyerror,
  Toastitysuccess,
} from "../Notification/Toastitynotificaition";
import { SetPasswordApi } from "../../API/Auth/authApi";
import { ToastContainer } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";

function SetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [formdata, setformdata] = useState({
    password: "",
    confirmpassword: "",
  });

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formdata.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formdata.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formdata.confirmpassword.trim()) {
      newErrors.confirmpassword = "Confirm password is required";
    } else if (formdata.password !== formdata.confirmpassword) {
      newErrors.confirmpassword = "Passwords do not match";
    }

    if (!termsAccepted) {
      newErrors.terms = "You must accept the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const password = formdata.password;
      await SetPasswordApi(token, password);
      Toastitysuccess("Password set successfully!");
      navigate("/");
    } catch (error) {
      Toastifyerror(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-blue-50 min-h-screen flex items-center justify-center">
      <ToastContainer />
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-xl font-bold text-indigo-600 text-center">
            Set your password
          </h1>
          <p className="text-sm text-gray-600 text-center mt-1">
            Enter a new password and confirm it below.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Password Field */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600"
              placeholder="Enter your new password"
              value={formdata.password}
              onChange={(e) =>
                setformdata({ ...formdata, password: e.target.value })
              }
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600"
              placeholder="Confirm your new password"
              value={formdata.confirmpassword}
              onChange={(e) =>
                setformdata({ ...formdata, confirmpassword: e.target.value })
              }
            />
            {errors.confirmpassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmpassword}
              </p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 border-gray-300 rounded mt-1"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I accept the{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg transition"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default SetPassword;
