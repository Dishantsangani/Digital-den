import axios from "axios";
import React, { useState } from "react";

function Supplier() {
  const [model, setmodel] = useState(false);
  const [errors, seterrors] = useState({});

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phonenumber: "",
    companyname: "",
    address: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  const validation = () => {
    const newerror = {};
    if (!formdata.name.trim()) {
      newerror.name = "Please Enter Supplier Name";
    } else if (formdata.name.length < 5) {
      newerror.name = "Please Enter Supplier Name min 5 character ";
    }
    if (!formdata.email.trim()) {
      newerror.email = "Please Enter Supplier Email";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      newerror.email = "Please Enter Valid Email ";
    }
    if (!formdata.phonenumber.trim()) {
      newerror.phonenumber = "Please Enter Supplier PhoneNumber";
    } else if (formdata.phonenumber.length < 10) {
      newerror.phonenumber = "Please Enter 10 Digit PhoneNumber ";
    }
    if (!formdata.companyname.trim()) {
      newerror.companyname = "Please Enter Company Name";
    } else if (formdata.companyname.length < 5) {
      newerror.companyname = "Please Enter Company Name min 5 character ";
    }
    if (!formdata.address.trim()) {
      newerror.address = "Please Enter address";
    } else if (formdata.address.length < 5) {
      newerror.address = "Please Enter Customer Address Min 15 character ";
    }

    seterrors(newerror);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!validation()) return;
    try {
      axios
        .post("http://localhost:5000/auth/addsupplier")
        .then((res) => console.log("API data", res.data))
        .catch((err) => console.log("Api error", err));
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <>
      <div className="flex flex-col max-w-full">
        <div className="bg-white p-8 w-full rounded-lg max-w-5xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-4xl text-slate-900 font-bold">Suppliers !</h1>
            <button
              type="button"
              onClick={() => setmodel(!model)}
              className="px-5 py-3 rounded-lg text-white text-sm font-medium tracking-wider border-none outline-none bg-[#1E3A8A] hover:bg-blue-700 cursor-pointer"
            >
              Add Suppliers
            </button>
          </div>
        </div>
        {model ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 py-8"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-full max-w-[800px] bg-white rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]">
              {/* Header */}
              <form onSubmit={handlesubmit}>
                <div className="flex justify-between items-center p-6 border-b  ">
                  <p className="text-[#0f111a] text-3xl font-bold leading-tight">
                    Add Supplier
                  </p>
                </div>

                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-6">
                  {/* Customer Name */}
                  <label className="flex flex-col">
                    <span className="text-base font-semibold text-[#0f111a] pb-2">
                      Supplier Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formdata.name}
                      onChange={handlechange}
                      placeholder="Enter customer name"
                      // className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-[#0f111a] focus:outline-none focus:ring-2 focus:ring-[#4264fa]"
                      className={`h-14 p-4 rounded-xl border ${
                        errors.name ? "border-red-500" : "border-[#ced3e9]"
                      } bg-[#f8f9fc] text-[#0d0f1c] focus:outline-none focus:ring-2 ${
                        errors.name
                          ? "focus:ring-red-400"
                          : "focus:ring-[#4264fa]"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-sm text-red-500 mt-1">
                        {errors.name}
                      </span>
                    )}
                  </label>
                  {/* Email */}
                  <label className="flex flex-col">
                    <span className="text-base font-semibold text-[#0f111a] pb-2">
                      Email
                    </span>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      name="email"
                      value={formdata.email}
                      onChange={handlechange}
                      className={`h-14 p-4 rounded-xl border ${
                        errors.email ? "border-red-500" : "border-[#ced3e9]"
                      } bg-[#f8f9fc] text-[#0d0f1c] focus:outline-none focus:ring-2 ${
                        errors.email
                          ? "focus:ring-red-400"
                          : "focus:ring-[#4264fa]"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500 mt-1">
                        {errors.email}
                      </span>
                    )}
                  </label>
                  {/* Phone Number */}
                  <label className="flex flex-col">
                    <span className="text-base font-semibold text-[#0f111a] pb-2">
                      Phone Number
                    </span>
                    <input
                      type="number"
                      name="phonenumber"
                      value={formdata.phonenumber}
                      onChange={handlechange}
                      className={`h-14 p-4 rounded-xl border ${
                        errors.phonenumber
                          ? "border-red-500"
                          : "border-[#ced3e9]"
                      } bg-[#f8f9fc] text-[#0d0f1c] focus:outline-none focus:ring-2 ${
                        errors.phonenumber
                          ? "focus:ring-red-400"
                          : "focus:ring-[#4264fa]"
                      }`}
                      placeholder="Enter phone number"
                      // className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-[#0f111a] focus:outline-none focus:ring-2 focus:ring-[#4264fa]"
                    />
                    {errors.phonenumber && (
                      <span className="text-sm text-red-500 mt-1">
                        {errors.phonenumber}
                      </span>
                    )}
                  </label>{" "}
                  <label className="flex flex-col">
                    <span className="text-base font-semibold text-[#0f111a] pb-2">
                      Company Name
                    </span>
                    <input
                      type="text"
                      name="companyname"
                      value={formdata.companyname}
                      onChange={handlechange}
                      className={`h-14 p-4 rounded-xl border ${
                        errors.companyname
                          ? "border-red-500"
                          : "border-[#ced3e9]"
                      } bg-[#f8f9fc] text-[#0d0f1c] focus:outline-none focus:ring-2 ${
                        errors.companyname
                          ? "focus:ring-red-400"
                          : "focus:ring-[#4264fa]"
                      }`}
                      placeholder="Enter company name"
                      // className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-[#0f111a] focus:outline-none focus:ring-2 focus:ring-[#4264fa]"
                    />
                    {errors.companyname && (
                      <span className="text-sm text-red-500 mt-1">
                        {errors.companyname}
                      </span>
                    )}
                  </label>
                  {/* Address (span 2 columns) */}
                  <label className="flex flex-col md:col-span-2">
                    <span className="text-base font-semibold text-[#0f111a] pb-2">
                      Address
                    </span>
                    <textarea
                      name="address"
                      value={formdata.address}
                      onChange={handlechange}
                      className={`h-24 p-4 rounded-xl border ${
                        errors.address ? "border-red-500" : "border-[#ced3e9]"
                      } bg-[#f8f9fc] text-[#0d0f1c] focus:outline-none focus:ring-2 ${
                        errors.address
                          ? "focus:ring-red-400"
                          : "focus:ring-[#4264fa]"
                      }`}
                      placeholder="Enter customer address"
                      // className="min-h-[100px] p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-[#0f111a] focus:outline-none focus:ring-2 focus:ring-[#4264fa] resize-none"
                    />
                    {errors.address && (
                      <span className="text-sm text-red-500 mt-1">
                        {errors.address}
                      </span>
                    )}
                  </label>
                  {/* Notes (span 2 columns) */}
                  <label className="flex flex-col md:col-span-2">
                    <span className="text-base font-semibold text-[#0f111a] pb-2">
                      Notes<span className="text-[#7e818f] ">(Optional)</span>
                    </span>
                    <textarea
                      placeholder="Additional details about the Supplier"
                      className="min-h-[120px] p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-[#0f111a] focus:outline-none focus:ring-2 focus:ring-[#4264fa] resize-none"
                    />
                  </label>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4 px-6 py-6 border-t border-gray-200">
                  <button
                    onClick={() => setmodel(!model)}
                    className="h-10 px-6 rounded-xl bg-[#EF4444] hover:bg-[#e08181]  text-white text-sm font-bold transition"
                  >
                    Cancel
                  </button>
                  <button className="h-10 px-6 rounded-xl bg-[#10B981] hover:bg-[#88dfc2] text-white text-sm font-bold transition">
                    Add Supplier
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div
                className="text-[#56618f] flex border-none bg-white items-center justify-center pl-4 rounded-l-xl border-r-0"
                data-icon="MagnifyingGlass"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                </svg>
              </div>
              <input
                placeholder="Search suppliers..."
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0f111a] focus:outline-0 focus:ring-0 border-none bg-white focus:border-none h-full placeholder:text-[#56618f] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                defaultValue=""
              />
            </div>
          </label>
        </div>
        <div className="px-4 py-3 @container">
          <div className="flex overflow-hidden rounded-xl border border-[#d2d6e4] bg-[#f9f9fb]">
            <table className="flex-1">
              <thead>
                <tr className="bg-[#f9f9fb]">
                  <th className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-120 px-4 py-3 text-left text-[#0f111a] w-[400px] text-sm font-medium leading-normal">
                    Supplier Name
                  </th>
                  <th className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-240 px-4 py-3 text-left text-[#0f111a] w-[400px] text-sm font-medium leading-normal">
                    Company Name
                  </th>
                  <th className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-360 px-4 py-3 text-left text-[#0f111a] w-[400px] text-sm font-medium leading-normal">
                    Contact Number
                  </th>
                  <th className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-480 px-4 py-3 text-left text-[#0f111a] w-[400px] text-sm font-medium leading-normal">
                    Email
                  </th>
                  <th className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-480 px-4 py-3 text-left text-[#0f111a] w-[400px] text-sm font-medium leading-normal">
                    Address
                  </th>
                  <th className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-480 px-4 py-3 text-left text-[#0f111a] w-[400px] text-sm font-medium leading-normal">
                    Total Supplied
                  </th>
                  <th className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-600 px-4 py-3 text-left text-[#0f111a] w-60  text-sm font-medium leading-normal">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-t-[#d2d6e4]">
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-120 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    Alice Johnson
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-240 h-[72px] px-4 py-2 w-[400px] text-[#0f111a] text-sm font-normal leading-normal">
                    Global Tech Supplies
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-360 h-[72px] px-4 py-2 w-[400px] text-[#0f111a] text-sm font-normal leading-normal">
                    +1234567890
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-360 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    contact@globaltech.com
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-480 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    No. 123, Main Street, Anytown, USA
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-480 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    5 orders
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-600 h-[72px] px-4 py-2 w-60 text-[#56618f] text-sm font-bold leading-normal tracking-[0.015em]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Supplier;
