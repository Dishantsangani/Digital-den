import React, { useEffect, useState } from "react";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";
import { GetDashboardData } from "../../API/Admin/adminApi";

function Dashboard() {
  const [getdata, setgetdata] = useState([]);

  const featchedDashboard = async () => {
    try {
      const res = await GetDashboardData();
      console.log("res: ", res);
      setgetdata(res.data);
    } catch (error) {
      Toastifyerror(error);
    }
  };

  useEffect(() => {
    featchedDashboard();
  }, []);

  return (
    <>
      <div className=" flex-col max-w-full">
        <div className="bg-white p-8 w-full rounded-lg max-w-5xl mx-auto">
          <h1 className="text-4xl text-center text-slate-900 font-bold">
            Welcome to <span className="text-indigo-600">DigitalDen !</span>
          </h1>
          <p className="mt-4 text-center text-sm text-slate-600 leading-relaxed">
            A world of products at your fingertips.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 p-4">
          {/* product */}
          <div className="flex flex-1 min-w-[200px] rounded-2xl p-5 border bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-4 w-full">
              {/* Icon */}
              <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73zM12 3.19 18.5 7 12 10.81 5.5 7 12 3.19zm-7 6.62 6 3.47v6.78L5 16v-6.19zm8 10.25v-6.78l6-3.47V16l-6 3.06z" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-xl font-medium text-gray-900">
                  Total Products
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  {getdata.total_products}
                </span>
              </div>
            </div>
          </div>{" "}
          {/* order */}
          <div className="flex flex-1 min-w-[200px] rounded-2xl p-5 border bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-4 w-full">
              {/* Icon */}
              <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full ">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-xl font-medium text-gray-900">
                  New sales
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  {getdata.total_orders}
                </span>
              </div>
            </div>
          </div>{" "}
          {/* Client */}
          <div className="flex flex-1 min-w-[200px] rounded-2xl p-5 border bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-4 w-full">
              {/* Icon */}
              <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-xl font-medium text-gray-900">
                  Total Clients
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  {getdata.total_customer}
                </span>
              </div>
            </div>
          </div>{" "}
          {/*Balance  */}
          <div className="flex flex-1 min-w-[200px] rounded-2xl p-5 border bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-4 w-full">
              {/* Icon */}
              <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full ">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-xl font-medium text-gray-900">
                  Account balance
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  {getdata.total_income}
                </span>
              </div>
            </div>
          </div>{" "}
          {/*inquiry  */}
          <div className="flex flex-1 min-w-[200px] rounded-2xl p-5 border bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-4 w-full">
              {/* Icon */}
              <div class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full ">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              {/* Text */}
              <div className="flex flex-col">
                <span className="text-xl font-medium text-gray-900">
                  Pending contacts
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  {getdata.total_enquiry}
                </span>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Recent Activity
        </h2>
        <div className="px-4 py-3 @container">
          <div className="flex overflow-hidden rounded-xl border border-[#ced2e9] bg-[#f8f9fc]">
            <table className="flex-1">
              <thead>
                <tr className="bg-[#f8f9fc]">
                  <th className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-120 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Date
                  </th>
                  <th className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-240 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Activity
                  </th>
                  <th className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-360 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-t-[#ced2e9]">
                  <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-120 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    2024-03-15
                  </td>
                  <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-240 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    Received Stock
                  </td>
                  <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-360 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    100 units of Product A
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

export default Dashboard;
