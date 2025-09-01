import React, { useEffect, useState } from "react";
import product from "../../assets/Admin/Dashboard/product.svg";
import supplier from "../../assets/Admin/Dashboard/supplier.svg";
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
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border bg-white border-[#ced2e9]">
            <img src={product} alt="product" className="w-5 h-5" />
            <p className="text-[#0d0f1c] text-base font-medium leading-normal">
              Total Products
            </p>
            <p className="text-[#0d0f1c] tracking-light text-2xl font-bold leading-tight">
              {getdata.total_products}
            </p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border bg-white border-[#ced2e9]">
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <p className="text-[#0d0f1c] text-base font-medium leading-normal">
              Total Orders
            </p>
            <p className="text-[#0d0f1c] tracking-light text-2xl font-bold leading-tight">
              {getdata.total_orders}
            </p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border bg-white border-[#ced2e9]">
            <p className="text-[#0d0f1c] text-base font-medium leading-normal">
              <img src={supplier} alt="supplier" className="w-5 h-5" />
              Total Customers
            </p>
            <p className="text-[#0d0f1c] tracking-light text-2xl font-bold leading-tight">
              {getdata.total_customer}
            </p>
          </div>{" "}
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border bg-white border-[#ced2e9]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M247.43,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A8.13,8.13,0,0,0,247.43,117ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208ZM24,136V72H168v64Zm160,72a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm0-96V88h34.58l9.6,24Z"></path>
            </svg>
            <p className="text-[#0d0f1c] text-base font-medium leading-normal">
              Total Suppliers
            </p>
            <p className="text-[#0d0f1c] tracking-light text-2xl font-bold leading-tight">
              8
            </p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border bg-white border-[#ced2e9]">
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
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>

            <p className="text-[#0d0f1c] text-base font-medium leading-normal">
              Total enquiry
            </p>
            <p className="text-[#0d0f1c] tracking-light text-2xl font-bold leading-tight">
              {getdata.total_enquiry}
            </p>
          </div>
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
