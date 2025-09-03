import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import {
  Toastifyerror,
  Toastitysuccess,
} from "../../Component/Notification/Toastitynotificaition";
import { contactApi } from "../../API/Web/contactApi";

function Contact() {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, seterror] = useState({});
  const [loading, setLoading] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let errors = {};
    if (!formdata.name.trim()) {
      errors.name = "Name is required";
    } else if (formdata.name.length < 4) {
      errors.name = "Name Must Be 4 character";
    }
    if (!formdata.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      errors.email = "Invalid email format";
    }
    if (!formdata.message.trim()) {
      errors.message = "Message is required";
    } else if (formdata.message.length < 12) {
      errors.message = "Message Must Be 12 character";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror({});

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      seterror(errors);
      return;
    }

    try {
      setLoading(true);
      const res = await contactApi(formdata);
      console.log("res: ", res);

      Toastitysuccess("Message Submited Successfully !");
      setformdata({ email: "", name: "", message: "" });
    } catch (error) {
      Toastifyerror(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="min-h-screen bg-cover "
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1470&q=80")',
      }}
    >
      <ToastContainer />
      <div className="flex flex-col min-h-screen bg-black/60">
        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            {/* Left Text */}
            <div className="text-white lg:w-1/2 lg:mx-6">
              <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                We're Here to <span className="text-indigo-500">Help</span>!
              </h1>
              <p className="max-w-xl mt-6">
                At <span className="text-indigo-500">Digital Den</span>, your
                satisfaction is our top priority. Reach out anytime.
              </p>
            </div>

            {/* Form */}
            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl  lg:max-w-xl">
                <h1 className="text-xl font-medium text-gray-900 ">
                  Contact form
                </h1>
                <p className="mt-2 text-gray-500 ">
                  Ask us anything — we'd love to hear from you!
                </p>

                {error.submit && (
                  <p className="mt-4 text-red-600 font-medium">
                    {error.submit}
                  </p>
                )}

                <form className="mt-6" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-900 ">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formdata.name}
                      placeholder="John Doe"
                      onChange={handlechange}
                      className="block w-full px-5 py-3 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md  focus:border-indigo-400 focus:ring-indigo-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                    {error.name && (
                      <span className="text-red-500">{error.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-900 ">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formdata.email}
                      placeholder="johndoe@example.com"
                      onChange={handlechange}
                      className="block w-full px-5 py-3 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:ring-indigo-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                    {error.email && (
                      <span className="text-red-500">{error.email}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-900 ">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formdata.message}
                      onChange={handlechange}
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-indigo-400 focus:ring-indigo-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                    {error.message && (
                      <span className="text-red-500">{error.message}</span>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:opacity-60 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-opacity-50"
                  >
                    {loading ? "Sending..." : "Get in Touch"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
