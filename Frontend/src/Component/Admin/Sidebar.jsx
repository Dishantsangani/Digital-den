import React from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="container flex flex-col w-60">
        <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#F9FAFB] p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 cursor-pointer">
              <div className="flex items-center gap-3 px-3">
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }) =>
                    `flex items-center space-x-2  py-2 rounded-md transition ${
                      isActive
                        ? "bg-gray-200 text-[#0f111a] px-4 font-medium"
                        : "text-[#0f111a] hover:text-[#0f111a] font-medium"
                    }`
                  }
                >
                  <div
                    className="text-[#0f111a]"
                    data-icon="House"
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
                      <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z" />
                    </svg>
                  </div>
                  <span>Dashboard</span>
                </NavLink>
              </div>
              <div className="flex items-center gap-3 px-3">
                <NavLink
                  to="/admin/products"
                  className={({ isActive }) =>
                    `flex items-center space-x-2  py-2 rounded-md transition ${
                      isActive
                        ? "bg-gray-200 text-[#0f111a] px-4 font-medium"
                        : "text-[#0f111a] hover:text-[#0f111a] font-medium"
                    }`
                  }
                >
                  <div
                    className="text-[#0f111a]"
                    data-icon="Package"
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
                      <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z" />
                    </svg>
                  </div>
                  <span>Products</span>
                </NavLink>
              </div>
              <div className="flex items-center gap-3 px-3 ">
                <NavLink
                  to="/admin/order"
                  className={({ isActive }) =>
                    `flex items-center space-x-2  py-2 rounded-md transition ${
                      isActive
                        ? "bg-gray-200 text-[#0f111a] px-4 font-medium"
                        : "text-[#0f111a] hover:text-[#0f111a] font-medium"
                    }`
                  }
                >
                  <div
                    className="text-[#0f111a]"
                    data-icon="Receipt"
                    data-size="24px"
                    data-weight="regular"
                  >
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
                  </div>
                  <span>Orders</span>
                </NavLink>
              </div>
              <div className="flex items-center gap-3 px-3 ">
                <NavLink
                  to="/admin/customer"
                  className={({ isActive }) =>
                    `flex items-center space-x-2  py-2 rounded-md transition ${
                      isActive
                        ? "bg-gray-200 text-[#0f111a] px-4 font-medium"
                        : "text-[#0f111a] hover:text-[#0f111a] font-medium"
                    }`
                  }
                >
                  <div
                    className="text-[#0d0f1c]"
                    data-icon="Users"
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
                      <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
                    </svg>
                  </div>
                  <span>Customers</span>
                </NavLink>
              </div>{" "}
              <div className="flex items-center gap-3 px-3 ">
                <NavLink
                  to="/admin/supplier"
                  className={({ isActive }) =>
                    `flex items-center space-x-2  py-2 rounded-md transition ${
                      isActive
                        ? "bg-gray-200 text-[#0f111a] px-4 font-medium"
                        : "text-[#0f111a] hover:text-[#0f111a] font-medium"
                    }`
                  }
                >
                  <div
                    className="text-[#0f111a]"
                    data-icon="Truck"
                    data-size="24px"
                    data-weight="fill"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M247.43,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A8.13,8.13,0,0,0,247.43,117ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208ZM24,136V72H168v64Zm160,72a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm0-96V88h34.58l9.6,24Z"></path>
                    </svg>
                  </div>
                  <span>Suppliers</span>
                </NavLink>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
