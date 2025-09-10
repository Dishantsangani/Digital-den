import React, { useEffect, useState } from "react";
import {
  Toastifyerror,
  Toastitysuccess,
} from "../../Component/Notification/Toastitynotificaition";
import { addcheckoutApi, getcheckoutApi } from "../../API/Web/checkoutApi";
import cashondelivery from "../../assets/Web/Payment/cashondeliverytruck.png";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handlePaymentApi } from "../../API/Web/paymentApi";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "../../Context/CartContext";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function Payment() {
  const navigate = useNavigate();
  const { fetchCart, clearCart } = useCart();
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    addressline: "",
    city: "",
    state: "",
    zipcode: "",
    payment: "",
  });
  const [error, seterror] = useState({});
  const [checkoutdata, setcheckoutdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const validation = () => {
    const newerror = {};

    // Firstname
    if (!formdata.firstname.trim()) {
      newerror.firstname = "firstname is required";
    } else if (formdata.firstname.length < 4) {
      newerror.firstname = "firstname is must be 4 character";
    }

    // lastname
    if (!formdata.lastname.trim()) {
      newerror.lastname = "lastname is required";
    } else if (formdata.lastname.length < 4) {
      newerror.lastname = "lastname is must be 4 character";
    }

    // email
    if (!formdata.email.trim()) {
      newerror.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      newerror.email = "Invalid email format";
    }

    // Phonenumber
    if (!formdata.phonenumber.trim()) {
      newerror.phonenumber = "phonenumber is required";
    } else if (formdata.phonenumber.length < 10) {
      newerror.phonenumber = "phonenumber is must be 10 digits";
    }

    // addressline
    if (!formdata.addressline.trim()) {
      newerror.addressline = "addressline is required";
    } else if (formdata.addressline.length < 10) {
      newerror.addressline = "addressline is must be 10 digits";
    }

    // city
    if (!formdata.city.trim()) {
      newerror.city = "city is required";
    } else if (formdata.city.length < 4) {
      newerror.city = "city is must be 4 character";
    }

    // state
    if (!formdata.state.trim()) {
      newerror.state = "state is required";
    } else if (formdata.state.length < 4) {
      newerror.state = "state is must be 4 character";
    }

    // zipcode
    if (!formdata.zipcode.trim()) {
      newerror.zipcode = "zipcode is required";
    } else if (formdata.zipcode.length < 4) {
      newerror.zipcode = "zipcode is must be 4 character";
    }

    // payment
    if (!formdata.payment) {
      newerror.payment = "Please select a payment method";
    }

    seterror(newerror);
    return Object.keys(newerror).length === 0;
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const checkout = async () => {
    try {
      const res = await getcheckoutApi();
      setcheckoutdata(res.data);
    } catch (error) {
      Toastifyerror(error);
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!validation()) return;
    try {
      setLoading(true);
      if (formdata.payment === "cash") {
        const res = await addcheckoutApi(formdata);
        console.log("res: ", res);
        clearCart();
        await fetchCart();
        Toastitysuccess("Order placed successfully with Cash on Delivery!");
        setTimeout(() => navigate("/order"), 1500);
        return;
      }
      if (formdata.payment === "stripe") {
        await handlePayment();
        return;
      }
    } catch (error) {
      Toastifyerror(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    if (!checkoutdata.items || checkoutdata.items.length === 0) {
      Toastifyerror("Cart is empty!");
      return;
    }

    try {
      // Map API items to Stripe line items
      const items = checkoutdata.items.map((item) => ({
        name: item.productname,
        quantity: item.quantity,
        price: Math.round(parseFloat(item.final_price) * 100),
      }));

      const res = await handlePaymentApi(items, formdata); // backend API
      const stripe = await stripePromise;

      const { error } = await stripe.redirectToCheckout({
        sessionId: res.data.id,
      });

      if (error) {
        Toastifyerror(error);
      }
    } catch (error) {
      Toastifyerror(error);
    }
  };

  useEffect(() => {
    checkout();
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="bg-white sm:px-8 px-4 py-6">
        <div className="max-w-screen-xl max-md:max-w-xl mx-auto">
          <div className="flex items-start mb-16">
            <div className="w-full">
              <div className="flex items-center w-full">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-indigo-600 p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-sm text-white font-semibold">1</span>
                </div>
                <div className="w-full h-[3px] mx-4 rounded-lg bg-indigo-600" />
              </div>
              <div className="mt-2 mr-4">
                <h6 className="text-sm font-semibold text-slate-900">Cart</h6>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center w-full">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-indigo-600 p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-sm text-white font-semibold">2</span>
                </div>
                <div className="w-full h-[3px] mx-4 rounded-lg bg-slate-300" />
              </div>
              <div className="mt-2 mr-4">
                <h6 className="text-sm font-semibold text-slate-900">
                  Checkout
                </h6>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-slate-300 p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-sm text-white font-semibold">3</span>
                </div>
              </div>
              <div className="mt-2">
                <h6 className="text-sm font-semibold text-slate-400">Order</h6>
              </div>
            </div>
          </div>
          <form onSubmit={handlesubmit}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12">
              <div className="lg:col-span-2">
                <div>
                  <h2 className="text-xl text-slate-900 font-semibold mb-6">
                    Delivery Details
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-y-6 gap-x-4">
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        value={formdata.firstname}
                        onChange={handlechange}
                        placeholder="Enter First Name"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-indigo-600"
                      />
                      {error.firstname && (
                        <p className="text-red-400">{error.firstname}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        value={formdata.lastname}
                        onChange={handlechange}
                        placeholder="Enter Last Name"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-indigo-600"
                      />
                      {error.lastname && (
                        <p className="text-red-400">{error.lastname}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={handlechange}
                        value={formdata.email}
                        placeholder="Enter Email"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-indigo-600"
                      />
                      {error.email && (
                        <p className="text-red-400">{error.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        Phone No.
                      </label>
                      <input
                        type="number"
                        name="phonenumber"
                        value={formdata.phonenumber}
                        onChange={handlechange}
                        placeholder="Enter Phone No."
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-indigo-600"
                      />
                      {error.phonenumber && (
                        <p className="text-red-400">{error.phonenumber}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        Address Line
                      </label>
                      <input
                        type="text"
                        name="addressline"
                        value={formdata.addressline}
                        onChange={handlechange}
                        placeholder="Enter Address Line"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-indigo-600"
                      />
                      {error.addressline && (
                        <p className="text-red-400">{error.addressline}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        onChange={handlechange}
                        value={formdata.city}
                        placeholder="Enter City"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-indigo-600"
                      />
                      {error.city && (
                        <p className="text-red-400">{error.city}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        onChange={handlechange}
                        value={formdata.state}
                        placeholder="Enter State"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-indigo-600"
                      />
                      {error.state && (
                        <p className="text-red-400">{error.state}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        Zip Code
                      </label>
                      <input
                        type="number"
                        name="zipcode"
                        value={formdata.zipcode}
                        onChange={handlechange}
                        placeholder="Enter Zip Code"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-indigo-600"
                      />
                      {error.zipcode && (
                        <p className="text-red-400">{error.zipcode}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h2 className="text-xl text-slate-900 font-semibold mb-6">
                    Payment
                  </h2>

                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* Cash on Delivery */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value="cash"
                          checked={formdata.payment === "cash"}
                          onChange={handlechange}
                          className="w-5 h-5 cursor-pointer accent-indigo-600"
                        />
                        <img
                          src={cashondelivery}
                          alt="Cash on Delivery"
                          className="h-20 object-contain"
                        />
                      </label>

                      <p className="text-sm text-slate-600">Cash on Delivery</p>

                      {error.payment && (
                        <p className="text-red-500 text-sm">{error.payment}</p>
                      )}
                    </div>

                    {/* Stripe */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value="stripe"
                          checked={formdata.payment === "stripe"}
                          onChange={handlechange}
                          className="w-5 h-5 cursor-pointer accent-indigo-600"
                        />
                        <img
                          src="https://memberpress.com/wp-content/uploads/2017/09/Integrations-Stripe-1724x970-1.svg"
                          alt="Stripe"
                          className="h-20 object-contain"
                        />
                      </label>

                      <p className="text-sm text-slate-600">
                        Pay securely with your Stripe account.
                      </p>

                      {error.payment && (
                        <p className="text-red-500 text-sm">{error.payment}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                {checkoutdata?.summary && (
                  <div className="p-4 border rounded-md mb-4">
                    <h2 className="text-xl text-slate-900 font-semibold mb-6">
                      Order Summary
                    </h2>

                    <ul className="text-slate-500 font-medium space-y-4">
                      {/* Subtotal */}
                      <li className="flex flex-wrap gap-4 text-sm">
                        Subtotal
                        <span className="ml-auto font-semibold text-slate-900">
                          ${Number(checkoutdata.summary.total_line).toFixed(2)}
                        </span>
                      </li>

                      {/* Discount */}
                      <li className="flex flex-wrap gap-4 text-sm">
                        Discount
                        <span className="ml-auto font-semibold text-slate-900">
                          -$
                          {Number(checkoutdata.summary.total_discount).toFixed(
                            2
                          )}
                        </span>
                      </li>

                      {/* Final price */}
                      <hr className="border-slate-300" />
                      <li className="flex flex-wrap gap-4 text-[15px] font-semibold text-slate-900">
                        Total
                        <span className="ml-auto">
                          ${Number(checkoutdata.summary.total_final).toFixed(2)}
                        </span>
                      </li>
                    </ul>

                    <div className="space-y-4 mt-8">
                      <button
                        type="submit"
                        className="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
                      >
                        {loading ? "Processing..." : "Complete Purchase"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Payment;
