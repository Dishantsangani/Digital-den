import React from "react";
import { Link, NavLink } from "react-router-dom";
import Restock from "../../assets/Web/Restock/restock.png";

function Sidebar() {
  return (
    <>
      <div className="container flex flex-col w-60 mt-4">
        <div className="flex h-full min-h-[755px] max-h-full flex-col justify-between bg-[#F9FAFB] p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 cursor-pointer">
              {/* Dashboard */}
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
              {/* Product */}
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
              {/* order */}
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
              {/* Customer */}
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
              {/* Restock */}
              <div className="flex items-center gap-3 px-3 ">
                <NavLink
                  to="/admin/restock"
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
                    <img src={Restock} alt="" className="w-5 h-5" />
                  </div>
                  <span>Restock</span>
                </NavLink>
              </div>
              {/* enquiry */}
              <div className="flex items-center gap-3 px-3 ">
                <NavLink
                  to="/admin/enquiry"
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
                  </div>
                  <span>inquiry</span>
                </NavLink>
              </div>
              {/* Setting */}
              <div className="flex items-center gap-3 px-3 ">
                <NavLink
                  to="/admin/setting"
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
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                  <span>setting</span>
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
