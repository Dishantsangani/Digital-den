import React, { useEffect, useState } from "react";
import { Toastifyerror } from "../../../Component/Notification/Toastitynotificaition";
import { getCustomerApi } from "../../../API/Admin/customerApi";
function Customer() {
  const [getData, setGetdata] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Search
  const [searchinput, setSearchinput] = useState("");
  const [sortOption, setSortOption] = useState("az");

  // Search + Sort
  const filterdata = getData
    ?.filter((item) => {
      const fullName = `${item.firstname} ${item.lastname}`.toLowerCase();
      return fullName.includes(searchinput.toLowerCase());
    })
    ?.sort((a, b) => {
      if (sortOption === "newest") {
        return b.id - a.id; // or use created_at if available
      } else if (sortOption === "oldest") {
        return a.id - b.id;
      } else if (sortOption === "az") {
        return a.firstname.localeCompare(b.firstname);
      } else if (sortOption === "za") {
        return b.firstname.localeCompare(a.firstname);
      }
      return 0;
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterdata.slice(indexOfFirstItem, indexOfLastItem);

  const featchedData = async () => {
    try {
      const res = await getCustomerApi();
      setGetdata(res.data);
    } catch (error) {
      Toastifyerror(error);
    }
  };

  useEffect(() => {
    featchedData();
  }, []);
  return (
    <>
      <div className="layout-content-container flex flex-col max-w-full flex-1">
        <div className="bg-white p-8 w-full rounded-lg max-w-5xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-4xl text-slate-900 font-bold">Customers !</h1>
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
                    firstName
                  </th>
                  <th className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-120 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    lastName
                  </th>
                  <th className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-360 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Contact Number
                  </th>
                  <th className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-360 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    total_Order
                  </th>
                  <th className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-480 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Email
                  </th>
                  <th className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-480 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(currentItems) &&
                  currentItems.map((item) => (
                    <tr key={item.id} className="border-t border-t-[#ced3e9]">
                      <td className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-120 h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal">
                        {item.firstname}
                      </td>
                      <td className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-240 h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal">
                        {item.lastname}
                      </td>
                      <td className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-480 h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal">
                        {item.phonenumber}
                      </td>
                      <td className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-480 h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal">
                        {item.total_orders}
                      </td>
                      <td className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-360 h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal">
                        {item.email}
                      </td>
                      <td className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-480 h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal">
                        $ {item.total_amount}
                      </td>
                    </tr>
                  ))}
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
      </div>
    </>
  );
}

export default Customer;
