import React, { useState } from "react";
import {
  Toastifyerror,
  Toastitysuccess,
} from "../Notification/Toastitynotificaition";
import { forgotPasswordApi } from "../../API/Auth/authApi";
import { ToastContainer } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is not valid";
    }
    if (!termsAccepted) newErrors.terms = "You must accept the terms";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await forgotPasswordApi(email);
      Toastitysuccess("Email Send Successfully !");
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
            Forgot your password?
          </h1>
          <p className="text-sm text-gray-600 text-center mt-1">
            Don't fret! Just type in your email and we'll send you a reset link.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
            {loading ? "Sending..." : "Reset password"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ForgotPassword;
