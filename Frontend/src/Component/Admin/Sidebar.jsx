import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adminlogoutApi } from "../../API/Admin/AdminAuthApi";
import { Toastifyerror } from "../Notification/Toastitynotificaition";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await adminlogoutApi();
      navigate("/admin/signin");
    } catch (error) {
      Toastifyerror(error);
    }
  };
  return (
    <div className="w-60 mt-4">
      <div className="flex h-full min-h-[755px] max-h-full flex-col justify-between bg-[#F9FAFB] p-4">
        {/* Top Links */}
        <div className="flex flex-col gap-4">
          {/* Dashboard */}
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-indigo-600 text-white font-medium"
                  : "text-indigo-600 hover:text-indigo-600 font-medium"
              }`
            }
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

            <span>Dashboard</span>
          </NavLink>

          {/* Products */}
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-indigo-600 text-white font-medium"
                  : "text-indigo-600 hover:text-indigo-600 font-medium"
              }`
            }
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
            <span>Products</span>
          </NavLink>

          {/* Orders */}
          <NavLink
            to="/admin/order"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-indigo-600 text-white font-medium"
                  : "text-indigo-600 hover:text-indigo-600 font-medium"
              }`
            }
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
            <span>Orders</span>
          </NavLink>

          {/* Customers */}
          <NavLink
            to="/admin/customer"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-indigo-600 text-white font-medium"
                  : "text-indigo-600 hover:text-indigo-600 font-medium"
              }`
            }
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

            <span>Customers</span>
          </NavLink>

          {/* Restock */}
          <NavLink
            to="/admin/restock"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-indigo-600 text-white font-medium"
                  : "text-indigo-600 hover:text-indigo-600 font-medium"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 9.75A7.5 7.5 0 0119.5 8.25m0 0V4.5m0 3.75h-3.75M19.5 14.25a7.5 7.5 0 01-15 1.5m0 0V19.5m0-3.75h3.75"
              />
              <rect
                x="8"
                y="10"
                width="8"
                height="6"
                rx="1"
                ry="1"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>

            <span>Restock</span>
          </NavLink>

          {/* Inquiry */}
          <NavLink
            to="/admin/enquiry"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-indigo-600 text-white font-medium"
                  : "text-indigo-600 hover:text-indigo-600 font-medium"
              }`
            }
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

            <span>Inquiry</span>
          </NavLink>

          {/* Settings */}
          <NavLink
            to="/admin/setting"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-indigo-600 text-white font-medium"
                  : "text-indigo-600 hover:text-indigo-600 font-medium"
              }`
            }
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

            <span>Setting</span>
          </NavLink>
        </div>

        {/* Bottom Logout */}
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-md transition 
               text-red-600 hover:bg-red-100 hover:text-red-700 font-medium w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
