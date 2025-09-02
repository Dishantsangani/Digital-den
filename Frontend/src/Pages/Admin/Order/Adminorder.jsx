import React, { useEffect, useState } from "react";
import { Toastifyerror } from "../../../Component/Notification/Toastitynotificaition";
import { getOrderApi } from "../../../API/Admin/orderApi";
function Adminorder() {
  const [isOpen, setisOpen] = useState(false);
  const [getdata, setgetdata] = useState([]);
  const [selectedOrderItems, setSelectedOrderItems] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  // Search
  const [searchinput, setSearchinput] = useState("");
  const [sortOption, setSortOption] = useState("az");

  // Search
  const filterdata = getdata
    ?.filter((item) =>
      item.client?.name?.toLowerCase().includes(searchinput.toLowerCase())
    )
    ?.sort((a, b) => {
      if (sortOption === "newest") {
        return new Date(b.order_date) - new Date(a.order_date);
      } else if (sortOption === "oldest") {
        return new Date(a.order_date) - new Date(b.order_date);
      } else if (sortOption === "az") {
        return new Date(a.order_date) - new Date(b.order_date);
      } else if (sortOption === "za") {
        return new Date(a.order_date) - new Date(b.order_date);
      }
      return 0;
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filterdata.slice(indexOfFirstItem, indexOfLastItem);

  const featchedData = async () => {
    try {
      const res = await getOrderApi();
      setgetdata(res.data);
    } catch (error) {
      Toastifyerror(error);
    }
  };
  useEffect(() => {
    featchedData();
  }, []);
  const openItems = (items) => {
    setSelectedOrderItems(items);
    setisOpen(true);
  };

  const closeItems = () => {
    setSelectedOrderItems([]);
    setisOpen(false);
  };
  return (
    <>
      <div className="max-w-full">
        <div className="bg-white p-8 w-full rounded-lg max-w-5xl mx-auto">
          <h1 className="text-4xl text-slate-900 font-bold">Order !</h1>
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
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-[#f8f9fc]">
                  <th className=" px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    name
                  </th>
                  <th className=" px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Order Date
                  </th>
                  <th className=" px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Phone Number
                  </th>
                  <th className=" px-4 py-3 text-left text-[#0d0f1c] w-60 text-sm font-medium leading-normal">
                    Address
                  </th>
                  <th className=" px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Total Amount
                  </th>
                  <th className=" px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Total Items
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentOrders?.map((item) => (
                  <tr key={item.id} className="border-t border-t-[#ced3e9]">
                    <td className="px-4 py-2 text-[#47579e] text-sm font-normal leading-normal">
                      {item.client.name}
                    </td>
                    <td className="px-4 py-2 text-[#47579e] text-sm font-normal leading-normal">
                      {new Date(item.order_date).toLocaleString()}
                    </td>
                    <td className="px-4 py-2  text-[#47579e] text-sm font-normal leading-normal">
                      {item.client.phone}
                    </td>
                    <td className="px-4 py-2  text-[#47579e] text-sm font-normal leading-normal">
                      {item.client.address}
                    </td>
                    <td className="px-4 py-2  text-[#47579e] text-sm font-normal leading-normal">
                      ${item.total_sub_total}
                    </td>
                    <td className="px-4 py-2  text-[#47579e] text-sm font-normal leading-normal">
                      {item.items.product_name}
                      <button
                        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
                        onClick={() => openItems(item.items)}
                      >
                        Show Items
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

              {isOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                  onClick={closeItems}
                ></div>
              )}

              <div
                className={`fixed top-0 right-0 h-full max-w-xs w-full z-50 bg-gray-50 border-l border-gray-200 transform transition-transform duration-300 ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="flex justify-between items-center py-4 px-4 border-b border-gray-200">
                  <h2 className="font-bold  text-gray-800">All Product's</h2>

                  <button
                    type="button"
                    className="w-8 h-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none "
                    aria-label="Close"
                    onClick={() => setisOpen(false)}
                  >
                    <span className="sr-only">Close</span>
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
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/*  */}
                <div className="p-2">
                  <ul className="space-y-2">
                    {Array.isArray(selectedOrderItems) &&
                      selectedOrderItems.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between p-3 border-b border-gray-200"
                        >
                          {/* Product Info */}
                          <div className="flex-1 flex flex-col">
                            <h3 className="text-base font-semibold text-gray-900">
                              {item.product_name}
                            </h3>
                            <p className="text-sm mt-0.5 text-gray-700">
                              Total:{" "}
                              <span className="font-medium">
                                {item.sub_total}
                              </span>
                            </p>
                          </div>

                          {/* Quantity & Discount */}
                          <div className="flex gap-6 text-center text-gray-700 text-sm">
                            <div>
                              <p className="text-xs">Qty</p>
                              <span className="font-medium text-base">
                                {item.quantity}
                              </span>
                            </div>
                            <div>
                              <p className="text-xs">Disc</p>
                              <span className="font-medium text-base">
                                {item.discount}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
                {/*  */}
              </div>
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
              { length: Math.ceil(getdata.length / itemsPerPage) },
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
                currentPage === Math.ceil(getdata.length / itemsPerPage)
              }
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adminorder;
