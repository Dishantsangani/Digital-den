import React, { useEffect, useState } from "react";
import {
  Toastifyerror,
  Toastitysuccess,
} from "../../Component/Notification/Toastitynotificaition";
import { enquiryreplyApi, getcontactApi } from "../../API/Admin/enquiryApi";
import { ToastContainer } from "react-toastify";
import Loader from "../../Component/Common/Loader";

function Enquiry() {
  const [getdata, setgetdata] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const [replyText, setReplyText] = useState("");

  // Replay
  const [selectedOrderItems, setSelectedOrderItems] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Search
  const [searchinput, setSearchinput] = useState("");
  const [sortOption, setSortOption] = useState("az");

  // Search + Sort
  const filterdata = getdata
    ?.filter((item) =>
      item.name?.toLowerCase().includes(searchinput.toLowerCase())
    )
    ?.sort((a, b) => {
      if (sortOption === "newest") {
        return b.id - a.id; // or use created_at if available
      } else if (sortOption === "oldest") {
        return a.id - b.id;
      } else if (sortOption === "az") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "za") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterdata.slice(indexOfFirstItem, indexOfLastItem);

  const featchedData = async () => {
    try {
      const res = await getcontactApi();
      setgetdata(res.data);
    } catch (error) {
      Toastifyerror(error);
    } finally {
      setLoading(false);
    }
  };

  const openItems = (items) => {
    setSelectedOrderItems(items);
    setisOpen(true);
  };

  const validation = () => {
    const newerror = {};
    if (!replyText.trim()) {
      newerror.message = "Replay Message is required";
    } else if (replyText.length < 8) {
      newerror.message = "Replay Message at least  8 characters ";
    }
    setError(newerror);
    return Object.keys(newerror).length === 0;
  };

  const handleReply = async () => {
    if (!validation()) return;
    try {
      await enquiryreplyApi({
        email: selectedOrderItems.email,
        message: replyText,
      });
      Toastitysuccess("Reply sent successfully!");
    } catch (error) {
      Toastifyerror(error);
    } finally {
      setReplyText("");
      setisOpen(false);
    }
  };

  useEffect(() => {
    featchedData();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="layout-content-container flex flex-col max-w-full flex-1">
        <div className="bg-white p-8 w-full rounded-lg max-w-5xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-4xl text-slate-900 font-bold">Inquiry !</h1>
          </div>
        </div>
      </div>
      <div className="px-5 py-3">
        <label className="flex flex-col min-w-72 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div
              className="text-[#47579e] flex border-none bg-slate-200 items-center justify-center pl-4 rounded-l-xl border-r-0"
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
                className="bg-slate-200"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </div>
            <input
              value={searchinput}
              placeholder="Search orders"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d0f1c] focus:outline-0 focus:ring-0 border-none bg-slate-200 focus:border-none h-full placeholder:text-[#47579e] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              onChange={(e) => setSearchinput(e.target.value)}
            />

            <div className="flex items-center justify-center p-4">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2.5"
              >
                <option value="az">A → Z</option>
                <option value="za">Z → A</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>
        </label>
      </div>
      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-xl border border-[#ced3e9] bg-[#f8f9fc]">
          <table className="flex-1">
            <thead>
              <tr className="bg-[#f8f9fc]">
                <th className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-120 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                  Name
                </th>
                <th className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-480 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                  Email
                </th>
                <th className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-480 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                  Message
                </th>{" "}
                <th className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-480 px-4 py-3 text-left text-[#0d0f1c] w-[100px] text-sm font-medium leading-normal">
                  Reply
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="8" className="text-center py-6">
                    <Loader />
                  </td>
                </tr>
              ) : currentItems.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center py-6 text-gray-500">
                    No products found
                  </td>
                </tr>
              ) : (
                currentItems.map((item) => (
                  <tr key={item.id} className="border-t border-t-[#ced3e9]">
                    <td className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-120 h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal">
                      {item.name}
                    </td>
                    <td className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-240 h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal">
                      {item.email}
                    </td>
                    <td className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-480 h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal">
                      {item.message}
                    </td>
                    <td className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-480 h-[72px] px-4 py-2 w-[150px] text-indigo-600 text-sm font-normal leading-normal">
                      <button
                        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
                        onClick={() => openItems(item)}
                      >
                        Reply
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="flex bottom-0 justify-center items-center gap-3 mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from(
            { length: Math.ceil(filterdata.length / itemsPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === i + 1 ? "bg-indigo-600 text-white" : ""
                }`}
              >
                {i + 1}
              </button>
            )
          )}

          <button
            disabled={
              currentPage === Math.ceil(filterdata.length / itemsPerPage)
            }
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Replay Model */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
            {/* Header */}
            <div className="flex justify-between bg-indigo-600  items-center p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-white">
                Reply To Customer
              </h3>
              <button
                type="button"
                onClick={() => setisOpen(false)}
                className="text-gray-400 hover:text-gray-700 rounded-lg p-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              <p className="text-gray-700">
                <strong>Name:</strong> {selectedOrderItems?.name}
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> {selectedOrderItems?.email}
              </p>
              <p className="text-gray-700">
                <strong>Message:</strong> {selectedOrderItems?.message}
              </p>

              <textarea
                placeholder="Write your reply here..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={5}
              />
              {error.message && (
                <span className="text-red-400">{error.message}</span>
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-end items-center p-4 border-t border-gray-200 space-x-3">
              <button
                type="button"
                onClick={() => setisOpen(false)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleReply}
                className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
              >
                Send Reply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Enquiry;
